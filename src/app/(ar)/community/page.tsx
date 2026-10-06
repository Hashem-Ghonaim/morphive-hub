'use client';

import { motion } from 'framer-motion';
import { Users, MessagesSquare, Trophy, Network, ArrowLeft, Star } from 'lucide-react';
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

const benefits = [
  {
    icon: <Network size={24} />,
    title: 'تشبيك حصري (Networking)',
    description: 'تواصل مباشرة مع رواد أعمال، خبراء تقنيين، ومستثمرين في شبكة مغلقة تضمن جودة العلاقات والمصالح المتبادلة.'
  },
  {
    icon: <MessagesSquare size={24} />,
    title: 'جلسات استشارية شهرية',
    description: 'احصل على توجيه مباشر من فريق خبراء Morphive في جلسات جماعية شهرية للإجابة على تحديات عملك.'
  },
  {
    icon: <Trophy size={24} />,
    title: 'خصومات وأدوات حصرية',
    description: 'وصول مجاني لأدوات وتطبيقات متخصصة، وخصومات تصل لـ 100% على الكورسات والفعاليات المدفوعة.'
  }
];

export default function CommunityPage() {
  return (
    <div className="pt-24 min-h-screen bg-deep-blue text-white overflow-hidden selection:bg-caribbean selection:text-white pb-20">
      
      {/* Background gradients */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-caribbean/10 rounded-full blur-[150px] mix-blend-screen" />
        <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[150px] mix-blend-screen" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Header */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="text-center max-w-4xl mx-auto mb-20 pt-12"
        >
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
            <Star size={16} className="text-caribbean" />
            <span className="text-sm font-medium tracking-wide">مجتمع Morphive حصري</span>
          </motion.div>
          <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl lg:text-7xl font-heading mb-8 leading-tight">
            لا تبنِ شركتك <span className="text-caribbean">بمفردك</span> بعد اليوم
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-lg md:text-xl text-white/60 leading-relaxed mb-10 max-w-2xl mx-auto">
            انضم إلى مجتمع مغلق يضم نخبة من المؤسسين والمبتكرين. مكان واحد يجمع كل ما تحتاجه من توجيه، دعم، وعلاقات للوصول بشركتك للمستوى التالي.
          </motion.p>
          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto bg-caribbean text-deep-blue-dark px-10 py-4 rounded-xl font-bold text-lg hover:shadow-caribbean/30 hover:shadow-xl transition-all flex items-center justify-center gap-2">
              قدم طلب الانضمام الآن <ArrowLeft size={20} />
            </button>
            <p className="text-sm text-white/40 mt-4 sm:mt-0 sm:ml-4 text-center sm:text-right">
              * يخضع الانضمام للتقييم لضمان جودة وتجانس المجتمع.
            </p>
          </motion.div>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-24"
        >
          {benefits.map((benefit, idx) => (
            <motion.div 
              key={idx} 
              variants={fadeInUp} 
              className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-colors group relative overflow-hidden"
            >
              <div className="absolute -right-4 -top-4 w-24 h-24 bg-caribbean/10 rounded-full blur-2xl group-hover:bg-caribbean/20 transition-colors" />
              <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-caribbean mb-6 group-hover:scale-110 transition-transform shadow-lg relative z-10">
                {benefit.icon}
              </div>
              <h3 className="text-2xl font-heading mb-4 relative z-10">{benefit.title}</h3>
              <p className="text-white/60 leading-relaxed relative z-10">{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Social Proof / Stats */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="bg-gradient-to-br from-caribbean/20 to-deep-blue border border-caribbean/30 rounded-3xl p-10 max-w-5xl mx-auto text-center"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl md:text-5xl font-heading text-caribbean mb-2">+500</div>
              <div className="text-sm text-white/70">عضو نشط</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-heading text-white mb-2">24/7</div>
              <div className="text-sm text-white/70">دعم متواصل</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-heading text-white mb-2">12</div>
              <div className="text-sm text-white/70">فعالية سنوياً</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-heading text-caribbean mb-2">$0</div>
              <div className="text-sm text-white/70">تكلفة الانضمام للمقبولين</div>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
