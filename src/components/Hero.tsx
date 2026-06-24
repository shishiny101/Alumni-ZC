import { ChevronRight, Users } from 'lucide-react';
import { useEffect, useRef } from 'react';

export default function Hero() {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = textRef.current;
    if (!el) return;
    const timer = setTimeout(() => el.classList.add('visible'), 100);
    return () => clearTimeout(timer);
  }, []);

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1"
          alt="Zewail City Campus"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
      </div>

      {/* Diagonal bottom shape */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-white" style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)' }} />
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none">
        <svg viewBox="0 0 1440 80" className="w-full" preserveAspectRatio="none" height="80">
          <path d="M0,80 L0,40 Q360,0 720,40 Q1080,80 1440,40 L1440,80 Z" fill="white" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-32">
        <div
          ref={textRef}
          className="animate-on-scroll max-w-2xl"
        >
          <div className="flex items-center gap-2 mb-4">
            <div className="h-0.5 w-10 bg-zc-teal" />
            <span className="text-zc-teal font-semibold text-sm uppercase tracking-widest">
              Zewail City Alumni Network
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
            Where Science
            <span className="block text-zc-teal">Meets Legacy</span>
          </h1>

          <p className="text-gray-200 text-lg md:text-xl leading-relaxed mb-8 max-w-xl">
            Join a thriving community of ZC graduates shaping Egypt's future in science,
            technology, and innovation. Reconnect, grow, and give back.
          </p>

          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => scrollTo('#contact')}
              className="btn-teal text-base px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-zc-teal/30"
            >
              Join the Network
              <ChevronRight className="w-5 h-5" />
            </button>
            <button
              onClick={() => scrollTo('#about')}
              className="inline-flex items-center gap-2 border-2 border-white text-white font-semibold px-8 py-3 rounded-full hover:bg-white hover:text-gray-900 transition-all duration-200 text-base"
            >
              <Users className="w-5 h-5" />
              Learn More
            </button>
          </div>
        </div>

        {/* Stats bar */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl">
          {[
            { value: '5,000+', label: 'Alumni Members' },
            { value: '50+', label: 'Countries' },
            { value: '200+', label: 'Research Papers' },
            { value: '15+', label: 'Graduating Classes' },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4 text-center"
            >
              <div className="text-zc-teal font-bold text-2xl md:text-3xl">{stat.value}</div>
              <div className="text-gray-300 text-xs mt-1 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
