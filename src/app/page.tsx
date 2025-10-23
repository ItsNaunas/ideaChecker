'use client';

import { useState } from 'react';

interface IdeaResponse {
  analysis: string;
  score: number;
}

export default function Home() {
  const [idea, setIdea] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<IdeaResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!idea.trim() || loading) return;

    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const response = await fetch('/api/check-idea', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ idea: idea.trim() }),
      });

      if (!response.ok) {
        throw new Error('Failed to analyze idea');
      }

      const data = await response.json();
      setResult(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <div className="min-h-screen bg-background text-text">
      <main className="container mx-auto px-4 py-16 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-text to-accent bg-clip-text text-transparent">
            IdeaChecker
          </h1>
          <p className="text-xl text-textSecondary max-w-2xl mx-auto">
            Validate your next business idea instantly with honest, brutal feedback
          </p>
        </div>

        {/* Input Form */}
        <form onSubmit={handleSubmit} className="mb-12">
          <div className="space-y-4">
            <textarea
              value={idea}
              onChange={(e) => setIdea(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Describe your business idea in detail... (Press Ctrl+Enter to submit)"
              className="w-full p-6 text-lg bg-backgroundSecondary border border-gray-700 rounded-2xl focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent resize-none transition-all duration-300 placeholder-gray-400"
              rows={6}
              disabled={loading}
            />
            <div className="flex justify-end">
              <button
                type="submit"
                disabled={loading || !idea.trim()}
                className="px-8 py-4 bg-white text-black rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed text-lg shadow-lg"
              >
                {loading ? 'Analyzing...' : 'Check My Idea'}
              </button>
            </div>
          </div>
        </form>

        {/* Loading State */}
        {loading && (
          <div className="text-center py-12">
            <div className="inline-flex items-center space-x-3">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-accent"></div>
              <span className="text-lg text-textSecondary">Running checks...</span>
            </div>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="bg-red-900/20 border border-red-700 rounded-xl p-6 mb-8">
            <p className="text-red-400">Error: {error}</p>
          </div>
        )}

        {/* Results */}
        {result && (
          <div className="bg-backgroundSecondary border border-gray-700 rounded-2xl overflow-hidden animate-fade-in">
            {/* Score Header */}
            <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-6 border-b border-gray-700">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold">Verdict</h2>
                <div className="flex items-center space-x-4">
                  <div className={`px-4 py-2 rounded-lg font-bold text-lg ${
                    result.score >= 70 ? 'bg-green-500/20 text-green-400 border border-green-500/50' :
                    result.score >= 50 ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/50' :
                    'bg-red-500/20 text-red-400 border border-red-500/50'
                  }`}>
                    {result.score >= 70 ? '✓ Strong' : result.score >= 50 ? '⚠ Moderate' : '✗ Weak'}
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-white">{result.score}</div>
                    <div className="text-sm text-gray-400">out of 100</div>
                  </div>
                </div>
              </div>
              
              {/* Score Bar */}
              <div className="mt-4 bg-gray-700 rounded-full h-3 overflow-hidden">
                <div 
                  className={`h-full rounded-full transition-all duration-1000 ${
                    result.score >= 70 ? 'bg-gradient-to-r from-green-500 to-green-400' :
                    result.score >= 50 ? 'bg-gradient-to-r from-yellow-500 to-yellow-400' :
                    'bg-gradient-to-r from-red-500 to-red-400'
                  }`}
                  style={{ width: `${result.score}%` }}
                />
              </div>
            </div>

            {/* Analysis Content */}
            <div className="p-8">
              <div className="prose prose-invert prose-lg max-w-none">
                <div className="text-gray-300 leading-relaxed space-y-4">
                  {result.analysis.split('\n\n').map((paragraph, idx) => (
                    <p key={idx} className="text-base leading-7">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Footer */}
        <footer className="text-center mt-16 pt-8 border-t border-gray-700">
          <p className="text-textSecondary mb-4">
            If your idea comes back strong, build it before somebody else does.
          </p>
          <a
            href="https://project67-six.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-accent hover:text-accentHover transition-colors duration-300"
          >
            We can help you launch it →
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </footer>
      </main>
    </div>
  );
}
