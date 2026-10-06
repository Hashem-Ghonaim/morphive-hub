'use client';

import { motion } from 'framer-motion';
import { Download, LayoutTemplate, Calculator, FileText, ArrowLeft, PenTool } from 'lucide-react';
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
    title: 'نموذج العمل التجاري (Canvas)',
    description: 'قالب تفاعلي جاهز للطباعة أو الاستخدام الرقمي لتخطيط وتصميم نموذج عملك التجاري في صفحة واحدة.',
    icon: <LayoutTemplate size={24} />,
    type: 'قالب Notion',
    price: 'مجاني'
  },
  {
    id: 2,
    title: 'حاسبة العائد على الاستثمار (ROI)',
    description: 'أداة ذكية لحساب العائد المتوقع من حملاتك الإعلانية وتحديد الميزانية الأمثل للتسويق.',
    icon: <Calculator size={24} />,
    type: 'شيت Excel',
    price: 'مجاني'
  },
  {
    id: 3,
    title: 'مخطط الاستراتيجية والمحتوى',
    description: 'ملف تفاعلي يضم استراتيجيات جاهزة لتخطيط ونشر المحتوى لمدة 6 أشهر متتالية.',
    icon: <FileText size={24} />,
    type: 'ملف PDF + Notion',
    price: '$15'
  },
  {
    id: 4,
    title: 'أداة تقييم البنية التقنية',
    description: 'استبيان تفاعلي يساعدك على تقييم البنية التحتية لشركتك ومعرفة نقاط الضعف التي تحتاج لتدخل سريع.',
    icon: <PenTool size={24} />,
    type: 'أداة ويب',
    price: 'مجاني'
  }
];

export default function ToolsPage() {
  return (
    <div className="pt-24 min-h-screen bg-deep-blue text-white overflow-hidden selection:bg-caribbean selection:text-white pb-20">
      
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
            <span className="text-sm font-medium tracking-wide">أدوات وقوالب مجانية</span>
          </motion.div>
          <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl font-heading mb-6 leading-tight">
            أدوات عملية لتسريع <span className="text-caribbean">إنجازك</span>
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-lg text-white/60 leading-relaxed mb-8">
            مجموعة من القوالب الجاهزة، الحواسب الذكية، والأدوات المصممة خصيصاً لمساعدة رواد الأعمال وفرق العمل على توفير الوقت وزيادة الإنتاجية.
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
                    تحميل الأداة <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
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
