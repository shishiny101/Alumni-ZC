import { useState, useEffect } from 'react';
import { Menu, X, Mountain, ChevronRight } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Benefits', href: '#benefits' },
  { label: 'News & Events', href: '#news' },
  { label: 'Success Stories', href: '#stories' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-white/95 backdrop-blur-sm py-3'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            className="flex items-center gap-3 group"
            onClick={(e) => { e.preventDefault(); handleNavClick('#home'); }}
          >
            <div className="relative">
              <div className="w-10 h-10 rounded-full border-2 border-zc-teal flex items-center justify-center bg-white">
                <Mountain className="w-5 h-5 text-zc-teal" strokeWidth={1.5} />
              </div>
            </div>
            <div className="leading-tight">
              <div className="text-zc-teal font-bold text-xl tracking-wide">ZC</div>
              <div className="text-gray-500 text-[10px] font-medium uppercase tracking-widest -mt-0.5 hidden sm:block">
                Alumni
              </div>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-zc-teal transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-zc-teal transition-all duration-200 group-hover:w-3/4" />
              </a>
            ))}
          </nav>

          {/* CTA + Menu */}
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }}
              className="hidden md:inline-flex btn-teal text-sm py-2 px-5 rounded"
            >
              JOIN NOW
              <ChevronRight className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden p-2 rounded text-gray-600 hover:text-zc-teal transition-colors"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? 'max-h-96 border-t border-gray-100' : 'max-h-0'
        }`}
      >
        <nav className="bg-white px-4 py-2 flex flex-col gap-1">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
              className="py-3 px-2 text-sm font-medium text-gray-600 hover:text-zc-teal border-b border-gray-50 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }}
            className="mt-2 mb-3 btn-teal text-sm justify-center rounded"
          >
            JOIN NOW
          </a>
        </nav>
      </div>
    </header>
  );
}
