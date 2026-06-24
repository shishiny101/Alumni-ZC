import { Mountain, Facebook, Instagram, Linkedin, Youtube, Twitter } from 'lucide-react';

const FOOTER_LINKS = {
  'About ZC': [
    'The City Overview',
    "Founder's Statement",
    'ZC Tour',
    'City Structure',
    'Give to ZC',
    'Careers at ZC',
    'Contact Us',
  ],
  Students: [
    'Student Life',
    'Career Center',
    'Student Clubs',
    'Alumni',
    'UST Admission',
    'Scholarships',
  ],
  Academics: [
    'Academic Calendar',
    'UST Schools',
    'Undergraduate Studies',
    'Graduate Programs',
    'Tuition & Scholarships',
    'Admission',
  ],
};

const SOCIAL = [
  { icon: Facebook, label: 'Facebook' },
  { icon: Instagram, label: 'Instagram' },
  { icon: Linkedin, label: 'LinkedIn' },
  { icon: Youtube, label: 'YouTube' },
  { icon: Twitter, label: 'Twitter' },
];

export default function Footer() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-zc-dark-2 text-white">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div>
            <div className="flex flex-col items-start gap-4 mb-6">
              <div className="w-20 h-20 rounded-full border-2 border-white/30 flex items-center justify-center bg-white/5">
                <Mountain className="w-10 h-10 text-white" strokeWidth={1.2} />
              </div>
              <div className="text-lg font-bold tracking-widest text-white uppercase">
                Zewail City
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Ahmed Zewail Road, October Gardens,<br />
              6th of October City, Giza, Egypt
            </p>
            <div className="flex gap-3">
              {SOCIAL.map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-9 h-9 rounded-full border border-white/25 flex items-center justify-center text-white/60 hover:text-white hover:border-white hover:bg-white/10 transition-all duration-200"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(FOOTER_LINKS).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="font-bold text-white text-base mb-4 pb-3 border-b border-white/15">
                {heading}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-400 text-sm hover:text-white transition-colors duration-150 hover:pl-1 block"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Zewail City Alumni. All rights reserved.
          </p>
          <div className="flex gap-6">
            {['#home', '#about', '#benefits', '#news', '#stories', '#contact'].map((href) => {
              const labels: Record<string, string> = {
                '#home': 'Home',
                '#about': 'About',
                '#benefits': 'Benefits',
                '#news': 'News',
                '#stories': 'Stories',
                '#contact': 'Contact',
              };
              return (
                <a
                  key={href}
                  href={href}
                  onClick={(e) => { e.preventDefault(); scrollTo(href); }}
                  className="text-gray-500 text-xs hover:text-white transition-colors"
                >
                  {labels[href]}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
