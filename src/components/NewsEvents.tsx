import { ChevronRight, ArrowRight } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const FEATURED_EVENT = {
  date: { day: '15', month: 'Jul', year: '2025' },
  image: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&dpr=1',
  category: 'Annual Conference',
  title: 'ZC Alumni Annual Reunion & Innovation Summit 2025',
  excerpt:
    'Join hundreds of ZC alumni for a day of keynotes, workshops, networking, and celebrating the outstanding achievements of our community members from around the world.',
};

const EVENTS = [
  {
    date: { day: '20', month: 'Jul', year: '2025' },
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1',
    category: 'Workshop',
    title: 'Entrepreneurship & Startup Bootcamp for ZC Graduates',
    excerpt: 'A hands-on two-day workshop designed to equip alumni with the tools to launch their own ventures...',
  },
  {
    date: { day: '05', month: 'Aug', year: '2025' },
    image: 'https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1',
    category: 'Research Seminar',
    title: 'Frontiers in Nanotechnology: Alumni Research Showcase',
    excerpt: 'Alumni researchers present their latest breakthroughs and discoveries in nano-scale science and materials...',
  },
  {
    date: { day: '12', month: 'Sep', year: '2025' },
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1',
    category: 'Career Fair',
    title: 'ZC Alumni Career Connect – STEM Industry Expo',
    excerpt: 'A premier networking event connecting ZC alumni with top employers across tech, pharma, and engineering...',
  },
];

export default function NewsEvents() {
  const { ref, visible } = useScrollAnimation();

  return (
    <section id="news" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <div className="section-heading">News &amp; Events</div>
          <button className="btn-teal text-sm py-2 px-5 rounded hidden md:inline-flex">
            All Events <ChevronRight className="w-4 h-4" /><ChevronRight className="-ml-3 w-4 h-4" />
          </button>
        </div>

        <div
          ref={ref}
          className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          {/* Featured + 3 cards layout */}
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Featured large card */}
            <div className="lg:col-span-1 card group cursor-pointer">
              <div className="relative overflow-hidden h-56">
                <img
                  src={FEATURED_EVENT.image}
                  alt={FEATURED_EVENT.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="date-badge">
                  <div className="text-xl font-bold leading-none">{FEATURED_EVENT.date.day}</div>
                  <div className="text-xs font-medium">{FEATURED_EVENT.date.month}</div>
                  <div className="text-xs opacity-80">{FEATURED_EVENT.date.year}</div>
                </div>
                <span className="absolute top-3 right-3 bg-zc-teal text-white text-xs font-semibold px-3 py-1 rounded-full">
                  {FEATURED_EVENT.category}
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-gray-900 text-base leading-snug mb-3 group-hover:text-zc-teal transition-colors">
                  {FEATURED_EVENT.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{FEATURED_EVENT.excerpt}</p>
                <span className="inline-flex items-center gap-1 text-zc-teal font-semibold text-sm hover:gap-2 transition-all">
                  Read More <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </div>

            {/* 3 smaller cards stacked on the right */}
            <div className="lg:col-span-2 grid sm:grid-cols-3 gap-6">
              {EVENTS.map((event, idx) => (
                <div
                  key={event.title}
                  className="card group cursor-pointer"
                  style={{ transitionDelay: `${idx * 100}ms` }}
                >
                  <div className="relative overflow-hidden h-40">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="date-badge">
                      <div className="text-base font-bold leading-none">{event.date.day}</div>
                      <div className="text-[10px] font-medium">{event.date.month}</div>
                      <div className="text-[10px] opacity-80">{event.date.year}</div>
                    </div>
                  </div>
                  <div className="p-4">
                    <span className="text-zc-teal text-xs font-semibold uppercase tracking-wide">
                      {event.category}
                    </span>
                    <h3 className="font-bold text-gray-900 text-sm leading-snug mt-1 mb-2 group-hover:text-zc-teal transition-colors line-clamp-2">
                      {event.title}
                    </h3>
                    <p className="text-gray-500 text-xs leading-relaxed line-clamp-2">{event.excerpt}</p>
                    <button className="mt-3 bg-zc-teal text-white text-xs font-semibold px-4 py-1.5 rounded-full hover:bg-zc-teal-dark transition-colors">
                      Read More
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile "all events" button */}
          <div className="mt-8 flex justify-center md:hidden">
            <button className="btn-teal text-sm py-2.5 px-8 rounded-full">
              All Events <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
