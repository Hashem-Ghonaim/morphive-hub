'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, ArrowUpRight, BarChart3, Briefcase, Film, Cpu, Users } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const fadeInUp: any = {
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

export default function Home() {
  return (
    <div className="bg-surface-darker text-white overflow-x-hidden">
      
      {/* 1. Hero Section */}
      <section className="relative min-h-[95vh] flex items-center pt-20 overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-screen"
          >
            <source src="https://assets.mixkit.co/videos/preview/mixkit-abstract-technology-network-connection-background-24633-large.mp4" type="video/mp4" />
          </video>
          {/* Gradient Overlays to blend video with background */}
          <div className="absolute inset-0 bg-gradient-to-r from-surface-darker via-surface-darker/60 to-surface-darker/90 z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-surface-darker via-transparent to-surface-darker/40 z-10" />
          <div className="absolute inset-0 grain opacity-20 z-10" />
        </div>

        <div className="container mx-auto px-4 relative z-20 flex justify-start">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="w-full text-left -mt-32"
            dir="ltr"
          >
            <motion.h1 
              variants={fadeInUp}
              className="text-7xl md:text-9xl lg:text-[10rem] font-heading font-bold mb-8 text-gradient leading-none tracking-tight text-left w-full"
            >
              WE MORPH.<br />YOU THRIVE.
            </motion.h1>
            <motion.p 
              variants={fadeInUp}
              className="text-2xl md:text-3xl lg:text-4xl text-white/80 mb-12 max-w-4xl leading-relaxed"
            >
              At Morphive Business Hub, we blend strategy, technology, operations, and visual production to make a real difference.
            </motion.p>
            <motion.div 
              variants={fadeInUp}
              className="flex justify-start"
            >
              <Link href="/en/contact" className="magnetic-btn bg-caribbean text-deep-blue-dark px-10 py-5 rounded-full font-bold text-xl flex items-center justify-center gap-3 hover:shadow-caribbean/30 hover:shadow-2xl transition-all w-fit">
                Book Morph Audit <ArrowUpRight size={24} />
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20">
          <div className="scroll-indicator" />
        </div>
      </section>

      {/* 2. Services Strip */}
      <section className="py-8 border-y border-white/5 bg-white/5 backdrop-blur-sm overflow-hidden">
        <div className="flex gap-16 animate-marquee-rtl whitespace-nowrap opacity-70">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex gap-16 items-center">
              <span className="text-2xl font-bold font-heading">Business & Marketing</span>
              <span className="text-caribbean">•</span>
              <span className="text-2xl font-bold font-heading">Cinematic Production</span>
              <span className="text-caribbean">•</span>
              <span className="text-2xl font-bold font-heading">Tech & Operations</span>
              <span className="text-caribbean">•</span>
              <span className="text-2xl font-bold font-heading">Venture Building</span>
              <span className="text-caribbean">•</span>
            </div>
          ))}
        </div>
      </section>

      {/* 2.2 About Us Brief */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-caribbean/5 rounded-full blur-[100px] -z-10" />
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-heading font-bold mb-8 leading-normal"
            >
              We are not just a marketing agency... we are a strategic partner for your growth.
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl text-white/70 mb-10 leading-relaxed"
            >
              At Morphive Business Hub, we integrate strategy, technology, operations, and visual production to provide comprehensive and innovative solutions. A complete task force that transforms challenges into numbers and sales, providing everything you need for growth in one place.
            </motion.p>
          </div>
        </div>
      </section>

      {/* 2.3 Founders (Team Section) */}
      <section className="py-24 relative overflow-hidden bg-white/5 border-y border-white/5">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 leading-normal">The Founders</h2>
            <p className="text-white/50 text-lg">The task force driving the transformation</p>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
          >
            {[
              { name: 'Mustafa Al-Banna', role: 'Co-Founder' },
              { name: 'Mustafa Ali', role: 'Co-Founder' },
              { name: 'Hashem Ghoneim', role: 'Co-Founder' }
            ].map((member, i) => (
              <div key={i} className="glass p-10 rounded-3xl border border-white/10 hover:border-caribbean/30 hover:-translate-y-2 transition-all group flex flex-col items-center text-center shadow-xl">
                <div className="w-40 h-40 rounded-full bg-white/5 border-2 border-white/10 mb-6 overflow-hidden relative group-hover:border-caribbean/50 transition-colors shadow-lg">
                  {/* Placeholder for Photo */}
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

      {/* 2.5. Clients Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 leading-normal">Brands that trusted us</h2>
            <p className="text-white/50">Success partners from various sectors</p>
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
                  <div className="text-xl md:text-2xl font-heading font-bold opacity-60 group-hover:opacity-100 group-hover:text-caribbean transition-all text-center px-4">
                    {client.name}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Services Overview */}
      <section className="py-32 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 leading-normal">Integrated Services. Sustainable Growth.</h2>
            <p className="text-white/50 max-w-2xl mx-auto">4 core pillars we rely on to transform your business challenges into numbers and successes.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: BarChart3, title: 'Business & Marketing', desc: 'Consulting and marketing solutions to structure and multiply corporate sales.' },
              { icon: Film, title: 'Cinematic Production', desc: 'Cinematic and visual production that reflects the power of brands.' },
              { icon: Cpu, title: 'Tech & Operations', desc: 'Tech solutions and strict management of operations and supply chains.' },
              { icon: Briefcase, title: 'Venture Building', desc: 'Strategic partnership with talents to build ventures from scratch.' }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="card-3d glass-dark p-8 rounded-2xl hover:border-caribbean/50 group cursor-pointer"
              >
                <div className="w-14 h-14 bg-caribbean/10 rounded-xl flex items-center justify-center text-caribbean mb-6 group-hover:bg-caribbean group-hover:text-deep-blue-dark transition-all">
                  <service.icon size={28} />
                </div>
                <h3 className="text-2xl font-heading font-bold mb-3">{service.title}</h3>
                <p className="text-white/60 mb-6">{service.desc}</p>
                <div className="flex items-center text-caribbean font-bold gap-2 reveal-line inline-flex">
                  Discover more <ArrowUpRight size={16} className="group-hover:translate-x-2 transition-transform" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. The Path Split (B2B vs Venture) */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-deep-blue/20" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            
            {/* For Companies */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-surface-dark p-10 md:p-14 rounded-3xl border border-white/10 hover-glow relative"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-caribbean/20 rounded-bl-full blur-2xl" />
              <h3 className="text-3xl font-heading font-bold mb-4">For Companies & Enterprises</h3>
              <p className="text-white/60 mb-8 text-lg">Are you looking for a strategic partner to analyze your current performance and design a real growth roadmap?</p>
              <button className="w-full bg-white text-surface-dark py-4 rounded-xl font-bold hover:bg-caribbean transition-colors flex justify-center items-center gap-2">
                Book your free Morph Audit <ArrowUpRight size={20} />
              </button>
            </motion.div>

            {/* For Talents */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-deep-blue-dark p-10 md:p-14 rounded-3xl border border-white/10 hover-glow relative"
            >
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-caribbean/20 rounded-tr-full blur-2xl" />
              <h3 className="text-3xl font-heading font-bold mb-4">For Talents & Startups</h3>
              <p className="text-white/60 mb-8 text-lg">Have an exceptional idea or skill and need technical, operational, and marketing support to launch?</p>
              <button className="w-full bg-transparent border-2 border-caribbean text-caribbean py-4 rounded-xl font-bold hover:bg-caribbean hover:text-deep-blue-dark transition-colors flex justify-center items-center gap-2">
                Join as a Venture Partner <ArrowUpRight size={20} />
              </button>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 5. Selected Work (Placeholder) */}
      <section className="py-32">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 leading-normal">Work that makes a difference.</h2>
              <p className="text-white/50">Success stories from real clients.</p>
            </div>
            <button className="hidden md:flex text-caribbean hover:text-white font-bold items-center gap-2 reveal-line">
              View all work <ArrowUpRight size={16} />
            </button>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[1, 2].map((i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-video rounded-2xl overflow-hidden mb-6 bg-white/5 border border-white/10">
                  <div className="absolute inset-0 bg-deep-sea/20 group-hover:bg-transparent transition-colors z-10" />
                  <div className="absolute inset-0 flex items-center justify-center z-20 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-16 h-16 rounded-full bg-caribbean text-deep-blue-dark flex items-center justify-center transform scale-50 group-hover:scale-100 transition-transform duration-500">
                      <ArrowUpRight size={24} />
                    </div>
                  </div>
                  {/* Placeholder for video thumbnail */}
                  <div className="w-full h-full bg-gradient-to-br from-deep-blue-dark to-surface-darker animate-pulse-glow" />
                </div>
                <div className="flex gap-3 mb-3">
                  <span className="text-xs font-bold px-3 py-1 bg-white/10 rounded-full text-caribbean">Marketing</span>
                  <span className="text-xs font-bold px-3 py-1 bg-white/10 rounded-full">Tourism</span>
                </div>
                <h3 className="text-2xl font-bold mb-2 group-hover:text-caribbean transition-colors">Mock Case Study {i}</h3>
                <p className="text-white/60">Achieving a 300% increase in sales through comprehensive restructuring.</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
