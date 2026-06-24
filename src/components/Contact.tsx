import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Youtube, Twitter, ChevronRight } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const SOCIAL_LINKS = [
  { icon: Facebook, label: 'Facebook', href: '#' },
  { icon: Instagram, label: 'Instagram', href: '#' },
  { icon: Linkedin, label: 'LinkedIn', href: '#' },
  { icon: Youtube, label: 'YouTube', href: '#' },
  { icon: Twitter, label: 'Twitter / X', href: '#' },
];

export default function Contact() {
  const { ref, visible } = useScrollAnimation();

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="h-0.5 w-10 bg-zc-teal" />
            <span className="text-zc-teal font-semibold text-sm uppercase tracking-widest">Get In Touch</span>
            <div className="h-0.5 w-10 bg-zc-teal" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Stay <span className="text-zc-teal">Connected</span>
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto leading-relaxed">
            Have questions or want to get involved? Reach out to the alumni office —
            we'd love to hear from you.
          </p>
        </div>

        <div
          ref={ref}
          className={`grid lg:grid-cols-2 gap-12 transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-zc-gray rounded-2xl p-8 space-y-6">
              <h3 className="font-bold text-gray-900 text-xl mb-4">Alumni Office</h3>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-zc-teal-light flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-zc-teal" />
                </div>
                <div>
                  <div className="font-semibold text-gray-800 text-sm mb-0.5">Address</div>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    Ahmed Zewail Road, October Gardens,<br />
                    6th of October City, Giza, Egypt
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-zc-teal-light flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-zc-teal" />
                </div>
                <div>
                  <div className="font-semibold text-gray-800 text-sm mb-0.5">Email</div>
                  <a href="mailto:alumni@zewailcity.edu.eg" className="text-zc-teal text-sm hover:underline">
                    alumni@zewailcity.edu.eg
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-zc-teal-light flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-zc-teal" />
                </div>
                <div>
                  <div className="font-semibold text-gray-800 text-sm mb-0.5">Phone</div>
                  <a href="tel:+20233453500" className="text-gray-600 text-sm hover:text-zc-teal transition-colors">
                    +20 (2) 33453500
                  </a>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="font-bold text-gray-900 text-base mb-4">Follow Us</h3>
              <div className="flex gap-3">
                {SOCIAL_LINKS.map(({ icon: Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="w-10 h-10 rounded-full border-2 border-gray-200 flex items-center justify-center text-gray-500 hover:border-zc-teal hover:text-zc-teal hover:bg-zc-teal-light transition-all duration-200"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-zc-gray rounded-2xl p-8">
            <h3 className="font-bold text-gray-900 text-xl mb-6">Send a Message</h3>
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    First Name
                  </label>
                  <input
                    type="text"
                    placeholder="Ahmed"
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-zc-teal focus:ring-1 focus:ring-zc-teal transition-colors bg-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Last Name
                  </label>
                  <input
                    type="text"
                    placeholder="Zewail"
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-zc-teal focus:ring-1 focus:ring-zc-teal transition-colors bg-white"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-zc-teal focus:ring-1 focus:ring-zc-teal transition-colors bg-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Graduation Year
                </label>
                <select className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-zc-teal focus:ring-1 focus:ring-zc-teal transition-colors bg-white text-gray-600">
                  <option value="">Select year</option>
                  {Array.from({ length: 14 }, (_, i) => 2012 + i).map((year) => (
                    <option key={year} value={year}>{year}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Message
                </label>
                <textarea
                  rows={4}
                  placeholder="Write your message here..."
                  className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-zc-teal focus:ring-1 focus:ring-zc-teal transition-colors bg-white resize-none"
                />
              </div>
              <button type="submit" className="btn-teal w-full justify-center py-3 rounded-lg font-semibold">
                Send Message
                <ChevronRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
