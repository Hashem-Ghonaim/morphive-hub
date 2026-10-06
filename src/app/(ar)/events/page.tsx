'use client';

import { motion } from 'framer-motion';
import { Calendar, MapPin, Clock, ArrowLeft, Ticket } from 'lucide-react';
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
    title: 'قمة Morphive لابتكار الأعمال 2026',
    date: '25 نوفمبر 2026',
    time: '10:00 صباحاً - 4:00 مساءً',
    location: 'فندق النيل ريتز كارلتون، القاهرة',
    type: 'حضور فعلي',
    description: 'انضم إلينا في أكبر تجمع سنوي لرواد الأعمال وقادة الابتكار في مصر. مناقشات ملهمة، ورش عمل تفاعلية، وفرص تشبيك لا تعوض.',
    status: 'متاح للتسجيل'
  },
  {
    id: 2,
    title: 'ورشة عمل: بناء الهوية البصرية للشركات',
    date: '05 ديسمبر 2026',
    time: '6:00 مساءً - 8:00 مساءً',
    location: 'أونلاين (Zoom)',
    type: 'أونلاين',
    description: 'جلسة تدريبية مكثفة حول كيفية تصميم هوية بصرية تعكس قيم شركتك وتزيد من ارتباط العملاء بها.',
    status: 'متاح للتسجيل'
  },
  {
    id: 3,
    title: 'لقاء مجتمع Morphive السنوي',
    date: '15 ديسمبر 2026',
    time: '5:00 مساءً - 9:00 مساءً',
    location: 'مقر Morphive، شبين الكوم',
    type: 'مغلق للأعضاء',
    description: 'لقاء حصري لأعضاء مجتمع Morphive لتبادل الخبرات والاحتفال بإنجازات العام.',
    status: 'دعوة خاصة'
  }
];

export default function EventsPage() {
  return (
    <div className="pt-24 min-h-screen bg-deep-blue text-white overflow-hidden selection:bg-caribbean selection:text-white pb-20">
      
      {/* Background gradients */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/4 -right-1/4 w-[800px] h-[800px] bg-caribbean/10 rounded-full blur-[150px]" />
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
            <span className="text-sm font-medium tracking-wide">الفعاليات والمؤتمرات</span>
          </motion.div>
          <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl font-heading mb-6 leading-tight">
            حيث تلتقي <span className="text-caribbean">العقول المبتكرة</span>
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-lg text-white/60 leading-relaxed">
            لا تفوت فرصة الحضور والمشاركة في فعالياتنا القادمة. ابنِ شبكة علاقات قوية وتعلم مباشرة من قادة الصناعة.
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
              <div className="absolute top-0 right-0 bottom-0 w-1 bg-caribbean transform scale-y-0 group-hover:scale-y-100 transition-transform origin-top" />

              {/* Date Block */}
              <div className="flex-shrink-0 text-center bg-surface-darker border border-white/10 rounded-2xl w-24 h-24 flex flex-col justify-center items-center shadow-lg group-hover:border-caribbean/50 transition-colors">
                <span className="text-sm text-caribbean font-bold">{event.date.split(' ')[1]}</span>
                <span className="text-3xl font-heading my-1">{event.date.split(' ')[0]}</span>
                <span className="text-xs text-white/50">{event.date.split(' ')[2]}</span>
              </div>

              {/* Content */}
              <div className="flex-grow">
                <div className="flex flex-wrap items-center gap-3 text-xs font-medium mb-3">
                  <span className="bg-white/10 text-white px-2 py-1 rounded">{event.type}</span>
                  <span className={`px-2 py-1 rounded ${event.status === 'متاح للتسجيل' ? 'bg-caribbean/20 text-caribbean' : 'bg-red-500/20 text-red-400'}`}>
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
                <button className={`w-full md:w-auto px-6 py-3 rounded-xl font-bold flex items-center justify-center gap-2 transition-all ${event.status === 'متاح للتسجيل' ? 'bg-caribbean text-deep-blue-dark hover:bg-caribbean-light' : 'bg-white/10 text-white/50 cursor-not-allowed'}`}>
                  {event.status === 'متاح للتسجيل' ? 'سجل الآن' : 'غير متاح'}
                  {event.status === 'متاح للتسجيل' && <ArrowLeft size={18} />}
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
