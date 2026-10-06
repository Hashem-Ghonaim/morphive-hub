'use client';

import { motion } from 'framer-motion';
import { PlayCircle, Clock, Star, Users, ArrowLeft } from 'lucide-react';
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

const courses = [
  {
    id: 1,
    title: 'إدارة العمليات وبناء فرق العمل عن بعد',
    instructor: 'مصطفى البنا',
    rating: '4.9',
    students: '1,200+',
    duration: '12 ساعة',
    level: 'متقدم',
    price: 'مجاني للأعضاء',
    imageGradient: 'from-blue-600 to-cyan-500'
  },
  {
    id: 2,
    title: 'أساسيات الإنتاج البصري للشركات الناشئة',
    instructor: 'هاشم غنيم',
    rating: '4.8',
    students: '850+',
    duration: '8 ساعات',
    level: 'مبتدئ',
    price: '$49',
    imageGradient: 'from-purple-600 to-pink-500'
  },
  {
    id: 3,
    title: 'استراتيجيات التسويق الرقمي وبناء العلامة',
    instructor: 'مصطفى علي',
    rating: '5.0',
    students: '2,100+',
    duration: '15 ساعة',
    level: 'متوسط',
    price: '$79',
    imageGradient: 'from-orange-500 to-yellow-500'
  },
  {
    id: 4,
    title: 'تأسيس المشاريع التقنية (Venture Building)',
    instructor: 'فريق Morphive',
    rating: '4.9',
    students: '500+',
    duration: '20 ساعة',
    level: 'متقدم',
    price: '$99',
    imageGradient: 'from-emerald-500 to-teal-500'
  }
];

export default function CoursesPage() {
  return (
    <div className="pt-24 min-h-screen bg-deep-blue text-white overflow-hidden selection:bg-caribbean selection:text-white pb-20">
      
      {/* Background gradients */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-caribbean/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[150px]" />
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
            <PlayCircle size={16} className="text-caribbean" />
            <span className="text-sm font-medium tracking-wide">أكاديمية Morphive</span>
          </motion.div>
          <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl font-heading mb-6 leading-tight">
            تعلم من <span className="text-caribbean">الخبراء الفعليين</span> في السوق
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-lg text-white/60 leading-relaxed mb-8">
            دورات تدريبية مكثفة مبنية على خبرات عملية ومشاريع حقيقية. استثمر في مهاراتك اليوم مع برامجنا التعليمية المتخصصة.
          </motion.p>
          <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-4">
            <button className="bg-caribbean text-deep-blue-dark px-8 py-3 rounded-xl font-bold hover:shadow-caribbean/30 hover:shadow-lg transition-all">
              تصفح الكورسات
            </button>
            <button className="bg-white/5 border border-white/10 px-8 py-3 rounded-xl font-medium hover:bg-white/10 transition-all">
              اكتشف مسارات التعلم
            </button>
          </motion.div>
        </motion.div>

        {/* Categories / Filters (Static for now) */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="flex flex-wrap items-center justify-center gap-3 mb-12"
        >
          {['الكل', 'إدارة وتخطيط', 'تسويق رقمي', 'إنتاج بصري', 'تقنية وبرمجة'].map((cat, idx) => (
            <button 
              key={idx} 
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${idx === 0 ? 'bg-caribbean text-deep-blue-dark' : 'bg-white/5 text-white/70 hover:text-white hover:bg-white/10 border border-white/10'}`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Courses Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {courses.map((course) => (
            <motion.div key={course.id} variants={fadeInUp} className="group flex flex-col bg-surface-darker border border-white/10 rounded-3xl overflow-hidden hover:border-caribbean/50 transition-all hover:-translate-y-2 hover:shadow-2xl hover:shadow-caribbean/10 relative">
              
              {/* Image Area */}
              <div className={`h-40 w-full bg-gradient-to-br ${course.imageGradient} relative p-4 flex flex-col justify-between`}>
                <div className="absolute inset-0 bg-black/10 mix-blend-overlay"></div>
                <div className="relative z-10 flex justify-between items-start w-full">
                  <span className="bg-white/20 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full">
                    {course.level}
                  </span>
                  <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:scale-110">
                    <PlayCircle size={20} className="text-white" />
                  </div>
                </div>
              </div>

              {/* Content Area */}
              <div className="p-5 flex flex-col flex-grow">
                <div className="flex items-center gap-4 text-xs text-white/50 mb-3">
                  <span className="flex items-center gap-1"><Clock size={14} /> {course.duration}</span>
                  <span className="flex items-center gap-1"><Users size={14} /> {course.students}</span>
                </div>
                
                <h3 className="text-lg font-heading mb-2 leading-snug group-hover:text-caribbean transition-colors flex-grow">
                  {course.title}
                </h3>
                
                <p className="text-sm text-white/50 mb-5">
                  بواسطة: <span className="text-white/80">{course.instructor}</span>
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <div className="flex items-center gap-1 text-yellow-400 text-sm font-medium">
                    <Star size={16} className="fill-current" />
                    {course.rating}
                  </div>
                  <div className="text-caribbean font-bold">
                    {course.price}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Promo Section */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mt-24 relative rounded-3xl overflow-hidden bg-white/5 border border-white/10 p-8 md:p-12 text-center"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-caribbean/10 to-transparent pointer-events-none" />
          <h2 className="text-3xl font-heading mb-4 relative z-10">انضم لمجتمع Morphive واحصل على كورسات مجانية</h2>
          <p className="text-white/60 mb-8 max-w-xl mx-auto relative z-10">أعضاء المجتمع بيحصلوا على خصومات تصل لـ 100% على كورسات مختارة، بالإضافة للوصول لورش عمل سرية وموارد حصرية.</p>
          <Link href="/community" className="inline-flex items-center gap-2 bg-caribbean text-deep-blue-dark px-8 py-3 rounded-xl font-bold hover:bg-caribbean-light transition-colors relative z-10">
            انضم للمجتمع الآن <ArrowLeft size={20} />
          </Link>
        </motion.div>

      </div>
    </div>
  );
}
