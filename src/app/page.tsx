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
          <div className="bg-backgroundSecondary border border-gray-700 rounded-2xl p-8 animate-fade-in">
            <div className="mb-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold">Analysis Results</h2>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-textSecondary">Score:</span>
                  <span className="text-2xl font-bold text-accent">{result.score}/100</span>
                </div>
              </div>
            </div>
            
            <div className="prose prose-invert max-w-none">
              <div className="whitespace-pre-wrap text-textSecondary leading-relaxed">
                {result.analysis}
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
