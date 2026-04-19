import PageWrapper from '../components/layout/PageWrapper';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const listVariants: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -15 },
  show: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
};

const transactions: any[] = [];

export default function History() {
  const navigate = useNavigate();

  return (
    <PageWrapper>
      {/* TopAppBar */}
      <header className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-xl border-b border-outline-variant/30">
        <div className="flex items-center justify-between px-4 h-14 w-full max-w-7xl mx-auto">
          <button onClick={() => navigate(-1)} className="p-2 text-on-surface-variant hover:bg-surface-container/50 rounded-full active:scale-95 transition-all">
            <span className="material-symbols-outlined text-2xl">arrow_back</span>
          </button>
          <div className="font-headline font-bold text-lg text-on-surface tracking-tight">Transaction History</div>
          <button className="p-2 text-on-surface-variant hover:bg-surface-container/50 rounded-full active:scale-95 transition-all">
            <span className="material-symbols-outlined text-2xl">filter_list</span>
          </button>
        </div>
      </header>

      <main className="pt-20 pb-32 px-5 max-w-2xl mx-auto min-h-screen">
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="mb-6">
          <h2 className="text-2xl font-headline font-bold text-on-surface">Your Purchases</h2>
          <p className="text-sm text-on-surface-variant mt-1">Review your recent digital asset transactions.</p>
        </motion.div>

        <motion.div variants={listVariants} initial="hidden" animate="show" className="space-y-4">
          {transactions.length === 0 ? (
            <div className="bg-surface-container-low border border-outline-variant/10 p-12 rounded-xl flex flex-col items-center justify-center text-center mt-8">
              <span className="material-symbols-outlined text-6xl text-on-surface-variant mb-4">receipt_long</span>
              <h3 className="text-xl font-bold text-on-surface mb-2">No Transactions Yet</h3>
              <p className="text-on-surface-variant text-sm">Your transaction history is completely empty.</p>
            </div>
          ) : (
            transactions.map((trx) => (
              <motion.div 
                key={trx.id} 
                variants={itemVariants}
                className="bg-surface-container-low border border-outline-variant/10 rounded-2xl p-4 flex items-center gap-4 hover:bg-surface-container transition-colors group cursor-pointer"
              >
                <div className="w-12 h-12 rounded-xl bg-surface-container-high flex border border-outline-variant/10 items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-on-surface-variant group-hover:text-secondary transition-colors" style={{ fontVariationSettings: "'FILL' 1" }}>
                    {trx.icon}
                  </span>
                </div>
                
                <div className="flex-1 min-w-0">
                  <h3 className="font-headline font-bold text-sm text-on-surface truncate">{trx.title}</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-[10px] text-on-surface-variant font-label uppercase tracking-widest">{trx.id}</span>
                    <span className="w-1 h-1 rounded-full bg-outline-variant/50"></span>
                    <span className="text-[10px] text-on-surface-variant font-label uppercase tracking-widest">{trx.date}</span>
                  </div>
                </div>
                
                <div className="text-right flex flex-col items-end">
                  <span className="font-headline font-bold text-sm text-on-surface">{trx.amount}</span>
                  {trx.status === 'success' && (
                    <span className="text-[10px] font-bold uppercase tracking-wider text-green-500 mt-1 flex items-center gap-0.5"><span className="material-symbols-outlined text-[12px]">check_circle</span> Success</span>
                  )}
                  {trx.status === 'processing' && (
                    <span className="text-[10px] font-bold uppercase tracking-wider text-yellow-500 mt-1 flex items-center gap-0.5"><span className="material-symbols-outlined text-[12px]">schedule</span> Pending</span>
                  )}
                  {trx.status === 'failed' && (
                    <span className="text-[10px] font-bold uppercase tracking-wider text-error mt-1 flex items-center gap-0.5"><span className="material-symbols-outlined text-[12px]">error</span> Failed</span>
                  )}
                </div>
              </motion.div>
            ))
          )}
        </motion.div>
      </main>
    </PageWrapper>
  );
}
