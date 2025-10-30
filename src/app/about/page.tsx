import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About IdeaChecker',
  description: 'Learn about IdeaChecker, an AI-powered tool that validates business ideas instantly. Discover our mission, how we help entrepreneurs, and our commitment to honest feedback.',
  keywords: 'About IdeaChecker, business idea validation, startup validation tool, AI entrepreneurship',
};

export default function AboutPage() {
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
            <a href="/about" className="text-white font-medium">About</a>
            <a href="/how-it-works" className="text-gray-300 hover:text-white transition-colors">How It Works</a>
            <a href="/examples" className="text-gray-300 hover:text-white transition-colors">Examples</a>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-12 md:py-20 max-w-4xl">
        <div className="mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
            About IdeaChecker
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed">
            Empowering entrepreneurs with instant, honest feedback on their business ideas
          </p>
        </div>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4 text-white">Our Mission</h2>
          <p className="text-lg text-gray-300 leading-relaxed mb-4">
            IdeaChecker was born from a simple observation: too many brilliant entrepreneurs waste time and money on ideas that haven't been properly validated. We believe that every business idea deserves honest, objective feedback—before you invest your life savings or quit your day job.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed">
            Our mission is to democratize business validation by providing instant, AI-powered analysis that cuts through the noise and gives you the truth about your concept's potential. No fluff. No sugar-coating. Just actionable insights that help you make informed decisions.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4 text-white">How It Works</h2>
          <div className="space-y-6">
            <div className="bg-backgroundSecondary border border-gray-700 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-2 text-purple-400">1. Submit Your Idea</h3>
              <p className="text-gray-300">
                Describe your business concept in detail—what problem you're solving, your target customers, and the solution you're proposing. Be specific and honest.
              </p>
            </div>
            <div className="bg-backgroundSecondary border border-gray-700 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-2 text-purple-400">2. AI Analysis</h3>
              <p className="text-gray-300">
                Our advanced AI (powered by GPT-4) analyzes your idea across multiple dimensions: market opportunity, competition, execution difficulty, and potential for success.
              </p>
            </div>
            <div className="bg-backgroundSecondary border border-gray-700 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-2 text-purple-400">3. Get Instant Feedback</h3>
              <p className="text-gray-300">
                Receive a comprehensive analysis with a clear score, honest assessment, and actionable insights—all in under 30 seconds. No waiting around for feedback.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4 text-white">Why We Built This</h2>
          <p className="text-lg text-gray-300 leading-relaxed mb-4">
            As entrepreneurs ourselves, we've experienced the frustration of spending months on ideas that ultimately weren't viable. We've watched friends drain their savings on concepts that should have been validated first. And we've seen too many great ideas die because founders couldn't get honest feedback from those around them.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed">
            IdeaChecker exists to change that. We leverage cutting-edge AI to provide unbiased validation that considers market dynamics, competition, and feasibility—factors that friends and family often overlook. Our goal is to help you make better decisions faster, whether that means pivoting early or doubling down on a strong concept.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4 text-white">What Makes Us Different</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-backgroundSecondary border border-gray-700 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3 text-white">Honesty First</h3>
              <p className="text-gray-300">
                We don't sugar-coat. If your idea needs work, we'll tell you. If it's not viable, we'll explain why. Honest feedback saves time and money.
              </p>
            </div>
            <div className="bg-backgroundSecondary border border-gray-700 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3 text-white">Lightning Fast</h3>
              <p className="text-gray-300">
                Get comprehensive validation in under 30 seconds. No waiting for appointments or expert reviews. Instant insights when you need them.
              </p>
            </div>
            <div className="bg-backgroundSecondary border border-gray-700 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3 text-white">Powered by AI</h3>
              <p className="text-gray-300">
                Advanced GPT-4 technology analyzes thousands of data points to give you insights based on real business patterns and market dynamics.
              </p>
            </div>
            <div className="bg-backgroundSecondary border border-gray-700 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3 text-white">Completely Free</h3>
              <p className="text-gray-300">
                Access our validation tool without cost or credit card. We believe every entrepreneur deserves access to quality validation resources.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4 text-white">Who We Help</h2>
          <p className="text-lg text-gray-300 leading-relaxed mb-4">
            IdeaChecker is designed for anyone with a business idea, whether you're:
          </p>
          <ul className="space-y-3 text-lg text-gray-300">
            <li className="flex items-start gap-3">
              <span className="text-purple-400 mt-1">✓</span>
              <span>A first-time entrepreneur testing your first concept</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-purple-400 mt-1">✓</span>
              <span>An experienced founder exploring a pivot or new direction</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-purple-400 mt-1">✓</span>
              <span>A student or side-hustler validating a side project</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-purple-400 mt-1">✓</span>
              <span>An investor researching market opportunities</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-purple-400 mt-1">✓</span>
              <span>Anyone who wants honest, objective feedback on their idea</span>
            </li>
          </ul>
        </section>

        <div className="mt-16 p-8 bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-pink-500/10 border border-purple-500/30 rounded-2xl text-center">
          <h3 className="text-2xl font-bold mb-4 text-white">Ready to Validate Your Idea?</h3>
          <p className="text-gray-300 mb-6">
            Get instant, honest feedback on your business concept in under 30 seconds
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

