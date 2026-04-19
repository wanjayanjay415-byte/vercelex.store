import { useState, useEffect } from 'react';
import { ShoppingBag, Menu, X, Globe, ChevronDown } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Navbar = () => {
  const { language, setLanguage, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 100,
      padding: '1rem 0',
      transition: 'var(--transition-smooth)',
      background: scrolled ? 'rgba(10, 10, 10, 0.85)' : 'transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      borderBottom: scrolled ? '1px solid var(--border-glass)' : 'transparent'
    }}>
      <div className="container flex-between">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <ShoppingBag color="var(--accent-color)" size={28} />
          <h2 style={{ margin: 0, background: 'linear-gradient(90deg, #fff, #aaa)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            DigiStore
          </h2>
        </div>

        <ul className="desktop-menu" style={{ 
          display: 'flex', 
          gap: '2rem', 
          alignItems: 'center',
          listStyle: 'none',
          margin: 0
        }}>
          <li><a href="#hero" style={{ fontWeight: 500, color: 'var(--text-secondary)', transition: '0.3s' }} onMouseOver={e => e.currentTarget.style.color='var(--text-primary)'} onMouseOut={e => e.currentTarget.style.color='var(--text-secondary)'}>{t('navHome')}</a></li>
          <li><a href="#products" style={{ fontWeight: 500, color: 'var(--text-secondary)', transition: '0.3s' }} onMouseOver={e => e.currentTarget.style.color='var(--text-primary)'} onMouseOut={e => e.currentTarget.style.color='var(--text-secondary)'}>{t('navProducts')}</a></li>
          <li><a href="#reviews" style={{ fontWeight: 500, color: 'var(--text-secondary)', transition: '0.3s' }} onMouseOver={e => e.currentTarget.style.color='var(--text-primary)'} onMouseOut={e => e.currentTarget.style.color='var(--text-secondary)'}>{t('navReviews')}</a></li>
          <li style={{ position: 'relative' }}>
            <div 
              onClick={() => setIsLangOpen(!isLangOpen)}
              style={{ 
                display: 'flex', alignItems: 'center', gap: '0.5rem', 
                background: 'var(--bg-primary)', 
                border: '1px solid var(--border-glass)',
                padding: '0.5rem 1rem', borderRadius: '4px', cursor: 'pointer',
                transition: 'all 0.3s',
                boxShadow: isLangOpen ? '0 0 15px rgba(0, 102, 255, 0.4)' : 'none'
              }}>
              <Globe size={16} color="var(--accent-color)" />
              <span style={{ fontWeight: 600, color: 'var(--text-primary)', fontSize: '0.9rem' }}>
                {language === 'en' ? 'EN' : language === 'id' ? 'ID' : 'HI'}
              </span>
              <ChevronDown size={14} color="var(--text-secondary)" style={{ transform: isLangOpen ? 'rotate(180deg)' : 'none', transition: '0.3s' }} />
            </div>
            
            {isLangOpen && (
              <div 
                className="animate-slide-up"
                style={{ 
                  position: 'absolute', top: '120%', right: 0, 
                  background: 'var(--bg-primary)', 
                  border: '1px solid var(--border-glass)',
                  borderTop: '2px solid var(--accent-color)',
                  borderRadius: '4px', overflow: 'hidden',
                  display: 'flex', flexDirection: 'column',
                  width: '150px',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.9), 0 0 20px rgba(0, 102, 255, 0.15)'
                }}>
                {[
                  { code: 'en', label: 'English' },
                  { code: 'id', label: 'Indonesia' },
                  { code: 'hi', label: 'Indian' }
                ].map(lang => (
                  <div 
                    key={lang.code}
                    onClick={() => {
                      setLanguage(lang.code as any);
                      setIsLangOpen(false);
                    }}
                    style={{
                      padding: '0.8rem 1rem', cursor: 'pointer',
                      background: language === lang.code ? 'rgba(0, 102, 255, 0.15)' : 'transparent',
                      color: language === lang.code ? 'var(--text-primary)' : 'var(--text-secondary)',
                      fontWeight: language === lang.code ? 700 : 500,
                      borderBottom: '1px solid rgba(255,255,255,0.03)',
                      transition: '0.2s',
                      display: 'flex', alignItems: 'center', gap: '0.6rem'
                    }}
                    onMouseOver={e => {
                      e.currentTarget.style.background = 'rgba(0, 102, 255, 0.2)';
                      e.currentTarget.style.color = 'var(--text-primary)';
                    }}
                    onMouseOut={e => {
                      e.currentTarget.style.background = language === lang.code ? 'rgba(0, 102, 255, 0.15)' : 'transparent';
                      e.currentTarget.style.color = language === lang.code ? 'var(--text-primary)' : 'var(--text-secondary)';
                    }}
                  >
                    <span style={{ color: language === lang.code ? 'var(--accent-color)' : 'var(--text-secondary)' }}>{lang.code.toUpperCase()}</span> 
                    <span style={{ fontSize: '0.85rem' }}>{lang.label}</span>
                  </div>
                ))}
              </div>
            )}
          </li>
        </ul>

        {/* CSS for hiding desktop menu on small screens would ideally be in index.css */}
        <style dangerouslySetInnerHTML={{__html: `
          @media (max-width: 768px) {
            .desktop-menu { display: none !important; }
            .mobile-toggle { display: block !important; }
          }
          .mobile-toggle { display: none; }
        `}} />

        <div className="mobile-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} style={{ cursor: 'pointer' }}>
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          right: 0,
          background: 'var(--bg-secondary)',
          padding: '1rem',
          borderBottom: '1px solid var(--border-glass)',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem'
        }} className="animate-slide-up">
          <a href="#hero" onClick={() => setMobileMenuOpen(false)}>Home</a>
          <a href="#products" onClick={() => setMobileMenuOpen(false)}>Products</a>
          <a href="#reviews" onClick={() => setMobileMenuOpen(false)}>Reviews</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
