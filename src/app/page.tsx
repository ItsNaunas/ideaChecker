'use client';

import { useState, useRef, useEffect } from 'react';

interface IdeaResponse {
  analysis: string;
  score: number;
}

export default function Home() {
  const [idea, setIdea] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<IdeaResponse | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [copySuccess, setCopySuccess] = useState(false);
  const resultsRef = useRef<HTMLDivElement>(null);

  const exampleIdeas = [
    'AI-powered meal planning app that generates recipes based on what\'s in your fridge',
    'Monthly subscription box delivering artisanal coffee from different countries',
    'B2B SaaS platform for small businesses to manage inventory and suppliers'
  ];

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
      
      // Auto-scroll to results after a short delay
      setTimeout(() => {
        if (resultsRef.current) {
          resultsRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
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

  const handleCopyAnalysis = async () => {
    if (!result) return;
    try {
      await navigator.clipboard.writeText(`${result.analysis}\n\nScore: ${result.score.toFixed(1)}/10`);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const handleReset = () => {
    setResult(null);
    setIdea('');
    setError(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const formatAnalysis = (text: string) => {
    const sections = text.split(/\*\*([^*]+):\*\*/g);
    const formatted = [];
    
    for (let i = 0; i < sections.length; i++) {
      if (i === 0 && sections[i].trim()) {
        // Introduction paragraph with bold text parsing
        const introContent = parseBoldText(sections[i].trim());
        formatted.push({ type: 'intro', content: introContent });
      } else if (i % 2 === 1) {
        // Section header
        const header = sections[i];
        const content = sections[i + 1]?.trim() || '';
        
        const sectionIcons: { [key: string]: string } = {
          'Market Opportunity': '📊',
          'Time & Effort': '⏱️',
          'Competition': '⚔️',
          'Rating': '⭐',
        };
        
        const icon = sectionIcons[header] || '▸';
        const parsedContent = parseBoldText(content);
        formatted.push({ type: 'section', header, content: parsedContent, icon });
        i++; // Skip next iteration since we consumed content
      }
    }
    
    return formatted;
  };

  const parseBoldText = (text: string) => {
    const parts = text.split(/(\*\*[^*]+\*\*)/g);
    return parts.map((part, index) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        const boldText = part.slice(2, -2);
        return (
          <span key={index} className="text-purple-400 font-semibold">
            {boldText}
          </span>
        );
      }
      return part;
    });
  };

  return (
    <div className="min-h-screen bg-background text-text">
      <main className="container mx-auto px-4 py-12 md:py-20 max-w-5xl">
        {/* Enhanced Hero Section */}
        <div className="relative mb-20">
          {/* Gradient Background Blur */}
          <div className="absolute inset-0 -top-10 bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-pink-500/10 rounded-3xl blur-3xl" />
          
          <div className="relative text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/30 rounded-full backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
              </span>
              <span className="text-sm font-semibold bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text text-transparent">
                AI-Powered Business Validation
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent leading-tight">
              Stop Guessing.<br />Start Validating.
            </h1>

            {/* Subheading */}
            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-8 leading-relaxed">
              Get brutally honest, AI-powered feedback on your business idea in <span className="text-white font-semibold">under 30 seconds</span>
            </p>
            <p className="text-base text-gray-500 max-w-2xl mx-auto">
              No fluff. No sugar-coating. Just the truth you need to hear before you waste time and money.
            </p>
          </div>
        </div>

        {/* Input Form */}
        <form onSubmit={handleSubmit} className="mb-12">
          <div className="space-y-4">
            <textarea
              value={idea}
              onChange={(e) => setIdea(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Describe your business idea in detail...\nBe specific about what problem you're solving, where and who your customers are."
              className="w-full p-6 text-lg bg-backgroundSecondary border border-gray-700 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none transition-all duration-300 placeholder-gray-500"
              rows={6}
              disabled={loading}
            />

            <div className="flex justify-between items-center">
              <p className="text-sm text-gray-500">
                {idea.trim().length < 10 ? 'At least 10 characters required' : `${idea.trim().length} characters`}
              </p>
              <button
                type="submit"
                disabled={loading || !idea.trim()}
                className="px-8 py-4 bg-white text-black rounded-xl font-semibold hover:bg-gray-100 hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 text-lg shadow-lg"
              >
                {loading ? (
                  <span className="inline-flex items-center gap-2">
                    <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Analyzing...
                  </span>
                ) : 'Check My Idea →'}
              </button>
            </div>

            {/* Example Ideas */}
            <div className="mb-6">
              <h3 className="text-base font-semibold text-gray-300 text-center mb-4">Need inspiration? Try one of these:</h3>
              <div className="grid md:grid-cols-3 gap-3">
                {exampleIdeas.map((example, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setIdea(example)}
                    disabled={loading}
                    className="group p-4 bg-gradient-to-br from-gray-800/80 to-gray-900/80 hover:from-gray-700/80 hover:to-gray-800/80 border border-gray-600/50 hover:border-purple-500/50 rounded-xl text-left transition-all disabled:opacity-50 disabled:cursor-not-allowed backdrop-blur-sm hover:scale-[1.02]"
                  >
                    <div className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5 group-hover:text-purple-300 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      <span className="text-sm text-gray-300 group-hover:text-white transition-colors leading-snug">
                        {example}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Stats Section */}
            <div className="py-6">
              <div className="grid grid-cols-3 gap-4 md:gap-8 mb-4">
                <div className="text-center p-3 bg-backgroundSecondary/50 border border-gray-700/50 rounded-2xl backdrop-blur-sm">
                  <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-1">12K+</div>
                  <div className="text-xs text-gray-400">Ideas Validated</div>
                </div>
                <div className="text-center p-3 bg-backgroundSecondary/50 border border-gray-700/50 rounded-2xl backdrop-blur-sm">
                  <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-1">&lt;30s</div>
                  <div className="text-xs text-gray-400">Average Time</div>
                </div>
                <div className="text-center p-3 bg-backgroundSecondary/50 border border-gray-700/50 rounded-2xl backdrop-blur-sm">
                  <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-1">GPT-4</div>
                  <div className="text-xs text-gray-400">Powered</div>
                </div>
              </div>
              
              {/* Trust Badge */}
              <div className="text-center">
                <p className="text-gray-400 text-xs md:text-sm">
                  Trusted by founders, indie hackers, and entrepreneurs worldwide 🌍
                </p>
              </div>
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
          <div ref={resultsRef} className="bg-backgroundSecondary border border-gray-700 rounded-2xl overflow-hidden animate-fade-in">
            {/* Score Header */}
            <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-6 border-b border-gray-700">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold">Verdict</h2>
                <div className="flex items-center space-x-4">
                  <div className={`px-4 py-2 rounded-lg font-bold text-lg ${
                    result.score >= 7 ? 'bg-green-500/20 text-green-400 border border-green-500/50' :
                    result.score >= 4 ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/50' :
                    'bg-red-500/20 text-red-400 border border-red-500/50'
                  }`}>
                    {result.score >= 7 ? '✓ Strong' : result.score >= 4 ? '⚠ Moderate' : '✗ Weak'}
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-white">{result.score.toFixed(1)}</div>
                    <div className="text-sm text-gray-400">out of 10</div>
                  </div>
                </div>
              </div>
              
              {/* Score Bar */}
              <div className="mt-4 bg-gray-700 rounded-full h-3 overflow-hidden">
                <div 
                  className={`h-full rounded-full transition-all duration-1000 ${
                    result.score >= 7 ? 'bg-gradient-to-r from-green-500 to-green-400' :
                    result.score >= 4 ? 'bg-gradient-to-r from-yellow-500 to-yellow-400' :
                    'bg-gradient-to-r from-red-500 to-red-400'
                  }`}
                  style={{ width: `${(result.score / 10) * 100}%` }}
                />
              </div>
            </div>

            {/* Analysis Content */}
            <div className="p-8">
              <div className="space-y-6">
                {formatAnalysis(result.analysis).map((section, idx) => {
                  if (section.type === 'intro') {
                    return (
                      <div key={idx} className="text-gray-300 text-base leading-7 pb-4 border-b border-gray-700/50">
                        {section.content}
                      </div>
                    );
                  }
                  
                  return (
                    <div key={idx} className="bg-gray-800/30 rounded-xl p-5 border border-gray-700/50">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-2xl">{section.icon}</span>
                        <h3 className="text-lg font-bold text-white">{section.header}</h3>
                      </div>
                      <div className="text-gray-300 text-base leading-7">
                        {section.content}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center pt-6 border-t border-gray-700">
                <button
                  onClick={handleCopyAnalysis}
                  className="px-6 py-3 bg-gray-800 hover:bg-gray-700 border border-gray-600 rounded-xl font-semibold transition-all hover:scale-105 flex items-center justify-center gap-2"
                >
                  {copySuccess ? (
                    <>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Copied!
                    </>
                  ) : (
                    <>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                      </svg>
                      Copy Analysis
                    </>
                  )}
                </button>
                <button
                  onClick={handleReset}
                  className="px-6 py-3 bg-white text-black hover:bg-gray-100 rounded-xl font-semibold transition-all hover:scale-105 flex items-center justify-center gap-2"
                >
                  Check Another Idea
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Footer */}
        <footer className="text-center mt-16 pt-8 border-t border-gray-700">
          <p className="text-textSecondary mb-4">
            If your idea comes back strong, build it before somebody else does.
          </p>
          {/* <a
            href="https://project67-six.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-accent hover:text-accentHover transition-colors duration-300"
          >
            We can help you launch it →
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a> */}
        </footer>
      </main>
    </div>
  );
}
