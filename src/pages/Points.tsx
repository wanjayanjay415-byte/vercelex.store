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

const pointRewards = [
  { id: 1, title: '$5 Store Credit', type: 'balance', points: 500, color: 'text-green-400', bg: 'bg-green-400/10' },
  { id: 2, title: '15% Off VPN Plan', type: 'discount', points: 300, color: 'text-tertiary', bg: 'bg-tertiary/10' },
  { id: 3, title: '$10 Store Credit', type: 'balance', points: 950, color: 'text-green-400', bg: 'bg-green-400/10' },
  { id: 4, title: 'Free Asset Bundle', type: 'gift', points: 1500, color: 'text-orange-400', bg: 'bg-orange-400/10' },
];

export default function Points() {
  const navigate = useNavigate();

  return (
    <PageWrapper>
      {/* TopAppBar */}
      <header className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-xl border-b border-outline-variant/30">
        <div className="flex items-center justify-between px-4 h-14 w-full max-w-7xl mx-auto">
          <button onClick={() => navigate(-1)} className="p-2 text-on-surface-variant hover:bg-surface-container/50 rounded-full active:scale-95 transition-all">
            <span className="material-symbols-outlined text-2xl">arrow_back</span>
          </button>
          <div className="font-headline font-bold text-lg text-on-surface tracking-tight">Poin Belanja</div>
          <button className="p-2 text-on-surface-variant hover:bg-surface-container/50 rounded-full active:scale-95 transition-all opacity-0">
            <span className="material-symbols-outlined text-2xl">info</span>
          </button>
        </div>
      </header>

      <main className="pt-20 pb-32 px-5 max-w-2xl mx-auto min-h-screen">
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="flex flex-col items-center mt-4 mb-8">
          <div className="w-24 h-24 mb-4 relative flex items-center justify-center">
            <div className="absolute inset-0 bg-secondary/30 rounded-full blur-2xl animate-pulse"></div>
            <div className="w-20 h-20 bg-gradient-to-br from-secondary to-[#3b0764] rounded-full flex items-center justify-center shadow-lg shadow-secondary/50 border-4 border-surface shadow-[0_0_30px_rgba(112,42,225,0.4)]">
              <span className="material-symbols-outlined text-4xl text-white">stars</span>
            </div>
          </div>
          <p className="text-on-surface-variant text-sm font-label uppercase tracking-widest">Total Poin Aktif</p>
          <h2 className="text-4xl font-headline font-bold text-on-surface mt-1 tracking-tighter">0 <span className="text-lg text-secondary">pts</span></h2>
        </motion.div>

        <div className="mb-6">
          <h3 className="font-headline font-bold text-lg text-on-surface">Tukar Poin</h3>
          <p className="text-sm text-on-surface-variant mt-0.5">Tukarkan poin Anda dengan voucher diskon atau saldo.</p>
        </div>

        <motion.div variants={listVariants} initial="hidden" animate="show" className="grid grid-cols-1 gap-4">
          {pointRewards.map((reward) => (
            <motion.div key={reward.id} variants={itemVariants} className="bg-surface-container-low border border-outline-variant/10 rounded-2xl p-4 flex items-center gap-4 hover:border-secondary/30 transition-all cursor-pointer">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${reward.bg}`}>
                <span className={`material-symbols-outlined ${reward.color}`}>
                  {reward.type === 'balance' ? 'account_balance_wallet' : reward.type === 'discount' ? 'percent' : 'card_giftcard'}
                </span>
              </div>
              <div className="flex-1">
                <h4 className="font-headline font-bold text-sm text-on-surface opacity-50">{reward.title}</h4>
                <p className="text-xs text-on-surface-variant mt-0.5 opacity-50">{reward.points} pts required</p>
              </div>
              <button disabled className="px-4 py-2 bg-surface-container-high text-on-surface-variant text-xs font-bold rounded-full opacity-50 cursor-not-allowed border border-outline-variant/10">
                Locked
              </button>
            </motion.div>
          ))}
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="mt-8 bg-tertiary/10 border border-tertiary/20 rounded-2xl p-4 flex items-start gap-3">
          <span className="material-symbols-outlined text-tertiary shrink-0">info</span>
          <p className="text-xs text-on-surface-variant leading-relaxed">
            Poin dijumlahkan secara otomatis untuk setiap pembelian barang. Masa aktif poin adalah 1 tahun sejak diperoleh.
          </p>
        </motion.div>
      </main>
    </PageWrapper>
  );
}
