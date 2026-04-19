import { Zap } from 'lucide-react';
import { products } from '../data/ProductData';
import { useLanguage } from '../context/LanguageContext';

interface ProductListProps {
  onBuyClick: (product: any) => void;
}

const ProductList: React.FC<ProductListProps> = ({ onBuyClick }) => {
  const { t } = useLanguage();
  return (
    <section id="products" style={{ padding: '6rem 0', background: 'var(--bg-secondary)' }}>
      <style dangerouslySetInnerHTML={{__html: `
        @media (max-width: 768px) {
          .product-image-bg { display: none !important; }
          .product-logo-box {
            position: static !important;
            margin: 0.6rem auto !important;
            background: var(--bg-glass) !important;
            box-shadow: 0 0 15px rgba(0, 102, 255, 0.3) !important;
            width: 44px !important;
            height: 44px !important;
            margin-top: 0 !important;
          }
          .product-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 0.6rem !important;
          }
          .product-grid .product-card {
            padding: 0 !important;
          }
          .product-grid .product-info {
            padding: 0.5rem 0.6rem 0.7rem !important;
          }
          .product-grid .product-name {
            font-size: 0.75rem !important;
            margin-bottom: 0.3rem !important;
          }
          .product-grid .product-category {
            font-size: 0.55rem !important;
            letter-spacing: 1px !important;
          }
          .product-grid .product-price-tag {
            font-size: 0.6rem !important;
            padding: 0.2rem 0.5rem !important;
            margin-bottom: 0.5rem !important;
          }
          .product-grid .buy-btn {
            font-size: 0.65rem !important;
            padding: 0.45rem 0.5rem !important;
            gap: 0.25rem !important;
          }
          .product-grid .buy-btn svg {
            width: 12px !important;
            height: 12px !important;
          }
        }
        .product-card {
          position: relative;
          overflow: hidden;
          transition: transform 0.3s, box-shadow 0.3s;
        }
        .product-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, var(--accent-color), transparent);
          opacity: 0;
          transition: opacity 0.3s;
          z-index: 3;
        }
        .product-card:hover::before { opacity: 1; }
        .product-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 10px 40px rgba(0, 102, 255, 0.15), 0 0 0 1px rgba(0, 102, 255, 0.25);
        }
        .buy-btn {
          position: relative;
          overflow: hidden;
          transition: all 0.3s !important;
        }
        .buy-btn::after {
          content: '';
          position: absolute;
          top: 50%; left: 50%;
          width: 0; height: 0;
          background: rgba(255,255,255,0.15);
          border-radius: 50%;
          transform: translate(-50%, -50%);
          transition: width 0.5s, height 0.5s;
        }
        .buy-btn:hover::after {
          width: 300px; height: 300px;
        }
        .buy-btn:hover {
          box-shadow: 0 0 25px rgba(0, 102, 255, 0.5);
          transform: scale(1.03);
        }
      `}} />
      <div className="container">
        <div className="reveal" style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{t('prodTitle1')} <span style={{ color: 'var(--accent-color)' }}>{t('prodTitle2')}</span></h2>
          <p style={{ color: 'var(--text-secondary)' }}>{t('prodDesc')}</p>
        </div>

        <div className="product-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '2rem'
        }}>
          {products.map((product, index) => (
            <div 
              key={product.id} 
              className="glass-panel reveal product-card" 
              style={{ 
                display: 'flex', 
                flexDirection: 'column',
                transitionDelay: `${(index % 4) * 0.1}s`,
                padding: '0',
                background: 'var(--bg-primary)',
                border: '1px solid var(--border-glass)',
                borderRadius: '8px'
              }}
            >
              {/* Cover Image */}
              <div 
                className="product-image-bg"
                style={{
                  height: '180px',
                  backgroundImage: `url(${product.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  position: 'relative',
                  overflow: 'hidden',
                  borderRadius: '8px 8px 0 0'
                }}
              >
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, var(--bg-primary) 5%, transparent 60%)'
                }}></div>
              </div>
              
              {/* Logo Badge */}
              <div 
                className="product-logo-box"
                style={{ 
                  position: 'relative', 
                  marginTop: '-30px',
                  marginLeft: '1.2rem',
                  background: 'var(--bg-primary)',
                  border: '2px solid var(--accent-color)',
                  borderRadius: '12px',
                  width: '56px',
                  height: '56px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  zIndex: 2,
                  boxShadow: '0 0 20px rgba(0, 102, 255, 0.3)'
                }}
              >
                {product.logo}
              </div>

              {/* Info */}
              <div className="product-info" style={{ padding: '0.8rem 1.2rem 1.2rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <span className="product-category" style={{ 
                  fontSize: '0.7rem', color: 'var(--accent-color)', textTransform: 'uppercase', 
                  letterSpacing: '2px', fontWeight: 700, marginBottom: '0.3rem'
                }}>
                  {product.category}
                </span>
                <h3 className="product-name" style={{ fontSize: '1.25rem', marginBottom: '0.8rem', fontWeight: 700 }}>{product.name}</h3>

                {/* Price Tag */}
                <div className="product-price-tag" style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.3rem',
                  background: 'rgba(0, 102, 255, 0.08)',
                  border: '1px solid rgba(0, 102, 255, 0.2)',
                  padding: '0.35rem 0.8rem',
                  borderRadius: '6px',
                  marginBottom: '1rem',
                  fontSize: '0.85rem',
                  width: 'fit-content'
                }}>
                  <span style={{ color: 'var(--text-secondary)' }}>{t('btnFrom')}</span>
                  <span style={{ color: 'var(--accent-color)', fontWeight: 800 }}>
                    ${Math.min(...product.variants.map((v: any) => v.price)).toFixed(2)}
                  </span>
                </div>

                {/* Buy Button */}
                <div style={{ marginTop: 'auto' }}>
                  <button 
                    className="buy-btn" 
                    style={{ 
                      width: '100%', 
                      background: 'linear-gradient(135deg, #0055dd, #0088ff)', 
                      color: '#fff',
                      border: 'none',
                      padding: '0.8rem 1rem',
                      borderRadius: '6px',
                      cursor: 'pointer',
                      fontWeight: 700,
                      fontSize: '0.95rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.5rem',
                      letterSpacing: '0.5px'
                    }}
                    onClick={() => onBuyClick(product)}
                  >
                    <Zap size={18} />
                    {t('btnSelect')}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductList;
