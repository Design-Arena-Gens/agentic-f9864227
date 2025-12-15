'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="relative">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute w-96 h-96 bg-prism/10 rounded-full blur-3xl -top-48 -left-48 animate-pulse-slow"
            style={{ transform: `translateY(${scrollY * 0.3}px)` }}
          />
          <div
            className="absolute w-96 h-96 bg-neon/10 rounded-full blur-3xl top-1/3 -right-48 animate-pulse-slow"
            style={{ transform: `translateY(${scrollY * 0.2}px)` }}
          />
          <div
            className="absolute w-96 h-96 bg-cyan/10 rounded-full blur-3xl bottom-0 left-1/3 animate-pulse-slow"
            style={{ transform: `translateY(${scrollY * 0.4}px)` }}
          />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 border border-white/10">
            <span className="w-2 h-2 bg-cyan rounded-full animate-pulse"></span>
            <span className="text-sm text-zinc-400 font-medium tracking-wide">AI-POWERED PHOTO INTELLIGENCE</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-7xl md:text-8xl lg:text-9xl font-black mb-6 tracking-tighter leading-none">
            <span className="block text-white">Share Your</span>
            <span className="block bg-gradient-to-r from-prism via-neon to-cyan bg-clip-text text-transparent animate-float">
              Moments
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-zinc-400 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
            Prism uses advanced AI to organize, enhance, and share your photos intelligently.
            Privacy-first. Face recognition. Automatic curation.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button className="group relative px-8 py-4 bg-prism text-void rounded-full font-bold text-lg hover:scale-105 transition-transform duration-200 shadow-lg shadow-prism/20">
              Get Early Access
              <span className="ml-2 inline-block group-hover:translate-x-1 transition-transform">→</span>
            </button>
            <button className="px-8 py-4 glass rounded-full font-semibold text-lg border border-white/10 hover:border-white/30 transition-colors duration-200">
              Watch Demo
            </button>
          </div>

          {/* Hero Visual - Mock Phone/Grid */}
          <div className="relative max-w-5xl mx-auto mt-20">
            <div className="glass rounded-3xl p-8 border border-white/10">
              <div className="grid grid-cols-3 gap-4">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div
                    key={i}
                    className="aspect-square bg-gradient-to-br from-surface to-void rounded-2xl relative overflow-hidden group cursor-pointer"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-prism/20 via-neon/20 to-cyan/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute top-2 right-2 w-8 h-8 rounded-full bg-neon/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <svg className="w-4 h-4 text-void" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                        <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/>
                      </svg>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black mb-6 tracking-tight">
              Built for the <span className="text-prism">Future</span>
            </h2>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
              Cutting-edge AI meets intuitive design. Your photos, elevated.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Feature 1 */}
            <div className="glass rounded-3xl p-8 border border-white/10 hover:border-prism/30 transition-all duration-300 group">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan/20 to-cyan/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">AI Auto-Curation</h3>
              <p className="text-zinc-400 leading-relaxed">
                Machine learning automatically organizes your library by faces, places, and moments that matter.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="glass rounded-3xl p-8 border border-white/10 hover:border-neon/30 transition-all duration-300 group">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-neon/20 to-neon/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-neon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Face ID Recognition</h3>
              <p className="text-zinc-400 leading-relaxed">
                Secure, on-device facial recognition groups photos by the people you care about most.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="glass rounded-3xl p-8 border border-white/10 hover:border-prism/30 transition-all duration-300 group">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-prism/20 to-prism/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-prism" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Privacy First</h3>
              <p className="text-zinc-400 leading-relaxed">
                End-to-end encryption. Zero-knowledge architecture. Your memories belong to you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Specs Section */}
      <section className="py-32 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <div className="glass rounded-3xl p-12 md:p-16 border border-white/10">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-5xl md:text-6xl font-black mb-6 tracking-tight">
                  Powered by <span className="text-cyan">Neural Vision</span>
                </h2>
                <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
                  Our proprietary AI engine processes millions of visual patterns per second,
                  delivering instant insights and intelligent organization.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-cyan rounded-full"></div>
                    <span className="text-zinc-300">Real-time scene detection</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-neon rounded-full"></div>
                    <span className="text-zinc-300">Multi-face tracking</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-prism rounded-full"></div>
                    <span className="text-zinc-300">Context-aware grouping</span>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="aspect-square rounded-3xl bg-gradient-to-br from-surface to-void border border-white/10 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-48 h-48 rounded-full border-4 border-cyan/30 animate-pulse">
                      <div className="w-full h-full rounded-full border-4 border-neon/30 animate-pulse" style={{ animationDelay: '0.5s' }}>
                        <div className="w-full h-full rounded-full border-4 border-prism/30 animate-pulse" style={{ animationDelay: '1s' }}></div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-void via-transparent to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-zinc-500 uppercase tracking-widest text-sm mb-8">Trusted by innovators</p>
            <div className="flex flex-wrap justify-center items-center gap-12 opacity-40">
              {['TECHCRUNCH', 'WIRED', 'VERGE', 'PRODUCTHUNT'].map((brand) => (
                <span key={brand} className="text-2xl font-black text-zinc-600">{brand}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-prism/5 to-transparent"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-6xl md:text-7xl font-black mb-8 tracking-tight">
            Ready to <span className="text-prism">Transform</span> Your Photos?
          </h2>
          <p className="text-xl text-zinc-400 mb-12 max-w-2xl mx-auto">
            Join the waitlist and be among the first to experience the future of photo sharing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <input
              type="email"
              placeholder="your@email.com"
              className="w-full sm:w-96 px-6 py-4 rounded-full bg-surface border border-white/10 text-white placeholder-zinc-600 focus:outline-none focus:border-prism/50 transition-colors"
            />
            <button className="px-8 py-4 bg-prism text-void rounded-full font-bold hover:scale-105 transition-transform duration-200 shadow-lg shadow-prism/20 whitespace-nowrap">
              Join Waitlist
            </button>
          </div>
          <p className="text-sm text-zinc-600 mt-6">No spam. Early access only. Unsubscribe anytime.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-4 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div>
              <h3 className="text-3xl font-black bg-gradient-to-r from-prism to-cyan bg-clip-text text-transparent">
                PRISM
              </h3>
              <p className="text-zinc-600 text-sm mt-2">© 2024 Prism Inc. All rights reserved.</p>
            </div>
            <div className="flex gap-8">
              <a href="#" className="text-zinc-400 hover:text-prism transition-colors">Privacy</a>
              <a href="#" className="text-zinc-400 hover:text-prism transition-colors">Terms</a>
              <a href="#" className="text-zinc-400 hover:text-prism transition-colors">Contact</a>
              <a href="#" className="text-zinc-400 hover:text-prism transition-colors">Careers</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
