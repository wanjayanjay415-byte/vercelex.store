import PageWrapper from '../components/layout/PageWrapper';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const listVariants: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 15 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
};

const myVouchers = [
  { id: 'V-WELCOME', label: 'Welcome Bonus', desc: '10% off any single purchase', expiry: 'Expires in 2 days', active: true },
];

export default function Vouchers() {
  const navigate = useNavigate();

  return (
    <PageWrapper>
      {/* TopAppBar */}
      <header className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-xl border-b border-outline-variant/30">
        <div className="flex items-center justify-between px-4 h-14 w-full max-w-7xl mx-auto">
          <button onClick={() => navigate(-1)} className="p-2 text-on-surface-variant hover:bg-surface-container/50 rounded-full active:scale-95 transition-all">
            <span className="material-symbols-outlined text-2xl">arrow_back</span>
          </button>
          <div className="font-headline font-bold text-lg text-on-surface tracking-tight">Voucher Diskon</div>
          <button className="p-2 text-on-surface-variant hover:bg-surface-container/50 rounded-full active:scale-95 transition-all">
            <span className="material-symbols-outlined text-2xl">add</span>
          </button>
        </div>
      </header>

      <main className="pt-20 pb-32 px-5 max-w-2xl mx-auto min-h-screen">
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="mb-6 flex gap-2">
          <input 
            type="text" 
            placeholder="Enter promo code" 
            className="flex-1 px-4 py-3 bg-surface-container-low border border-outline-variant/30 rounded-xl focus:border-secondary focus:ring-1 focus:ring-secondary outline-none text-sm font-headline"
          />
          <button className="px-6 py-3 bg-secondary text-white font-bold text-sm rounded-xl active:scale-95 transition-transform shadow-md shadow-secondary/20">
            Apply
          </button>
        </motion.div>

        <div className="mb-4 flex items-center justify-between">
          <h3 className="font-headline font-bold text-lg text-on-surface">Voucher Aktif</h3>
          <span className="text-secondary text-xs font-bold bg-secondary/10 px-2 py-0.5 rounded-full">{myVouchers.length} Kupon</span>
        </div>

        <motion.div variants={listVariants} initial="hidden" animate="show" className="grid grid-cols-1 gap-4">
          {myVouchers.map((voucher) => (
            <motion.div key={voucher.id} variants={itemVariants} className="relative overflow-hidden bg-surface-container-low border border-outline-variant/10 rounded-2xl p-5 hover:border-secondary/20 transition-all group">
              {/* Decorative dash line */}
              <div className="absolute left-0 top-0 bottom-0 w-2 border-r-2 border-dashed border-outline-variant/20 group-hover:border-secondary/40 transition-colors"></div>
              
              <div className="pl-4 flex justify-between items-start">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="bg-secondary/10 text-secondary text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded">{voucher.id}</span>
                  </div>
                  <h4 className="font-headline font-bold text-base text-on-surface">{voucher.label}</h4>
                  <p className="text-sm text-on-surface-variant mt-0.5">{voucher.desc}</p>
                  
                  <div className="flex items-center gap-1.5 mt-3 text-orange-400">
                    <span className="material-symbols-outlined text-[14px]">schedule</span>
                    <span className="text-[10px] font-label font-bold uppercase tracking-widest">{voucher.expiry}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </main>
    </PageWrapper>
  );
}
