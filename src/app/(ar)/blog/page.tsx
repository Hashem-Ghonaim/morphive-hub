'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, BookOpen, Calendar, ChevronLeft } from 'lucide-react';
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

const articles = [
  {
    id: 1,
    title: 'كيف تبني استراتيجية نمو مستدامة لشركتك الناشئة؟',
    category: 'حلول الأعمال',
    date: '12 أكتوبر 2026',
    readTime: '5 دقائق قراءة',
    excerpt: 'تعرف على أهم الخطوات العملية لبناء خطة نمو قابلة للتوسع وتجنب الأخطاء الشائعة التي يقع فيها رواد الأعمال في بداياتهم.',
    color: 'from-caribbean to-caribbean/60',
  },
  {
    id: 2,
    title: 'أهمية الإنتاج البصري في تعزيز هوية علامتك التجارية',
    category: 'الإنتاج البصري',
    date: '08 أكتوبر 2026',
    readTime: '3 دقائق قراءة',
    excerpt: 'اكتشف كيف يمكن للفيديوهات والصور عالية الجودة أن تغير نظرة العملاء لشركتك وتزيد من معدلات التحويل بشكل ملحوظ.',
    color: 'from-blue-400 to-indigo-500',
  },
  {
    id: 3,
    title: 'الأتمتة والذكاء الاصطناعي: مستقبل العمليات التشغيلية',
    category: 'التقنية',
    date: '01 أكتوبر 2026',
    readTime: '7 دقائق قراءة',
    excerpt: 'دليلك الشامل لدمج أدوات الذكاء الاصطناعي في عمليات شركتك اليومية لتقليل التكاليف وزيادة الإنتاجية.',
    color: 'from-purple-500 to-pink-500',
  },
  {
    id: 4,
    title: 'دليل شامل لتحليل السوق والمنافسين',
    category: 'حلول الأعمال',
    date: '28 سبتمبر 2026',
    readTime: '6 دقائق قراءة',
    excerpt: 'استراتيجيات وأدوات مجانية ومدفوعة تساعدك على فهم موقعك الحقيقي في السوق والتفوق على منافسيك.',
    color: 'from-orange-400 to-red-500',
  },
  {
    id: 5,
    title: 'كيف تختار التكنولوجيا المناسبة لمشروعك؟',
    category: 'التقنية',
    date: '20 سبتمبر 2026',
    readTime: '4 دقائق قراءة',
    excerpt: 'معايير اختيار لغات البرمجة وأدوات التطوير التي تضمن سرعة الإنجاز وسهولة الصيانة في المستقبل.',
    color: 'from-emerald-400 to-teal-500',
  },
  {
    id: 6,
    title: 'فن بناء المشاريع (Venture Building) من الصفر',
    category: 'بناء المشاريع',
    date: '15 سبتمبر 2026',
    readTime: '8 دقائق قراءة',
    excerpt: 'نظرة متعمقة على نموذج بناء المشاريع وكيف يختلف عن حاضنات ومسرعات الأعمال التقليدية.',
    color: 'from-amber-400 to-orange-500',
  }
];

export default function BlogPage() {
  return (
    <div className="pt-24 min-h-screen bg-deep-blue text-white overflow-hidden selection:bg-caribbean selection:text-white pb-20">
      {/* Background gradients */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-caribbean/10 rounded-full blur-[120px] mix-blend-screen" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[150px] mix-blend-screen" />
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
            <BookOpen size={16} className="text-caribbean" />
            <span className="text-sm font-medium tracking-wide">المدونة والمقالات</span>
          </motion.div>
          <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl font-heading mb-6 leading-tight">
            رؤى وأفكار تقودك <span className="text-caribbean">نحو القمة</span>
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-lg text-white/60 leading-relaxed">
            استكشف أحدث المقالات، التحليلات، والأدلة العملية في مجالات الأعمال، التكنولوجيا، والإنتاج البصري من خبراء Morphive.
          </motion.p>
        </motion.div>

        {/* Featured Article */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="mb-20"
        >
          <div className="group relative rounded-3xl overflow-hidden bg-white/5 border border-white/10 p-1">
            <div className="absolute inset-0 bg-gradient-to-br from-caribbean/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6 lg:p-12 items-center relative z-10">
              <div className="order-2 lg:order-1 space-y-6">
                <div className="flex flex-wrap items-center gap-4 text-sm">
                  <span className="px-3 py-1 rounded-full bg-caribbean/20 text-caribbean font-medium">مقال مميز</span>
                  <span className="flex items-center gap-2 text-white/50"><Calendar size={14} /> 15 أكتوبر 2026</span>
                </div>
                <h2 className="text-3xl lg:text-4xl font-heading leading-tight group-hover:text-caribbean transition-colors">
                  دليلك الشامل لدمج الذكاء الاصطناعي في عمليات شركتك
                </h2>
                <p className="text-white/60 text-lg leading-relaxed">
                  كيف يمكن للذكاء الاصطناعي أن يقلل التكاليف التشغيلية بنسبة تزيد عن 30%؟ في هذا المقال نستعرض أهم الأدوات والاستراتيجيات التي يمكنك تطبيقها اليوم لضمان تفوق شركتك في المستقبل.
                </p>
                <Link href="#" className="inline-flex items-center gap-2 text-caribbean font-bold hover:text-white transition-colors">
                  اقرأ المقال كاملاً <ArrowLeft size={18} />
                </Link>
              </div>
              <div className="order-1 lg:order-2">
                <div className="aspect-video lg:aspect-square rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 w-full relative overflow-hidden shadow-2xl">
                  {/* Decorative Elements */}
                  <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-30 mix-blend-overlay"></div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-white/20 blur-3xl rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Articles Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {articles.map((article) => (
            <motion.div key={article.id} variants={fadeInUp} className="group flex flex-col h-full bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-caribbean/50 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-caribbean/10">
              {/* Card Image Replacement */}
              <div className={`h-48 w-full bg-gradient-to-br ${article.color} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20 mix-blend-overlay"></div>
                <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-md text-white text-xs font-medium px-3 py-1.5 rounded-full">
                  {article.category}
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center justify-between text-xs text-white/50 mb-4">
                  <span className="flex items-center gap-1.5"><Calendar size={12} /> {article.date}</span>
                  <span>{article.readTime}</span>
                </div>
                
                <h3 className="text-xl font-heading mb-3 group-hover:text-caribbean transition-colors leading-snug">
                  {article.title}
                </h3>
                
                <p className="text-white/60 text-sm leading-relaxed mb-6 flex-grow">
                  {article.excerpt}
                </p>
                
                <div className="pt-4 border-t border-white/10 mt-auto">
                  <Link href="#" className="flex items-center justify-between text-white group-hover:text-caribbean transition-colors font-medium text-sm w-full">
                    اقرأ المزيد
                    <ChevronLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Load More */}
        <div className="mt-16 text-center">
          <button className="px-8 py-3 rounded-xl border border-white/20 text-white hover:bg-white/5 transition-all font-medium">
            عرض المزيد من المقالات
          </button>
        </div>

      </div>
    </div>
  );
}
