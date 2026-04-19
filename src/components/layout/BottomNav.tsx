import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { useLanguage } from '../../context/LanguageContext';

export default function BottomNav() {
  const location = useLocation();
  const path = location.pathname;
  const { cartCount } = useCart();
  const { t } = useLanguage();

  return (
    <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 pb-6 pt-3 bg-surface/80 backdrop-blur-2xl shadow-[0_-4px_30px_rgba(0,0,0,0.5)] rounded-t-3xl border-t border-outline-variant/30 pb-safe">
      <Link to="/" className={`flex flex-col items-center justify-center rounded-2xl px-5 py-1.5 transition-all duration-300 ease-out tap-highlight-transparent ${path === '/' ? 'bg-secondary/20 text-secondary' : 'text-on-surface-variant hover:text-secondary'}`}>
        <span className="material-symbols-outlined" style={{ fontVariationSettings: path === '/' ? "'FILL' 1" : "'FILL' 0" }}>grid_view</span>
        <span className="font-label text-[10px] font-semibold uppercase tracking-wider mt-1">{t('navHome')}</span>
      </Link>
      
      <Link to="/history" className={`flex flex-col items-center justify-center rounded-2xl px-5 py-1.5 transition-all duration-300 ease-out tap-highlight-transparent ${path === '/history' ? 'bg-secondary/20 text-secondary' : 'text-on-surface-variant hover:text-secondary'}`}>
        <span className="material-symbols-outlined" style={{ fontVariationSettings: path === '/history' ? "'FILL' 1" : "'FILL' 0" }}>history</span>
        <span className="font-label text-[10px] font-semibold uppercase tracking-wider mt-1">{t('navHistory')}</span>
      </Link>

      <Link to="/cart" className={`flex flex-col items-center justify-center rounded-2xl px-5 py-1.5 transition-all duration-300 ease-out tap-highlight-transparent ${path === '/cart' ? 'bg-secondary/20 text-secondary' : 'text-on-surface-variant hover:text-secondary'}`}>
        <div className="relative">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: path === '/cart' ? "'FILL' 1" : "'FILL' 0" }}>shopping_bag</span>
          {cartCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-secondary text-white text-[8px] min-w-[14px] h-3.5 px-0.5 rounded-full flex items-center justify-center font-bold">
              {cartCount > 99 ? '99+' : cartCount}
            </span>
          )}
        </div>
        <span className="font-label text-[10px] font-semibold uppercase tracking-wider mt-1">{t('navCart')}</span>
      </Link>

      <Link to="/profile" className={`flex flex-col items-center justify-center rounded-2xl px-5 py-1.5 transition-all duration-300 ease-out tap-highlight-transparent ${path === '/profile' ? 'bg-secondary/20 text-secondary' : 'text-on-surface-variant hover:text-secondary'}`}>
        <span className="material-symbols-outlined" style={{ fontVariationSettings: path === '/profile' ? "'FILL' 1" : "'FILL' 0" }}>person</span>
        <span className="font-label text-[10px] font-semibold uppercase tracking-wider mt-1">{t('navProfile')}</span>
      </Link>
    </nav>
  );
}
