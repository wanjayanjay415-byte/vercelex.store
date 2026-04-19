import PageWrapper from '../components/layout/PageWrapper';
import BottomNav from '../components/layout/BottomNav';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useCurrency } from '../hooks/useCurrency';
import { useLanguage } from '../context/LanguageContext';

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function Checkout() {
  const navigate = useNavigate();
  const { cartItems } = useCart();
  const { formatPrice } = useCurrency();
  const [selectedMethod, setSelectedMethod] = useState<'qris' | 'crypto'>('qris');
  const [contactInfo, setContactInfo] = useState('');
  const [toastMessage, setToastMessage] = useState('');
  const { t } = useLanguage();

  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const serviceFee = 500; // Fixed 500 IDR
  const total = subtotal + serviceFee;

  const handleCheckout = () => {
    if (!contactInfo) {
      setToastMessage(t('toastContactRequired'));
      setTimeout(() => setToastMessage(''), 3000);
      return;
    }
    // Lanjut ke QRPayment dengan method yang dipilih dan amount
    navigate('/payment', { state: { method: selectedMethod, total } });
  };

  return (
    <PageWrapper>
      {/* Center Toast Notification */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.85 }}
            transition={{ type: 'spring', stiffness: 400, damping: 25 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center px-6 pointer-events-none"
          >
            <div className="bg-surface-container-highest/95 backdrop-blur-2xl border border-outline-variant/20 rounded-2xl px-6 py-5 shadow-2xl shadow-black/40 max-w-sm w-full text-center pointer-events-auto">
              <span className="material-symbols-outlined text-4xl text-error mb-3 block" style={{ fontVariationSettings: "'FILL' 1" }}>warning</span>
              <p className="text-sm font-bold text-on-surface leading-relaxed">{toastMessage}</p>
              <button onClick={() => setToastMessage('')} className="mt-4 px-6 py-2 rounded-full bg-secondary/20 text-secondary text-xs font-bold uppercase tracking-wider hover:bg-secondary/30 transition-colors">{t('toastOk')}</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* TopAppBar */}
      <header className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-xl shadow-sm border-b border-outline-variant/30">
        <div className="flex items-center justify-between px-6 h-16 w-full max-w-7xl mx-auto">
          <div className="flex items-center gap-4">
            <button onClick={() => navigate(-1)} className="text-on-surface-variant active:scale-95 transition-transform duration-200">
              <span className="material-symbols-outlined">arrow_back</span>
            </button>
            <h1 className="font-headline font-semibold tracking-tight text-xl font-bold text-on-surface">VERCELEX STORE</h1>
          </div>
          <div className="flex items-center gap-6">
            <Link to="/cart">
              <span className="material-symbols-outlined text-on-surface-variant hover:text-on-surface transition-colors">shopping_cart</span>
            </Link>
          </div>
        </div>
      </header>

      <main className="pt-20 pb-8 px-3 md:px-8 max-w-6xl mx-auto min-h-screen">
        {/* Header Section */}
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="mb-8 md:mb-12">
          <h2 className="text-3xl md:text-[3.5rem] font-bold leading-none tracking-tight text-on-background mb-4">Checkout</h2>
          <div className="flex items-center gap-2 md:gap-3 py-2 px-4 md:py-3 md:px-5 bg-tertiary-container/20 rounded-full w-fit">
            <span className="material-symbols-outlined text-tertiary md:text-base text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>verified_user</span>
            <span className="text-[10px] md:text-xs font-bold font-label text-tertiary tracking-wider uppercase">Encrypted End-to-End</span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-10">
          
          {/* Left Column: Forms */}
          <div className="lg:col-span-7 space-y-12">
            
            {/* Contact Information */}
            <motion.section variants={sectionVariants} initial="hidden" animate="show">
              <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
                <span className="text-on-surface-variant font-headline font-semibold text-base md:text-lg">01</span>
                <h3 className="text-lg md:text-xl text-on-surface font-bold tracking-tight">{t('chkContactTitle')}</h3>
              </div>
              <div className="bg-surface-container-low border border-outline-variant/10 rounded-2xl md:rounded-[1.5rem] p-4 md:p-8">
                <label className="block text-[10px] md:text-xs font-bold font-label text-on-surface-variant mb-2 md:mb-3 tracking-widest">{t('chkContactLabel')}</label>
                <input 
                   onChange={(e) => setContactInfo(e.target.value)}
                   value={contactInfo}
                   className="w-full bg-surface-container border-none rounded-xl p-3 md:p-4 text-xs md:text-sm text-on-surface focus:ring-2 focus:ring-secondary/50 transition-all duration-300 placeholder-on-surface-variant outline-none" 
                   placeholder={t('chkContactPlaceholder')} 
                />
                <p className="mt-4 text-sm text-on-surface-variant leading-relaxed">
                  Data akses (akun/lisensi) akan dikirimkan menuju kontak di atas. Pastikan kontak aktif.
                </p>
              </div>
            </motion.section>

            {/* Payment Methods */}
            <motion.section variants={sectionVariants} initial="hidden" animate="show" transition={{ delay: 0.2 }}>
              <div className="flex items-center gap-3 mb-6">
                <span className="text-on-surface-variant font-headline font-semibold text-lg">02</span>
                <h3 className="text-xl text-on-surface font-bold tracking-tight">{t('chkPaymentTitle')}</h3>
              </div>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                
                {/* QRIS */}
                <div onClick={() => setSelectedMethod('qris')} className={`border p-3 md:p-4 rounded-xl transition-all cursor-pointer group relative overflow-hidden ${selectedMethod === 'qris' ? 'bg-secondary/10 border-secondary' : 'bg-surface-container-low border-outline-variant/10 hover:bg-surface-container'}`}>
                  {selectedMethod === 'qris' && (
                    <div className="absolute top-2 right-2 flex items-center justify-center w-5 h-5 rounded-full bg-secondary text-white shadow-md">
                      <span className="material-symbols-outlined text-[12px] font-bold">check</span>
                    </div>
                  )}
                  <div className="flex flex-col h-full justify-between gap-4 py-2">
                    <span className={`material-symbols-outlined text-2xl ${selectedMethod === 'qris' ? 'text-secondary' : 'text-on-surface-variant group-hover:text-on-surface transition-colors'}`}>qr_code_scanner</span>
                    <span className={`text-[10px] font-bold font-label tracking-widest ${selectedMethod === 'qris' ? 'text-secondary' : 'text-on-surface-variant group-hover:text-on-surface transition-colors'}`}>QRIS INSTANT</span>
                  </div>
                </div>

                {/* Crypto */}
                <div onClick={() => setSelectedMethod('crypto')} className={`border p-3 md:p-4 rounded-xl transition-all cursor-pointer group relative overflow-hidden ${selectedMethod === 'crypto' ? 'bg-secondary/10 border-secondary' : 'bg-surface-container-low border-outline-variant/10 hover:bg-surface-container'}`}>
                   {selectedMethod === 'crypto' && (
                    <div className="absolute top-2 right-2 flex items-center justify-center w-5 h-5 rounded-full bg-secondary text-white shadow-md">
                      <span className="material-symbols-outlined text-[12px] font-bold">check</span>
                    </div>
                  )}
                  <div className="flex flex-col h-full justify-between gap-4 py-2">
                    <span className={`material-symbols-outlined text-2xl ${selectedMethod === 'crypto' ? 'text-secondary' : 'text-on-surface-variant group-hover:text-on-surface transition-colors'}`}>currency_bitcoin</span>
                    <span className={`text-[10px] font-bold font-label tracking-widest ${selectedMethod === 'crypto' ? 'text-secondary' : 'text-on-surface-variant group-hover:text-on-surface transition-colors'}`}>CRYPTO (BNB, SOL, TON)</span>
                  </div>
                </div>

              </div>
            </motion.section>

          </div>

          {/* Right Column: Summary */}
          <div className="lg:col-span-5">
            <motion.div variants={sectionVariants} initial="hidden" animate="show" transition={{ delay: 0.3 }} className="sticky top-24 space-y-6">
              <div className="bg-surface-container-lowest rounded-2xl md:rounded-[1.5rem] p-4 md:p-8 shadow-2xl border border-outline-variant/20">
                <h3 className="text-lg md:text-xl text-on-surface font-bold tracking-tight mb-4 md:mb-6">{t('chkOrderSummary')}</h3>
                <div className="space-y-4 md:space-y-6 mb-6 md:mb-8 max-h-[40vh] overflow-y-auto pr-2">
                  
                  {cartItems.map((item, idx) => (
                    <div key={idx} className="flex gap-4">
                      <div className="w-16 h-16 rounded-xl bg-surface-container overflow-hidden shrink-0 border border-outline-variant/10">
                        <img alt={item.name} className="w-full h-full object-cover" src={item.imageUrl} />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-bold text-on-surface">{item.name}</p>
                        <p className="text-xs text-on-surface-variant mt-0.5">{item.plan} (x{item.quantity})</p>
                      </div>
                      <span className="text-sm font-bold text-on-surface">{formatPrice(item.price * item.quantity)}</span>
                    </div>
                  ))}
                  {cartItems.length === 0 && (
                    <p className="text-sm text-on-surface-variant">Keranjang Kosong.</p>
                  )}

                </div>

                {/* Totals */}
                <div className="space-y-4 pt-8 border-t border-outline-variant/20">
                  <div className="flex justify-between text-sm text-on-surface-variant">
                    <span>{t('chkSubtotal')}</span>
                    <span>{formatPrice(subtotal)}</span>
                  </div>
                  <div className="flex justify-between text-sm text-on-surface-variant">
                    <span>{t('chkServiceFee')}</span>
                    <span>{formatPrice(serviceFee)}</span>
                  </div>
                  <div className="flex justify-between items-center pt-4">
                    <span className="text-lg font-bold text-on-surface">{t('chkTotal')}</span>
                    <span className="text-xl md:text-2xl font-extrabold text-secondary-fixed-dim">{formatPrice(total)}</span>
                  </div>
                </div>

                {/* Action Button */}
                <button 
                  onClick={handleCheckout} 
                  disabled={cartItems.length === 0}
                  className="w-full disabled:opacity-50 mt-8 py-4 rounded-full bg-gradient-to-r from-secondary to-[#3b0764] text-white font-bold text-sm md:text-base shadow-lg shadow-secondary/30 hover:scale-[1.02] active:scale-95 transition-all duration-300 flex items-center justify-center gap-3 group"
                >
                  <span className="material-symbols-outlined group-hover:rotate-12 transition-transform" style={{ fontVariationSettings: "'FILL' 1" }}>lock</span>
                  {t('chkProceed')}
                </button>
                
                <div className="mt-6 flex items-center justify-center gap-2 text-on-surface-variant">
                  <span className="material-symbols-outlined text-sm">security</span>
                  <span className="text-[10px] font-bold font-label tracking-widest uppercase">SSL Secure Payment</span>
                </div>
              </div>

              {/* Trust Note */}
              <div className="p-4 md:p-6 bg-surface-container-low border border-outline-variant/10 rounded-xl">
                <div className="flex gap-4">
                  <span className="material-symbols-outlined text-tertiary">info</span>
                  <p className="text-xs leading-relaxed text-on-surface-variant">
                    {t('chkTrustNote')}
                  </p>
                </div>
              </div>

            </motion.div>
          </div>
        </div>
      </main>
      
      {/* Footer Space for BottomNavBar on Mobile */}
      <div className="h-24 md:hidden"></div>
      <BottomNav />
    </PageWrapper>
  );
}
