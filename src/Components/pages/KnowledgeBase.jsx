import React, { useState, useMemo } from 'react';

function KnowledgeBase() {
  const [articles] = useState([
    {
      id: 'kb001',
      category: 'System Protocols',
      title: 'Advanced User Authentication Procedures',
      content:
        'This article details the multi-factor authentication (MFA) protocols and biometric verification steps required for secure system access. Ensure all biometric data is encrypted and stored on isolated neural drives.',
      tags: ['security', 'authentication', 'protocol', 'system'],
    },
    {
      id: 'kb002',
      category: 'Project Management',
      title: 'Optimizing Agile Sprints in Distributed Teams',
      content:
        'Guidance on conducting efficient agile sprints for teams spread across various network nodes. Focus on asynchronous communication, holographic stand-ups, and real-time task synchronization algorithms.',
      tags: ['project management', 'agile', 'teams', 'workflow'],
    },
    {
      id: 'kb003',
      category: 'Data Handling',
      title: 'Data Encryption Best Practices for Sensitive Information',
      content:
        'A comprehensive guide to applying military-grade encryption standards (Quantum-AES-256) to all sensitive project data. Includes instructions on key rotation schedules and decentralized storage solutions.',
      tags: ['data', 'encryption', 'security', 'storage'],
    },
    {
      id: 'kb004',
      category: 'Troubleshooting',
      title: 'Resolving Inter-Node Latency Issues',
      content:
        'Steps to diagnose and resolve high latency problems between different operational nodes. Covers network diagnostics, re-routing protocols, and quantum tunneling stabilization techniques.',
      tags: ['troubleshooting', 'network', 'latency', 'system'],
    },
    {
      id: 'kb005',
      category: 'User Interface',
      title: 'Customizing Your Cyber-Dashboard Interface',
      content:
        'Personalize your ProManage dashboard with custom widgets, data stream visualizations, and neon theme adjustments. Access developer mode for advanced UI modifications.',
      tags: ['ui', 'customization', 'dashboard'],
    },
    {
      id: 'kb006',
      category: 'Financial Operations',
      title: 'Understanding Decentralized Budget Allocation',
      content:
        'An explanation of how decentralized ledger technology (DLT) is used for transparent and immutable budget tracking across projects and departments. Learn to audit smart contracts for financial integrity.',
      tags: ['finance', 'budget', 'blockchain', 'reports'],
    },
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('All');
  const [expandedArticle, setExpandedArticle] = useState(null);

  const categories = useMemo(() => {
    const unique = [...new Set(articles.map((a) => a.category))];
    return ['All', ...unique];
  }, [articles]);

  const filtered = useMemo(() => {
    let current = [...articles];
    if (filterCategory !== 'All') {
      current = current.filter((a) => a.category === filterCategory);
    }
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      current = current.filter(
        (a) =>
          a.title.toLowerCase().includes(term) ||
          a.content.toLowerCase().includes(term) ||
          a.tags.some((tag) => tag.toLowerCase().includes(term))
      );
    }
    return current;
  }, [articles, searchTerm, filterCategory]);

  const getColor = (cat) => {
    return {
      'System Protocols': 'text-fuchsia-400 border-fuchsia-500',
      'Project Management': 'text-cyan-400 border-cyan-500',
      'Data Handling': 'text-lime-400 border-lime-500',
      'Troubleshooting': 'text-red-400 border-red-500',
      'User Interface': 'text-yellow-400 border-yellow-500',
      'Financial Operations': 'text-purple-400 border-purple-500',
    }[cat] || 'text-gray-400 border-gray-500';
  };

  const toggleExpand = (id) => {
    setExpandedArticle((prev) => (prev === id ? null : id));
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white font-inter px-6 py-8">
      <style>
        {`
        @keyframes glow {
          0% { box-shadow: 0 0 5px #00f5ff, 0 0 10px #ff00f5; }
          50% { box-shadow: 0 0 15px #00f5ff, 0 0 25px #ff00f5; }
          100% { box-shadow: 0 0 5px #00f5ff, 0 0 10px #ff00f5; }
        }
        .neon-box {
          background: rgba(28,28,30,0.7);
          backdrop-filter: blur(10px);
          border-radius: 1rem;
          border: 1px solid rgba(255,255,255,0.1);
          transition: all 0.3s ease-in-out;
        }
        .neon-box:hover {
          animation: glow 2.5s infinite ease-in-out;
        }
        `}
      </style>

      {/* Header */}
      <header className="mb-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <h1 className="text-3xl font-extrabold bg-gradient-to-r from-fuchsia-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent tracking-wide">
          KNOWLEDGE BASE // DATA COMPENDIUM
        </h1>
        <input
          type="text"
          placeholder="Search articles..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="bg-zinc-900 border border-cyan-500 px-4 py-2 rounded-md w-full md:w-64 placeholder-gray-400 focus:ring-2 focus:ring-fuchsia-500 focus:outline-none"
        />
      </header>

      {/* Category Filters */}
      <div className="flex flex-wrap gap-3 mb-10 justify-center">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilterCategory(cat)}
            className={`px-4 py-1 rounded-full border transition-all duration-200 text-sm ${
              filterCategory === cat
                ? `bg-cyan-800/30 shadow-md shadow-cyan-500 ${getColor(cat)}`
                : `bg-zinc-800 ${getColor(cat)} hover:bg-cyan-800/20`
            }`}
          >
            {cat.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Articles */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.length > 0 ? (
          filtered.map((article) => (
            <div
              key={article.id}
              className={`neon-box p-6 cursor-pointer border ${getColor(
                article.category
              )} ${expandedArticle === article.id ? 'ring-2 ring-fuchsia-500' : ''}`}
              onClick={() => toggleExpand(article.id)}
            >
              <h3 className="text-lg font-semibold mb-2">{article.title}</h3>
              <span
                className={`text-xs font-semibold px-2 py-1 rounded-full border ${getColor(
                  article.category
                )} bg-zinc-800/50`}
              >
                {article.category}
              </span>

              {expandedArticle === article.id && (
                <div className="mt-4 text-sm text-gray-300">
                  <p>{article.content}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {article.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-zinc-800 px-2 py-1 text-xs rounded-md border border-zinc-600 text-gray-400"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="mt-4 text-right text-xs text-fuchsia-400 font-bold">
                {expandedArticle === article.id ? 'COLLAPSE ▲' : 'EXPAND ▼'}
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center text-gray-500 italic">
            No articles match your search or category filter.
          </div>
        )}
      </div>
    </div>
  );
}

export default KnowledgeBase;
