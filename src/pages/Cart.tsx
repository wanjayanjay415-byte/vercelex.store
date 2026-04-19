import PageWrapper from '../components/layout/PageWrapper';
import BottomNav from '../components/layout/BottomNav';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useLanguage } from '../context/LanguageContext';
import { useCurrency } from '../hooks/useCurrency';

const listVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
};

export default function Cart() {
  const navigate = useNavigate();
  const { cartItems, increaseQuantity, decreaseQuantity, removeFromCart, getCartTotal } = useCart();
  const { t } = useLanguage();
  const { formatPrice } = useCurrency();
  const subtotal = getCartTotal();

  return (
    <PageWrapper>
      {/* TopAppBar */}
      <header className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-xl border-b border-outline-variant/30">
        <div className="flex items-center justify-between px-6 h-16 w-full max-w-7xl mx-auto">
          <div className="flex items-center gap-4">
            <button onClick={() => navigate(-1)} className="p-2 text-on-surface-variant hover:bg-surface-container/50 transition-all duration-300 rounded-full active:scale-95">
              <span className="material-symbols-outlined">arrow_back</span>
            </button>
          </div>
          <div className="font-headline font-bold text-xl tracking-tight text-on-surface text-center flex-1">{t('cartTitle')}</div>
          <div className="flex items-center gap-4">
            <button className="p-2 text-on-surface-variant hover:bg-surface-container/50 transition-all duration-300 rounded-full active:scale-95">
              <span className="material-symbols-outlined">more_vert</span>
            </button>
          </div>
        </div>
      </header>

      <main className="pt-20 pb-28 px-3 md:px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 md:gap-8">
          
          {/* Shopping Cart Content */}
          <div className="lg:col-span-8 space-y-6">
            <motion.div variants={listVariants} initial="hidden" animate="show" className="space-y-4">
              
              {cartItems.length === 0 ? (
                <div className="bg-surface-container-low border border-outline-variant/10 p-6 md:p-12 rounded-xl flex flex-col items-center justify-center text-center">
                  <span className="material-symbols-outlined text-5xl md:text-6xl text-on-surface-variant mb-4">remove_shopping_cart</span>
                  <h3 className="text-xl font-bold text-on-surface mb-2">{t('cartEmpty')}</h3>
                  <p className="text-on-surface-variant mb-6">{t('cartEmptyDesc')}</p>
                  <Link to="/" className="px-6 py-3 bg-secondary text-white font-bold rounded-full hover:bg-secondary/90 transition-colors">{t('cartStartShopping')}</Link>
                </div>
              ) : (
                cartItems.map((item) => (
                  <motion.div key={item.id} variants={itemVariants} className="bg-surface-container-low border border-outline-variant/10 p-4 md:p-6 rounded-xl flex items-center gap-4 md:gap-6 group hover:bg-surface-container transition-all duration-300">
                    <div className="w-16 h-16 md:w-24 md:h-24 rounded-lg overflow-hidden flex-shrink-0 bg-surface-container-high">
                      <img className="w-full h-full object-cover" alt={item.name} src={item.imageUrl}/>
                    </div>
                    <div className="flex-grow">
                      <div className="flex justify-between items-start">
                        <div>
                          <Link to={`/product/${item.id.split('-')[0]}`}>
                            <h3 className="text-lg font-semibold text-on-surface hover:text-secondary transition-colors">{item.name}</h3>
                          </Link>
                          <p className="text-sm text-on-surface-variant mt-1">Plan: {item.plan}</p>
                        </div>
                        <span className="text-lg font-bold text-on-surface">{formatPrice(item.price * item.quantity)}</span>
                      </div>
                      <div className="mt-4 flex items-center justify-between">
                        <div className="flex items-center bg-surface-container rounded-full px-3 py-1 gap-4">
                          <button onClick={() => decreaseQuantity(item.id)} className="hover:text-secondary"><span className="material-symbols-outlined text-sm">remove</span></button>
                          <span className="text-sm font-semibold text-on-surface">{item.quantity.toString().padStart(2, '0')}</span>
                          <button onClick={() => increaseQuantity(item.id)} className="hover:text-secondary"><span className="material-symbols-outlined text-sm">add</span></button>
                        </div>
                        <button onClick={() => removeFromCart(item.id)} className="text-on-surface-variant hover:text-error transition-colors flex items-center gap-1 text-sm font-medium">
                          <span className="material-symbols-outlined text-base">delete</span> Remove
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))
              )}

            </motion.div>
          </div>

          {/* Summary Panel */}
          {cartItems.length > 0 && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="lg:col-span-4">
              <div className="bg-surface-container-low border border-outline-variant/10 p-5 md:p-8 rounded-2xl md:rounded-3xl sticky top-24 shadow-lg shadow-black/20">
                <h2 className="text-xl font-bold text-on-surface mb-6">{t('cartOrderSummary')}</h2>
                
                <div className="space-y-4 mb-8">
                  <div className="flex justify-between text-on-surface-variant">
                    <span>Subtotal</span>
                    <span className="font-medium text-on-surface">{formatPrice(subtotal)}</span>
                  </div>
                  <div className="h-px bg-outline-variant/30 mt-4"></div>
                  <div className="flex justify-between text-xl font-bold text-on-surface pt-2">
                    <span>Total</span>
                    <span>{formatPrice(subtotal)}</span>
                  </div>
                </div>

              {/* Promo Code */}
              <div className="mb-8">
                <label className="text-xs font-bold uppercase tracking-wider text-on-surface-variant block mb-2">Promo Code</label>
                <div className="flex gap-2">
                  <input className="flex-grow bg-surface-container border-none outline-none rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-secondary/50 text-on-surface transition-all placeholder-on-surface-variant" placeholder="Enter code" type="text"/>
                  <button className="bg-secondary/20 px-6 rounded-xl text-sm font-semibold text-secondary hover:bg-secondary hover:text-white transition-colors duration-300">Apply</button>
                </div>
              </div>

              {/* Trust Badge deleted per request */}

              {/* Checkout Button */}
              <Link to="/checkout" className="w-full py-4 rounded-full bg-gradient-to-r from-secondary to-[#3b0764] text-white font-bold text-lg shadow-lg shadow-secondary/30 hover:scale-[1.02] active:scale-95 transition-all duration-300 flex items-center justify-center gap-3">
                <span className="material-symbols-outlined">lock</span>
                Secure Checkout
              </Link>
              
              <p className="text-center text-[11px] text-on-surface-variant mt-6 px-4">
                By clicking checkout, you agree to our Terms of Service and Privacy Policy.
              </p>
            </div>
          </motion.div>
          )}
        </div>
      </main>
      
      <BottomNav />
    </PageWrapper>
  );
}
