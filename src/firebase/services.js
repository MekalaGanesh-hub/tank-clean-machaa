import {
  collection,
  addDoc,
  updateDoc,
  doc,
  deleteDoc,
  onSnapshot,
  query,
  orderBy,
  Timestamp,
} from 'firebase/firestore';
import { db } from './config';

const COLLECTION = 'bookings';

export function subscribeBookings(callback) {
  const q = query(collection(db, COLLECTION), orderBy('createdAt', 'desc'));
  return onSnapshot(q, (snapshot) => {
    const bookings = snapshot.docs.map((d) => ({ id: d.id, ...d.data() }));
    callback(bookings);
  });
}

export async function createBooking(data) {
  const docRef = await addDoc(collection(db, COLLECTION), {
    ...data,
    status: 'new',
    createdAt: Timestamp.now(),
    updatedAt: Timestamp.now(),
  });
  return docRef.id;
}

export async function updateBookingStatus(id, status) {
  const ref = doc(db, COLLECTION, id);
  await updateDoc(ref, { status, updatedAt: Timestamp.now() });
}

export async function updateBookingNotes(id, notes) {
  const ref = doc(db, COLLECTION, id);
  await updateDoc(ref, { notes, updatedAt: Timestamp.now() });
}

export async function deleteBooking(id) {
  const ref = doc(db, COLLECTION, id);
  await deleteDoc(ref);
}
