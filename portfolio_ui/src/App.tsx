import React from 'react';
import { Code2, Mail, Github, Linkedin, ExternalLink, Brain, Blocks } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-900 dark:text-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm z-50 shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <span className="text-xl font-bold gradient-text">dev</span>
          <div className="flex gap-6">
            <a href="#projects" className="hover:text-purple-600 transition-colors">Projects</a>
            <a href="#contact" className="hover:text-purple-600 transition-colors">Contact</a>
            <div className="flex gap-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5 hover:text-purple-600 transition-colors" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5 hover:text-purple-600 transition-colors" />
              </a>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-6xl font-bold mb-6">
            Hey, I'm <span className="gradient-text">[Your Name]</span>
          </h1>
          <p className="text-xl text-zinc-600 dark:text-zinc-300 max-w-2xl mb-8">
            I craft digital experiences through code. Specializing in machine learning,
            React development, and blockchain solutions.
          </p>
          <div className="flex gap-4">
            <a
              href="#contact"
              className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors inline-flex items-center gap-2"
            >
              <Mail className="w-4 h-4" />
              Get in touch
            </a>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section bg-white dark:bg-zinc-800 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-zinc-50 dark:bg-zinc-900 p-8 rounded-xl shadow-sm card-hover">
              <Brain className="w-10 h-10 mb-4 text-purple-600" />
              <h3 className="text-xl font-bold mb-3">ML Analytics Platform</h3>
              <p className="text-zinc-600 dark:text-zinc-300 mb-4">
                A machine learning model for predictive analytics, processing real-time data streams.
              </p>
              <div className="flex gap-2 mb-6">
                <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-sm">Python</span>
                <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-sm">TensorFlow</span>
              </div>
              <a href="#" className="inline-flex items-center text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300">
                View Project <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </div>

            <div className="bg-zinc-50 dark:bg-zinc-900 p-8 rounded-xl shadow-sm card-hover">
              <Blocks className="w-10 h-10 mb-4 text-purple-600" />
              <h3 className="text-xl font-bold mb-3">Solana DeFi Protocol</h3>
              <p className="text-zinc-600 dark:text-zinc-300 mb-4">
                Decentralized finance protocol built on Solana, enabling fast and secure transactions.
              </p>
              <div className="flex gap-2 mb-6">
                <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-sm">Rust</span>
                <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-sm">Solana</span>
              </div>
              <a href="#" className="inline-flex items-center text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300">
                View Project <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </div>

            <div className="bg-zinc-50 dark:bg-zinc-900 p-8 rounded-xl shadow-sm card-hover">
              <Code2 className="w-10 h-10 mb-4 text-purple-600" />
              <h3 className="text-xl font-bold mb-3">Real-time Dashboard</h3>
              <p className="text-zinc-600 dark:text-zinc-300 mb-4">
                Modern dashboard with real-time data visualization and analytics features.
              </p>
              <div className="flex gap-2 mb-6">
                <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-sm">React</span>
                <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-sm">TypeScript</span>
              </div>
              <a href="#" className="inline-flex items-center text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300">
                View Project <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section px-4">
        <div className="max-w-7xl mx-auto flex justify-center">
          <div className="w-full max-w-2xl">
            <h2 className="text-3xl font-bold mb-12 text-center">Get in Touch</h2>
            <div className="bg-white dark:bg-zinc-800 p-8 rounded-xl shadow-sm">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2" htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full p-3 border border-zinc-200 dark:border-zinc-700 dark:bg-zinc-900 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2" htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full p-3 border border-zinc-200 dark:border-zinc-700 dark:bg-zinc-900 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2" htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full p-3 border border-zinc-200 dark:border-zinc-700 dark:bg-zinc-900 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors flex items-center justify-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;