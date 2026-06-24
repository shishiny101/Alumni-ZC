import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { BookOpen, Globe, Award, Handshake } from 'lucide-react';

const PILLARS = [
  { icon: BookOpen, label: 'World-Class Education', desc: 'Trained under Nobel laureates and global faculty.' },
  { icon: Globe, label: 'Global Network', desc: 'Alumni across 50+ countries driving innovation.' },
  { icon: Award, label: 'Research Excellence', desc: 'Hundreds of peer-reviewed publications.' },
  { icon: Handshake, label: 'Industry Impact', desc: 'Leaders in science, tech, medicine, and business.' },
];

export default function About() {
  const { ref, visible } = useScrollAnimation();

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`grid lg:grid-cols-2 gap-12 items-center transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Text */}
          <div>
            <div className="section-heading mb-6">About Alumni</div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-5">
              A Community Built on{' '}
              <span className="text-zc-teal">Science & Purpose</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-4">
              The Zewail City Alumni Network connects graduates of Egypt's premier institution
              for science, technology, and innovation. Founded in honor of Nobel Laureate
              Dr. Ahmed Zewail, our community bridges generations of scientists, engineers,
              researchers, and entrepreneurs.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              From the labs of ZC to boardrooms and research centers worldwide, our alumni
              carry the spirit of discovery that defines Zewail City — shaping a better future
              for Egypt and the global scientific community.
            </p>
            <div className="flex items-center gap-4">
              <div className="h-12 w-1 bg-zc-teal rounded-full" />
              <blockquote className="text-gray-700 italic text-base">
                "Science is not a luxury; it is a necessity." — Dr. Ahmed Zewail
              </blockquote>
            </div>
          </div>

          {/* Image + pillars */}
          <div className="space-y-6">
            <div className="relative rounded-2xl overflow-hidden h-64 shadow-xl">
              <img
                src="https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&dpr=1"
                alt="ZC Graduates"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zc-teal/60 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <div className="text-2xl font-bold">Class of 2024</div>
                <div className="text-sm text-white/80">Zewail City Graduates</div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {PILLARS.map(({ icon: Icon, label, desc }) => (
                <div
                  key={label}
                  className="bg-zc-gray rounded-xl p-4 hover:bg-zc-teal-light transition-colors duration-200 group"
                >
                  <Icon className="w-6 h-6 text-zc-teal mb-2 group-hover:scale-110 transition-transform" />
                  <div className="font-semibold text-gray-800 text-sm mb-1">{label}</div>
                  <div className="text-gray-500 text-xs leading-relaxed">{desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
