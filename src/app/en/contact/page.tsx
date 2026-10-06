'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react';

const fadeInUp: any = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

export default function Contact() {
  return (
    <div className="bg-surface-darker text-white overflow-x-hidden pt-32 min-h-screen">
      
      {/* 1. Hero */}
      <section className="py-12 relative">
        <div className="container mx-auto px-4 text-center max-w-4xl relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-heading font-bold mb-6 leading-normal"
          >
            Book <span className="text-gradient">Morph Audit</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-white/70 leading-relaxed font-light"
          >
            A free diagnostic session where we discuss your company's challenges and jointly set a clear roadmap for growth and sales.
          </motion.p>
        </div>
      </section>

      {/* 2. Contact Content */}
      <section className="py-12 relative z-10 pb-32">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12">
            
            {/* Contact Info */}
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.8, staggerChildren: 0.2 } }
              }}
              className="lg:col-span-2 space-y-8"
            >
              <div className="glass p-8 rounded-3xl border border-white/10">
                <h3 className="text-2xl font-bold font-heading mb-8 text-caribbean">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white/70 shrink-0 border border-white/10">
                      <Mail size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-white/50 mb-1 font-heading">Email</p>
                      <p className="text-lg font-bold" dir="ltr">info@morphivehub.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white/70 shrink-0 border border-white/10">
                      <Phone size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-white/50 mb-1 font-heading">Phone</p>
                      <p className="text-lg font-bold" dir="ltr">+20 100 000 0000</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white/70 shrink-0 border border-white/10">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-white/50 mb-1 font-heading">Headquarters</p>
                      <p className="text-lg font-bold">Nasr City - Shebin El Kom</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-3 glass p-8 md:p-12 rounded-3xl border border-caribbean/30 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-caribbean via-emerald-400 to-caribbean" />
              <div className="absolute -top-32 -left-32 w-64 h-64 bg-caribbean/20 blur-[100px] rounded-full pointer-events-none" />
              
              <h3 className="text-3xl font-bold font-heading mb-8">Let's start the journey</h3>
              
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm text-white/70 font-heading">Full Name</label>
                    <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-caribbean focus:bg-white/10 transition-colors text-white" placeholder="Ahmed Mohamed" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm text-white/70 font-heading">Company / Project Name</label>
                    <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-caribbean focus:bg-white/10 transition-colors text-white" placeholder="Excellence Co." />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm text-white/70 font-heading">Email</label>
                    <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-caribbean focus:bg-white/10 transition-colors text-white" placeholder="ahmed@company.com" dir="ltr" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm text-white/70 font-heading">Phone Number</label>
                    <input type="tel" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-caribbean focus:bg-white/10 transition-colors text-white" placeholder="+20 1..." dir="ltr" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm text-white/70 font-heading">Required Service (Optional)</label>
                  <select className="w-full bg-surface-darker border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-caribbean transition-colors text-white appearance-none cursor-pointer">
                    <option value="">Not sure, I need Morph Audit to diagnose the situation</option>
                    <option value="business">Business & Marketing Solutions</option>
                    <option value="visual">Cinematic Visual Production</option>
                    <option value="tech">Tech & Operations</option>
                    <option value="venture">Venture Building</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm text-white/70 font-heading">Tell us briefly about your challenge</label>
                  <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-caribbean focus:bg-white/10 transition-colors text-white resize-none" placeholder="We are facing a difficulty in..."></textarea>
                </div>

                <button type="submit" className="w-full bg-caribbean text-deep-blue-dark px-8 py-4 rounded-xl font-bold text-lg hover:shadow-caribbean/30 hover:shadow-xl transition-all flex items-center justify-center gap-2 mt-4">
                  Confirm initial booking <ArrowUpRight size={20} />
                </button>
              </form>
            </motion.div>

          </div>
        </div>
      </section>

    </div>
  );
}
