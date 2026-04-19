import PageWrapper from '../components/layout/PageWrapper';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { useCurrency } from '../hooks/useCurrency';
import { useCart } from '../context/CartContext';
import { useLanguage } from '../context/LanguageContext';

type CryptoOption = 'BNB' | 'USDT_BNB' | 'SOL' | 'USDT_SOL' | 'TON' | 'USDT_TON';

export default function QRPayment() {
  const navigate = useNavigate();
  const location = useLocation();
  const { formatPrice } = useCurrency();
  const cartContext = useCart() as any; 
  const { t } = useLanguage();
  
  // Ambil state dari checkout
  const method = location.state?.method || 'qris';
  const rawTotal = location.state?.total || 0;

  const [selectedCrypto, setSelectedCrypto] = useState<CryptoOption>('BNB');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [txHash, setTxHash] = useState('');
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);

  const cryptoAddresses: Record<CryptoOption, string> = {
    'BNB': '0x6a8d40826fd31cab749956b40696fb3ae0330444',
    'USDT_BNB': '0x6a8d40826fd31cab749956b40696fb3ae0330444',
    'SOL': 'GeX8BABnWuS2KpKmLLSp9HertrXP2Xi4YDmrTohYEACd',
    'USDT_SOL': 'GeX8BABnWuS2KpKmLLSp9HertrXP2Xi4YDmrTohYEACd',
    'TON': 'UQBorMmVzZ4Oycj0x6zF1x2t8VO7uqj048IYNfc3r4uDcBlB',
    'USDT_TON': 'UQBorMmVzZ4Oycj0x6zF1x2t8VO7uqj048IYNfc3r4uDcBlB',
  };

  const activeAddress = method === 'crypto' ? cryptoAddresses[selectedCrypto] : '';

  const handleConfirm = () => {
    if (method === 'crypto' && !txHash) {
      alert(t('payAlertCrypto'));
      return;
    }
    if (method === 'qris' && !uploadedFile) {
      alert(t('payAlertQris'));
      return;
    }

    // Clear cart (menggunakan method context jika ada, kalau tidak kosongkan manual fallback)
    if (cartContext.clearCart) {
      cartContext.clearCart();
    } else {
      localStorage.removeItem('vercelex_cart');
      // reload to refresh state if needed, or rely on unmount
    }
    
    // Simulate transaction saved
    alert(t('paySuccess'));
    navigate('/history', { replace: true });
    // Idealnya, navigate ke root / lalu pilih menu History
    setTimeout(() => {
        window.location.href = '/';
    }, 500);
  };

  return (
    <PageWrapper className="flex flex-col min-h-screen bg-background">
      {/* TopAppBar */}
      <header className="w-full top-0 sticky z-50 bg-surface/80 backdrop-blur-xl border-b border-outline-variant/30 flex items-center px-4 h-16">
        <div className="flex items-center gap-4 w-full max-w-lg mx-auto">
          <button onClick={() => navigate(-1)} className="flex items-center justify-center p-2 rounded-full hover:bg-surface-container transition-colors duration-300 active:scale-95 text-on-surface-variant hover:text-on-surface">
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
          <h1 className="font-headline font-semibold text-lg text-on-surface tracking-wide uppercase">{t('payTitle')} {method}</h1>
        </div>
      </header>

      <main className="flex-grow flex flex-col items-center justify-center px-6 py-6 pb-20 max-w-lg mx-auto w-full">
        
        {/* Amount Section */}
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-6">
          <p className="font-label text-xs text-on-surface-variant tracking-widest uppercase mb-1">{t('payTotalBill')}</p>
          <h2 className="font-headline font-bold text-3xl md:text-4xl text-on-surface tracking-tight">{formatPrice(rawTotal)}</h2>
          <div className="mt-3 inline-flex items-center gap-2 px-3 py-1 bg-tertiary/10 text-tertiary rounded-full border border-tertiary/20">
            <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
            <span className="font-label text-[10px] font-bold uppercase tracking-wider">Secure Escrow</span>
          </div>
        </motion.div>

        {/* Dynamic Payment Box */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ delay: 0.1 }}
          className="w-full bg-surface-container-low border border-outline-variant/10 rounded-2xl p-4 md:p-8 flex flex-col items-center relative overflow-hidden shadow-2xl shadow-black/40"
        >
          {method === 'crypto' ? (
            <div className="w-full space-y-4 md:space-y-6">
              <label className="block text-xs font-bold text-on-surface-variant tracking-widest text-center">{t('paySelectCoin')}</label>
              
              <div className="relative z-20">
                <div 
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="w-full bg-surface-container border border-outline-variant/20 rounded-xl p-4 flex justify-between items-center cursor-pointer hover:border-secondary shadow-sm transition-colors"
                >
                  {(() => {
                    const cryptoOptionsItems = [
                      { id: 'BNB', title: 'Binance Coin (BNB)', net: 'Network: BEP20' },
                      { id: 'USDT_BNB', title: 'Tether (USDT)', net: 'Network: BEP20 (BSC)' },
                      { id: 'SOL', title: 'Solana (SOL)', net: 'Network: Solana' },
                      { id: 'USDT_SOL', title: 'Tether (USDT)', net: 'Network: Solana' },
                      { id: 'TON', title: 'TON Coin', net: 'Network: The Open Network' },
                      { id: 'USDT_TON', title: 'Tether (USDT)', net: 'Network: TON' }
                    ];
                    const activeOpt = cryptoOptionsItems.find(o => o.id === selectedCrypto);
                    return (
                      <>
                        <div className="flex flex-col text-left">
                           <span className="font-bold text-sm text-on-surface">{activeOpt?.title}</span>
                           <span className="text-[10px] text-on-surface-variant font-label tracking-widest uppercase mt-0.5">{activeOpt?.net}</span>
                        </div>
                        <span className={`material-symbols-outlined transition-transform duration-300 ${isDropdownOpen ? 'rotate-180 text-secondary' : 'text-on-surface-variant'}`}>
                          expand_more
                        </span>
                      </>
                    );
                  })()}
                </div>
                
                <AnimatePresence>
                   {isDropdownOpen && (
                     <motion.div 
                       initial={{ opacity: 0, y: -10, scaleY: 0.95 }}
                       animate={{ opacity: 1, y: 0, scaleY: 1 }}
                       exit={{ opacity: 0, y: -10, scaleY: 0.95 }}
                       transition={{ duration: 0.2 }}
                       style={{ originY: 0 }}
                       className="absolute top-full left-0 w-full mt-2 bg-surface-container-high border border-outline-variant/20 rounded-xl shadow-2xl overflow-hidden flex flex-col z-30"
                     >
                       {[
                          { id: 'BNB', title: 'Binance Coin (BNB)', net: 'BEP20' },
                          { id: 'USDT_BNB', title: 'Tether (USDT)', net: 'BEP20 (BSC)' },
                          { id: 'SOL', title: 'Solana (SOL)', net: 'Solana' },
                          { id: 'USDT_SOL', title: 'Tether (USDT)', net: 'Solana' },
                          { id: 'TON', title: 'TON Coin', net: 'The Open Network' },
                          { id: 'USDT_TON', title: 'Tether (USDT)', net: 'TON' }
                       ].map((opt, idx) => (
                          <div 
                            key={opt.id}
                            onClick={() => { setSelectedCrypto(opt.id as CryptoOption); setIsDropdownOpen(false); }}
                            className={`p-4 cursor-pointer flex items-center justify-between transition-colors ${idx !== 5 ? 'border-b border-outline-variant/10' : ''} ${selectedCrypto === opt.id ? 'bg-secondary/10' : 'hover:bg-surface-container-highest'}`}
                          >
                              <div className="flex flex-col">
                                <span className={`font-bold text-sm ${selectedCrypto === opt.id ? 'text-secondary' : 'text-on-surface'}`}>{opt.title}</span>
                                <span className="text-[10px] text-on-surface-variant font-label tracking-widest uppercase mt-0.5">{opt.net}</span>
                              </div>
                              {selectedCrypto === opt.id && (
                                 <span className="material-symbols-outlined text-secondary text-base">check_circle</span>
                              )}
                          </div>
                       ))}
                     </motion.div>
                   )}
                </AnimatePresence>
              </div>

              <div className="flex justify-center md:mt-6 mt-4 p-3 bg-white rounded-xl mx-auto w-fit border border-outline-variant/30 relative group">
                <div className="absolute -inset-2 bg-gradient-to-tr from-secondary/40 to-primary/40 rounded-xl blur opacity-50 transition duration-300"></div>
                <img className="relative w-40 h-40 md:w-48 md:h-48 object-contain" src={`https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${activeAddress}`} alt="Crypto QR" />
              </div>

              <div className="text-center mt-4">
                <p className="text-[11px] text-on-surface-variant tracking-wider font-label mb-1 uppercase">{t('payWalletAddress')} ({selectedCrypto})</p>
                <div className="flex items-center gap-2 p-3 bg-surface-container rounded-lg break-all">
                  <p className="text-[11px] font-mono text-on-surface text-left flex-1">{activeAddress}</p>
                  <button onClick={() => navigator.clipboard.writeText(activeAddress)} className="text-secondary p-2 bg-secondary/10 rounded-md hover:bg-secondary/20">
                    <span className="material-symbols-outlined text-sm">content_copy</span>
                  </button>
                </div>
              </div>

              <div className="space-y-3 pt-4 border-t border-outline-variant/10">
                 <label className="block text-[11px] font-bold text-on-surface-variant tracking-widest text-center md:text-left">{t('payTxHash')}</label>
                 <input 
                   onChange={(e) => setTxHash(e.target.value)}
                   value={txHash}
                   className="w-full bg-surface-container border-none rounded-xl p-3 md:p-4 text-xs font-mono text-on-surface focus:ring-2 focus:ring-secondary/50 placeholder-on-surface-variant outline-none" 
                   placeholder="0x..." 
                 />
              </div>
            </div>
          ) : (
            <div className="w-full flex flex-col items-center space-y-6">
              <h3 className="font-headline font-bold text-lg text-on-surface tracking-wider text-center">VERCELEX COMMUNITY</h3>
              <div className="bg-white p-2 rounded-2xl relative shadow-lg">
                <div className="absolute -inset-3 bg-gradient-to-br from-pink-500/20 to-blue-500/20 rounded-2xl blur opacity-70"></div>
                <img className="relative w-64 object-contain rounded-xl" src="/qris.jpg" alt="QRIS Vercelex" />
              </div>
              <p className="text-sm font-medium text-center text-on-surface-variant max-w-xs mt-4 leading-relaxed">
                {t('payQrisScan')}
              </p>
              
              <div className="w-full pt-4 md:pt-6 border-t border-outline-variant/10">
                 <label className="block text-[11px] text-center font-bold text-on-surface-variant mb-3 tracking-widest uppercase">{t('payUploadProof')}</label>
                 <div className="relative w-full border-2 border-dashed border-outline-variant/30 rounded-xl p-4 md:p-6 text-center hover:bg-surface-container transition cursor-pointer">
                    <input 
                      type="file" 
                      accept="image/*"
                      onChange={(e) => setUploadedFile(e.target.files?.[0] || null)}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" 
                    />
                    <div className="flex flex-col items-center gap-2 pointer-events-none">
                      <span className={`material-symbols-outlined text-3xl ${uploadedFile ? 'text-green-500' : 'text-secondary'}`}>
                        {uploadedFile ? 'check_circle' : 'cloud_upload'}
                      </span>
                      <span className="text-xs font-bold text-on-surface mt-1">
                        {uploadedFile ? uploadedFile.name : t('paySelectFile')}
                      </span>
                    </div>
                 </div>
              </div>
            </div>
          )}
        </motion.div>

        {/* Action Buttons Section */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="w-full mt-8 space-y-4">
          <button 
             onClick={handleConfirm}
             className="w-full bg-gradient-to-r from-secondary to-[#3b0764] text-white py-4 flex items-center justify-center gap-2 rounded-full font-headline font-bold text-sm tracking-wider shadow-lg shadow-secondary/20 hover:scale-[1.02] active:scale-95 transition-all duration-300"
          >
             <span className="material-symbols-outlined text-lg">fact_check</span>
             {t('payConfirm')}
          </button>
        </motion.div>
      </main>
    </PageWrapper>
  );
}
