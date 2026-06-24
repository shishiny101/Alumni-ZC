import { Quote, Linkedin, ExternalLink } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const ALUMNI = [
  {
    name: 'Dr. Nour El-Sherif',
    class: 'Class of 2014',
    role: 'Principal Scientist, MIT Lincoln Laboratory',
    field: 'Photonics & Laser Systems',
    image: 'https://images.pexels.com/photos/3727464/pexels-photo-3727464.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1',
    quote:
      'ZC gave me the intellectual foundation to compete with the best in the world. The culture of curiosity here is unmatched anywhere I have worked.',
    achievement: 'Published 30+ peer-reviewed papers in Nature and Science journals.',
  },
  {
    name: 'Eng. Karim Mansour',
    class: 'Class of 2016',
    role: 'Co-Founder & CTO, HealthAI Egypt',
    field: 'Biomedical Engineering & AI',
    image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1',
    quote:
      "The interdisciplinary spirit at Zewail City is what led me to bridge medicine with machine learning — and build a company that is changing diagnostics in Egypt.",
    achievement: 'Raised $8M in Series A funding; deployed AI diagnostics in 40+ hospitals.',
  },
  {
    name: 'Dr. Sara Abdelfattah',
    class: 'Class of 2015',
    role: 'Research Lead, Pfizer Global R&D',
    field: 'Pharmaceutical Chemistry',
    image: 'https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1',
    quote:
      "From ZC labs to global pharma research — every experiment I ran as an undergrad prepared me for the challenges I face every day at a world-leading company.",
    achievement: 'Led development of 3 drug candidates now in Phase II clinical trials.',
  },
];

export default function SuccessStories() {
  const { ref, visible } = useScrollAnimation();

  return (
    <section id="stories" className="py-20 bg-zc-gray relative overflow-hidden">
      {/* decorative bg element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-zc-teal/5 rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-zc-teal/5 rounded-full translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="h-0.5 w-10 bg-zc-teal" />
            <span className="text-zc-teal font-semibold text-sm uppercase tracking-widest">Our Alumni</span>
            <div className="h-0.5 w-10 bg-zc-teal" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Alumni <span className="text-zc-teal">Success Stories</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Meet some of the remarkable graduates who are making their mark on science,
            technology, and innovation around the world.
          </p>
        </div>

        <div
          ref={ref}
          className={`grid md:grid-cols-3 gap-8 transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {ALUMNI.map((person, idx) => (
            <div
              key={person.name}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group"
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              {/* Image area */}
              <div className="relative h-56 overflow-hidden bg-gray-100">
                <img
                  src={person.image}
                  alt={person.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="bg-zc-teal text-white text-xs font-semibold px-3 py-1 rounded-full inline-block mb-1">
                    {person.field}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg leading-tight">{person.name}</h3>
                    <p className="text-zc-teal text-sm font-medium">{person.class}</p>
                  </div>
                  <Linkedin className="w-5 h-5 text-gray-400 hover:text-zc-teal cursor-pointer transition-colors shrink-0 mt-1" />
                </div>
                <p className="text-gray-600 text-sm font-medium mb-4">{person.role}</p>

                {/* Quote */}
                <div className="relative bg-zc-gray rounded-xl p-4 mb-4">
                  <Quote className="w-5 h-5 text-zc-teal/30 absolute top-3 left-3" />
                  <p className="text-gray-600 text-sm leading-relaxed pl-5 italic">
                    "{person.quote}"
                  </p>
                </div>

                {/* Achievement */}
                <div className="flex items-start gap-2">
                  <ExternalLink className="w-4 h-4 text-zc-red shrink-0 mt-0.5" />
                  <p className="text-gray-500 text-xs leading-relaxed">{person.achievement}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
