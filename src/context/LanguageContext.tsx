import React, { createContext, useState, useContext } from 'react';
import type { ReactNode } from 'react';

type Language = 'en' | 'id' | 'hi' | 'ja' | 'ko' | 'ru';

interface TranslateDict {
  [key: string]: {
    en: string;
    id: string;
    hi: string;
    ja: string;
    ko: string;
    ru: string;
  };
}

const translations: TranslateDict = {
  navHome: { en: 'Home', id: 'Beranda', hi: 'होम', ja: 'ホーム', ko: '홈', ru: 'Главная' },
  navProducts: { en: 'Products', id: 'Produk', hi: 'उत्पाद', ja: '製品', ko: '제품', ru: 'Продукты' },
  navReviews: { en: 'Reviews', id: 'Ulasan', hi: 'समीक्षाएं', ja: 'レビュー', ko: '리뷰', ru: 'Отзывы' },
  
  heroBadge: { en: 'Instant Delivery 24/7', id: 'Pengiriman Instan 24/7', hi: 'तत्काल वितरण 24/7', ja: '即時配達 24/7', ko: '연중무휴 즉각 배송', ru: 'Мгновенная доставка 24/7' },
  heroTitle1: { en: 'Premium Digital', id: 'Digital Premium', hi: 'प्रीमियम ', ja: 'プレミアムデジタル', ko: '프리미엄 디지털', ru: 'Премиум Цифровые' },
  heroTitle2: { en: 'Goods & Subscriptions', id: 'Barang & Langganan', hi: 'डिजिटल उत्पाद', ja: '商品と購読', ko: '상품 및 구독', ru: 'Товары и подписки' },
  heroDesc: { 
    en: 'Your one-stop destination for trusted digital accounts and subscriptions. No login required, fast checkout via Crypto, PayPal, or QRIS.', 
    id: 'Destinasi terpadu untuk akun digital dan langganan tepercaya. Tanpa perlu login, checkout cepat via Crypto, PayPal, atau QRIS.', 
    hi: 'विश्वसनीय डिजिटल खातों और सदस्यताओं के लिए आपका वन-स्टॉप गंतव्य। कोई लॉगिन आवश्यक नहीं, क्रिप्टो, पेपाल या क्यूआरआईएस के माध्यम से त्वरित चेकआउट।',
    ja: '信頼できるデジタルアカウントとサブスクリプションのためのワンストップ先。ログイン不要で、Crypto、PayPal、またはQRISでの迅速なチェックアウト。',
    ko: '신뢰할 수 있는 디지털 계정 및 구독을 위한 원스톱 목적지. 로그인 불필요, 암호화폐, PayPal 또는 QRIS를 통한 빠른 결제.',
    ru: 'Ваш универсальный пункт назначения для надежных цифровых аккаунтов и подписок. Не требуется вход в систему, быстрая оплата через Crypto, PayPal или QRIS.' 
  },
  btnExplore: { en: 'Explore Products', id: 'Jelajahi Produk', hi: 'उत्पादों का अन्वेषण करें', ja: '製品を探す', ko: '제품 둘러보기', ru: 'Изучить продукты' },
  btnReviews: { en: 'View Reviews', id: 'Lihat Ulasan', hi: 'समीक्षाएं देखें', ja: 'レビューを見る', ko: '리뷰 보기', ru: 'Смотреть отзывы' },

  prodTitle1: { en: 'Our', id: 'Produk', hi: 'हमारे', ja: '私たちの', ko: '우리의', ru: 'Наши' },
  prodTitle2: { en: 'Products', id: 'Kami', hi: 'उत्पाद', ja: '製品', ko: '제품', ru: 'Продукты' },
  prodDesc: { en: 'Top quality digital assets delivered directly to you.', id: 'Aset digital berkualitas terbaik dikirimkan langsung ke Anda.', hi: 'शीर्ष गुणवत्ता वाले डिजिटल एसेट सीधे आपको वितरित किए गए।', ja: '最高品質のデジタルアセットが直接届きます。', ko: '최고 품질의 디지털 자산이 귀하에게 직접 전달됩니다.', ru: 'Высококачественные цифровые активы доставляются прямо вам.' },
  btnSelect: { en: 'Buy Now', id: 'Beli', hi: 'खरीदें', ja: '今買う', ko: '지금 구매', ru: 'Купить сейчас' },
  btnFrom: { en: 'From', id: 'Dari', hi: 'से', ja: 'から', ko: '시작가', ru: 'От' },

  revTitle1: { en: 'Global', id: 'Umpan Balik', hi: 'वैश्विक', ja: 'グローバル', ko: '글로벌', ru: 'Глобальный' },
  revTitle2: { en: 'Feedback', id: 'Global', hi: 'प्रतिक्रिया', ja: 'フィードバック', ko: '피드백', ru: 'Отзывы' },
  revDesc: { en: 'See what people around the world think.', id: 'Lihat pendapat orang-orang dari seluruh dunia.', hi: 'देखें कि दुनिया भर के लोग क्या सोचते हैं।', ja: '世界中の人がどう思っているか見てみよう。', ko: '전 세계 사람들의 생각을 확인하세요.', ru: 'Посмотрите, что думают люди по всему миру.' },
  
  footer: { en: 'Premium Digital Goods.', id: 'Barang Digital Premium.', hi: 'प्रीमियम डिजिटल सामान।', ja: 'プレミアムデジタル商品。', ko: '프리미엄 디지털 상품.', ru: 'Премиальные цифровые товары.' },

  checkoutSelect: { en: 'Select your product type', id: 'Pilih tipe produk Anda', hi: 'अपना उत्पाद प्रकार चुनें', ja: '製品タイプを選択', ko: '제품 유형 선택', ru: 'Выберите тип продукта' },
  checkoutBtnCont: { en: 'Continue', id: 'Lanjut', hi: 'जारी रखें', ja: '続く', ko: '계속하다', ru: 'Продолжить' },
  checkoutMethod: { en: 'Select Payment Method', id: 'Pilih Metode Pembayaran', hi: 'भुगतान विधि चुनें', ja: '支払方法を選択', ko: '결제 수단 선택', ru: 'Выберите метод оплаты' },
  checkoutInfo: { en: 'Delivery Information', id: 'Informasi Pengiriman', hi: 'वितरण जानकारी', ja: '配送情報', ko: '배송 정보', ru: 'Информация о доставке' },
  checkoutWarn: { 
    en: 'Data and account info will be sent to your Email, WhatsApp, or Telegram within 1 minute after payment is confirmed.', 
    id: 'Data dan info akun akan dikirim ke Email, WhatsApp, atau Telegram dalam 1 menit setelah pembayaran dikonfirmasi.', 
    hi: 'भुगतान की पुष्टि होने के 1 मिनट के भीतर डेटा और खाता जानकारी आपके ईमेल, व्हाट्सएप या टेलीग्राम पर भेज दी जाएगी।',
    ja: 'データおよびアカウント情報は、支払い確認後1分以内にメール、WhatsApp、またはTelegramに送信されます。',
    ko: '결제 확인 후 1분 이내에 이메일, WhatsApp 또는 Telegram으로 데이터 및 계정 정보가 전송됩니다.',
    ru: 'Данные и информация об учетной записи будут отправлены на ваш адрес электронной почты, WhatsApp или Telegram в течение 1 минуты после подтверждения оплаты.'
  },
  checkoutProceed: { en: 'Proceed to Payment', id: 'Lanjut ke Pembayaran', hi: 'भुगतान के लिए आगे बढ़ें', ja: '支払いに進む', ko: '결제 진행', ru: 'Перейти к оплате' },
  checkoutTotal: { en: 'Total:', id: 'Total:', hi: 'कुल:', ja: '合計:', ko: '총:', ru: 'Итого:' },
  checkoutScan: { en: 'SCAN TO PAY', id: 'PINDAI UNTUK BAYAR', hi: 'भुगतान के लिए स्कैन करें', ja: 'スキャンして支払う', ko: '스캔하여 결제', ru: 'СКАНИРУЙТЕ ДЛЯ ОПЛАТЫ' },
  checkoutDone: { en: 'I Have Paid', id: 'Saya Sudah Bayar', hi: 'मैंने भुगतान कर दिया है', ja: '支払い済み', ko: '결제 완료', ru: 'Я оплатил' },

  navCart: { en: 'Cart', id: 'Keranjang', hi: 'गाड़ी', ja: 'カート', ko: '장바구니', ru: 'Корзина' },
  navHistory: { en: 'History', id: 'Riwayat', hi: 'इतिहास', ja: '履歴', ko: '기록', ru: 'История' },
  navProfile: { en: 'Profile', id: 'Profil', hi: 'प्रोफ़ाइल', ja: 'プロフィール', ko: '프로필', ru: 'Профиль' },
  
  cartTitle: { en: 'Your Cart', id: 'Keranjang Anda', hi: 'आपकी कार्ट', ja: 'あなたのカート', ko: '장바구니', ru: 'Ваша корзина' },
  cartEmpty: { en: 'Your cart is empty', id: 'Keranjang Anda kosong', hi: 'आपकी कार्ट खाली है', ja: 'カートは空です', ko: '장바구니가 비어 있습니다', ru: 'Ваша корзина пуста' },
  cartEmptyDesc: { en: 'Looks like you haven\'t added any products to your cart yet.', id: 'Sepertinya Anda belum memasukkan produk apapun.', hi: 'ऐसा लगता है कि आपने कार्ट में कोई उत्पाद नहीं जोड़ा है।', ja: 'まだ商品がカートに追加されていないようです。', ko: '아직 장바구니에 제품을 추가하지 않은 것 같습니다.', ru: 'Похоже, вы еще не добавили ни одного товара в корзину.' },
  cartStartShopping: { en: 'Start Shopping', id: 'Mulai Belanja', hi: 'खरीदारी शुरू करें', ja: '買い物を始める', ko: '쇼핑 시작', ru: 'Начать покупки' },
  cartOrderSummary: { en: 'Order Summary', id: 'Ringkasan Order', hi: 'आदेश सारांश', ja: '注文の概要', ko: '주문 요약', ru: 'Сводка заказа' },
  
  profilePoints: { en: 'Shopping Points', id: 'Poin Belanja', hi: 'शॉपिंग पॉइंट्स', ja: 'ショッピングポイント', ko: '쇼핑 포인트', ru: 'Торговые баллы' },
  profileVouchers: { en: 'Discount Vouchers', id: 'Voucher Diskon', hi: 'डिस्काउंट वाउचर', ja: '割引バウチャー', ko: '할인 쿠폰', ru: 'Купоны на скидку' },
  profileLanguage: { en: 'Language', id: 'Bahasa', hi: 'भाषा', ja: '言語', ko: '언어', ru: 'Язык' },

  toastContactRequired: { en: 'Please enter your Email / WhatsApp / Telegram first.', id: 'Harap masukkan Email / WA / Telegram Anda terlebih dahulu.', hi: 'कृपया पहले अपना ईमेल / WhatsApp / Telegram दर्ज करें।', ja: 'まずメール / WhatsApp / Telegramを入力してください。', ko: '먼저 이메일 / WhatsApp / Telegram을 입력해주세요.', ru: 'Пожалуйста, сначала введите Email / WhatsApp / Telegram.' },
  toastOk: { en: 'OK', id: 'OK', hi: 'ठीक है', ja: 'OK', ko: '확인', ru: 'ОК' },
  chkContactTitle: { en: 'Contact Information', id: 'Informasi Kontak', hi: 'संपर्क जानकारी', ja: '連絡先情報', ko: '연락처 정보', ru: 'Контактная информация' },
  chkContactLabel: { en: 'EMAIL / WA / TELEGRAM', id: 'EMAIL / WA / TELEGRAM', hi: 'ईमेल / WA / TELEGRAM', ja: 'メール / WA / TELEGRAM', ko: '이메일 / WA / TELEGRAM', ru: 'EMAIL / WA / TELEGRAM' },
  chkContactPlaceholder: { en: 'e.g. 08123xxx / @username / your@email', id: 'Contoh: 08123xxx / @username / emailAnda', hi: 'उदा. 08123xxx / @username / email', ja: '例: 08123xxx / @username / email', ko: '예: 08123xxx / @username / email', ru: 'Пример: 08123xxx / @username / email' },
  chkPaymentTitle: { en: 'Payment Method', id: 'Metode Pembayaran', hi: 'भुगतान विधि', ja: '支払方法', ko: '결제 수단', ru: 'Способ оплаты' },
  chkOrderSummary: { en: 'Order Summary', id: 'Ringkasan Pesanan', hi: 'आदेश सारांश', ja: '注文概要', ko: '주문 요약', ru: 'Сводка заказа' },
  chkSubtotal: { en: 'Subtotal', id: 'Subtotal', hi: 'उप-योग', ja: '小計', ko: '소계', ru: 'Подытог' },
  chkServiceFee: { en: 'Service Fee', id: 'Biaya Layanan', hi: 'सेवा शुल्क', ja: 'サービス料', ko: '서비스 수수료', ru: 'Сервисный сбор' },
  chkTotal: { en: 'Total', id: 'Total', hi: 'कुल', ja: '合計', ko: '총계', ru: 'Итого' },
  chkProceed: { en: 'Proceed to Payment', id: 'Lanjut ke Pembayaran', hi: 'भुगतान के लिए आगे बढ़ें', ja: '支払いに進む', ko: '결제 진행', ru: 'Перейти к оплате' },
  chkTrustNote: { en: 'Your payment is processed securely. Account details will be delivered to your contact within 1 minute after confirmation.', id: 'Pembayaran Anda diproses dengan aman. Detail akun akan dikirim ke kontak Anda dalam 1 menit setelah konfirmasi.', hi: 'आपका भुगतान सुरक्षित रूप से संसाधित किया गया है।', ja: 'お支払いは安全に処理されます。', ko: '결제가 안전하게 처리됩니다.', ru: 'Ваш платеж обрабатывается безопасно.' },
  payTitle: { en: 'Payment', id: 'Pembayaran', hi: 'भुगतान', ja: '支払い', ko: '결제', ru: 'Оплата' },
  payTotalBill: { en: 'Total Bill', id: 'Total Tagihan', hi: 'कुल बिल', ja: '合計請求額', ko: '총 청구액', ru: 'Итого к оплате' },
  paySelectCoin: { en: 'SELECT COIN / NETWORK', id: 'PILIH COIN / NETWORK', hi: 'कॉइन / नेटवर्क चुनें', ja: 'コイン/ネットワークを選択', ko: '코인 / 네트워크 선택', ru: 'ВЫБЕРИТЕ МОНЕТУ / СЕТЬ' },
  payWalletAddress: { en: 'WALLET ADDRESS', id: 'ALAMAT DOMPET', hi: 'वॉलेट पता', ja: 'ウォレットアドレス', ko: '지갑 주소', ru: 'АДРЕС КОШЕЛЬКА' },
  payTxHash: { en: 'TRANSACTION HASH (TXID)', id: 'TRANSACTION HASH (TXID)', hi: 'ट्रांज़ैक्शन हैश (TXID)', ja: 'トランザクションハッシュ', ko: '트랜잭션 해시 (TXID)', ru: 'ХЕШ ТРАНЗАКЦИИ (TXID)' },
  payUploadProof: { en: 'UPLOAD TRANSFER PROOF', id: 'UNGGAH BUKTI TRANSFER', hi: 'ट्रांसफर प्रूफ अपलोड करें', ja: '送金証明をアップロード', ko: '이체 증빙 업로드', ru: 'ЗАГРУЗИТЬ ПОДТВЕРЖДЕНИЕ' },
  paySelectFile: { en: 'Select Screenshot File (JPG/PNG)', id: 'Pilih File Screenshot (JPG/PNG)', hi: 'स्क्रीनशॉट फ़ाइल चुनें', ja: 'スクリーンショットを選択', ko: '스크린샷 파일 선택', ru: 'Выберите скриншот' },
  payQrisScan: { en: 'Scan QRIS above via mBCA, Livin, OVO, Dana, LinkAja, or Gopay.', id: 'Silahkan pindai QRIS di atas via mBCA, Livin, OVO, Dana, LinkAja, atau Gopay.', hi: 'ऊपर QRIS स्कैन करें।', ja: '上記QRISをスキャンしてください。', ko: '위의 QRIS를 스캔하세요.', ru: 'Сканируйте QRIS выше.' },
  payConfirm: { en: 'CONFIRM PAYMENT', id: 'KONFIRMASI PEMBAYARAN', hi: 'भुगतान की पुष्टि करें', ja: '支払い確認', ko: '결제 확인', ru: 'ПОДТВЕРДИТЬ ОПЛАТУ' },
  payAlertCrypto: { en: 'Please enter your crypto TX Hash.', id: 'Harap masukkan TX Hash kripto Anda.', hi: 'कृपया अपना TX Hash दर्ज करें।', ja: 'TXハッシュを入力してください。', ko: 'TX Hash를 입력해주세요.', ru: 'Введите TX Hash.' },
  payAlertQris: { en: 'Please upload your transfer proof.', id: 'Harap upload bukti transfer Anda.', hi: 'कृपया ट्रांसफर प्रूफ अपलोड करें।', ja: '送金証明をアップロードしてください。', ko: '이체 증빙을 업로드해주세요.', ru: 'Загрузите подтверждение.' },
  paySuccess: { en: 'Payment proof is being verified! Check your Purchase History.', id: 'Bukti pembayaran sedang diverifikasi! Cek menu Riwayat Pembelian.', hi: 'भुगतान प्रमाण सत्यापित किया जा रहा है!', ja: '支払い証明を確認中です！', ko: '결제 증빙이 확인 중입니다!', ru: 'Подтверждение оплаты проверяется!' },
  pdSelectType: { en: 'Select Type', id: 'Pilih Tipe', hi: 'प्रकार चुनें', ja: 'タイプを選択', ko: '유형 선택', ru: 'Выберите тип' },
  pdReviews: { en: 'Reviews', id: 'Ulasan', hi: 'समीक्षाएं', ja: 'レビュー', ko: '리뷰', ru: 'Отзывы' },
  pdSeeAll: { en: 'See All', id: 'Lihat Semua', hi: 'सभी देखें', ja: 'すべて見る', ko: '전체 보기', ru: 'Смотреть все' },
  pdShowLess: { en: 'Show Less', id: 'Tampilkan Sedikit', hi: 'कम दिखाएं', ja: '表示を減らす', ko: '간략히 보기', ru: 'Показать меньше' },
  pdAddToCart: { en: 'Add to Cart', id: 'Tambah ke Keranjang', hi: 'कार्ट में जोड़ें', ja: 'カートに追加', ko: '장바구니에 추가', ru: 'В корзину' }
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string) => {
    return translations[key]?.[language] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
