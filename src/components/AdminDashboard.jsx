import React, { useState, useEffect } from 'react';
import { subscribeBookings, updateBookingStatus, updateBookingNotes, deleteBooking } from '../firebase/services';

const STATUS_OPTIONS = [
  { value: 'new', label: 'New', color: 'bg-blue-100 text-blue-800 border-blue-200' },
  { value: 'in-progress', label: 'In Progress', color: 'bg-yellow-100 text-yellow-800 border-yellow-200' },
  { value: 'completed', label: 'Completed', color: 'bg-green-100 text-green-800 border-green-200' },
];

const SERVICE_LABELS = {
  overhead: 'Overhead Tank',
  underground: 'Underground Tank',
  drum: 'Drum Cleaning',
  disinfection: 'Disinfection',
  apartment: 'Apartment Pkg',
};

export default function AdminDashboard({ onBack }) {
  const [bookings, setBookings] = useState([]);
  const [filter, setFilter] = useState('all');
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);
  const [editingNotes, setEditingNotes] = useState(null);
  const [notesText, setNotesText] = useState('');

  useEffect(() => {
    const unsub = subscribeBookings((data) => {
      setBookings(data);
      setLoading(false);
    });
    return unsub;
  }, []);

  const stats = {
    total: bookings.length,
    new: bookings.filter((b) => b.status === 'new').length,
    inProgress: bookings.filter((b) => b.status === 'in-progress').length,
    completed: bookings.filter((b) => b.status === 'completed').length,
  };

  const filtered = bookings.filter((b) => {
    if (filter !== 'all' && b.status !== filter) return false;
    if (search) {
      const q = search.toLowerCase();
      return (
        (b.name || '').toLowerCase().includes(q) ||
        (b.mobile || '').includes(q) ||
        (b.address || '').toLowerCase().includes(q)
      );
    }
    return true;
  });

  const handleStatusChange = async (id, status) => {
    await updateBookingStatus(id, status);
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this booking?')) return;
    await deleteBooking(id);
  };

  const startEditNotes = (booking) => {
    setEditingNotes(booking.id);
    setNotesText(booking.notes || '');
  };

  const saveNotes = async (id) => {
    await updateBookingNotes(id, notesText);
    setEditingNotes(null);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="text-center space-y-4">
          <div className="w-10 h-10 border-4 border-[#0B4DAB] border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="text-slate-500 font-medium">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={onBack}
              className="p-2 rounded-xl hover:bg-slate-100 text-slate-600 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
            </button>
            <h1 className="text-xl font-extrabold text-slate-900">Admin Dashboard</h1>
          </div>
          <span className="text-xs text-slate-400 font-medium">{bookings.length} total bookings</span>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 space-y-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { label: 'Total Bookings', value: stats.total, color: 'text-slate-900 bg-white border-slate-200', icon: '📋' },
            { label: 'New', value: stats.new, color: 'text-blue-700 bg-blue-50 border-blue-200', icon: '🆕' },
            { label: 'In Progress', value: stats.inProgress, color: 'text-yellow-700 bg-yellow-50 border-yellow-200', icon: '🔄' },
            { label: 'Completed', value: stats.completed, color: 'text-green-700 bg-green-50 border-green-200', icon: '✅' },
          ].map((s, i) => (
            <div key={i} className={`rounded-2xl border p-5 shadow-sm ${s.color}`}>
              <div className="flex items-center justify-between">
                <span className="text-2xl">{s.icon}</span>
                <span className="text-3xl font-black">{s.value}</span>
              </div>
              <p className="text-sm font-bold mt-2 opacity-80">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
          <div className="flex gap-2 flex-wrap">
            {[
              { value: 'all', label: 'All' },
              ...STATUS_OPTIONS,
            ].map((opt) => (
              <button
                key={opt.value}
                onClick={() => setFilter(opt.value)}
                className={`px-4 py-2 rounded-full text-xs font-bold border transition-all ${
                  filter === opt.value
                    ? 'bg-[#0B4DAB] text-white border-[#0B4DAB]'
                    : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300'
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
          <input
            type="text"
            placeholder="Search by name, phone, or address..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full sm:w-72 bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#0B4DAB]"
          />
        </div>

        {/* Bookings Table */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
          {filtered.length === 0 ? (
            <div className="text-center py-16 text-slate-400">
              <p className="text-4xl mb-4">📭</p>
              <p className="font-bold text-lg">No bookings found</p>
              <p className="text-sm mt-1">Try changing the filter or search term.</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">
                    <th className="px-5 py-4">Name</th>
                    <th className="px-5 py-4">Phone</th>
                    <th className="px-5 py-4">Service</th>
                    <th className="px-5 py-4">Tank Size</th>
                    <th className="px-5 py-4">Address</th>
                    <th className="px-5 py-4">Date</th>
                    <th className="px-5 py-4">Status</th>
                    <th className="px-5 py-4">Notes</th>
                    <th className="px-5 py-4 text-center">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {filtered.map((b) => (
                    <tr key={b.id} className="hover:bg-slate-50/50 transition-colors">
                      <td className="px-5 py-4 font-semibold text-slate-900 whitespace-nowrap">{b.name}</td>
                      <td className="px-5 py-4 text-slate-600 whitespace-nowrap">{b.mobile}</td>
                      <td className="px-5 py-4 text-slate-600 whitespace-nowrap">{SERVICE_LABELS[b.serviceType] || b.serviceType}</td>
                      <td className="px-5 py-4 text-slate-600 whitespace-nowrap text-xs">{b.tankSize}</td>
                      <td className="px-5 py-4 text-slate-600 max-w-[200px] truncate">{b.address}</td>
                      <td className="px-5 py-4 text-slate-600 whitespace-nowrap">{b.date}</td>
                      <td className="px-5 py-4 whitespace-nowrap">
                        <select
                          value={b.status}
                          onChange={(e) => handleStatusChange(b.id, e.target.value)}
                          className={`text-xs font-bold px-2.5 py-1.5 rounded-lg border cursor-pointer focus:outline-none ${
                            STATUS_OPTIONS.find((o) => o.value === b.status)?.color || ''
                          }`}
                        >
                          {STATUS_OPTIONS.map((opt) => (
                            <option key={opt.value} value={opt.value}>{opt.label}</option>
                          ))}
                        </select>
                      </td>
                      <td className="px-5 py-4 max-w-[160px]">
                        {editingNotes === b.id ? (
                          <div className="flex gap-1">
                            <input
                              type="text"
                              value={notesText}
                              onChange={(e) => setNotesText(e.target.value)}
                              className="w-full bg-slate-50 border border-slate-200 rounded-lg px-2 py-1 text-xs focus:outline-none focus:ring-1 focus:ring-[#0B4DAB]"
                              placeholder="Add note..."
                            />
                            <button onClick={() => saveNotes(b.id)} className="text-[#0B4DAB] font-bold text-xs hover:underline">Save</button>
                          </div>
                        ) : (
                          <button
                            onClick={() => startEditNotes(b)}
                            className="text-xs text-slate-400 hover:text-slate-700 truncate block max-w-full text-left"
                          >
                            {b.notes || '✏️ Add note'}
                          </button>
                        )}
                      </td>
                      <td className="px-5 py-4 text-center">
                        <button
                          onClick={() => handleDelete(b.id)}
                          className="text-slate-300 hover:text-red-500 transition-colors"
                        >
                          <svg className="w-4 h-4 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Footer */}
        <p className="text-center text-xs text-slate-400 pb-8">
          Data syncs in real-time from Firestore.
        </p>
      </div>
    </div>
  );
}
