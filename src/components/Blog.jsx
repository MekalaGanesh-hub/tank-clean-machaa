import React from 'react';

const articles = [
  {
    id: 1,
    title: '5 Signs Your Water Tank Has Harmful Bacteria',
    excerpt: 'Is your tap water smelling weird or looking cloudy? It might be time to check the overhead tank for algae and biofilm buildup.',
    readTime: '3 min read',
    icon: (
      <svg className="w-8 h-8 text-[#0B4DAB]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    )
  },
  {
    id: 2,
    title: 'How Often Should You Clean Your Underground Sump?',
    excerpt: 'Most households in Bangalore wait until it is too late. Discover the ideal cleaning frequency to prevent waterborne diseases.',
    readTime: '4 min read',
    icon: (
      <svg className="w-8 h-8 text-[#0B4DAB]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    id: 3,
    title: 'Why Hard Water Scale Damages Your Plumbing',
    excerpt: 'Calcium deposits inside your tank can ruin your pipes and appliances. Learn how our mechanized cleaning process removes stubborn scale.',
    readTime: '5 min read',
    icon: (
      <svg className="w-8 h-8 text-[#0B4DAB]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    )
  }
];

export default function Blog() {
  return (
    <section className="py-16 sm:py-20 bg-slate-50" id="blog">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-bold text-[#8CCB00] uppercase tracking-widest bg-green-50 px-4 py-1.5 rounded-full border border-green-100">
            Knowledge Base
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Tank Health & Safety Tips
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Stay informed about your family's water safety with expert tips and guides from our cleaning professionals.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {articles.map((article) => (
            <article 
              key={article.id} 
              className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group relative overflow-hidden flex flex-col h-full"
            >
              {/* Decorative background shape on hover */}
              <div className="absolute -right-16 -top-16 w-32 h-32 bg-blue-50 rounded-full transition-transform duration-500 group-hover:scale-[3] opacity-50 pointer-events-none"></div>
              
              {/* Icon */}
              <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mb-6 border border-slate-100 group-hover:border-blue-100 group-hover:bg-blue-50/50 transition-colors relative z-10">
                {article.icon}
              </div>

              <div className="flex items-center gap-2 mb-4 relative z-10">
                <span className="w-2 h-2 rounded-full bg-[#8CCB00]"></span>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">{article.readTime}</span>
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-3 leading-tight relative z-10 group-hover:text-[#0B4DAB] transition-colors">
                {article.title}
              </h3>
              
              <p className="text-slate-600 mb-8 flex-grow relative z-10 text-sm leading-relaxed">
                {article.excerpt}
              </p>

              <div className="relative z-10 mt-auto">
                <button 
                  onClick={() => alert("Full blog articles coming soon!")}
                  className="text-[#0B4DAB] font-bold text-sm inline-flex items-center gap-2 group/btn"
                >
                  Read Article
                  <svg className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
