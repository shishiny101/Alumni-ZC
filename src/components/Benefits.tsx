import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Briefcase, BookOpen, Users, Trophy, Wifi, HeartHandshake, GraduationCap, Building2 } from 'lucide-react';

const BENEFITS = [
  {
    icon: Briefcase,
    title: 'Career Center Access',
    desc: "Exclusive job board, career coaching, and connections to ZC's industry partners across Egypt and the MENA region.",
    color: 'text-zc-teal bg-zc-teal-light',
  },
  {
    icon: Users,
    title: 'Global Alumni Network',
    desc: 'Connect with thousands of fellow graduates in tech, research, medicine, and business spanning 50+ countries.',
    color: 'text-blue-600 bg-blue-50',
  },
  {
    icon: BookOpen,
    title: 'Continuing Education',
    desc: 'Access to ZC library resources, online courses, and discounted enrollment in short-term programs.',
    color: 'text-green-600 bg-green-50',
  },
  {
    icon: Trophy,
    title: 'Alumni Awards',
    desc: 'Annual recognition of outstanding alumni achievements in research, entrepreneurship, and community impact.',
    color: 'text-amber-600 bg-amber-50',
  },
  {
    icon: Wifi,
    title: 'Digital Community',
    desc: 'Exclusive alumni portal, newsletters, webinars, and virtual meetups with faculty and industry leaders.',
    color: 'text-purple-600 bg-purple-50',
  },
  {
    icon: HeartHandshake,
    title: 'Mentorship Program',
    desc: 'Give back by mentoring current ZC students or find guidance from senior alumni in your field.',
    color: 'text-rose-600 bg-rose-50',
  },
  {
    icon: GraduationCap,
    title: 'Scholarship Fund',
    desc: 'Alumni-funded scholarships supporting the next generation of ZC scientists and innovators.',
    color: 'text-teal-600 bg-teal-50',
  },
  {
    icon: Building2,
    title: 'Campus Access',
    desc: 'Alumni ID cards granting access to campus facilities, events, and the iconic ZC auditorium.',
    color: 'text-orange-600 bg-orange-50',
  },
];

export default function Benefits() {
  const { ref, visible } = useScrollAnimation();

  return (
    <section id="benefits" className="py-20 bg-zc-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="h-0.5 w-10 bg-zc-teal" />
            <span className="text-zc-teal font-semibold text-sm uppercase tracking-widest">What We Offer</span>
            <div className="h-0.5 w-10 bg-zc-teal" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Alumni <span className="text-zc-teal">Benefits & Services</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Being a ZC alumnus comes with a lifetime of opportunities. Explore the services
            and benefits designed to support your career and keep you connected to your alma mater.
          </p>
        </div>

        <div
          ref={ref}
          className={`grid sm:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {BENEFITS.map((benefit, idx) => {
            const Icon = benefit.icon;
            return (
              <div
                key={benefit.title}
                className="card p-6 group cursor-default"
                style={{ transitionDelay: `${idx * 60}ms` }}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${benefit.color} group-hover:scale-110 transition-transform duration-200`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-gray-900 text-base mb-2">{benefit.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{benefit.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
