'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, Briefcase, Film, Cpu, Rocket, Search, Compass, Zap, BarChart } from 'lucide-react';
import Link from 'next/link';

const fadeInUp: any = {
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

const services = [
  {
    title: 'حلول الأعمال والتسويق',
    desc: 'حلول استشارية وتسويقية لهيكلة ومضاعفة مبيعات الشركات.',
    icon: <Briefcase size={32} />,
    color: 'from-blue-500/20 to-purple-500/20',
    borderColor: 'border-blue-500/30'
  },
  {
    title: 'الإنتاج البصري السينمائي',
    desc: 'إنتاج مرئي وسينيمائي يعكس قوة العلامات التجارية.',
    icon: <Film size={32} />,
    color: 'from-orange-500/20 to-red-500/20',
    borderColor: 'border-orange-500/30'
  },
  {
    title: 'التقنية والعمليات',
    desc: 'حلول تقنية وإدارة صارمة للعمليات وسلاسل الإمداد.',
    icon: <Cpu size={32} />,
    color: 'from-caribbean/20 to-green-500/20',
    borderColor: 'border-caribbean/30'
  },
  {
    title: 'بناء المشاريع',
    desc: 'الشراكة الاستراتيجية مع المواهب لبناء مشاريع من الصفر.',
    icon: <Rocket size={32} />,
    color: 'from-yellow-500/20 to-orange-500/20',
    borderColor: 'border-yellow-500/30'
  }
];

const steps = [
  { title: 'التشخيص', desc: 'دراسة الوضع الحالي وتحديد الفجوات بدقة.', icon: <Search size={24} /> },
  { title: 'الاستراتيجية', desc: 'رسم خريطة طريق واضحة وقابلة للتنفيذ.', icon: <Compass size={24} /> },
  { title: 'التنفيذ', desc: 'إدارة العمليات وتطبيق الحلول على أرض الواقع.', icon: <Zap size={24} /> },
  { title: 'القياس', desc: 'متابعة الأرقام والمؤشرات لتحسين العائد على الاستثمار.', icon: <BarChart size={24} /> }
];

export default function Services() {
  return (
    <div className="bg-surface-darker text-white overflow-x-hidden pt-32">
      
      {/* 1. Hero / Intro */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-caribbean/10 via-surface-darker to-surface-darker pointer-events-none" />
        <div className="container mx-auto px-4 text-center max-w-3xl relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-heading font-bold mb-6 leading-normal"
          >
            حلول <span className="text-gradient">متكاملة</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-white/70 leading-relaxed font-light"
          >
            لا نقدم خدمات منفصلة، بل منظومة عمل مترابطة تغطي كافة احتياجات شركتك من التخطيط وحتى التنفيذ والقياس.
          </motion.p>
        </div>
      </section>

      {/* 2. Services Grid */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto"
          >
            {services.map((service, i) => (
              <motion.div 
                key={i}
                variants={fadeInUp}
                className={`glass p-10 rounded-3xl border border-white/10 hover:${service.borderColor} hover:-translate-y-2 transition-all relative overflow-hidden group cursor-pointer`}
              >
                <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${service.color} blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-8 border border-white/10 group-hover:border-white/20 transition-all text-white group-hover:text-caribbean group-hover:scale-110">
                    {service.icon}
                  </div>
                  <h3 className="text-3xl font-bold font-heading mb-4 text-white">{service.title}</h3>
                  <p className="text-lg text-white/60 leading-relaxed">{service.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 3. How We Work (إزاي بنشتغل) */}
      <section className="py-32 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 leading-normal">كيف نعمل؟</h2>
            <p className="text-white/50 max-w-2xl mx-auto text-lg">منهجية علمية وعملية تضمن تحقيق النتائج المرجوة.</p>
          </div>
          
          <div className="max-w-5xl mx-auto relative">
            {/* Connecting Line for Desktop */}
            <div className="hidden md:block absolute top-1/2 right-0 left-0 h-0.5 bg-gradient-to-l from-transparent via-white/10 to-transparent -translate-y-1/2" />
            
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10"
            >
              {steps.map((step, i) => (
                <motion.div key={i} variants={fadeInUp} className="relative group text-center">
                  <div className="w-20 h-20 mx-auto glass rounded-full flex items-center justify-center border border-white/10 mb-6 group-hover:border-caribbean/50 group-hover:bg-caribbean/10 transition-all text-white group-hover:text-caribbean relative z-10 bg-surface-darker">
                    {step.icon}
                  </div>
                  {i !== steps.length - 1 && (
                    <div className="hidden md:block absolute top-10 right-1/2 w-full h-0.5 bg-caribbean/0 group-hover:bg-caribbean/50 transition-colors -z-10" />
                  )}
                  <h4 className="text-2xl font-bold font-heading mb-3">{step.title}</h4>
                  <p className="text-white/50 leading-relaxed text-sm">{step.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. CTA */}
      <section className="py-24 mb-12 relative text-center">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass max-w-3xl mx-auto p-12 md:p-16 rounded-[2.5rem] border border-white/10 hover:border-caribbean/30 bg-surface-darker/50 transition-colors"
          >
            <h2 className="text-4xl font-heading font-bold mb-6">جاهز لاختيار الخدمة المناسبة؟</h2>
            <p className="text-lg text-white/60 mb-10">
              دعنا نبدأ بتقييم مجاني لوضع شركتك الحالي، لنحدد معاً الأولويات والحلول الأكثر تأثيراً على نموك.
            </p>
            <Link href="/contact" className="magnetic-btn bg-caribbean text-deep-blue-dark px-10 py-4 rounded-full font-bold text-xl inline-flex items-center justify-center gap-3 hover:shadow-caribbean/30 hover:shadow-2xl transition-all w-full md:w-auto">
              احجز Morph Audit <ArrowLeft size={24} />
            </Link>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
