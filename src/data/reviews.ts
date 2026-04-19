// Master review pool — 100 unique reviews with realistic profiles, no quotation marks
// Reviews are multi-language, multi-style: casual/gaul, formal, slang from various countries

export interface GlobalReview {
  id: number;
  name: string;
  country: string;
  avatar: string;
  text: string;
  rating: number;
  // Which product categories this review is relevant to
  tags: string[];
  timeAgo: string;
}

export const globalReviews: GlobalReview[] = [
  // === INDONESIA (casual/gaul) ===
  { id: 1, name: "Budi Santoso", country: "🇮🇩 Indonesia", avatar: "https://i.pravatar.cc/150?img=11", text: "Mantap euy! Beli akun Netflix di sini langsung masuk email nggak nyampe semenit. Bisa nobar bareng keluarga deh malam ini. Recommended banget", rating: 5, tags: ["netflix-premium","yt-premium","spotify-premium"], timeAgo: "2 hari lalu" },
  { id: 2, name: "Siska Oktavia", country: "🇮🇩 Indonesia", avatar: "https://i.pravatar.cc/150?img=47", text: "Anjir cepet bgt prosesnya, baru bayar langsung dapet akun. Admin ramah lagi. Bakal repeat order buat temen-temen gue juga", rating: 5, tags: ["canva-pro","spotify-premium","gmail-old"], timeAgo: "3 hari lalu" },
  { id: 3, name: "Adi Prasetyo", country: "🇮🇩 Indonesia", avatar: "https://i.pravatar.cc/150?img=14", text: "Gila sih ini murah bgt dibanding beli sendiri. Gemini Pro udah jalan 3 bulan ga ada masalah, langganan terus deh", rating: 5, tags: ["gemini-pro-personal","gemini-pro-ultra","chatgpt-plus"], timeAgo: "1 minggu lalu" },
  { id: 4, name: "Dinda Ayu", country: "🇮🇩 Indonesia", avatar: "https://i.pravatar.cc/150?img=45", text: "Pertama agak ragu sih beli disini tapi ternyata legit beneran. Spotify premium udh 4 bulan ga ada kendala sama sekali. Makasih min", rating: 5, tags: ["spotify-premium","netflix-premium","yt-premium"], timeAgo: "5 hari lalu" },
  { id: 5, name: "Rizky Firman", country: "🇮🇩 Indonesia", avatar: "https://i.pravatar.cc/150?img=52", text: "Buat yang ragu mending langsung aja. Gue udah 3x order disini ga pernah kecewa. Harga bersahabat, pelayanan juara", rating: 5, tags: ["chatgpt-plus","chatgpt-pro","gemini-pro-personal"], timeAgo: "2 hari lalu" },
  { id: 6, name: "Nisa Amelia", country: "🇮🇩 Indonesia", avatar: "https://i.pravatar.cc/150?img=44", text: "Nonton konser YouTube gapake iklan lagi ya Allah makasih. Worth every rupiah sih ini mah", rating: 5, tags: ["yt-premium","spotify-premium"], timeAgo: "4 hari lalu" },
  { id: 7, name: "Fajar Nugroho", country: "🇮🇩 Indonesia", avatar: "https://i.pravatar.cc/150?img=59", text: "Gmail old nya bener-bener tua umurnya, aman buat farming akun game. Udah coba 50 biji semua work", rating: 4, tags: ["gmail-old","gmail-new","twitter-old","telegram-old"], timeAgo: "1 minggu lalu" },
  { id: 8, name: "Putri Wulandari", country: "🇮🇩 Indonesia", avatar: "https://i.pravatar.cc/150?img=25", text: "Canva Pro nya asli ya ampun, semua fitur premium kebuka. Buat desain tugas kampus jadi gampang banget", rating: 5, tags: ["canva-pro"], timeAgo: "3 hari lalu" },
  { id: 9, name: "Asep Kurniawan", country: "🇮🇩 Indonesia", avatar: "https://i.pravatar.cc/150?img=17", text: "Gile lu ndro murah amat dapet private, asik buat ngoding ga takut ke-limit. ChatGPT Pro terbaik lah", rating: 5, tags: ["chatgpt-pro","chatgpt-plus","claude-pro"], timeAgo: "6 hari lalu" },
  { id: 10, name: "Maya Sari", country: "🇮🇩 Indonesia", avatar: "https://i.pravatar.cc/150?img=32", text: "Claude AI nya mantep banget buat nulis skripsi, lebih detail dan rapi hasilnya. Admin fast response pula", rating: 5, tags: ["claude-pro","claude-pro-max"], timeAgo: "2 hari lalu" },

  // === INDIA (English mixed Hindi) ===
  { id: 11, name: "Raj Patel", country: "🇮🇳 India", avatar: "https://i.pravatar.cc/150?img=12", text: "Bhai this is too good. Got the Gemini PRO account super fast without any issues. The process was buttery smooth. Will buy again for sure", rating: 5, tags: ["gemini-pro-personal","gemini-pro-ultra"], timeAgo: "3 days ago" },
  { id: 12, name: "Anupam Roy", country: "🇮🇳 India", avatar: "https://i.pravatar.cc/150?img=53", text: "Bro old Gmail is working perfect. Logged in and no PVA issue. Best place to buy accounts hands down", rating: 5, tags: ["gmail-old","gmail-new","telegram-old"], timeAgo: "1 week ago" },
  { id: 13, name: "Priya Sharma", country: "🇮🇳 India", avatar: "https://i.pravatar.cc/150?img=26", text: "Setup was instant and no ads ruining my videos anymore. YouTube Premium is a lifesaver for long study sessions", rating: 5, tags: ["yt-premium","spotify-premium","netflix-premium"], timeAgo: "5 days ago" },
  { id: 14, name: "Vikram Singh", country: "🇮🇳 India", avatar: "https://i.pravatar.cc/150?img=58", text: "Ek number service hai yaar. ChatGPT Plus private mila genuine price mein, coding ke liye perfect hai", rating: 5, tags: ["chatgpt-plus","chatgpt-pro","gemini-pro-ultra"], timeAgo: "2 days ago" },
  { id: 15, name: "Deepa Nair", country: "🇮🇳 India", avatar: "https://i.pravatar.cc/150?img=20", text: "Was skeptical at first but delivery was instant over Telegram. Netflix account is running flawlessly from day one", rating: 4, tags: ["netflix-premium","yt-premium","spotify-premium"], timeAgo: "4 days ago" },
  { id: 16, name: "Arjun Mehta", country: "🇮🇳 India", avatar: "https://i.pravatar.cc/150?img=61", text: "Canva Pro at this price is absolutely insane. All premium templates unlocked. My design workflow has completely changed", rating: 5, tags: ["canva-pro"], timeAgo: "1 week ago" },
  { id: 17, name: "Kavita Joshi", country: "🇮🇳 India", avatar: "https://i.pravatar.cc/150?img=23", text: "Claude Pro is amazing for research papers. The context window is huge and summaries are on point. Great value for money", rating: 5, tags: ["claude-pro","claude-pro-max","chatgpt-pro"], timeAgo: "3 days ago" },
  { id: 18, name: "Suresh Kumar", country: "🇮🇳 India", avatar: "https://i.pravatar.cc/150?img=50", text: "Maza aa gaya bhai. Telegram old accounts perfect quality mil gaye. Running my channels without any ban. Top seller", rating: 5, tags: ["telegram-old","twitter-old","gmail-old"], timeAgo: "6 days ago" },

  // === USA / UK (English formal & casual) ===
  { id: 19, name: "Sarah Jenkins", country: "🇺🇸 United States", avatar: "https://i.pravatar.cc/150?img=5", text: "Honestly didnt expect it to be this fast. Bought an old X account and it was legit. Good stuff guys you saved me a lot of time", rating: 4, tags: ["twitter-old","gmail-old","telegram-old"], timeAgo: "4 days ago" },
  { id: 20, name: "Michael Torres", country: "🇺🇸 United States", avatar: "https://i.pravatar.cc/150?img=51", text: "Exceptionally fast delivery. The pricing is unbeatable for the intelligence ChatGPT Pro offers. Already recommended to my entire dev team", rating: 5, tags: ["chatgpt-pro","chatgpt-plus","gemini-pro-ultra"], timeAgo: "2 days ago" },
  { id: 21, name: "Emily Watson", country: "🇬🇧 United Kingdom", avatar: "https://i.pravatar.cc/150?img=43", text: "Saved my life for designing quick flyers with Canva Pro. Easy setup and fast activation. Brilliant service all around", rating: 5, tags: ["canva-pro"], timeAgo: "3 days ago" },
  { id: 22, name: "James Anderson", country: "🇺🇸 United States", avatar: "https://i.pravatar.cc/150?img=57", text: "Been using the Gemini Ultra for two months now. Zero downtime, private access works flawlessly. This is a steal at this price", rating: 5, tags: ["gemini-pro-ultra","gemini-pro-personal"], timeAgo: "1 week ago" },
  { id: 23, name: "Olivia Brown", country: "🇬🇧 United Kingdom", avatar: "https://i.pravatar.cc/150?img=16", text: "YouTube Premium through here is so much cheaper than direct subscription. No ads, background play, everything works perfectly", rating: 5, tags: ["yt-premium","spotify-premium"], timeAgo: "5 days ago" },
  { id: 24, name: "David Garcia", country: "🇺🇸 United States", avatar: "https://i.pravatar.cc/150?img=68", text: "Private access makes a huge difference for Claude AI. No rate limits during crunch time. Highly recommended for serious developers", rating: 5, tags: ["claude-pro","claude-pro-max","chatgpt-pro"], timeAgo: "2 days ago" },
  { id: 25, name: "Jessica Miller", country: "🇺🇸 United States", avatar: "https://i.pravatar.cc/150?img=10", text: "Got 200 Gmail accounts for our marketing campaign. Every single one worked out of the box. Customer support was also responsive", rating: 4, tags: ["gmail-old","gmail-new"], timeAgo: "6 days ago" },
  { id: 26, name: "Thomas Wright", country: "🇬🇧 United Kingdom", avatar: "https://i.pravatar.cc/150?img=55", text: "Spotify Premium has been running for months now without any issues. The crypto payment option was a nice touch too", rating: 5, tags: ["spotify-premium","netflix-premium","yt-premium"], timeAgo: "1 week ago" },

  // === JAPAN (Japanese + English mix) ===
  { id: 27, name: "Kenji Sato", country: "🇯🇵 Japan", avatar: "https://i.pravatar.cc/150?img=33", text: "めっちゃ早い！ChatGPT Plus works perfectly. No complicated login, just straight to the point. 最高です", rating: 5, tags: ["chatgpt-plus","chatgpt-pro"], timeAgo: "3 days ago" },
  { id: 28, name: "Taro Yamamoto", country: "🇯🇵 Japan", avatar: "https://i.pravatar.cc/150?img=56", text: "ヤバいこれマジで仕事の効率が10倍になりました。Gemini Ultra private access最高！コスパ最強すぎる", rating: 5, tags: ["gemini-pro-ultra","gemini-pro-personal"], timeAgo: "5 days ago" },
  { id: 29, name: "Yuki Tanaka", country: "🇯🇵 Japan", avatar: "https://i.pravatar.cc/150?img=31", text: "Netflix 4K画質が最高です。日本のアニメも海外ドラマも全部見れる。この値段で信じられない", rating: 5, tags: ["netflix-premium","yt-premium","spotify-premium"], timeAgo: "2 days ago" },
  { id: 30, name: "Satoshi Nakamura", country: "🇯🇵 Japan", avatar: "https://i.pravatar.cc/150?img=60", text: "プロ版のコーディング支援は神。Claude PRO MAX使ったら他のAI戻れなくなった。Token数が違う", rating: 5, tags: ["claude-pro-max","claude-pro","chatgpt-pro"], timeAgo: "4 days ago" },
  { id: 31, name: "Haruka Ito", country: "🇯🇵 Japan", avatar: "https://i.pravatar.cc/150?img=24", text: "Canva Proのおかげでプレゼン資料が見違えるほど良くなった。同僚にも勧めてます", rating: 5, tags: ["canva-pro"], timeAgo: "1 week ago" },

  // === KOREA ===
  { id: 32, name: "Ji-Hoon Kim", country: "🇰🇷 South Korea", avatar: "https://i.pravatar.cc/150?img=60", text: "진짜 대박. Claude AI PRO 구매했는데 크립토 결제도 매끄럽고 텔레그램으로 바로 받았어요. 강추합니다", rating: 5, tags: ["claude-pro","claude-pro-max","chatgpt-plus"], timeAgo: "3 days ago" },
  { id: 33, name: "Min-Ji Park", country: "🇰🇷 South Korea", avatar: "https://i.pravatar.cc/150?img=30", text: "넷플릭스 프리미엄 진짜 좋아요. 화질 최고에 끊김 없이 잘 돌아갑니다. 가격도 착해요", rating: 5, tags: ["netflix-premium","yt-premium","spotify-premium"], timeAgo: "5 days ago" },
  { id: 34, name: "Hyun-Woo Lee", country: "🇰🇷 South Korea", avatar: "https://i.pravatar.cc/150?img=62", text: "Gemini Pro 사용 중인데 속도도 빠르고 답변 퀄리티가 ChatGPT보다 나은 것 같아요. 좋은 가게 찾았네요", rating: 5, tags: ["gemini-pro-personal","gemini-pro-ultra"], timeAgo: "2 days ago" },

  // === BRAZIL (Portuguese) ===
  { id: 35, name: "Carlos Silva", country: "🇧🇷 Brazil", avatar: "https://i.pravatar.cc/150?img=8", text: "Muito bom mano! ChatGPT ativado na hora. Tava com medo de ser golpe mas os caras são confiáveis demais. Recomendo pra todo mundo", rating: 5, tags: ["chatgpt-plus","chatgpt-pro","gemini-pro-personal"], timeAgo: "4 days ago" },
  { id: 36, name: "Ana Souza", country: "🇧🇷 Brazil", avatar: "https://i.pravatar.cc/150?img=41", text: "Spotify Premium funcionando perfeitamente já faz dois meses. Sem propagandas e com download offline. Melhor compra que fiz", rating: 5, tags: ["spotify-premium","netflix-premium","yt-premium"], timeAgo: "1 week ago" },
  { id: 37, name: "Lucas Oliveira", country: "🇧🇷 Brazil", avatar: "https://i.pravatar.cc/150?img=15", text: "Comprei Gmail old pra minha agência e todos funcionaram. Nenhum pediu verificação. Preço justo e entrega rápida", rating: 4, tags: ["gmail-old","gmail-new","twitter-old"], timeAgo: "6 days ago" },

  // === RUSSIA ===
  { id: 38, name: "Irina Volkov", country: "🇷🇺 Russia", avatar: "https://i.pravatar.cc/150?img=38", text: "Просто пушка! Быстро выдали аккаунт ChatGPT, всё летает. Оплата криптой — удобно и анонимно", rating: 5, tags: ["chatgpt-plus","chatgpt-pro","gemini-pro-personal"], timeAgo: "3 days ago" },
  { id: 39, name: "Vladimir Petrov", country: "🇷🇺 Russia", avatar: "https://i.pravatar.cc/150?img=54", text: "Аккаунты Telegram отличного качества. Идеально подходят для маркетинга. Уже 50 штук брал и ни один не забанили", rating: 5, tags: ["telegram-old","twitter-old","gmail-old"], timeAgo: "5 days ago" },
  { id: 40, name: "Natasha Ivanova", country: "🇷🇺 Russia", avatar: "https://i.pravatar.cc/150?img=21", text: "Netflix Premium качество 4K без ограничений. Смотрю сериалы каждый вечер. Отличный сервис по доступной цене", rating: 5, tags: ["netflix-premium","yt-premium","spotify-premium"], timeAgo: "2 days ago" },

  // === GERMANY ===
  { id: 41, name: "Max Weber", country: "🇩🇪 Germany", avatar: "https://i.pravatar.cc/150?img=13", text: "Sehr schnelle Lieferung und alles funktioniert einwandfrei. Gemini Ultra ist ein Game-Changer für meine Arbeit als Entwickler", rating: 5, tags: ["gemini-pro-ultra","gemini-pro-personal","chatgpt-pro"], timeAgo: "4 days ago" },
  { id: 42, name: "Lisa Müller", country: "🇩🇪 Germany", avatar: "https://i.pravatar.cc/150?img=29", text: "Canva Pro zum Bruchteil des normalen Preises. Alle Premium-Features funktionieren perfekt. Kann ich nur empfehlen", rating: 5, tags: ["canva-pro"], timeAgo: "1 week ago" },

  // === FRANCE ===
  { id: 43, name: "Pierre Dubois", country: "🇫🇷 France", avatar: "https://i.pravatar.cc/150?img=69", text: "Service impeccable. ChatGPT Pro reçu en quelques minutes. Le rapport qualité-prix est imbattable sur le marché", rating: 5, tags: ["chatgpt-pro","chatgpt-plus","claude-pro"], timeAgo: "3 days ago" },
  { id: 44, name: "Marie Laurent", country: "🇫🇷 France", avatar: "https://i.pravatar.cc/150?img=36", text: "YouTube Premium sans pub cest le bonheur total. Installation rapide et service client réactif. Très satisfaite", rating: 5, tags: ["yt-premium","spotify-premium","netflix-premium"], timeAgo: "5 days ago" },

  // === TURKEY ===
  { id: 45, name: "Ahmet Yılmaz", country: "🇹🇷 Turkey", avatar: "https://i.pravatar.cc/150?img=18", text: "Hesap hemen geldi, hiç sorun yaşamadım. Netflix Premium mükemmel çalışıyor. Fiyatı da çok uygun. Teşekkürler", rating: 5, tags: ["netflix-premium","spotify-premium","yt-premium"], timeAgo: "2 days ago" },
  { id: 46, name: "Elif Demir", country: "🇹🇷 Turkey", avatar: "https://i.pravatar.cc/150?img=39", text: "Gemini Pro AI gerçekten çok güçlü. Yazılım geliştirme sürecimi hızlandırdı. Kripto ile ödeme yapabilmek de büyük avantaj", rating: 5, tags: ["gemini-pro-personal","gemini-pro-ultra","chatgpt-plus"], timeAgo: "6 days ago" },

  // === PHILIPPINES ===
  { id: 47, name: "Juan dela Cruz", country: "🇵🇭 Philippines", avatar: "https://i.pravatar.cc/150?img=63", text: "Grabe ang bilis ng delivery pre. Spotify Premium gumagana agad pagkabili. Sulit na sulit sa presyo. Salamat boss", rating: 5, tags: ["spotify-premium","yt-premium","netflix-premium"], timeAgo: "4 days ago" },
  { id: 48, name: "Maria Santos", country: "🇵🇭 Philippines", avatar: "https://i.pravatar.cc/150?img=22", text: "Nag-order ako ng Gmail accounts for my online business. Lahat gumagana walang issue. Babalik talaga ako dito", rating: 5, tags: ["gmail-old","gmail-new","telegram-old"], timeAgo: "3 days ago" },

  // === THAILAND ===
  { id: 49, name: "Somchai Pong", country: "🇹🇭 Thailand", avatar: "https://i.pravatar.cc/150?img=19", text: "บริการดีมากครับ ChatGPT Plus ใช้งานได้ทันทีหลังชำระเงิน. ราคาถูกกว่าสมัครเองเยอะ. แนะนำเลย", rating: 5, tags: ["chatgpt-plus","chatgpt-pro","gemini-pro-personal"], timeAgo: "5 days ago" },
  { id: 50, name: "Ploy Suwanna", country: "🇹🇭 Thailand", avatar: "https://i.pravatar.cc/150?img=27", text: "ซื้อ Canva Pro มาแล้วดีมากค่ะ ฟีเจอร์ทุกอย่างเปิดใช้ได้หมด. คุ้มค่ามากๆ สำหรับนักออกแบบ", rating: 5, tags: ["canva-pro"], timeAgo: "2 days ago" },

  // === VIETNAM ===
  { id: 51, name: "Nguyen Van Duc", country: "🇻🇳 Vietnam", avatar: "https://i.pravatar.cc/150?img=64", text: "Dịch vụ tuyệt vời luôn. Mua Claude Pro xong dùng ngay không phải chờ. Giá rẻ hơn nhiều so với mua trực tiếp", rating: 5, tags: ["claude-pro","claude-pro-max","chatgpt-plus"], timeAgo: "3 days ago" },
  { id: 52, name: "Tran Thi Mai", country: "🇻🇳 Vietnam", avatar: "https://i.pravatar.cc/150?img=42", text: "Netflix Premium chất lượng 4K, xem phim mượt mà. Đã mua 3 tháng rồi chưa gặp vấn đề gì. Rất hài lòng", rating: 5, tags: ["netflix-premium","yt-premium","spotify-premium"], timeAgo: "1 week ago" },

  // === MALAYSIA ===
  { id: 53, name: "Ahmad Ismail", country: "🇲🇾 Malaysia", avatar: "https://i.pravatar.cc/150?img=65", text: "Memang berbaloi beli sini. Gemini Pro berfungsi dengan sempurna. Harga pun sangat berpatutan. Akan beli lagi", rating: 5, tags: ["gemini-pro-personal","gemini-pro-ultra"], timeAgo: "4 days ago" },
  { id: 54, name: "Siti Fatimah", country: "🇲🇾 Malaysia", avatar: "https://i.pravatar.cc/150?img=34", text: "Spotify Premium best gila. Takde iklan langsung, boleh download lagu offline. Admin pun laju respon. Thanks bro", rating: 5, tags: ["spotify-premium","yt-premium"], timeAgo: "2 days ago" },

  // === EGYPT / MIDDLE EAST ===
  { id: 55, name: "Ahmed Hassan", country: "🇪🇬 Egypt", avatar: "https://i.pravatar.cc/150?img=66", text: "خدمة ممتازة والحساب وصل في دقائق. ChatGPT Pro يشتغل بدون مشاكل. السعر معقول جدا مقارنة بالسوق", rating: 5, tags: ["chatgpt-pro","chatgpt-plus","gemini-pro-ultra"], timeAgo: "3 days ago" },
  { id: 56, name: "Fatma Ali", country: "🇪🇬 Egypt", avatar: "https://i.pravatar.cc/150?img=46", text: "يوتيوب بريميوم بدون إعلانات حياة تانية خالص. تسليم فوري والدعم الفني متعاون. أنصح الكل", rating: 5, tags: ["yt-premium","netflix-premium","spotify-premium"], timeAgo: "5 days ago" },

  // === NIGERIA ===
  { id: 57, name: "Emeka Obi", country: "🇳🇬 Nigeria", avatar: "https://i.pravatar.cc/150?img=67", text: "This is legit bros. Bought Twitter old accounts for our agency. All verified and working. Pricing is fair and delivery was instant", rating: 5, tags: ["twitter-old","telegram-old","gmail-old"], timeAgo: "4 days ago" },
  { id: 58, name: "Amina Bello", country: "🇳🇬 Nigeria", avatar: "https://i.pravatar.cc/150?img=37", text: "Claude AI Pro is a beast for content writing. Been using it for my blog and the quality is incredible. Best investment I made this month", rating: 5, tags: ["claude-pro","claude-pro-max","chatgpt-pro"], timeAgo: "2 days ago" },

  // === SPAIN ===
  { id: 59, name: "Pablo Rodriguez", country: "🇪🇸 Spain", avatar: "https://i.pravatar.cc/150?img=35", text: "Increíble servicio. Compré Gemini Pro Ultra y funciona de maravilla. El pago con crypto fue rápido y seguro", rating: 5, tags: ["gemini-pro-ultra","gemini-pro-personal","chatgpt-plus"], timeAgo: "3 days ago" },
  { id: 60, name: "Carmen Lopez", country: "🇪🇸 Spain", avatar: "https://i.pravatar.cc/150?img=48", text: "Netflix Premium genial. Calidad 4K sin cortes ni problemas. Ya llevo dos meses y va perfecto. Muy recomendable", rating: 5, tags: ["netflix-premium","spotify-premium","yt-premium"], timeAgo: "6 days ago" },

  // === MEXICO ===
  { id: 61, name: "Diego Martinez", country: "🇲🇽 Mexico", avatar: "https://i.pravatar.cc/150?img=70", text: "Que chido esta este servicio. Compre ChatGPT Plus y me llego al instante por Telegram. Los precios estan bien accesibles", rating: 5, tags: ["chatgpt-plus","chatgpt-pro","gemini-pro-personal"], timeAgo: "4 days ago" },

  // === POLAND ===
  { id: 62, name: "Tomasz Kowalski", country: "🇵🇱 Poland", avatar: "https://i.pravatar.cc/150?img=7", text: "Świetna obsługa i szybka dostawa. Spotify Premium działa bez zarzutu od tygodnia. Polecam każdemu", rating: 5, tags: ["spotify-premium","netflix-premium","yt-premium"], timeAgo: "5 days ago" },

  // === ITALY ===
  { id: 63, name: "Marco Rossi", country: "🇮🇹 Italy", avatar: "https://i.pravatar.cc/150?img=52", text: "Servizio eccellente. Gemini Pro funziona alla perfezione, velocità incredibile. Il prezzo è davvero competitivo", rating: 5, tags: ["gemini-pro-personal","gemini-pro-ultra"], timeAgo: "3 days ago" },

  // === MORE INDONESIA (extra variety) ===
  { id: 64, name: "Yusuf Hakim", country: "🇮🇩 Indonesia", avatar: "https://i.pravatar.cc/150?img=3", text: "Wah ini sih juara emang. Claude PRO MAX buat riset thesis tinggal copas prompt langsung keluar analisis lengkap. 500 halaman PDF di-summary ga sampe 2 menit", rating: 5, tags: ["claude-pro-max","claude-pro","chatgpt-pro"], timeAgo: "2 hari lalu" },
  { id: 65, name: "Dewi Lestari", country: "🇮🇩 Indonesia", avatar: "https://i.pravatar.cc/150?img=49", text: "Netflix premium 4K beneran coy, bisa download juga. Udah sebulan lancar jaya ga ada masalah login atau limit", rating: 5, tags: ["netflix-premium","yt-premium"], timeAgo: "5 hari lalu" },
  { id: 66, name: "Rendi Saputra", country: "🇮🇩 Indonesia", avatar: "https://i.pravatar.cc/150?img=4", text: "Telegram old account nya mateng bgt, ga kena spam ban. Cocok buat bisnis dropship dan channel marketing", rating: 5, tags: ["telegram-old","twitter-old","gmail-old"], timeAgo: "3 hari lalu" },
  { id: 67, name: "Indah Permata", country: "🇮🇩 Indonesia", avatar: "https://i.pravatar.cc/150?img=28", text: "Twitter old followers beneran nambah dan ga ilang. Udah seminggu follower masih tetep. Admin nya ngasih garansi lagi. Top markotop", rating: 4, tags: ["twitter-old"], timeAgo: "1 minggu lalu" },
  { id: 68, name: "Hendra Wijaya", country: "🇮🇩 Indonesia", avatar: "https://i.pravatar.cc/150?img=6", text: "Langganan Gemini Pro Ultra 1 tahun, ngoding tiap hari pake ini. Private access jadi ga rebutan sama orang lain. Mantul banget", rating: 5, tags: ["gemini-pro-ultra","gemini-pro-personal"], timeAgo: "4 hari lalu" },

  // === MORE US/UK ===
  { id: 69, name: "Rachel Green", country: "🇺🇸 United States", avatar: "https://i.pravatar.cc/150?img=1", text: "Just want to say the customer support is amazing. Had a small issue with my Claude account and they resolved it within minutes. 10/10 service", rating: 5, tags: ["claude-pro","claude-pro-max","chatgpt-plus"], timeAgo: "2 days ago" },
  { id: 70, name: "Alex Turner", country: "🇬🇧 United Kingdom", avatar: "https://i.pravatar.cc/150?img=9", text: "Bought the ChatGPT Pro for my startup team. Everyone loves it. The private access means zero queues during peak hours. Worth every penny", rating: 5, tags: ["chatgpt-pro","chatgpt-plus","gemini-pro-ultra"], timeAgo: "3 days ago" },
  { id: 71, name: "Brandon Lee", country: "🇺🇸 United States", avatar: "https://i.pravatar.cc/150?img=2", text: "Netflix Premium and Spotify Premium combo from here costs less than one subscription directly. Both work perfectly. No brainer decision", rating: 5, tags: ["netflix-premium","spotify-premium","yt-premium"], timeAgo: "5 days ago" },
  { id: 72, name: "Sophie Clark", country: "🇬🇧 United Kingdom", avatar: "https://i.pravatar.cc/150?img=40", text: "The Gmail accounts are surprisingly high quality. Old accounts with good reputation scores. Used them for outreach campaigns successfully", rating: 4, tags: ["gmail-old","gmail-new"], timeAgo: "1 week ago" },

  // === MORE JAPAN ===
  { id: 73, name: "Aoi Suzuki", country: "🇯🇵 Japan", avatar: "https://i.pravatar.cc/150?img=46", text: "Spotify Premiumが月額で考えるとめちゃくちゃ安い。広告なしで音楽聴けるのは最高。もう普通のプランには戻れない", rating: 5, tags: ["spotify-premium","yt-premium"], timeAgo: "3 days ago" },
  { id: 74, name: "Ren Takahashi", country: "🇯🇵 Japan", avatar: "https://i.pravatar.cc/150?img=61", text: "Gmail old アカウント50個買ったけど全部問題なく使えてる。品質管理がしっかりしてるのが伝わる", rating: 5, tags: ["gmail-old","gmail-new","telegram-old"], timeAgo: "6 days ago" },

  // === MORE INDIA ===
  { id: 75, name: "Ravi Shankar", country: "🇮🇳 India", avatar: "https://i.pravatar.cc/150?img=55", text: "Third time ordering from here and never disappointed. This time got Claude MAX for my PhD research. The large context is a gamechanger", rating: 5, tags: ["claude-pro-max","claude-pro"], timeAgo: "2 days ago" },
  { id: 76, name: "Sneha Reddy", country: "🇮🇳 India", avatar: "https://i.pravatar.cc/150?img=43", text: "Canva Pro is perfect for my freelance design work. All the premium stock photos and elements unlocked. Saved me thousands of rupees", rating: 5, tags: ["canva-pro"], timeAgo: "4 days ago" },

  // === MORE BRAZIL ===
  { id: 77, name: "Fernanda Costa", country: "🇧🇷 Brazil", avatar: "https://i.pravatar.cc/150?img=44", text: "Gemini Pro é sensacional pra quem trabalha com programação. A IA entende contexto muito melhor que as alternativas. Preço justo demais", rating: 5, tags: ["gemini-pro-personal","gemini-pro-ultra"], timeAgo: "3 days ago" },
  { id: 78, name: "Rafael Santos", country: "🇧🇷 Brazil", avatar: "https://i.pravatar.cc/150?img=59", text: "Twitter old accounts chegaram em minutos. Todos com followers de verdade e histórico limpo. Excelente para quem precisa de credibilidade", rating: 5, tags: ["twitter-old","telegram-old"], timeAgo: "5 days ago" },

  // === ARGENTINA ===
  { id: 79, name: "Martín Gonzalez", country: "🇦🇷 Argentina", avatar: "https://i.pravatar.cc/150?img=50", text: "Tremendo servicio boludo. El ChatGPT Plus funciona de diez. Pague con crypto y en dos minutos ya tenía todo. Recomendadísimo", rating: 5, tags: ["chatgpt-plus","chatgpt-pro"], timeAgo: "4 days ago" },

  // === NETHERLANDS ===
  { id: 80, name: "Daan de Vries", country: "🇳🇱 Netherlands", avatar: "https://i.pravatar.cc/150?img=57", text: "Uitstekende service. YouTube Premium werkt perfect, geen advertenties meer. De crypto betaaloptie maakt het extra makkelijk", rating: 5, tags: ["yt-premium","spotify-premium"], timeAgo: "3 days ago" },

  // === AUSTRALIA ===
  { id: 81, name: "Liam Mitchell", country: "🇦🇺 Australia", avatar: "https://i.pravatar.cc/150?img=58", text: "Absolute legend of a store. Got Gemini Ultra and its been running flawlessly for weeks. Way better than paying the full Google price", rating: 5, tags: ["gemini-pro-ultra","gemini-pro-personal","chatgpt-pro"], timeAgo: "1 week ago" },
  { id: 82, name: "Chloe Taylor", country: "🇦🇺 Australia", avatar: "https://i.pravatar.cc/150?img=35", text: "Netflix Premium here is honestly a steal. 4K streaming works perfectly with my internet and no account sharing issues at all", rating: 5, tags: ["netflix-premium","yt-premium","spotify-premium"], timeAgo: "5 days ago" },

  // === CANADA ===
  { id: 83, name: "Étienne Tremblay", country: "🇨🇦 Canada", avatar: "https://i.pravatar.cc/150?img=62", text: "Le service est vraiment professionnel. ChatGPT Pro fonctionne impeccablement et le support a répondu à toutes mes questions rapidement", rating: 5, tags: ["chatgpt-pro","chatgpt-plus","claude-pro"], timeAgo: "3 days ago" },
  { id: 84, name: "Maya Robinson", country: "🇨🇦 Canada", avatar: "https://i.pravatar.cc/150?img=19", text: "Bought Canva Pro for my marketing agency. All team features work perfectly. The price difference is insane compared to official subscription", rating: 5, tags: ["canva-pro"], timeAgo: "6 days ago" },

  // === SINGAPORE ===
  { id: 85, name: "Wei Liang", country: "🇸🇬 Singapore", avatar: "https://i.pravatar.cc/150?img=60", text: "Top notch service lah. Gemini Pro Ultra private access is really private, no sharing. Speed is also very consistent throughout the day", rating: 5, tags: ["gemini-pro-ultra","gemini-pro-personal"], timeAgo: "2 days ago" },

  // === TAIWAN ===
  { id: 86, name: "Chen Wei-Lin", country: "🇹🇼 Taiwan", avatar: "https://i.pravatar.cc/150?img=63", text: "超讚的服務！Claude PRO 回應速度很快，中文理解能力也很好。價格比官方便宜太多了，推薦給大家", rating: 5, tags: ["claude-pro","claude-pro-max","chatgpt-plus"], timeAgo: "4 days ago" },

  // === INDONESIA (more variety) ===
  { id: 87, name: "Bagus Pratama", country: "🇮🇩 Indonesia", avatar: "https://i.pravatar.cc/150?img=14", text: "Bos ini legit sumpah. Udah belasan kali order ga pernah failed. Terakhir beli ChatGPT Pro buat kantor dan langsung aktif semua. Puas pokoknya", rating: 5, tags: ["chatgpt-pro","chatgpt-plus","gemini-pro-ultra"], timeAgo: "2 hari lalu" },
  { id: 88, name: "Laras Anindhita", country: "🇮🇩 Indonesia", avatar: "https://i.pravatar.cc/150?img=33", text: "Spotify Premium disini harganya ga masuk akal murahnya. Udah setahun pake masih aman sentosa. Bisa offline download pula. Mantap jiwa", rating: 5, tags: ["spotify-premium","netflix-premium"], timeAgo: "1 minggu lalu" },
  { id: 89, name: "Wahyu Setiawan", country: "🇮🇩 Indonesia", avatar: "https://i.pravatar.cc/150?img=17", text: "Gmail baru 100 biji semuanya fresh dan bisa langsung dipake. Ga ada yang minta verifikasi HP. Seller terpercaya ini mah", rating: 5, tags: ["gmail-new","gmail-old"], timeAgo: "3 hari lalu" },
  { id: 90, name: "Tika Rahayu", country: "🇮🇩 Indonesia", avatar: "https://i.pravatar.cc/150?img=25", text: "Claude PRO MAX omg ini AI paling pinter yang pernah gue coba. Upload file PDF langsung dianalis detail banget. Worth it abis", rating: 5, tags: ["claude-pro-max","claude-pro"], timeAgo: "4 hari lalu" },

  // === UKRAINE ===
  { id: 91, name: "Oleksiy Koval", country: "🇺🇦 Ukraine", avatar: "https://i.pravatar.cc/150?img=16", text: "Чудовий сервіс! Отримав акаунт ChatGPT Plus за лічені хвилини. Якість обслуговування на найвищому рівні", rating: 5, tags: ["chatgpt-plus","chatgpt-pro"], timeAgo: "3 days ago" },

  // === COLOMBIA ===
  { id: 92, name: "Santiago Herrera", country: "🇨🇴 Colombia", avatar: "https://i.pravatar.cc/150?img=18", text: "Parce esto es lo mejor que he encontrado. YouTube Premium sin anuncios es una bendición. La entrega fue inmediata por Telegram", rating: 5, tags: ["yt-premium","spotify-premium","netflix-premium"], timeAgo: "5 days ago" },

  // === PAKISTAN ===
  { id: 93, name: "Ali Raza", country: "🇵🇰 Pakistan", avatar: "https://i.pravatar.cc/150?img=51", text: "Bhai sab sahi hai. Gemini Pro liya aur ekdum smooth chal raha hai. Customer support bhi bohot acha hai. Highly recommend karta hoon", rating: 5, tags: ["gemini-pro-personal","gemini-pro-ultra","chatgpt-plus"], timeAgo: "4 days ago" },

  // === BANGLADESH ===
  { id: 94, name: "Rahim Khan", country: "🇧🇩 Bangladesh", avatar: "https://i.pravatar.cc/150?img=65", text: "Alhamdulillah very good service. Got Netflix Premium at very low price. Quality is 4K and streaming is smooth. Best deal I found online", rating: 5, tags: ["netflix-premium","yt-premium","spotify-premium"], timeAgo: "3 days ago" },

  // === CZECH REPUBLIC ===
  { id: 95, name: "Jakub Novák", country: "🇨🇿 Czech Republic", avatar: "https://i.pravatar.cc/150?img=56", text: "Skvělá služba. Canva Pro za tuhle cenu je absolutní výhra. Všechny prémiové funkce fungují bez problémů. Doporučuji", rating: 5, tags: ["canva-pro"], timeAgo: "6 days ago" },

  // === SWEDEN ===
  { id: 96, name: "Erik Lindqvist", country: "🇸🇪 Sweden", avatar: "https://i.pravatar.cc/150?img=61", text: "Spotify Premium fungerar felfritt sedan jag köpte det. Inga annonser och offline-läge funkar perfekt. Otroligt värt priset", rating: 5, tags: ["spotify-premium","yt-premium"], timeAgo: "4 days ago" },

  // === INDONESIA (final batch) ===
  { id: 97, name: "Andre Gunawan", country: "🇮🇩 Indonesia", avatar: "https://i.pravatar.cc/150?img=59", text: "Canva Pro nya real deal bukan trial. Semua asset premium kebuka. Gue pake buat bisnis desain undangan dan sangat membantu", rating: 5, tags: ["canva-pro"], timeAgo: "2 hari lalu" },
  { id: 98, name: "Dian Purnama", country: "🇮🇩 Indonesia", avatar: "https://i.pravatar.cc/150?img=32", text: "YouTube Premium tanpa iklan itu beda banget rasanya. Apalagi bisa download video buat ditonton offline di pesawat. Puas banget", rating: 5, tags: ["yt-premium","spotify-premium"], timeAgo: "3 hari lalu" },
  { id: 99, name: "Bayu Aji", country: "🇮🇩 Indonesia", avatar: "https://i.pravatar.cc/150?img=4", text: "ChatGPT Plus private ga sharing. Login sendiri punya sendiri. Biasa dipake buat generate konten YouTube sama nulis artikel blog. Josss", rating: 5, tags: ["chatgpt-plus","chatgpt-pro"], timeAgo: "5 hari lalu" },
  { id: 100, name: "Rina Marlina", country: "🇮🇩 Indonesia", avatar: "https://i.pravatar.cc/150?img=45", text: "Ini store langganan gue dari dulu. Ga pernah PHP dan selalu fast response. Mau beli apapun disini pasti aman. Saran gue jangan ragu lagi", rating: 5, tags: ["gemini-pro-personal","chatgpt-plus","netflix-premium","canva-pro"], timeAgo: "1 hari lalu" },
];

// Helper: get reviews relevant to a product
export function getReviewsForProduct(productId: string, limit = 10): GlobalReview[] {
  const matched = globalReviews.filter(r => r.tags.includes(productId));
  // If not enough exact matches, pad with random reviews
  if (matched.length >= limit) return matched.slice(0, limit);
  const remaining = globalReviews.filter(r => !r.tags.includes(productId));
  return [...matched, ...remaining.slice(0, limit - matched.length)];
}
