import { useEffect, useState } from 'react';
import PageWrapper from '../components/layout/PageWrapper';
import { motion, AnimatePresence } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const listVariants: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 15 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
};

interface TelegramUser {
  id: number;
  first_name: string;
  last_name?: string;
  username?: string;
  photo_url?: string;
}

export default function Profile() {
  const navigate = useNavigate();
  const [tgUser, setTgUser] = useState<TelegramUser | null>(null);
  const [isLangSheetOpen, setIsLangSheetOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const langNames = {
    id: "Indo",
    en: "English",
    hi: "India",
    ja: "Japanese",
    ko: "Korea",
    ru: "Russia"
  };

  useEffect(() => {
    // Detect telegram environment
    const tg = window.Telegram?.WebApp;
    if (tg && tg.initDataUnsafe?.user) {
      setTgUser(tg.initDataUnsafe.user);
      // Let the App expand so it looks nice natively in telegram
      tg.expand(); 
    }
  }, []);

  return (
    <PageWrapper>
      {/* TopAppBar */}
      <header className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-xl border-b border-outline-variant/30">
        <div className="flex items-center justify-between px-4 h-14 w-full max-w-7xl mx-auto">
          <button onClick={() => navigate(-1)} className="p-2 text-on-surface-variant hover:bg-surface-container/50 rounded-full active:scale-95 transition-all">
            <span className="material-symbols-outlined text-2xl">arrow_back</span>
          </button>
          <div className="font-headline font-bold text-lg text-on-surface tracking-tight">{t('navProfile')}</div>
          <button className="p-2 text-on-surface-variant hover:bg-surface-container/50 rounded-full active:scale-95 transition-all">
            <span className="material-symbols-outlined text-2xl">settings</span>
          </button>
        </div>
      </header>

      <main className="pt-20 pb-32 px-5 max-w-2xl mx-auto min-h-screen">
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="flex flex-col items-center mt-6 mb-10">
          <div className="w-24 h-24 rounded-[2rem] bg-surface-container border-2 border-secondary/30 relative overflow-hidden shadow-lg shadow-secondary/10 flex items-center justify-center p-1">
            {tgUser?.photo_url ? (
              <img src={tgUser.photo_url} alt={tgUser.first_name} className="w-full h-full object-cover rounded-[1.75rem]" />
            ) : (
              <div className="w-full h-full rounded-[1.75rem] bg-secondary/10 flex items-center justify-center">
                <span className="material-symbols-outlined text-4xl text-secondary">person</span>
              </div>
            )}
          </div>
          <h2 className="text-2xl font-headline font-bold text-on-surface mt-4 tracking-tight">
            {tgUser ? `${tgUser.first_name} ${tgUser.last_name || ''}` : 'Guest User'}
          </h2>
          <div className="flex items-center gap-1.5 mt-1">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
            <p className="text-sm font-label text-on-surface-variant">
              {tgUser?.username ? `@${tgUser.username}` : 'Not connected to Telegram'}
            </p>
          </div>
        </motion.div>

        {/* Profile Menu Actions */}
        <motion.div variants={listVariants} initial="hidden" animate="show" className="space-y-3">
          
          <motion.div variants={itemVariants} onClick={() => navigate('/points')} className="bg-surface-container-low border border-outline-variant/10 rounded-2xl p-4 flex items-center justify-between hover:bg-surface-container cursor-pointer transition-colors active:scale-[0.98]">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>stars</span>
              </div>
              <div>
                <h4 className="font-headline font-bold text-sm text-on-surface">{t('profilePoints')}</h4>
                <p className="font-label text-xs text-on-surface-variant mt-0.5">0 pts</p>
              </div>
            </div>
            <span className="material-symbols-outlined text-outline-variant">chevron_right</span>
          </motion.div>

          <motion.div variants={itemVariants} onClick={() => navigate('/vouchers')} className="bg-surface-container-low border border-outline-variant/10 rounded-2xl p-4 flex items-center justify-between hover:bg-surface-container cursor-pointer transition-colors active:scale-[0.98]">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-tertiary/10 text-tertiary flex items-center justify-center">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>local_activity</span>
              </div>
              <div>
                <h4 className="font-headline font-bold text-sm text-on-surface">{t('profileVouchers')}</h4>
                <p className="font-label text-xs text-on-surface-variant mt-0.5">1 Active</p>
              </div>
            </div>
            <span className="material-symbols-outlined text-outline-variant">chevron_right</span>
          </motion.div>

          <motion.div variants={itemVariants} onClick={() => setIsLangSheetOpen(true)} className="bg-surface-container-low border border-outline-variant/10 rounded-2xl p-4 flex items-center justify-between hover:bg-surface-container cursor-pointer transition-colors active:scale-[0.98]">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-orange-500/10 text-orange-500 flex items-center justify-center">
                 <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>language</span>
              </div>
              <div>
                <h4 className="font-headline font-bold text-sm text-on-surface">{t('profileLanguage')}</h4>
                <p className="font-label text-[10px] text-secondary mt-0.5 font-bold tracking-widest uppercase">{langNames[language as keyof typeof langNames]}</p>
              </div>
            </div>
            <span className="material-symbols-outlined text-outline-variant">chevron_right</span>
          </motion.div>

        </motion.div>
      </main>

      <AnimatePresence>
        {isLangSheetOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }} 
              onClick={() => setIsLangSheetOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]" 
            />
            <motion.div 
              initial={{ y: "100%" }} 
              animate={{ y: 0, transition: { type: "spring", damping: 25, stiffness: 200 } }} 
              exit={{ y: "100%" }} 
              className="fixed bottom-0 left-0 right-0 max-w-2xl mx-auto bg-surface rounded-t-3xl border-t border-outline-variant/30 px-5 pt-4 pb-safe z-[101] shadow-[0_-10px_40px_rgba(0,0,0,0.5)]"
            >
              <div className="w-12 h-1.5 bg-outline-variant/50 rounded-full mx-auto mb-6"></div>
              <h3 className="text-xl font-headline font-bold text-on-surface mb-4">Select Language</h3>
              <div className="space-y-2 mb-8">
                {(Object.entries(langNames)).map(([code, name]) => (
                  <button 
                    key={code}
                    onClick={() => {
                      setLanguage(code as keyof typeof langNames);
                      setIsLangSheetOpen(false);
                    }}
                    className={`w-full text-left p-4 rounded-xl font-headline text-sm font-bold transition-all flex items-center justify-between ${language === code ? 'bg-secondary/20 border-secondary border text-secondary' : 'bg-surface-container-low border border-outline-variant/10 text-on-surface'}`}
                  >
                    {name}
                    {language === code && <span className="material-symbols-outlined text-[16px]">check_circle</span>}
                  </button>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </PageWrapper>
  );
}
