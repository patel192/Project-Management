import React, { useState, useMemo } from 'react';

function KnowledgeBase() {
  // Mock Knowledge Base Articles
  const [articles] = useState([
    {
      id: 'kb001',
      category: 'System Protocols',
      title: 'Advanced User Authentication Procedures',
      content: 'This article details the multi-factor authentication (MFA) protocols and biometric verification steps required for secure system access. Ensure all biometric data is encrypted and stored on isolated neural drives.',
      tags: ['security', 'authentication', 'protocol', 'system'],
    },
    {
      id: 'kb002',
      category: 'Project Management',
      title: 'Optimizing Agile Sprints in Distributed Teams',
      content: 'Guidance on conducting efficient agile sprints for teams spread across various network nodes. Focus on asynchronous communication, holographic stand-ups, and real-time task synchronization algorithms.',
      tags: ['project management', 'agile', 'teams', 'workflow'],
    },
    {
      id: 'kb003',
      category: 'Data Handling',
      title: 'Data Encryption Best Practices for Sensitive Information',
      content: 'A comprehensive guide to applying military-grade encryption standards (Quantum-AES-256) to all sensitive project data. Includes instructions on key rotation schedules and decentralized storage solutions.',
      tags: ['data', 'encryption', 'security', 'storage'],
    },
    {
      id: 'kb004',
      category: 'Troubleshooting',
      title: 'Resolving Inter-Node Latency Issues',
      content: 'Steps to diagnose and resolve high latency problems between different operational nodes. Covers network diagnostics, re-routing protocols, and quantum tunneling stabilization techniques.',
      tags: ['troubleshooting', 'network', 'latency', 'system'],
    },
    {
      id: 'kb005',
      category: 'User Interface',
      title: 'Customizing Your Cyber-Dashboard Interface',
      content: 'Personalize your ProManage dashboard with custom widgets, data stream visualizations, and neon theme adjustments. Access developer mode for advanced UI modifications.',
      tags: ['ui', 'customization', 'dashboard'],
    },
    {
      id: 'kb006',
      category: 'Financial Operations',
      title: 'Understanding Decentralized Budget Allocation',
      content: 'An explanation of how decentralized ledger technology (DLT) is used for transparent and immutable budget tracking across projects and departments. Learn to audit smart contracts for financial integrity.',
      tags: ['finance', 'budget', 'blockchain', 'reports'],
    },
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('All');
  const [expandedArticle, setExpandedArticle] = useState(null); // Tracks which article is expanded

  const categories = useMemo(() => {
    const uniqueCategories = [...new Set(articles.map(article => article.category))];
    return ['All', ...uniqueCategories];
  }, [articles]);

  const filteredArticles = useMemo(() => {
    let currentArticles = articles;

    if (filterCategory !== 'All') {
      currentArticles = currentArticles.filter(article => article.category === filterCategory);
    }

    if (searchTerm) {
      const lowerCaseSearchTerm = searchTerm.toLowerCase();
      currentArticles = currentArticles.filter(article =>
        article.title.toLowerCase().includes(lowerCaseSearchTerm) ||
        article.content.toLowerCase().includes(lowerCaseSearchTerm) ||
        article.tags.some(tag => tag.toLowerCase().includes(lowerCaseSearchTerm))
      );
    }
    return currentArticles;
  }, [articles, filterCategory, searchTerm]);

  const toggleExpand = (id) => {
    setExpandedArticle(expandedArticle === id ? null : id);
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case 'System Protocols': return 'border-fuchsia-500 text-fuchsia-400';
      case 'Project Management': return 'border-cyan-500 text-cyan-400';
      case 'Data Handling': return 'border-lime-500 text-lime-400';
      case 'Troubleshooting': return 'border-red-500 text-red-400';
      case 'User Interface': return 'border-yellow-500 text-yellow-400';
      case 'Financial Operations': return 'border-purple-500 text-purple-400';
      default: return 'border-gray-500 text-gray-400';
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950 font-inter text-gray-100 flex flex-col">
      {/* Local Styles for Animations */}
      <style>
        {`
        @keyframes slide-diagonal-x {
          0% { transform: translateX(0) translateY(0); }
          100% { transform: translateX(-100%) translateY(-100%); }
        }
        @keyframes slide-diagonal-x-reverse {
          0% { transform: translateX(-100%) translateY(-100%); }
          100% { transform: translateX(0) translateY(0); }
        }
        .animate-slide-diagonal-x-medium { animation: slide-diagonal-x 45s linear infinite; }
        .animate-slide-diagonal-x-reverse-medium { animation: slide-diagonal-x-reverse 45s linear infinite; }

        /* Border Animation for Knowledge Base main content */
        @keyframes border-glow-kb {
          0%, 100% { border-color: rgba(236, 72, 153, 0.5); box-shadow: 0 0 10px rgba(236, 72, 153, 0.3); } /* Fuchsia */
          33% { border-color: rgba(0, 206, 209, 0.5); box-shadow: 0 0 10px rgba(0, 206, 209, 0.3); } /* Cyan */
          66% { border-color: rgba(139, 232, 70, 0.5); box-shadow: 0 0 10px rgba(139, 232, 70, 0.3); } /* Lime */
        }
        .animate-border-glow-kb {
            border: 2px solid;
            animation: border-glow-kb 13s infinite alternate;
        }

        .category-pill {
            padding: 0.3rem 0.8rem;
            border-radius: 9999px; /* Tailwind's rounded-full */
            border: 1px solid;
            font-size: 0.875rem; /* text-sm */
            font-weight: 500; /* font-medium */
            cursor: pointer;
            transition: all 0.2s ease-in-out;
            background-color: rgba(255, 255, 255, 0.05); /* subtle background */
        }
        .category-pill:hover {
            transform: translateY(-2px);
            box-shadow: 0 2px 8px rgba(0, 206, 209, 0.2);
        }
        .category-pill.active {
            background-color: rgba(0, 206, 209, 0.2);
            box-shadow: 0 0 10px rgba(0, 206, 209, 0.4);
            color: #00CED1;
            border-color: #00CED1;
        }

        .article-card {
            background-color: #1a1a1a; /* Darker zinc */
            border-radius: 0.75rem; /* rounded-lg */
            border: 1px solid #333;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
            transition: all 0.3s ease-in-out;
        }
        .article-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 20px rgba(236, 72, 153, 0.3);
        }
        .article-card.expanded {
            border-color: #F06292;
            box-shadow: 0 8px 20px rgba(236, 72, 153, 0.5);
        }
        `}
      </style>

      {/* Header */}
      <header className="flex justify-between items-center bg-zinc-900 p-4 border-b border-cyan-600/40 shadow-md shadow-cyan-500/20">
        <h1 className="text-3xl font-bold text-fuchsia-400">KNOWLEDGE BASE // DATA COMPENDIUM</h1>
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="SEARCH ARTICLES..."
            className="p-2 bg-zinc-800 border border-cyan-600/50 rounded-md text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all duration-200 w-48 md:w-64"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </header>

      {/* Knowledge Base Content */}
      <main className="flex-1 overflow-y-auto p-8 bg-zinc-950 relative animate-border-glow-kb"> {/* Apply border animation here */}
        {/* Animated Background Grid/Lines */}
        <div className="absolute inset-0 z-0 opacity-5">
          <svg className="w-[200%] h-[200%]" style={{ transform: 'translateX(-50%) translateY(-50%)' }}>
            <defs>
              <pattern id="animated-line-grid-kb" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
                <line x1="0" y1="0" x2="80" y2="80" stroke="currentColor" strokeWidth="1" />
                <line x1="80" y1="0" x2="0" y2="80" stroke="currentColor" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#animated-line-grid-kb)" className="text-fuchsia-500 animate-slide-diagonal-x-medium" />
            <rect width="100%" height="100%" fill="url(#animated-line-grid-kb)" className="text-cyan-500 animate-slide-diagonal-x-reverse-medium" style={{ animationDelay: '2s' }} />
            <rect width="100%" height="100%" fill="url(#animated-line-grid-kb)" className="text-lime-500 animate-slide-diagonal-x-medium" style={{ animationDelay: '4s' }} />
          </svg>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto">
          {/* Category Filters */}
          <div className="mb-8 flex flex-wrap gap-3 justify-center">
            {categories.map(category => (
              <span
                key={category}
                className={`category-pill ${getCategoryColor(category)} ${filterCategory === category ? 'active' : ''}`}
                onClick={() => setFilterCategory(category)}
              >
                {category.toUpperCase()}
              </span>
            ))}
          </div>

          {/* Article List */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArticles.length > 0 ? (
              filteredArticles.map(article => (
                <div
                  key={article.id}
                  className={`article-card p-6 cursor-pointer ${expandedArticle === article.id ? 'expanded' : ''}`}
                  onClick={() => toggleExpand(article.id)}
                >
                  <h3 className={`text-xl font-bold mb-3 ${getCategoryColor(article.category)}`}>
                    {article.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4">
                    <span className={`px-2 py-0.5 rounded-full text-xs font-semibold ${getCategoryColor(article.category).replace('border', 'bg').replace('text', 'text')}/20 border`}>
                      {article.category.toUpperCase()}
                    </span>
                  </p>
                  {expandedArticle === article.id && (
                    <div className="text-gray-400 text-sm border-t border-zinc-700 pt-4 mt-4">
                      {article.content}
                      <div className="flex flex-wrap gap-2 mt-4">
                        {article.tags.map(tag => (
                          <span key={tag} className="px-2 py-1 bg-zinc-700 rounded-md text-xs border border-zinc-600/50 text-gray-400">
                            #{tag.toLowerCase().replace(' ', '_')}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  <div className="flex justify-end mt-4">
                    <span className="text-fuchsia-400 text-sm font-semibold">
                      {expandedArticle === article.id ? 'COLLAPSE ▲' : 'EXPAND ▼'}
                    </span>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center text-gray-500 italic p-8 bg-zinc-800 rounded-lg border border-zinc-700">
                No articles found matching your criteria.
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

export default KnowledgeBase;