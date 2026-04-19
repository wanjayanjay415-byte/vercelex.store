import { Star } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { globalReviews } from '../data/reviews';
import { useState } from 'react';

const Reviews: React.FC = () => {
  const { t } = useLanguage();
  const [visibleCount, setVisibleCount] = useState(12);
  const reviews = globalReviews;

  const showMore = () => {
    setVisibleCount(prev => Math.min(prev + 12, reviews.length));
  };

  return (
    <section id="reviews" style={{ padding: '4rem 0', position: 'relative' }}>
      <div className="container">
        <div className="reveal" style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>{t('revTitle1')} <span style={{ color: 'var(--success-color)' }}>{t('revTitle2')}</span></h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{t('revDesc')}</p>
          <div style={{ marginTop: '0.75rem', display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
            <span style={{ color: 'var(--text-secondary)', fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '4px' }}>
              <Star size={14} fill="#f7b733" color="#f7b733" />
              4.9/5 average
            </span>
            <span style={{ color: 'var(--text-secondary)', fontSize: '0.8rem' }}>
              {reviews.length}+ verified reviews
            </span>
          </div>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '1rem'
        }}>
          {reviews.slice(0, visibleCount).map((review, index) => (
            <div key={review.id} className="glass-panel reveal" style={{ transitionDelay: `${Math.min(index * 0.05, 0.6)}s`, padding: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                <img 
                  src={review.avatar} 
                  alt={review.name} 
                  style={{ width: '40px', height: '40px', borderRadius: '50%', objectFit: 'cover', border: '2px solid rgba(255,255,255,0.1)' }}
                  loading="lazy"
                />
                <div style={{ flex: 1 }}>
                  <h4 style={{ margin: 0, fontSize: '0.85rem', fontWeight: 600 }}>{review.name}</h4>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '0.7rem', color: 'var(--text-secondary)' }}>{review.country}</span>
                    <span style={{ fontSize: '0.65rem', color: 'var(--text-secondary)', opacity: 0.7 }}>{review.timeAgo}</span>
                  </div>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '2px', marginBottom: '0.5rem' }}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={12} fill={i < review.rating ? '#f7b733' : 'none'} color={i < review.rating ? '#f7b733' : 'var(--border-glass)'} />
                ))}
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.82rem', lineHeight: '1.5', margin: 0 }}>{review.text}</p>
            </div>
          ))}
        </div>

        {visibleCount < reviews.length && (
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <button 
              onClick={showMore}
              style={{
                padding: '0.75rem 2rem',
                borderRadius: '2rem',
                border: '1px solid rgba(255,255,255,0.15)',
                background: 'rgba(255,255,255,0.05)',
                color: 'var(--text-primary)',
                fontSize: '0.85rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                backdropFilter: 'blur(10px)'
              }}
              onMouseEnter={(e) => { (e.target as HTMLButtonElement).style.background = 'rgba(255,255,255,0.12)'; }}
              onMouseLeave={(e) => { (e.target as HTMLButtonElement).style.background = 'rgba(255,255,255,0.05)'; }}
            >
              Load More Reviews ({visibleCount}/{reviews.length})
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Reviews;
