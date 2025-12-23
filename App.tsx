
import React, { useState, useEffect } from 'react';
import { Hero } from './components/Hero';
import { ScientificSection } from './components/ScientificSection';
import { NeuralPath } from './components/NeuralPath';
import { StatsLandscape } from './components/StatsLandscape';
import { FeedbackPortal } from './components/FeedbackPortal';
import { Globe, BookOpen, ExternalLink, Cpu, Microscope } from 'lucide-react';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen relative selection:bg-amber-200/50 overflow-x-hidden">
      {/* Navigation Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1.5 bg-amber-50 z-50">
        <div 
          className="h-full bg-gradient-to-r from-amber-600 to-amber-400 transition-all duration-300 shadow-[0_0_15px_rgba(217,119,6,0.3)]" 
          style={{ width: `${Math.min(100, (isScrolled ? 100 : 0))}%` }} 
        />
      </div>

      <main className="max-w-6xl mx-auto px-5 sm:px-8 py-8 md:py-12 space-y-24 md:space-y-40">
        <Hero />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
          <ScientificSection 
            title="الركيزة المورفولوجية" 
            icon={<Microscope className="text-amber-700" size={28} />}
            description="تعتمد المنهجية البحثية على ترميم العجز العضوي للقشرة البصرية (V1) من خلال استحثاث خلايا جلد المريض جينياً. عبر معاملات ياماناكا، يتم خلق أنسجة حية ومطابقة وراثياً، لتعويض المسارات البصرية المعطلة منذ عقود."
            accentColor="border-amber-600"
          />
          <ScientificSection 
            title="آلية التزامن السيبراني" 
            icon={<Cpu className="text-amber-600" size={28} />}
            description="يمثل نظام BCI الركيزة التشغيلية؛ حيث يبث ترددات تحاكي الحالة الكيميائية والكهربائية للدماغ في الطفولة، لإجبار الدماغ البالغ على إعادة الدخول في مرحلة اللدونة العصبية."
            accentColor="border-amber-500"
          />
        </div>

        <NeuralPath />

        <StatsLandscape />

        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 md:gap-6 py-8">
          {[
            { label: "المرجع العلمي العالمي", icon: <BookOpen size={18} />, url: "https://pubmed.ncbi.nlm.nih.gov/31704700/" },
            { label: "رؤية أطلس 2025", icon: <Globe size={18} />, url: "https://www.iapb.org/learn/vision-atlas/" },
            { label: "اعتماد FDA السيبراني", icon: <ExternalLink size={18} />, url: "https://www.medicaldevice-network.com/news/neuralink-obtains-breakthrough-designation-fda-blindsight-device/" }
          ].map((link, i) => (
            <a 
              key={i}
              href={link.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-full sm:w-auto px-6 py-4 rounded-2xl border border-amber-100 bg-white/40 hover:bg-white/80 hover:border-amber-400 text-slate-700 transition-all duration-300 flex items-center justify-center gap-3 text-sm font-medium backdrop-blur-md shadow-sm active:scale-95"
            >
              {link.icon} {link.label}
            </a>
          ))}
        </div>

        <FeedbackPortal />
      </main>

      <footer className="text-center py-16 md:py-24 px-6 border-t border-amber-100 bg-amber-50/20">
        <div className="max-w-2xl mx-auto space-y-6">
          <div className="w-12 h-1 bg-amber-200 mx-auto rounded-full"></div>
          <p className="text-slate-600 text-xs md:text-sm leading-relaxed px-4">
            مشروع بحثي علمي - مدارس المعرفة الأهلية بمكة المكرمة <br/>
            بإشراف مؤسسة موهبة 2025 | حسين عبدالله المانع
          </p>
          <p className="font-mono text-[9px] md:text-[10px] text-amber-800/40 uppercase tracking-[0.3em] md:tracking-[0.5em]">
            Advancing Human Evolution via Bio-Cybernetics
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
