'use client';

import { motion } from 'framer-motion';
import { Download, LayoutTemplate, Calculator, FileText, ArrowUpRight, PenTool } from 'lucide-react';
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

const tools = [
  {
    id: 1,
    title: 'Business Model Canvas',
    description: 'An interactive template ready for printing or digital use to plan and design your business model on a single page.',
    icon: <LayoutTemplate size={24} />,
    type: 'Notion Template',
    price: 'Free'
  },
  {
    id: 2,
    title: 'Marketing ROI Calculator',
    description: 'A smart tool to calculate the expected return on your advertising campaigns and determine the optimal marketing budget.',
    icon: <Calculator size={24} />,
    type: 'Excel Sheet',
    price: 'Free'
  },
  {
    id: 3,
    title: 'Content & Strategy Planner',
    description: 'An interactive file featuring ready-made strategies to plan and publish content for 6 consecutive months.',
    icon: <FileText size={24} />,
    type: 'PDF + Notion',
    price: '$15'
  },
  {
    id: 4,
    title: 'Tech Stack Assessor',
    description: 'An interactive questionnaire to help you evaluate your company\'s infrastructure and identify weak points requiring quick intervention.',
    icon: <PenTool size={24} />,
    type: 'Web Tool',
    price: 'Free'
  }
];

export default function ToolsPage() {
  return (
    <div className="pt-24 min-h-screen bg-deep-blue text-white overflow-hidden selection:bg-caribbean selection:text-white pb-20" dir="ltr">
      
      {/* Background gradients */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-caribbean/5 rounded-full blur-[150px]" />
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
            <Download size={16} className="text-caribbean" />
            <span className="text-sm font-medium tracking-wide">Free Tools & Templates</span>
          </motion.div>
          <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl font-heading mb-6 leading-tight">
            Practical Tools to Accelerate Your <span className="text-caribbean">Progress</span>
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-lg text-white/60 leading-relaxed mb-8">
            A collection of ready-made templates, smart calculators, and tools tailored to help entrepreneurs and teams save time and boost productivity.
          </motion.p>
        </motion.div>

        {/* Tools Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto"
        >
          {tools.map((tool) => (
            <motion.div 
              key={tool.id} 
              variants={fadeInUp} 
              className="group flex flex-col sm:flex-row gap-6 bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-8 hover:bg-white/10 transition-all hover:border-caribbean/50"
            >
              {/* Icon */}
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-2xl bg-caribbean/10 text-caribbean flex items-center justify-center group-hover:bg-caribbean group-hover:text-deep-blue-dark transition-colors shadow-lg">
                  {tool.icon}
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-heading leading-tight group-hover:text-caribbean transition-colors">
                    {tool.title}
                  </h3>
                </div>
                <p className="text-sm text-white/60 mb-6 leading-relaxed">
                  {tool.description}
                </p>
                
                <div className="mt-auto flex items-center justify-between border-t border-white/10 pt-4">
                  <div className="flex items-center gap-3">
                    <span className="text-xs bg-white/10 px-2 py-1 rounded text-white/70">{tool.type}</span>
                    <span className="text-sm font-bold text-caribbean">{tool.price}</span>
                  </div>
                  <button className="flex items-center gap-2 text-sm font-medium text-white group-hover:text-caribbean transition-colors">
                    Download Tool <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
