'use client';

import { motion } from 'framer-motion';
import { Calendar, MapPin, Clock, ArrowUpRight, Ticket } from 'lucide-react';
import Link from 'next/link';

const fadeInUp: any = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer: any = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const events = [
  {
    id: 1,
    title: 'Morphive Business Innovation Summit 2026',
    date: 'Nov 25, 2026',
    time: '10:00 AM - 4:00 PM',
    location: 'Nile Ritz-Carlton, Cairo',
    type: 'In-Person',
    description: 'Join us at the largest annual gathering of entrepreneurs and innovation leaders in Egypt. Inspiring discussions, interactive workshops, and invaluable networking opportunities.',
    status: 'Open for Registration'
  },
  {
    id: 2,
    title: 'Workshop: Building Corporate Brand Identity',
    date: 'Dec 05, 2026',
    time: '6:00 PM - 8:00 PM',
    location: 'Online (Zoom)',
    type: 'Online',
    description: 'An intensive training session on how to design a visual identity that reflects your company\'s values and increases customer engagement.',
    status: 'Open for Registration'
  },
  {
    id: 3,
    title: 'Morphive Annual Community Meetup',
    date: 'Dec 15, 2026',
    time: '5:00 PM - 9:00 PM',
    location: 'Morphive HQ, Shebin El Kom',
    type: 'Members Only',
    description: 'An exclusive gathering for Morphive community members to share experiences and celebrate the year\'s achievements.',
    status: 'Invite Only'
  }
];

export default function EventsPage() {
  return (
    <div className="pt-24 min-h-screen bg-deep-blue text-white overflow-hidden selection:bg-caribbean selection:text-white pb-20" dir="ltr">
      
      {/* Background gradients */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-1/4 w-[800px] h-[800px] bg-caribbean/10 rounded-full blur-[150px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Header */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="text-center max-w-3xl mx-auto mb-20 pt-12"
        >
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
            <Ticket size={16} className="text-caribbean" />
            <span className="text-sm font-medium tracking-wide">Events & Conferences</span>
          </motion.div>
          <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl font-heading mb-6 leading-tight">
            Where <span className="text-caribbean">Innovative Minds</span> Meet
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-lg text-white/60 leading-relaxed">
            Don't miss the chance to attend and participate in our upcoming events. Build a strong network and learn directly from industry leaders.
          </motion.p>
        </motion.div>

        {/* Events List */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="max-w-4xl mx-auto space-y-6"
        >
          {events.map((event) => (
            <motion.div 
              key={event.id} 
              variants={fadeInUp} 
              className="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8 hover:bg-white/10 transition-all hover:border-caribbean/30 flex flex-col md:flex-row gap-8 items-start md:items-center group relative overflow-hidden"
            >
              {/* Highlight bar on hover */}
              <div className="absolute top-0 left-0 bottom-0 w-1 bg-caribbean transform scale-y-0 group-hover:scale-y-100 transition-transform origin-top" />

              {/* Date Block */}
              <div className="flex-shrink-0 text-center bg-surface-darker border border-white/10 rounded-2xl w-24 h-24 flex flex-col justify-center items-center shadow-lg group-hover:border-caribbean/50 transition-colors">
                <span className="text-sm text-caribbean font-bold">{event.date.split(' ')[0]}</span>
                <span className="text-3xl font-heading my-1">{event.date.split(' ')[1].replace(',', '')}</span>
                <span className="text-xs text-white/50">{event.date.split(' ')[2]}</span>
              </div>

              {/* Content */}
              <div className="flex-grow">
                <div className="flex flex-wrap items-center gap-3 text-xs font-medium mb-3">
                  <span className="bg-white/10 text-white px-2 py-1 rounded">{event.type}</span>
                  <span className={`px-2 py-1 rounded ${event.status === 'Open for Registration' ? 'bg-caribbean/20 text-caribbean' : 'bg-red-500/20 text-red-400'}`}>
                    {event.status}
                  </span>
                </div>
                
                <h3 className="text-2xl font-heading leading-tight mb-3 group-hover:text-caribbean transition-colors">
                  {event.title}
                </h3>
                
                <p className="text-white/60 text-sm leading-relaxed mb-5">
                  {event.description}
                </p>
                
                <div className="flex flex-wrap items-center gap-6 text-sm text-white/70 border-t border-white/10 pt-4">
                  <div className="flex items-center gap-2">
                    <Clock size={16} className="text-caribbean" />
                    {event.time}
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={16} className="text-caribbean" />
                    {event.location}
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="flex-shrink-0 w-full md:w-auto mt-4 md:mt-0">
                <button className={`w-full md:w-auto px-6 py-3 rounded-xl font-bold flex items-center justify-center gap-2 transition-all ${event.status === 'Open for Registration' ? 'bg-caribbean text-deep-blue-dark hover:bg-caribbean-light' : 'bg-white/10 text-white/50 cursor-not-allowed'}`}>
                  {event.status === 'Open for Registration' ? 'Register Now' : 'Closed'}
                  {event.status === 'Open for Registration' && <ArrowUpRight size={18} />}
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
