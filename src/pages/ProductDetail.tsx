import PageWrapper from '../components/layout/PageWrapper';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useLanguage } from '../context/LanguageContext';
import { productsDB } from '../data/products';
import { useCurrency } from '../hooks/useCurrency';
import { getReviewsForProduct } from '../data/reviews';

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedPlan, setSelectedPlan] = useState("");
  const [showAllReviews, setShowAllReviews] = useState(false);
  const [isPlanDropdownOpen, setIsPlanDropdownOpen] = useState(false);
  const { addToCart } = useCart();
  const { t } = useLanguage();
  const { formatPrice } = useCurrency();
  
  const product = productsDB.find(p => p.id === id);
  if (!product) {
    return <div className="flex h-screen items-center justify-center text-white">Product Not Found</div>;
  }
  
  const activePlanId = selectedPlan || product.plans[0]?.id;
  const productReviews = getReviewsForProduct(product.id, 15);

  const plans = product.plans;

  return (
    <PageWrapper>
      {/* TopAppBar */}
      <header className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-xl border-b border-outline-variant/30">
        <div className="flex items-center justify-between px-4 h-14 w-full max-w-7xl mx-auto">
          <button onClick={() => navigate(-1)} className="p-2 text-on-surface-variant hover:bg-surface-container/50 rounded-full active:scale-95 transition-all">
            <span className="material-symbols-outlined text-2xl">arrow_back</span>
          </button>
          <div className="font-headline font-bold text-lg text-on-surface tracking-tight">Product Details</div>
          <button className="p-2 text-on-surface-variant hover:bg-surface-container/50 rounded-full active:scale-95 transition-all">
            <span className="material-symbols-outlined text-2xl">share</span>
          </button>
        </div>
      </header>

      <main className="pt-14 pb-32">
        {/* Product Hero Image (Smaller & Compact) */}
        <motion.div 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="relative w-full aspect-[16/10] bg-surface-container flex items-center justify-center overflow-hidden"
        >
          <img alt={product.name} className="w-full h-full object-cover z-10" src={product.imageUrl}/>
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-100 z-20"></div>
        </motion.div>

        {/* Product Info Section */}
        <div className="px-5 space-y-4 relative z-10 -mt-10 bg-background rounded-t-3xl pt-8">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="bg-tertiary/20 text-tertiary text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded">{product.categoryLabel}</span>
              <div className="flex items-center text-yellow-500 gap-0.5">
                <span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="text-on-surface text-xs font-semibold">4.9 ({productReviews.length} reviews)</span>
              </div>
            </div>
            <h1 className="text-2xl font-headline font-bold text-on-surface tracking-tight leading-tight">{product.name}</h1>
          </div>

          {/* Features List (Compact) */}
          {product.features && (
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="py-4 border-y border-outline-variant/20 space-y-3"
            >
              {product.features.map((feat, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-secondary shrink-0" style={{ fontVariationSettings: "'FILL' 1" }}>{feat.icon}</span>
                  <div>
                    <h3 className="font-bold text-sm text-on-surface">{feat.title}</h3>
                    <p className="text-xs text-on-surface-variant mt-0.5">{feat.desc}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          )}

          {/* Plan Selection Dropdown */}
          <div className="space-y-2 pt-2 relative z-20">
            <h3 className="text-sm font-headline font-bold text-on-surface">Select Type</h3>
            <div className="relative">
              <div 
                onClick={() => setIsPlanDropdownOpen(!isPlanDropdownOpen)}
                className="w-full bg-surface-container border border-outline-variant/20 rounded-xl p-4 flex justify-between items-center cursor-pointer hover:border-secondary transition-colors"
              >
                <div className="flex flex-col">
                  <span className="font-bold text-sm text-on-surface">{plans.find(p => p.id === activePlanId)?.title}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-bold text-sm text-secondary">{formatPrice(plans.find(p => p.id === activePlanId)?.priceIdr || 0)}</span>
                  <span className={`material-symbols-outlined text-on-surface-variant transition-transform duration-300 ${isPlanDropdownOpen ? 'rotate-180 text-secondary' : ''}`}>
                    expand_more
                  </span>
                </div>
              </div>

              <AnimatePresence>
                {isPlanDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -8, scaleY: 0.95 }}
                    animate={{ opacity: 1, y: 0, scaleY: 1 }}
                    exit={{ opacity: 0, y: -8, scaleY: 0.95 }}
                    transition={{ duration: 0.2 }}
                    style={{ originY: 0 }}
                    className="absolute top-full left-0 w-full mt-2 bg-surface-container-high border border-outline-variant/20 rounded-xl shadow-2xl overflow-hidden z-30"
                  >
                    {plans.map((plan, idx) => (
                      <div
                        key={plan.id}
                        onClick={() => { setSelectedPlan(plan.id); setIsPlanDropdownOpen(false); }}
                        className={`p-4 cursor-pointer flex items-center justify-between transition-colors ${idx !== plans.length - 1 ? 'border-b border-outline-variant/10' : ''} ${activePlanId === plan.id ? 'bg-secondary/10' : 'hover:bg-surface-container-highest'}`}
                      >
                        <span className={`font-bold text-sm ${activePlanId === plan.id ? 'text-secondary' : 'text-on-surface'}`}>{plan.title}</span>
                        <div className="flex items-center gap-2">
                          <span className={`font-bold text-sm ${activePlanId === plan.id ? 'text-secondary' : 'text-on-surface-variant'}`}>{formatPrice(plan.priceIdr)}</span>
                          {activePlanId === plan.id && (
                            <span className="material-symbols-outlined text-secondary text-base">check_circle</span>
                          )}
                        </div>
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Purchase Button */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="pt-4 space-y-4"
          >
            <div className="flex gap-3">
              <button 
                onClick={() => {
                  const currentPlan = plans.find(p => p.id === activePlanId);
                  if (currentPlan) {
                    addToCart({
                      id: `${product.id}-${currentPlan.id}`,
                      name: product.name,
                      plan: currentPlan.title,
                      price: currentPlan.priceIdr,
                      quantity: 1,
                      imageUrl: product.imageUrl
                    });
                    navigate('/checkout');
                  }
                }}
                className="flex-1 bg-gradient-to-r from-secondary to-[#3b0764] text-white font-headline font-bold py-3.5 rounded-xl shadow-lg shadow-secondary/20 active:scale-95 transition-all flex items-center justify-center gap-2"
              >
                <span className="material-symbols-outlined text-xl">bolt</span>
                {t('btnSelect')}
              </button>
              <button 
                onClick={() => {
                  const currentPlan = plans.find(p => p.id === activePlanId);
                  if (currentPlan) {
                    addToCart({
                      id: `${product.id}-${currentPlan.id}`,
                      name: product.name,
                      plan: currentPlan.title,
                      price: currentPlan.priceIdr,
                      quantity: 1,
                      imageUrl: product.imageUrl
                    });
                    navigate('/cart');
                  }
                }}
                className="flex-1 border border-secondary text-secondary-fixed-dim font-headline font-bold py-3.5 rounded-xl active:scale-95 transition-all hover:bg-secondary/10 flex items-center justify-center gap-2"
              >
                <span className="material-symbols-outlined text-xl">add_shopping_cart</span>
                Add to Cart
              </button>
            </div>
            
            <div className="flex justify-center gap-6">
              <div className="flex items-center gap-1.5 text-on-surface-variant text-[10px] font-medium">
                <span className="material-symbols-outlined text-sm text-tertiary">verified_user</span>
                14-day refund
              </div>
              <div className="flex items-center gap-1.5 text-on-surface-variant text-[10px] font-medium">
                <span className="material-symbols-outlined text-sm text-tertiary">lock</span>
                Secure checkout
              </div>
            </div>
          </motion.div>

          {/* Reviews */}
          <section className="pt-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-headline font-bold text-on-surface">Reviews</h2>
              <span className="text-secondary text-xs font-bold uppercase tracking-wider">{productReviews.length} reviews</span>
            </div>
            <div className="space-y-3">
              {productReviews.slice(0, showAllReviews ? productReviews.length : 4).map((rev, idx) => (
                <div key={idx} className="bg-surface-container-low p-4 rounded-xl border border-outline-variant/10">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <img src={rev.avatar} alt={rev.name} className="w-8 h-8 rounded-full object-cover border border-outline-variant/20" loading="lazy" />
                      <div>
                        <span className="text-xs font-bold text-on-surface block">{rev.name}</span>
                        <span className="text-[10px] text-on-surface-variant">{rev.country} · {rev.timeAgo}</span>
                      </div>
                    </div>
                    <div className="flex text-yellow-500 scale-75 origin-right">
                      {Array(rev.rating).fill(0).map((_, i) => (
                        <span key={i} className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                      ))}
                    </div>
                  </div>
                  <p className="text-on-surface-variant text-xs leading-relaxed">{rev.text}</p>
                </div>
              ))}
            </div>
            {productReviews.length > 4 && (
              <button 
                onClick={() => setShowAllReviews(!showAllReviews)}
                className="w-full mt-3 py-3 rounded-xl bg-surface-container border border-outline-variant/10 text-secondary text-xs font-bold uppercase tracking-wider hover:bg-surface-container-high transition-colors"
              >
                {showAllReviews ? 'Show Less' : `See All ${productReviews.length} Reviews`}
              </button>
            )}
          </section>
        </div>
      </main>
    </PageWrapper>
  );
}
