import PageWrapper from '../components/layout/PageWrapper';
import BottomNav from '../components/layout/BottomNav';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { productsDB } from '../data/products';
import { useCurrency } from '../hooks/useCurrency';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
};

export default function Catalog() {
  const categories = ["ALL", "AI TOOLS", "SUBSCRIPTIONS", "SOFTWARE", "ASSETS"];
  const [selectedCategory, setSelectedCategory] = useState("ALL");
  const { formatPrice } = useCurrency();
  
  const filteredProducts = selectedCategory === "ALL" 
    ? productsDB 
    : productsDB.filter(p => p.category === selectedCategory);
    
  const promoProduct = productsDB[3]; // ChatGPT PRO as promo

  return (
    <PageWrapper>
      {/* TopAppBar */}
      <header className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-xl border-b border-outline-variant/30">
        <div className="flex items-center justify-between px-6 h-16 w-full max-w-7xl mx-auto">
          <div className="flex items-center gap-4">
             {/* Search icon removed */}
          </div>
          <h1 className="font-headline font-bold text-xl tracking-tight text-on-surface text-center flex-1">VERCELEX STORE</h1>
          <div className="flex items-center gap-4">
            <Link to="/cart" className="p-2 text-on-surface-variant hover:bg-surface-container/50 transition-all duration-300 rounded-full active:scale-95">
              <span className="material-symbols-outlined">shopping_cart</span>
            </Link>
          </div>
        </div>
      </header>

      <main className="pt-20 pb-32 px-4 max-w-7xl mx-auto space-y-8">
        {/* Promo / Special Offers */}
        <section className="space-y-4">
          <div className="flex justify-between items-center px-2">
            <h3 className="font-headline text-lg font-bold text-on-background">Special Offers</h3>
            <span className="text-[10px] font-label text-secondary tracking-widest uppercase">Ends in 04:22:15</span>
          </div>
          <div className="relative overflow-hidden rounded-3xl bg-surface-container aspect-[16/9] flex items-center group">
            <img className="absolute inset-0 w-full h-full object-cover opacity-80 scale-105 group-hover:scale-100 transition-transform duration-700" alt="Special Offer" src={promoProduct.imageUrl}/>
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent"></div>
            <div className="relative z-10 px-8 py-6 w-full mt-auto">
              <div className="inline-flex items-center gap-2 px-2 py-0.5 rounded-full bg-secondary/20 border border-secondary/30 backdrop-blur-md mb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse"></span>
                <span className="text-[9px] font-label tracking-widest text-secondary-fixed-dim uppercase">Limited Offer</span>
              </div>
              <h2 className="font-headline text-2xl font-bold text-white leading-tight mb-2">{promoProduct.name.split(' (')[0]} <br/><span className="text-secondary-fixed-dim">{promoProduct.categoryLabel}</span></h2>
              <div className="flex items-center gap-4">
                <span className="text-white text-lg font-bold">{formatPrice(promoProduct.plans[0].priceIdr)} <span className="text-xs line-through text-on-surface-variant font-normal ml-1">{formatPrice(promoProduct.plans[0].priceIdr * 2)}</span></span>
                <Link to={`/product/${promoProduct.id}`} className="ml-auto px-6 py-2.5 bg-white text-black rounded-full font-label text-[10px] font-bold tracking-wider hover:scale-105 active:scale-95 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                  CLAIM NOW
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Search & Filter Section */}
        <section className="space-y-4">
          <div className="relative">
            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-on-surface-variant">
              <span className="material-symbols-outlined">search</span>
            </div>
            <input className="w-full pl-12 pr-6 py-3.5 bg-surface-container-highest rounded-2xl border-none outline-none focus:ring-2 focus:ring-secondary/50 focus:bg-surface transition-all duration-300 shadow-sm text-sm text-on-surface placeholder-on-surface-variant" placeholder="Search digital assets..." type="text"/>
          </div>
          <div className="flex gap-2 overflow-x-auto pb-1 no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`relative px-5 py-2 rounded-xl font-label text-[10px] tracking-wider whitespace-nowrap transition-colors duration-300 ${
                  selectedCategory === cat
                    ? "text-white"
                    : "text-on-surface-variant hover:text-on-surface bg-surface-container-low hover:bg-surface-container-high"
                }`}
              >
                {selectedCategory === cat && (
                  <motion.div
                    layoutId="activeCategory"
                    className="absolute inset-0 bg-gradient-to-br from-secondary to-[#3b0764] rounded-xl shadow-md shadow-secondary/20"
                    style={{ zIndex: 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 24 }}
                  />
                )}
                <span className="relative z-10">{cat}</span>
              </button>
            ))}
          </div>
        </section>

        {/* 2x2 Product Grid */}
        <section className="space-y-6">
          <div className="flex justify-between items-center px-2">
            <h3 className="font-headline text-lg font-bold text-on-background">Featured Store</h3>
            <button className="text-secondary font-label text-[10px] font-bold tracking-widest flex items-center gap-1 group uppercase">
              View All <span className="material-symbols-outlined text-sm group-hover:translate-x-0.5 transition-transform">arrow_forward</span>
            </button>
          </div>

          <motion.div variants={containerVariants} initial="hidden" animate="show" className="grid grid-cols-2 gap-4">
            {filteredProducts.map((product) => (
              <motion.div key={product.id} variants={itemVariants} className="group relative flex flex-col bg-surface-container-low border border-outline-variant/10 rounded-2xl overflow-hidden hover:shadow-lg hover:shadow-secondary/5 transition-all duration-300">
                <Link to={`/product/${product.id}`} className="block focus:outline-none focus:ring-2 focus:ring-secondary/50 rounded-t-2xl">
                  <div className="aspect-square overflow-hidden relative flex items-center justify-center bg-white/5">
                    <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt={product.name} src={product.imageUrl}/>
                  </div>
                </Link>
                <div className="p-3 space-y-2 flex flex-col flex-grow">
                  <div className="space-y-0.5 flex-grow">
                    <p className="text-on-surface-variant font-label text-[8px] tracking-widest uppercase">{product.categoryLabel}</p>
                    <Link to={`/product/${product.id}`}>
                      <h4 className="font-headline font-bold text-xs text-on-surface line-clamp-1 group-hover:text-secondary transition-colors">{product.name.split(' (')[0]}</h4>
                    </Link>
                  </div>
                  <div className="flex items-center justify-between mt-1">
                    <span className="font-headline font-bold text-sm text-on-surface">{formatPrice(product.plans[0].priceIdr)}</span>
                    <Link to={`/product/${product.id}`} className="p-2 flex items-center justify-center rounded-xl bg-surface-container-high text-on-surface-variant hover:bg-secondary hover:text-white transition-all duration-300">
                      <span className="material-symbols-outlined text-lg">arrow_forward</span>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Trust / Benefits Section */}
        <section className="grid grid-cols-1 gap-3 pt-4">
          <div className="flex items-center gap-4 p-4 bg-surface-container-low border border-outline-variant/10 rounded-2xl">
            <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-secondary/20 text-secondary-fixed-dim">
              <span className="material-symbols-outlined text-xl">bolt</span>
            </div>
            <div>
              <h5 className="font-semibold text-sm text-on-surface">Zero Latency</h5>
              <p className="text-[10px] text-on-surface-variant leading-none mt-1">Instant access post-purchase</p>
            </div>
          </div>
          <div className="flex items-center gap-4 p-4 bg-surface-container-low border border-outline-variant/10 rounded-2xl">
            <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-tertiary/20 text-tertiary">
              <span className="material-symbols-outlined text-xl">shield</span>
            </div>
            <div>
              <h5 className="font-semibold text-sm text-on-surface">Secure Assets</h5>
              <p className="text-[10px] text-on-surface-variant leading-none mt-1">Encryption at every touchpoint</p>
            </div>
          </div>
        </section>
      </main>
      
      <BottomNav />
    </PageWrapper>
  );
}
