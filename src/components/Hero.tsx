import { ArrowRight, ShieldCheck, Zap, Bot } from 'lucide-react';
import { SiNetflix, SiGmail, SiDiscord, SiGooglegemini, SiX, SiInstagram, SiAnthropic } from '@icons-pack/react-simple-icons';
import { useLanguage } from '../context/LanguageContext';

interface HeroProps {
  onCtaClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
  const { t } = useLanguage();
  return (
    <section id="hero" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      paddingTop: '80px',
      overflow: 'hidden'
    }}>
      {/* Background Effect */}
      <div style={{
        position: 'absolute',
        top: '20%',
        left: '10%',
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(0, 102, 255, 0.15) 0%, rgba(0, 0, 0, 0) 70%)',
        filter: 'blur(50px)',
        zIndex: -1
      }}></div>
      
      <div style={{
        position: 'absolute',
        bottom: '10%',
        right: '10%',
        width: '500px',
        height: '500px',
        background: 'radial-gradient(circle, rgba(0, 153, 255, 0.1) 0%, rgba(0, 0, 0, 0) 70%)',
        filter: 'blur(60px)',
        zIndex: -1
      }}></div>

      <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
        <div className="animate-slide-up" style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.5rem',
          padding: '0.5rem 1rem',
          background: 'var(--bg-glass)',
          border: '1px solid var(--border-glass)',
          borderRadius: '50px',
          marginBottom: '2rem',
          fontSize: '0.9rem'
        }}>
          <Zap size={16} color="var(--accent-color)" />
          <span>{t('heroBadge')}</span>
        </div>

        <h1 className="animate-slide-up delay-100" style={{
          fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
          fontWeight: 700,
          marginBottom: '1rem',
          lineHeight: 1.1,
          maxWidth: '800px'
        }}>
          {t('heroTitle1')} <br/>
          <span className="text-gradient">{t('heroTitle2')}</span>
        </h1>

        <p className="animate-slide-up delay-200" style={{
          fontSize: '1.1rem',
          color: 'var(--text-secondary)',
          maxWidth: '600px',
          marginBottom: '2.5rem'
        }}>
          {t('heroDesc')}
        </p>

        <div className="animate-slide-up delay-300" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          <button className="btn-accent" onClick={onCtaClick} style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}>
            {t('btnExplore')}
            <ArrowRight size={20} />
          </button>
          <button className="btn-secondary flex-center" onClick={() => document.getElementById('reviews')?.scrollIntoView({ behavior: 'smooth' })} style={{ padding: '1rem 2rem', fontSize: '1.1rem', gap: '0.5rem' }}>
            <ShieldCheck size={20} />
            {t('btnReviews')}
          </button>
        </div>

        {/* Floating Icons Display */}
        <div className="animate-slide-up delay-400" style={{
          marginTop: '4rem',
          display: 'flex',
          gap: '2rem',
          flexWrap: 'wrap',
          justifyContent: 'center',
          opacity: 0.8
        }}>
          {[
            <SiNetflix color="#E50914" size={32} />, 
            <SiGmail color="#EA4335" size={32} />, 
            <SiDiscord color="#5865F2" size={32} />, 
            <Bot color="#10A37F" size={32} />, 
            <SiGooglegemini color="#8E75B2" size={32} />, 
            <SiX color="#FFFFFF" size={32} />, 
            <SiInstagram color="#E4405F" size={32} />, 
            <SiAnthropic color="#D97757" size={32} />
          ].map((icon, i) => (
            <div key={i} className="animate-float" style={{ 
              animationDelay: `${i * 0.5}s`,
              background: 'var(--bg-secondary)',
              padding: '1.2rem',
              borderRadius: '12px',
              border: '1px solid var(--border-glass)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              {icon}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
