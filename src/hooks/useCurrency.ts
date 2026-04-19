import { useLanguage } from '../context/LanguageContext';

export function useCurrency() {
  const { language } = useLanguage();

  const formatPrice = (priceIdr: number) => {
    switch (language) {
      case 'en': {
        const usd = priceIdr / 17122;
        return `$${usd.toFixed(2)}`;
      }
      case 'ja': {
        const jpy = Math.round(priceIdr / 107);
        return `¥${jpy.toLocaleString('ja-JP')}`;
      }
      case 'hi': {
        const inr = Math.round(priceIdr / 184);
        return `₹${inr.toLocaleString('en-IN')}`;
      }
      case 'ko': {
        const krw = Math.round(priceIdr / 11.6);
        return `₩${krw.toLocaleString('ko-KR')}`;
      }
      case 'ru': {
        const rub = Math.round(priceIdr / 220);
        return `${rub.toLocaleString('ru-RU')} ₽`;
      }
      case 'id':
      default:
        return `Rp ${priceIdr.toLocaleString('id-ID')}`;
    }
  };

  return { formatPrice };
}
