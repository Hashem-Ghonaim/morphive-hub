'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, Target, Eye, Users } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

export default function About() {
  return (
    <div className="bg-surface-darker text-white overflow-x-hidden pt-32">
      
      {/* 1. Hero Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-caribbean/5 to-transparent pointer-events-none" />
        <div className="container mx-auto px-4 text-center max-w-4xl relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-heading font-bold mb-8 leading-normal"
          >
            We are not just a marketing agency... <br/> 
            <span className="text-gradient">we are a strategic partner for your growth.</span>
          </motion.h1>
        </div>
      </section>

      {/* 2. Our Story */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          >
            <motion.div variants={fadeInUp} className="text-xl md:text-2xl text-white/80 leading-relaxed font-light">
              <p className="mb-6">
                We represent the <strong className="text-white font-bold">new generation</strong> of specialized agencies, rejecting canned and traditional solutions.
              </p>
              <p>
                We operate as a <strong className="text-caribbean font-bold">complete task force</strong> that transforms your business challenges into numbers, sales, and tangible success stories.
              </p>
            </motion.div>
            <motion.div variants={fadeInUp} className="relative aspect-square md:aspect-video rounded-3xl overflow-hidden glass border border-white/10 shadow-2xl">
              {/* Decorative graphic instead of image placeholder for modern look */}
              <div className="absolute inset-0 bg-gradient-to-br from-deep-blue to-surface-darker" />
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-caribbean/30 blur-3xl rounded-full" />
              <Image src="/logos/logo.png" alt="Morphive" width={120} height={120} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-50 drop-shadow-2xl" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 3. The 4 Pillars */}
      <section className="py-32 bg-surface-lighter/30 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 leading-normal">4 Pillars of Your Success</h2>
            <p className="text-white/50 max-w-2xl mx-auto">An integrated methodology ensuring all aspects of your business growth are covered.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {[
              { title: 'Strategy', desc: 'We plan precisely to ensure competitive advantage and smart resource allocation.' },
              { title: 'Technology', desc: 'We leverage the latest digital solutions to accelerate and streamline your processes.' },
              { title: 'Operations', desc: 'Strict management of operations and supply chains to ensure maximum efficiency.' },
              { title: 'Visual Production', desc: 'We create cinematic content that reflects the strength and identity of your brand.' }
            ].map((pillar, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass p-8 rounded-3xl border border-white/10 hover:border-caribbean/30 hover:-translate-y-2 transition-all group"
              >
                <div className="text-6xl font-heading text-white/5 mb-6 group-hover:text-caribbean/20 transition-colors">0{i+1}</div>
                <h3 className="text-2xl font-bold font-heading mb-4 text-white group-hover:text-caribbean transition-colors">{pillar.title}</h3>
                <p className="text-white/60 leading-relaxed">{pillar.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Vision & Mission */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-caribbean/5 rounded-full blur-[150px]" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass p-12 rounded-3xl border border-caribbean/20 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-caribbean/10 blur-3xl group-hover:bg-caribbean/20 transition-all" />
              <Eye className="w-12 h-12 text-caribbean mb-8" />
              <h3 className="text-3xl font-bold font-heading mb-6">Our Vision</h3>
              <p className="text-xl text-white/70 leading-relaxed font-light">
                To be the premier strategic partner and the primary driver of growth for startups and mid-sized companies in the region, and the changemakers in the business world.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass p-12 rounded-3xl border border-white/10 hover:border-white/20 relative overflow-hidden transition-all"
            >
              <Target className="w-12 h-12 text-white/50 mb-8" />
              <h3 className="text-3xl font-bold font-heading mb-6">Our Mission</h3>
              <p className="text-xl text-white/70 leading-relaxed font-light">
                To provide comprehensive and innovative solutions that integrate strategy, technology, and visual production to enable companies to overcome challenges and achieve real numbers and sales.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. Founders (Team) */}
      <section id="team" className="py-24 relative overflow-hidden bg-white/5 border-y border-white/5">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 leading-normal">The Founders</h2>
            <p className="text-white/50 text-lg">The task force driving the transformation</p>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
          >
            {[
              { name: 'Mustafa Al-Banna', role: 'Co-Founder' },
              { name: 'Mustafa Ali', role: 'Co-Founder' },
              { name: 'Hashem Ghoneim', role: 'Co-Founder' }
            ].map((member, i) => (
              <div key={i} className="glass p-10 rounded-3xl border border-white/10 hover:border-caribbean/30 hover:-translate-y-2 transition-all group flex flex-col items-center text-center shadow-xl">
                <div className="w-40 h-40 rounded-full bg-white/5 border-2 border-white/10 mb-6 overflow-hidden relative group-hover:border-caribbean/50 transition-colors shadow-lg">
                  <div className="absolute inset-0 flex items-center justify-center text-white/20 font-heading text-5xl group-hover:text-caribbean/50 transition-colors bg-surface-darker/50">
                    {member.name.charAt(0)}
                  </div>
                </div>
                <h4 className="text-3xl font-bold font-heading mb-2 text-white group-hover:text-caribbean transition-colors">{member.name}</h4>
                <p className="text-lg text-caribbean/70">{member.role}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 6. Clients */}
      <section id="clients" className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 leading-normal">Our Clients</h2>
            <p className="text-white/50 text-lg">Success partners from various sectors</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { name: 'Vera Clinic', logo: '/logos/vera-clinic.png' },
              { name: 'Nice Trip', logo: '/logos/nice-trip.png' },
              { name: 'Green Way', logo: '/logos/green-way.png' },
              { name: 'Guzoor', logo: '/logos/guzoor.png' }
            ].map((client, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="aspect-square glass flex items-center justify-center rounded-2xl border border-white/10 hover:border-caribbean/50 hover:bg-white/5 transition-all group cursor-pointer relative overflow-hidden p-6"
              >
                {client.logo ? (
                  <Image 
                    src={client.logo} 
                    alt={client.name} 
                    width={200}
                    height={200}
                    className="object-contain w-full h-full opacity-80 group-hover:opacity-100 transition-opacity filter group-hover:drop-shadow-[0_0_15px_rgba(0,191,166,0.5)]"
                  />
                ) : (
                  <span className="text-xl font-heading font-bold opacity-50 group-hover:opacity-100 transition-opacity text-white group-hover:text-caribbean">{client.name}</span>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CTA */}
      <section className="py-32 relative text-center">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass max-w-4xl mx-auto p-16 rounded-[3rem] border border-caribbean/30 bg-surface-darker/50"
          >
            <h2 className="text-4xl md:text-6xl font-heading font-bold mb-8 leading-normal">Ready for the transformation journey?</h2>
            <p className="text-xl text-white/60 mb-10 max-w-2xl mx-auto">
              Book a free Morph Audit session to diagnose your challenges and draw a clear roadmap for your business growth together.
            </p>
            <Link href="/en/contact" className="magnetic-btn bg-caribbean text-deep-blue-dark px-10 py-5 rounded-full font-bold text-xl inline-flex items-center justify-center gap-3 hover:shadow-caribbean/30 hover:shadow-2xl transition-all">
              Book Morph Audit <ArrowUpRight size={24} />
            </Link>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
