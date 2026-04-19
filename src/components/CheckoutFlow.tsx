import { useState } from 'react';
import { X, ChevronRight, CheckCircle, CreditCard, Bitcoin, Scan } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface CheckoutProps {
  product: any;
  onClose: () => void;
}

const CheckoutFlow: React.FC<CheckoutProps> = ({ product, onClose }) => {
  const { t } = useLanguage();
  const [step, setStep] = useState(1);
  const [selectedVariant, setSelectedVariant] = useState<any>(null);
  const [paymentMethod, setPaymentMethod] = useState('');
  const [contactInfo, setContactInfo] = useState('');

  if (!product) return null;

  const nextStep = () => setStep((s: number) => s + 1);

  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 1000,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      background: 'rgba(0, 0, 0, 0.8)', backdropFilter: 'blur(10px)',
      padding: '1rem'
    }} className="animate-fade-in">
      
      <div className="glass-panel animate-slide-up" style={{
        width: '100%', maxWidth: '500px', backgroundColor: 'var(--bg-secondary)',
        position: 'relative', overflow: 'hidden'
      }}>
        <button onClick={onClose} style={{
          position: 'absolute', top: '15px', right: '15px',
          color: 'var(--text-secondary)'
        }}>
          <X size={24} />
        </button>

        {/* Header Indicator */}
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2rem', padding: '0 1rem' }}>
          {[1,2,3,4].map(i => (
            <div key={i} style={{
              height: '4px', flex: 1, margin: '0 4px', borderRadius: '4px',
              background: step >= i ? 'var(--accent-color)' : 'var(--border-glass)',
              transition: 'all 0.3s'
            }} />
          ))}
        </div>

        {/* STEP 1: Select Variant */}
        {step === 1 && (
          <div className="animate-fade-in">
            <h3 style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              {product.logo} {product.name}
            </h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>{t('checkoutSelect')}</p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
              {product.variants.map((variant: any) => (
                <div key={variant.id} 
                  onClick={() => setSelectedVariant(variant)}
                  style={{
                    padding: '1rem', border: '1px solid',
                    borderColor: selectedVariant?.id === variant.id ? 'var(--accent-color)' : 'var(--border-glass)',
                    borderRadius: 'var(--border-radius-sm)', cursor: 'pointer',
                    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                    background: selectedVariant?.id === variant.id ? 'rgba(247, 183, 51, 0.1)' : 'transparent',
                    transition: '0.2s'
                  }}>
                  <span>{variant.name}</span>
                  <span style={{ fontWeight: 'bold' }}>${variant.price.toFixed(2)}</span>
                </div>
              ))}
            </div>

            <button 
              className="btn-primary" style={{ width: '100%' }}
              disabled={!selectedVariant}
              onClick={selectedVariant ? nextStep : undefined}
            >
              {t('checkoutBtnCont')} <ChevronRight size={18} />
            </button>
          </div>
        )}

        {/* STEP 2: Select Payment */}
        {step === 2 && (
          <div className="animate-fade-in">
            <h3 style={{ marginBottom: '1.5rem' }}>{t('checkoutMethod')}</h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
              {[
                { id: 'crypto', name: 'Crypto', icon: <Bitcoin /> },
                { id: 'paypal', name: 'PayPal', icon: <CreditCard /> },
                { id: 'qris', name: 'QRIS (IDR)', icon: <Scan /> }
              ].map(method => (
                <div key={method.id} 
                  onClick={() => setPaymentMethod(method.id)}
                  style={{
                    padding: '1rem', border: '1px solid',
                    borderColor: paymentMethod === method.id ? 'var(--accent-color)' : 'var(--border-glass)',
                    borderRadius: 'var(--border-radius-sm)', cursor: 'pointer',
                    display: 'flex', alignItems: 'center', gap: '1rem',
                    background: paymentMethod === method.id ? 'rgba(247, 183, 51, 0.1)' : 'transparent',
                    transition: '0.2s'
                  }}>
                  {method.icon}
                  <span>{method.name}</span>
                </div>
              ))}
            </div>

            <button 
              className="btn-primary" style={{ width: '100%' }}
              disabled={!paymentMethod}
              onClick={paymentMethod ? nextStep : undefined}
            >
              {t('checkoutBtnCont')} <ChevronRight size={18} />
            </button>
          </div>
        )}

        {/* STEP 3: Contact Info & Warning */}
        {step === 3 && (
          <div className="animate-fade-in">
            <h3 style={{ marginBottom: '1.5rem' }}>{t('checkoutInfo')}</h3>
            
            <div style={{
              background: 'rgba(239, 68, 68, 0.1)',
              border: '1px solid var(--error-color)',
              padding: '1rem',
              borderRadius: 'var(--border-radius-sm)',
              marginBottom: '1.5rem',
              fontSize: '0.9rem'
            }}>
              <strong style={{ color: 'var(--error-color)', display: 'block', marginBottom: '0.5rem' }}>⚠️ IMPORTANT NOTIFICATION</strong>
              {t('checkoutWarn')}
            </div>

            <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
              Email / WhatsApp Number / Telegram Username
            </label>
            <input 
              type="text" 
              value={contactInfo}
              onChange={(e) => setContactInfo(e.target.value)}
              placeholder="e.g. user@gmail.com or @username"
              style={{
                width: '100%', padding: '0.75rem 1rem',
                background: 'var(--bg-primary)',
                border: '1px solid var(--border-glass)',
                color: 'white', borderRadius: 'var(--border-radius-sm)',
                marginBottom: '2rem', outline: 'none'
              }}
            />

            <button 
              className="btn-accent" style={{ width: '100%' }}
              disabled={!contactInfo}
              onClick={contactInfo ? nextStep : undefined}
            >
              {t('checkoutProceed')} <ChevronRight size={18} />
            </button>
          </div>
        )}

        {/* STEP 4: Payment View -> Done */}
        {step === 4 && (
          <div className="animate-fade-in" style={{ textAlign: 'center' }}>
            <h3 style={{ marginBottom: '0.5rem' }}>Complete Payment</h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
              {t('checkoutTotal')} ${selectedVariant.price.toFixed(2)} via {paymentMethod.toUpperCase()}
            </p>

            <div style={{
              width: '200px', height: '200px', margin: '0 auto 2rem',
              background: '#fff', borderRadius: '8px', padding: '1rem',
              display: 'flex', alignItems: 'center', justifyContent: 'center'
            }}>
              {/* Dummy QR Code / Scan graphic */}
              <div style={{ textAlign: 'center', color: '#000' }}>
                <Scan size={80} style={{ margin: '0 auto 0.5rem' }} />
                <p style={{ fontWeight: 'bold', fontSize: '0.9rem' }}>{t('checkoutScan')}</p>
              </div>
            </div>

            <button 
              className="btn-primary" style={{ width: '100%', background: 'var(--success-color)', color: '#fff' }}
              onClick={() => {
                alert(`Mock Payment Success! Credentials will be sent to ${contactInfo}.`);
                onClose();
              }}
            >
              <CheckCircle size={18} /> {t('checkoutDone')}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CheckoutFlow;
