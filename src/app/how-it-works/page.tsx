import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How IdeaChecker Works',
  description: 'Discover how IdeaChecker uses AI to validate your business ideas. Learn about our validation process, analysis criteria, and how we provide instant feedback on startup concepts.',
  keywords: 'how idea checker works, business validation process, AI idea analysis, startup validation steps',
};

export default function HowItWorksPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How does IdeaChecker validate business ideas?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'IdeaChecker uses advanced GPT-4 AI to analyze your business concept across multiple dimensions including market opportunity, competition, execution difficulty, and potential for success. The AI evaluates thousands of data points to provide comprehensive feedback.',
        },
      },
      {
        '@type': 'Question',
        name: 'How long does the validation take?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The entire validation process takes under 30 seconds. Simply submit your idea description and receive instant analysis with a score and detailed feedback.',
        },
      },
      {
        '@type': 'Question',
        name: 'What makes IdeaChecker different from other validation tools?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'IdeaChecker provides brutally honest feedback powered by advanced AI, delivers results in seconds, and is completely free. We cut through fluff to give you the truth about your idea\'s potential.',
        },
      },
      {
        '@type': 'Question',
        name: 'How accurate is the AI analysis?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our AI uses GPT-4 and comprehensive market data to provide highly accurate assessments based on proven business metrics and patterns. While no tool is 100% accurate, we provide valuable insights to guide your decision-making.',
        },
      },
    ],
  };

  return (
    <div className="min-h-screen bg-background text-text">
      {/* Navigation */}
      <nav className="border-b border-gray-700 bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 max-w-4xl flex items-center justify-between">
          <a href="/" className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            IdeaChecker
          </a>
          <div className="flex gap-6">
            <a href="/" className="text-gray-300 hover:text-white transition-colors">Home</a>
            <a href="/about" className="text-gray-300 hover:text-white transition-colors">About</a>
            <a href="/how-it-works" className="text-white font-medium">How It Works</a>
            <a href="/examples" className="text-gray-300 hover:text-white transition-colors">Examples</a>
          </div>
        </div>
      </nav>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </head>
      <main className="container mx-auto px-4 py-12 md:py-20 max-w-4xl">
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
            How IdeaChecker Works
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed">
            Discover our AI-powered validation process
          </p>
        </div>

        <section className="mb-16">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-3xl font-bold">
                1
              </div>
              <h2 className="text-xl font-bold mb-3 text-white">Submit Your Idea</h2>
              <p className="text-gray-300">
                Describe your business concept in detail. Include the problem you're solving, target customers, and your proposed solution.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-3xl font-bold">
                2
              </div>
              <h2 className="text-xl font-bold mb-3 text-white">AI Analysis</h2>
              <p className="text-gray-300">
                Our GPT-4 powered system analyzes your idea across multiple business dimensions and market factors.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-3xl font-bold">
                3
              </div>
              <h2 className="text-xl font-bold mb-3 text-white">Get Feedback</h2>
              <p className="text-gray-300">
                Receive instant results with a score, detailed analysis, and actionable insights for your idea.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-white">What We Analyze</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-backgroundSecondary border border-gray-700 rounded-xl p-6">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold mb-3 text-purple-400">Market Opportunity</h3>
              <p className="text-gray-300">
                We evaluate the size and viability of your target market, customer demand, and the potential for growth. Is there real demand for your solution?
              </p>
            </div>
            <div className="bg-backgroundSecondary border border-gray-700 rounded-xl p-6">
              <div className="text-4xl mb-4">⚔️</div>
              <h3 className="text-xl font-bold mb-3 text-purple-400">Competition</h3>
              <p className="text-gray-300">
                We assess the competitive landscape, identify existing solutions, and help you understand your positioning in the market.
              </p>
            </div>
            <div className="bg-backgroundSecondary border border-gray-700 rounded-xl p-6">
              <div className="text-4xl mb-4">⏱️</div>
              <h3 className="text-xl font-bold mb-3 text-purple-400">Execution Difficulty</h3>
              <p className="text-gray-300">
                We evaluate the technical and operational complexity of bringing your idea to life, including time, resources, and skills needed.
              </p>
            </div>
            <div className="bg-backgroundSecondary border border-gray-700 rounded-xl p-6">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold mb-3 text-purple-400">Idea Clarity</h3>
              <p className="text-gray-300">
                We analyze how well-defined and unique your concept is, whether it addresses a genuine problem, and how it differentiates from alternatives.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-white">Understanding Your Score</h2>
          <div className="space-y-6">
            <div className="bg-green-500/10 border border-green-500/50 rounded-xl p-6">
              <div className="flex items-center gap-4 mb-3">
                <div className="text-3xl">✓</div>
                <h3 className="text-xl font-bold text-green-400">7-10: Strong</h3>
              </div>
              <p className="text-gray-300">
                Your idea shows strong potential. The market opportunity is significant, competition is manageable, and execution is feasible. This is a concept worth pursuing seriously.
              </p>
            </div>
            <div className="bg-yellow-500/10 border border-yellow-500/50 rounded-xl p-6">
              <div className="flex items-center gap-4 mb-3">
                <div className="text-3xl">⚠</div>
                <h3 className="text-xl font-bold text-yellow-400">4-6: Moderate</h3>
              </div>
              <p className="text-gray-300">
                Your idea has potential but needs refinement. There may be market opportunity, but execution challenges or competitive factors require careful consideration. Consider pivoting or addressing key weaknesses.
              </p>
            </div>
            <div className="bg-red-500/10 border border-red-500/50 rounded-xl p-6">
              <div className="flex items-center gap-4 mb-3">
                <div className="text-3xl">✗</div>
                <h3 className="text-xl font-bold text-red-400">0-3: Weak</h3>
              </div>
              <p className="text-gray-300">
                Your idea faces significant challenges. The market may be too small, competition too fierce, or execution too difficult. This doesn't mean give up, but it does mean major refinement or pivoting is necessary.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-center text-white">The Technology Behind It</h2>
          <div className="bg-backgroundSecondary border border-gray-700 rounded-xl p-8">
            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              IdeaChecker leverages <strong className="text-white">GPT-4</strong>, one of the most advanced AI language models available, trained on vast amounts of business data, market research, and case studies.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              Our AI considers thousands of factors when evaluating your idea, including:
            </p>
            <ul className="grid md:grid-cols-2 gap-3 text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-purple-400">•</span>
                <span>Historical startup success patterns</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-400">•</span>
                <span>Market dynamics and trends</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-400">•</span>
                <span>Competitive landscape data</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-400">•</span>
                <span>Customer behavior insights</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-400">•</span>
                <span>Business model viability</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-400">•</span>
                <span>Technical feasibility factors</span>
              </li>
            </ul>
            <p className="text-lg text-gray-300 leading-relaxed mt-6">
              The result? Instant feedback that would typically require hours of research, expert consultation, and market analysis—delivered in seconds.
            </p>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-white">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="bg-backgroundSecondary border border-gray-700 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3 text-white">How does IdeaChecker validate business ideas?</h3>
              <p className="text-gray-300">
                IdeaChecker uses advanced GPT-4 AI to analyze your business concept across multiple dimensions including market opportunity, competition, execution difficulty, and potential for success. The AI evaluates thousands of data points to provide comprehensive feedback.
              </p>
            </div>
            <div className="bg-backgroundSecondary border border-gray-700 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3 text-white">How long does the validation take?</h3>
              <p className="text-gray-300">
                The entire validation process takes under 30 seconds. Simply submit your idea description and receive instant analysis with a score and detailed feedback.
              </p>
            </div>
            <div className="bg-backgroundSecondary border border-gray-700 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3 text-white">What makes IdeaChecker different from other validation tools?</h3>
              <p className="text-gray-300">
                IdeaChecker provides brutally honest feedback powered by advanced AI, delivers results in seconds, and is completely free. We cut through fluff to give you the truth about your idea's potential.
              </p>
            </div>
            <div className="bg-backgroundSecondary border border-gray-700 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3 text-white">How accurate is the AI analysis?</h3>
              <p className="text-gray-300">
                Our AI uses GPT-4 and comprehensive market data to provide highly accurate assessments based on proven business metrics and patterns. While no tool is 100% accurate, we provide valuable insights to guide your decision-making.
              </p>
            </div>
            <div className="bg-backgroundSecondary border border-gray-700 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3 text-white">Is IdeaChecker really free?</h3>
              <p className="text-gray-300">
                Yes! IdeaChecker is completely free to use. No credit card required, no hidden fees, no premium tiers. We believe every entrepreneur deserves access to quality validation resources.
              </p>
            </div>
            <div className="bg-backgroundSecondary border border-gray-700 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3 text-white">Should I rely solely on IdeaChecker for validation?</h3>
              <p className="text-gray-300">
                While IdeaChecker provides valuable insights, it's best used as one tool in your validation toolkit. Combine it with market research, customer interviews, and expert advice for the most comprehensive understanding of your idea's potential.
              </p>
            </div>
          </div>
        </section>

        <div className="mt-16 p-8 bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-pink-500/10 border border-purple-500/30 rounded-2xl text-center">
          <h3 className="text-2xl font-bold mb-4 text-white">Ready to Validate Your Idea?</h3>
          <p className="text-gray-300 mb-6">
            Experience our AI-powered validation process in under 30 seconds
          </p>
          <a
            href="/"
            className="inline-block px-8 py-4 bg-white text-black rounded-xl font-semibold hover:bg-gray-100 hover:scale-105 transition-all duration-300"
          >
            Check Your Idea Now →
          </a>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-16 pt-8 border-t border-gray-700">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
            <div className="text-center md:text-left">
              <p className="text-textSecondary mb-2">
                If your idea comes back strong, build it before somebody else does.
              </p>
              <p className="text-sm text-gray-500">
                © 2024 IdeaChecker. All rights reserved.
              </p>
            </div>
            <div className="flex gap-6 text-sm">
              <a href="/about" className="text-gray-400 hover:text-white transition-colors">About</a>
              <a href="/how-it-works" className="text-gray-400 hover:text-white transition-colors">How It Works</a>
              <a href="/examples" className="text-gray-400 hover:text-white transition-colors">Examples</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

