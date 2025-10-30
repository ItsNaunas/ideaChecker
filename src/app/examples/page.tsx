import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Example Validations',
  description: 'See real examples of how IdeaChecker validates business ideas. Explore different validation scenarios and learn from actual AI analyses of startup concepts.',
  keywords: 'idea checker examples, business validation examples, startup idea examples, idea analyzer examples',
};

export default function ExamplesPage() {
  const examples = [
    {
      idea: 'AI-powered meal planning app that generates recipes based on what\'s in your fridge',
      score: 8.5,
      status: 'Strong',
      statusColor: 'green',
      highlight: 'High market demand with clear utility',
      description: 'This concept addresses a common problem with a practical solution, strong market fit, and clear monetization potential through subscriptions or partnerships with grocery stores.',
    },
    {
      idea: 'Monthly subscription box delivering artisanal coffee from different countries',
      score: 6.2,
      status: 'Moderate',
      statusColor: 'yellow',
      highlight: 'Saturated market with growth potential',
      description: 'While the coffee subscription market is competitive, unique sourcing and curation can differentiate. Success depends on quality, pricing, and marketing execution.',
    },
    {
      idea: 'B2B SaaS platform for small businesses to manage inventory and suppliers',
      score: 9.0,
      status: 'Strong',
      statusColor: 'green',
      highlight: 'Significant market opportunity',
      description: 'Clear value proposition with high demand in underserved small business market. Strong potential for recurring revenue through SaaS model.',
    },
    {
      idea: 'Social media app for pet owners to connect and arrange playdates',
      score: 4.3,
      status: 'Moderate',
      statusColor: 'yellow',
      highlight: 'Challenging network effects',
      description: 'Cute concept but faces significant hurdles with user acquisition and monetization. Network effects are hard to build, and competition from established platforms is fierce.',
    },
    {
      idea: 'Delivery service for fresh, local produce to urban apartments',
      score: 7.8,
      status: 'Strong',
      statusColor: 'green',
      highlight: 'Growing trend with clear customer base',
      description: 'Tap into rising health and sustainability trends. Strong potential with proper logistics and local farm partnerships. Urban demographic has purchasing power.',
    },
    {
      idea: 'Blockchain-based social network for privacy-conscious users',
      score: 3.1,
      status: 'Weak',
      statusColor: 'red',
      highlight: 'Limited market appeal and high execution complexity',
      description: 'While privacy is a concern, most users don\'t prioritize it enough to switch platforms. Blockchain adds complexity without clear benefits. Network effects extremely difficult to achieve.',
    },
    {
      idea: 'Online marketplace connecting freelance designers with small business clients',
      score: 7.2,
      status: 'Strong',
      statusColor: 'green',
      highlight: 'Proven market with clear value proposition',
      description: 'Two-sided marketplace with existing demand. Success depends on quality curation, pricing, and building trust between both sides. Monetization through commission model.',
    },
    {
      idea: 'App that gamifies fitness by turning workouts into quests and battles',
      score: 5.7,
      status: 'Moderate',
      statusColor: 'yellow',
      highlight: 'Engagement challenges in saturated market',
      description: 'Interesting concept but faces strong competition from established fitness apps. User retention is the key challenge. Needs significant differentiation and marketing budget.',
    },
  ];

  return (
    <div className="min-h-screen bg-background text-text">
      {/* Navigation */}
      <nav className="border-b border-gray-700 bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 max-w-6xl flex items-center justify-between">
          <a href="/" className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            IdeaChecker
          </a>
          <div className="flex gap-6">
            <a href="/" className="text-gray-300 hover:text-white transition-colors">Home</a>
            <a href="/about" className="text-gray-300 hover:text-white transition-colors">About</a>
            <a href="/how-it-works" className="text-gray-300 hover:text-white transition-colors">How It Works</a>
            <a href="/examples" className="text-white font-medium">Examples</a>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-12 md:py-20 max-w-6xl">
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
            Example Validations
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed max-w-3xl mx-auto">
            See how IdeaChecker analyzes real business ideas and provides actionable feedback
          </p>
        </div>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center text-white">How to Read These Examples</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <article className="bg-green-500/10 border border-green-500/50 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3 text-green-400">Strong (7-10)</h3>
              <p className="text-gray-300">
                Ideas with significant potential, strong market fit, and feasible execution. Worth pursuing seriously.
              </p>
            </article>
            <article className="bg-yellow-500/10 border border-yellow-500/50 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3 text-yellow-400">Moderate (4-6)</h3>
              <p className="text-gray-300">
                Ideas with potential but need refinement. Address challenges or consider pivoting to strengthen the concept.
              </p>
            </article>
            <article className="bg-red-500/10 border border-red-500/50 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3 text-red-400">Weak (0-3)</h3>
              <p className="text-gray-300">
                Ideas facing significant challenges. Major refinement or complete pivot necessary before pursuing.
              </p>
            </article>
          </div>
        </section>

        <section className="grid md:grid-cols-2 gap-8 mb-16">
          {examples.map((example, idx) => (
            <article
              key={idx}
              className="bg-backgroundSecondary border border-gray-700 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`px-4 py-2 rounded-lg font-bold ${
                  example.statusColor === 'green' ? 'bg-green-500/20 text-green-400 border border-green-500/50' :
                  example.statusColor === 'yellow' ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/50' :
                  'bg-red-500/20 text-red-400 border border-red-500/50'
                }`}>
                  {example.status}
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-white">{example.score.toFixed(1)}</div>
                  <div className="text-sm text-gray-400">out of 10</div>
                </div>
              </div>

              <h3 className="text-xl font-bold mb-3 text-white">{example.idea}</h3>

              <div className="mb-4">
                <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                  <div
                    className={`h-full rounded-full ${
                      example.statusColor === 'green' ? 'bg-gradient-to-r from-green-500 to-green-400' :
                      example.statusColor === 'yellow' ? 'bg-gradient-to-r from-yellow-500 to-yellow-400' :
                      'bg-gradient-to-r from-red-500 to-red-400'
                    }`}
                    style={{ width: `${(example.score / 10) * 100}%` }}
                  />
                </div>
              </div>

              <div className="mb-4 p-3 bg-gray-800/50 rounded-lg border border-gray-700">
                <p className="text-sm text-gray-400 mb-1">Key Insight</p>
                <p className="text-purple-300 font-medium">{example.highlight}</p>
              </div>

              <p className="text-gray-300 leading-relaxed">
                {example.description}
              </p>
            </article>
          ))}
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-white">Key Takeaways</h2>
          <div className="space-y-6 max-w-4xl mx-auto">
            <div className="bg-backgroundSecondary border border-gray-700 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3 text-white flex items-center gap-3">
                <span className="text-purple-400">1.</span>
                <span>Strong Ideas Solve Real Problems</span>
              </h3>
              <p className="text-gray-300">
                The highest-scoring examples address genuine pain points with clear, practical solutions. Focus on problems people actively experience and are willing to pay to solve.
              </p>
            </div>
            <div className="bg-backgroundSecondary border border-gray-700 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3 text-white flex items-center gap-3">
                <span className="text-purple-400">2.</span>
                <span>Market Size Matters</span>
              </h3>
              <p className="text-gray-300">
                Ideas targeting large or growing markets score higher. Evaluate whether enough people need your solution to build a sustainable business.
              </p>
            </div>
            <div className="bg-backgroundSecondary border border-gray-700 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3 text-white flex items-center gap-3">
                <span className="text-purple-400">3.</span>
                <span>Execution Complexity Counts</span>
              </h3>
              <p className="text-gray-300">
                Feasibility is crucial. The most innovative ideas can fail if they're too complex to execute. Balance ambition with practicality.
              </p>
            </div>
            <div className="bg-backgroundSecondary border border-gray-700 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3 text-white flex items-center gap-3">
                <span className="text-purple-400">4.</span>
                <span>Competition Isn't Always Bad</span>
              </h3>
              <p className="text-gray-300">
                A saturated market can indicate strong demand. The key is differentiation. Look at examples like the coffee subscription to understand how to stand out.
              </p>
            </div>
            <div className="bg-backgroundSecondary border border-gray-700 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3 text-white flex items-center gap-3">
                <span className="text-purple-400">5.</span>
                <span>Network Effects Are Hard</span>
              </h3>
              <p className="text-gray-300">
                Social apps and marketplaces face the "chicken and egg" problem. Examples show they need significant investment in user acquisition before becoming viable.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <div className="bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-pink-500/10 border border-purple-500/30 rounded-2xl p-8 text-center">
            <h2 className="text-3xl font-bold mb-6 text-white">Learn from These Examples</h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              These examples demonstrate how IdeaChecker evaluates ideas across multiple dimensions. Use them to understand what makes ideas viable and how to improve your own concept.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/"
                className="inline-block px-8 py-4 bg-white text-black rounded-xl font-semibold hover:bg-gray-100 hover:scale-105 transition-all duration-300"
              >
                Validate Your Idea →
              </a>
              <a
                href="/how-it-works"
                className="inline-block px-8 py-4 bg-backgroundSecondary border border-gray-600 text-white rounded-xl font-semibold hover:bg-gray-700 hover:scale-105 transition-all duration-300"
              >
                Learn How It Works →
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="mt-16 pt-8 border-t border-gray-700">
        <div className="container mx-auto px-4 max-w-6xl">
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

