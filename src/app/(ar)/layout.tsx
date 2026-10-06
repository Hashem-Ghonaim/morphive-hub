import type { Metadata } from 'next';
import { Barlow_Condensed, Arapey, Alexandria } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronDown, Mail, MapPin } from 'lucide-react';
import '../globals.css';

const barlow = Barlow_Condensed({ 
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  variable: '--font-barlow',
  display: 'swap',
});

const arapey = Arapey({ 
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-arapey',
  display: 'swap',
});

const alexandria = Alexandria({ 
  subsets: ['latin', 'arabic'],
  variable: '--font-alexandria',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Morphive Business Hub',
  description: 'We morph. You thrive. Strategy, Tech, Operations, and Visual Production.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Hardcoding Arabic for this example, or relying on HTML dir
  return (
    <html lang="ar" dir="rtl" className={`${barlow.variable} ${arapey.variable} ${alexandria.variable}`}>
      <body className="antialiased min-h-screen flex flex-col selection:bg-caribbean selection:text-white">
        {/* Full-Width Modern Navbar */}
        <header className="fixed top-0 left-0 right-0 z-50 w-full text-white bg-deep-blue/90 backdrop-blur-xl border-b border-white/10 shadow-lg">
          <div className="w-full px-6 md:px-12 py-3 flex items-center justify-between max-w-[1920px] mx-auto">
            
            {/* Right: Logo Area */}
            <Link href="/" className="flex items-center gap-3 cursor-pointer group">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center overflow-hidden relative shadow-lg group-hover:shadow-caribbean/30 transition-all group-hover:scale-105">
                <Image src="/logos/logo.png" alt="Morphive Logo" fill className="object-contain p-2" />
              </div>
              <div className="flex flex-col justify-center mt-1" dir="ltr">
                <div className="text-2xl font-bold font-heading tracking-wider leading-none group-hover:text-caribbean transition-colors">MORPHIVE</div>
                <div className="text-[10px] text-white/70 tracking-[0.2em] font-heading mt-1 uppercase">Business Hub</div>
              </div>
            </Link>

            {/* Middle: Navigation */}
            <nav className="hidden md:flex items-center gap-6 lg:gap-8 font-medium">
              
              {/* من نحن Dropdown */}
              <div className="relative group py-2">
                <button className="flex items-center gap-1 hover:text-caribbean transition-colors">
                  من نحن <ChevronDown size={16} className="group-hover:rotate-180 transition-transform" />
                </button>
                <div className="absolute top-full right-0 mt-2 w-48 bg-surface-darker/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all overflow-hidden flex flex-col p-2 translate-y-2 group-hover:translate-y-0">
                  <Link href="/about" className="px-4 py-2 hover:bg-white/5 rounded-xl hover:text-caribbean transition-colors">من نحن</Link>
                  <a href="/about#team" className="px-4 py-2 hover:bg-white/5 rounded-xl hover:text-caribbean transition-colors">المؤسسون</a>
                  <a href="/about#clients" className="px-4 py-2 hover:bg-white/5 rounded-xl hover:text-caribbean transition-colors">عملاؤنا</a>
                </div>
              </div>

              {/* الخدمات Dropdown */}
              <div className="relative group py-2">
                <button className="flex items-center gap-1 hover:text-caribbean transition-colors">
                  الخدمات <ChevronDown size={16} className="group-hover:rotate-180 transition-transform" />
                </button>
                <div className="absolute top-full right-0 mt-2 w-56 bg-surface-darker/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all overflow-hidden flex flex-col p-2 translate-y-2 group-hover:translate-y-0">
                  <Link href="/services" className="px-4 py-2 hover:bg-white/5 rounded-xl hover:text-caribbean transition-colors">كل الخدمات</Link>
                  <a href="/services#business" className="px-4 py-2 hover:bg-white/5 rounded-xl hover:text-caribbean transition-colors text-sm">حلول الأعمال والتسويق</a>
                  <a href="/services#visual" className="px-4 py-2 hover:bg-white/5 rounded-xl hover:text-caribbean transition-colors text-sm">الإنتاج البصري السينمائي</a>
                  <a href="/services#tech" className="px-4 py-2 hover:bg-white/5 rounded-xl hover:text-caribbean transition-colors text-sm">التقنية والعمليات</a>
                  <a href="/services#venture" className="px-4 py-2 hover:bg-white/5 rounded-xl hover:text-caribbean transition-colors text-sm">بناء المشاريع</a>
                </div>
              </div>

              {/* أعمالنا */}
              <Link href="/work" className="py-2 hover:text-caribbean transition-colors">أعمالنا</Link>

              {/* المحتوى والتعلّم Dropdown */}
              <div className="relative group py-2">
                <button className="flex items-center gap-1 hover:text-caribbean transition-colors">
                  المحتوى والتعلّم <ChevronDown size={16} className="group-hover:rotate-180 transition-transform" />
                </button>
                <div className="absolute top-full right-0 mt-2 w-48 bg-surface-darker/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all overflow-hidden flex flex-col p-2 translate-y-2 group-hover:translate-y-0">
                  <Link href="/blog" className="px-4 py-2 hover:bg-white/5 rounded-xl hover:text-caribbean transition-colors">المدونة</Link>
                  <Link href="/tools" className="px-4 py-2 hover:bg-white/5 rounded-xl hover:text-caribbean transition-colors">الأدوات</Link>
                  <Link href="/courses" className="px-4 py-2 hover:bg-white/5 rounded-xl hover:text-caribbean transition-colors">الكورسات</Link>
                  <Link href="/events" className="px-4 py-2 hover:bg-white/5 rounded-xl hover:text-caribbean transition-colors">الفعاليات</Link>
                </div>
              </div>

              {/* المجتمع و تواصل */}
              <Link href="/community" className="py-2 hover:text-caribbean transition-colors">المجتمع</Link>
              <Link href="/contact" className="py-2 hover:text-caribbean transition-colors">تواصل</Link>

            </nav>

            {/* Left: Actions */}
            <div className="flex items-center gap-4">
              <Link href="/en" className="hidden md:flex items-center px-2 py-2 text-sm text-white/70 hover:text-white transition-colors" dir="ltr">
                EN
              </Link>
              <Link href="/contact" className="bg-caribbean text-deep-blue-dark px-6 py-2.5 rounded-full font-bold hover:bg-caribbean-light transition-all shadow-lg hover:shadow-caribbean/50 flex items-center text-sm">
                احجز Morph Audit
              </Link>
            </div>

          </div>
        </header>

        <main className="flex-grow">
          {children}
        </main>

        <footer className="bg-surface-darker text-white py-16 border-t border-white/10 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-caribbean/5 via-surface-darker to-surface-darker opacity-50 pointer-events-none" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-heading mb-4 leading-normal">مستعد للخطوة القادمة؟</h2>
              <p className="text-white/60 mb-10">تواصل معنا اليوم لتحويل تحدياتك إلى نمو حقيقي ومستدام.</p>
              
              <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 w-full mb-12">
                <a href="mailto:info@morphivehub.com" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-caribbean/10 group-hover:border-caribbean/30 group-hover:scale-110 transition-all shadow-lg">
                    <Mail size={20} className="text-caribbean" />
                  </div>
                  <span className="text-lg text-white/80 group-hover:text-white font-medium transition-colors tracking-wide" dir="ltr">info@morphivehub.com</span>
                </a>

                <div className="flex items-center gap-4 group cursor-default">
                  <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-caribbean/10 group-hover:border-caribbean/30 group-hover:scale-110 transition-all shadow-lg">
                    <MapPin size={20} className="text-caribbean" />
                  </div>
                  <span className="text-lg text-white/80 group-hover:text-white font-medium transition-colors">مدينة نصر - شبين الكوم</span>
                </div>
              </div>
            </div>
            
            <div className="pt-8 border-t border-white/10 text-center">
              <p className="text-sm text-white/40">© 2026 Morphive Business Hub. جميع الحقوق محفوظة.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
