'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, Filter } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const categories = ['All', 'Business Solutions', 'Cinematic Production', 'Technology', 'Venture Building'];

const projects = [
  {
    title: 'Developing a complete visual identity',
    client: 'Vera Clinic',
    category: 'Cinematic Production',
    result: '400% increase in engagement',
    image: '/logos/vera-clinic.png', // Temporary placeholder image
    color: 'from-orange-500/20 to-red-500/20',
  },
  {
    title: 'Automating operations and digitizing sales',
    client: 'Nice Trip',
    category: 'Technology',
    result: '60% reduction in operating time',
    image: '/logos/nice-trip.png',
    color: 'from-blue-500/20 to-caribbean/20',
  },
  {
    title: 'Expansion and sales growth strategy',
    client: 'Green Way',
    category: 'Business Solutions',
    result: 'Doubling revenue within 6 months',
    image: '/logos/green-way.png',
    color: 'from-green-500/20 to-emerald-500/20',
  },
  {
    title: 'Building an integrated platform from scratch',
    client: 'Guzoor',
    category: 'Venture Building',
    result: 'Successful launch and a $5 million valuation',
    image: '/logos/guzoor.png',
    color: 'from-purple-500/20 to-pink-500/20',
  }
];

export default function Work() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <div className="bg-surface-darker text-white overflow-x-hidden pt-32 min-h-screen">
      
      {/* 1. Hero */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 text-center max-w-4xl relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-heading font-bold mb-6 leading-normal"
          >
            Real Success <span className="text-gradient">Stories</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-white/70 leading-relaxed font-light"
          >
            We don't just sell words... we create tangible numbers and results. Browse case studies of our clients and partners.
          </motion.p>
        </div>
      </section>

      {/* 2. Filters */}
      <section className="py-8 relative z-10">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-4 max-w-4xl mx-auto"
          >
            <div className="flex items-center gap-2 text-white/50 ml-4">
              <Filter size={20} />
              <span className="font-heading">Filter by:</span>
            </div>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2.5 rounded-full font-heading font-bold transition-all ${
                  activeCategory === category 
                    ? 'bg-caribbean text-deep-blue-dark shadow-lg shadow-caribbean/30' 
                    : 'glass text-white/70 hover:text-white hover:bg-white/10'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 3. Projects Grid */}
      <section className="py-12 relative z-10 pb-32">
        <div className="container mx-auto px-4">
          <motion.div 
            key={activeCategory} // Force re-render animation on category change
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto"
          >
            {filteredProjects.map((project, i) => (
              <motion.div 
                key={i}
                variants={fadeInUp}
                className="group cursor-pointer"
              >
                {/* Image Card */}
                <div className="glass rounded-3xl border border-white/10 aspect-video relative overflow-hidden mb-6 group-hover:border-caribbean/50 transition-all flex items-center justify-center">
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20 group-hover:opacity-40 transition-opacity duration-700`} />
                  
                  {/* Using client logo as a placeholder for the actual case study thumbnail */}
                  <Image 
                    src={project.image} 
                    alt={project.client} 
                    width={150} 
                    height={150} 
                    className="object-contain opacity-80 group-hover:scale-110 group-hover:opacity-100 transition-all duration-700 relative z-10"
                  />
                  
                  {/* Hover Overlay Arrow */}
                  <div className="absolute top-6 right-6 w-12 h-12 bg-caribbean rounded-full flex items-center justify-center text-deep-blue-dark opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 shadow-xl z-20">
                    <ArrowUpRight size={24} />
                  </div>
                </div>

                {/* Content */}
                <div>
                  <div className="flex items-center gap-3 mb-3 text-sm font-heading font-bold text-caribbean">
                    <span>{project.category}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
                    <span className="text-white/60">{project.client}</span>
                  </div>
                  <h3 className="text-3xl font-bold font-heading mb-3 group-hover:text-caribbean transition-colors">{project.title}</h3>
                  <p className="text-lg text-white/60">{project.result}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20 text-white/50 text-xl font-heading"
            >
              There are no projects in this category currently.
            </motion.div>
          )}
        </div>
      </section>

      {/* 4. CTA */}
      <section className="py-24 relative text-center bg-surface-lighter/20 border-t border-white/5">
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl font-heading font-bold mb-6">Is your next project our next success story?</h2>
          <p className="text-lg text-white/60 mb-10 max-w-2xl mx-auto">
            Join the list of our clients who achieved a real breakthrough in their business growth.
          </p>
          <Link href="/en/contact" className="magnetic-btn bg-caribbean text-deep-blue-dark px-10 py-4 rounded-full font-bold text-xl inline-flex items-center justify-center gap-3 hover:shadow-caribbean/30 hover:shadow-2xl transition-all">
            Book Morph Audit <ArrowUpRight size={24} />
          </Link>
        </div>
      </section>

    </div>
  );
}
