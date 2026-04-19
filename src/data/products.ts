export interface Plan {
  id: string;
  title: string;
  priceIdr: number;
}

export interface Review {
  author: string;
  initials: string;
  rating: number;
  content: string;
  colorStyle: string;
}

export interface Product {
  id: string;
  name: string;
  category: "AI TOOLS" | "SUBSCRIPTIONS" | "SOFTWARE" | "ASSETS";
  categoryLabel: string;
  imageUrl: string;
  plans: Plan[];
  reviews: Review[];
  features?: { icon: string; title: string; desc: string }[];
}

export const productsDB: Product[] = [
  {
    id: "gemini-pro-personal",
    name: "Gemini PRO AI Plan (Personal)",
    category: "AI TOOLS",
    categoryLabel: "AI MODEL",
    imageUrl: "/produk/gemini.jpg",
    plans: [
      { id: "1m", title: "1 Bulan", priceIdr: 10000 },
      { id: "4m", title: "4 Bulan", priceIdr: 25000 },
      { id: "6m", title: "6 Bulan", priceIdr: 35000 },
      { id: "1y", title: "1 Tahun", priceIdr: 50000 },
    ],
    reviews: [
      { author: "Budi S.", initials: "BS", rating: 5, colorStyle: "bg-primary-container text-on-primary-container", content: "Mantep bgt gan respon cepet 👍, AI-nya emang sejago itu buat nugas kuliah." },
      { author: "Michael T.", initials: "MT", rating: 5, colorStyle: "bg-secondary/20 text-secondary", content: "Exceptionally fast delivery. The pricing is unbeatable for the intelligence it offers." },
      { author: "Raj K.", initials: "RK", rating: 4, colorStyle: "bg-tertiary/20 text-tertiary", content: "Bhai ek number service hai, maza aa gaya use karke." }
    ],
    features: [
      { icon: "speed", title: "Fast Queries", desc: "No queue times for personal tasks." },
      { icon: "text_snippet", title: "Document Analysis", desc: "Instantly summarize large PDFs." }
    ]
  },
  {
    id: "gemini-pro-ultra",
    name: "Gemini PRO Ultra AI (Private No Sharing)",
    category: "AI TOOLS",
    categoryLabel: "ENTERPRISE AI",
    imageUrl: "/produk/gemini.jpg",
    plans: [
      { id: "1m", title: "1 Bulan", priceIdr: 20000 },
      { id: "4m", title: "4 Bulan", priceIdr: 50000 },
      { id: "6m", title: "6 Bulan", priceIdr: 70000 },
      { id: "1y", title: "1 Tahun", priceIdr: 100000 },
    ],
    reviews: [
      { author: "Taro Y.", initials: "TY", rating: 5, colorStyle: "bg-orange-500/20 text-orange-400", content: "ヤバい、これマジで仕事の効率が10倍になりました。プライベート最高！" },
      { author: "Asep K.", initials: "AK", rating: 5, colorStyle: "bg-green-500/20 text-green-400", content: "Gile lu ndro murah amat dapet private, asik buat ngoding ga takut ke-limit." },
      { author: "David G.", initials: "DG", rating: 5, colorStyle: "bg-blue-500/20 text-blue-400", content: "Private access makes a huge difference. Highly recommended for devs." }
    ],
    features: [
      { icon: "lock", title: "100% Private", desc: "No shared rate limits or data leaks." },
      { icon: "military_tech", title: "Ultra Tier", desc: "Access to the most elite Google logic models." }
    ]
  },
  {
    id: "chatgpt-plus",
    name: "ChatGPT Plus (Private No Sharing)",
    category: "AI TOOLS",
    categoryLabel: "AI CHAT",
    imageUrl: "/produk/chatgpt.webp",
    plans: [
      { id: "1m", title: "1 Bulan", priceIdr: 10000 },
      { id: "4m", title: "4 Bulan", priceIdr: 25000 },
      { id: "6m", title: "6 Bulan", priceIdr: 35000 },
      { id: "1y", title: "1 Tahun", priceIdr: 50000 },
    ],
    reviews: [
      { author: "Irina V.", initials: "IV", rating: 5, colorStyle: "bg-red-500/20 text-red-400", content: "Просто пушка! Быстро выдали аккаунт, всё летает." },
      { author: "Dinda A.", initials: "DA", rating: 4, colorStyle: "bg-purple-500/20 text-purple-400", content: "Sesuai janji, bnrn private ga disuruh gantian login." }
    ],
    features: [
      { icon: "smart_toy", title: "GPT-4 Access", desc: "Full power of the original ChatGPT." },
      { icon: "draw", title: "DALL-E 3", desc: "Image generation included." }
    ]
  },
  {
    id: "chatgpt-pro",
    name: "ChatGPT PRO (Private No Sharing)",
    category: "AI TOOLS",
    categoryLabel: "AI CHAT PRO",
    imageUrl: "/produk/chatgpt.webp",
    plans: [
      { id: "1m", title: "1 Bulan", priceIdr: 20000 },
      { id: "4m", title: "4 Bulan", priceIdr: 50000 },
      { id: "6m", title: "6 Bulan", priceIdr: 70000 },
      { id: "1y", title: "1 Tahun", priceIdr: 150000 },
    ],
    reviews: [
      { author: "Satoshi N.", initials: "SN", rating: 5, colorStyle: "bg-teal-500/20 text-teal-400", content: "プロ版のコーディング支援は神。コスパ最強すぎる。" },
      { author: "John D.", initials: "JD", rating: 5, colorStyle: "bg-secondary/20 text-secondary", content: "Incredible value for the Pro tier without sharing hurdles." }
    ],
    features: [
      { icon: "bolt", title: "Max Speeds", desc: "Priority execution environment." }
    ]
  },
  {
    id: "claude-pro",
    name: "Claude AI PRO (Private No Sharing)",
    category: "AI TOOLS",
    categoryLabel: "AI WRITING",
    imageUrl: "/produk/claude.png",
    plans: [
      { id: "1m", title: "1 Bulan", priceIdr: 20000 },
      { id: "4m", title: "4 Bulan", priceIdr: 50000 },
      { id: "6m", title: "6 Bulan", priceIdr: 70000 },
      { id: "1y", title: "1 Tahun", priceIdr: 150000 },
    ],
    reviews: [
      { author: "Rina S.", initials: "RS", rating: 5, colorStyle: "bg-pink-500/20 text-pink-400", content: "Asli claude buat nulis skripsi lebih luwes dari chatgpt, thx min." }
    ]
  },
  {
    id: "gmail-old",
    name: "Gmail Account OLD (Private No Sharing)",
    category: "ASSETS",
    categoryLabel: "ACCOUNTS",
    imageUrl: "/produk/gmail.jpg",
    plans: [
      { id: "50", title: "50 Gmail", priceIdr: 10000 },
      { id: "100", title: "100 Gmail", priceIdr: 25000 },
      { id: "200", title: "200 Gmail", priceIdr: 35000 },
      { id: "500", title: "500 Gmail", priceIdr: 50000 },
    ],
    reviews: [
      { author: "Dimas", initials: "DM", rating: 4, colorStyle: "bg-primary-container text-on-primary-container", content: "Aman cuy buat ternak akun game, no kebanned." }
    ]
  },
  {
    id: "gmail-new",
    name: "Gmail Account NEW",
    category: "ASSETS",
    categoryLabel: "ACCOUNTS",
    imageUrl: "/produk/gmail.jpg",
    plans: [
      { id: "50", title: "50 Gmail", priceIdr: 10000 },
      { id: "100", title: "100 Gmail", priceIdr: 25000 },
      { id: "200", title: "200 Gmail", priceIdr: 35000 },
      { id: "500", title: "500 Gmail", priceIdr: 50000 },
    ],
    reviews: [
      { author: "Alex", initials: "AL", rating: 5, colorStyle: "bg-blue-500/20 text-blue-400", content: "Fresh emails, working perfectly for bulk registrations." }
    ]
  },
  {
    id: "yt-premium",
    name: "Account Youtube Premium (Private)",
    category: "SUBSCRIPTIONS",
    categoryLabel: "ENTERTAINMENT",
    imageUrl: "/produk/youtube.webp",
    plans: [
      { id: "1m", title: "1 Bulan", priceIdr: 10000 },
      { id: "4m", title: "4 Bulan", priceIdr: 25000 },
      { id: "6m", title: "6 Bulan", priceIdr: 35000 },
      { id: "1y", title: "1 Tahun", priceIdr: 50000 },
    ],
    reviews: [
      { author: "Nisa", initials: "NS", rating: 5, colorStyle: "bg-red-500/20 text-red-500", content: "Nonton konser gapake iklan lagi ya allah makasih." },
      { author: "Priya", initials: "PR", rating: 5, colorStyle: "bg-orange-500/20 text-orange-400", content: "Perfect, setup was instant and no ads ruining my videos anymore!" }
    ]
  },
  {
    id: "spotify-premium",
    name: "Account Spotify Premium (Private)",
    category: "SUBSCRIPTIONS",
    categoryLabel: "MUSIC",
    imageUrl: "/produk/spotify.png",
    plans: [
      { id: "1m", title: "1 Bulan", priceIdr: 20000 },
      { id: "4m", title: "4 Bulan", priceIdr: 25000 },
      { id: "6m", title: "6 Bulan", priceIdr: 50000 },
      { id: "1y", title: "1 Tahun", priceIdr: 100000 },
    ],
    reviews: [
      { author: "Ivan", initials: "IV", rating: 4, colorStyle: "bg-green-500/20 text-green-500", content: "Gila 1 tahun cuma 100k, mantul bro." }
    ]
  },
  {
    id: "netflix-premium",
    name: "Account Netflix Premium (Private Login)",
    category: "SUBSCRIPTIONS",
    categoryLabel: "MOVIES",
    imageUrl: "/produk/netflix.jpg",
    plans: [
      { id: "1m", title: "1 Bulan", priceIdr: 20000 },
      { id: "4m", title: "4 Bulan", priceIdr: 25000 },
      { id: "6m", title: "6 Bulan", priceIdr: 80000 },
      { id: "1y", title: "1 Tahun", priceIdr: 150000 },
    ],
    reviews: [
      { author: "Kim", initials: "KM", rating: 5, colorStyle: "bg-red-600/20 text-red-500", content: "넷플릭스 화질 최고! 끊김없이 잘 보고 있습니다~" },
      { author: "Ojan", initials: "OJ", rating: 5, colorStyle: "bg-zinc-500/20 text-zinc-400", content: "Bisa 4k woy, gass terus nonton drakor." }
    ]
  },
  {
    id: "twitter-old",
    name: "Account Twitter OLD",
    category: "ASSETS",
    categoryLabel: "SOCIAL MEDIA",
    imageUrl: "/produk/X.png",
    plans: [
      { id: "100f", title: "100 Followers", priceIdr: 20000 },
      { id: "1000f", title: "1000 Followers", priceIdr: 50000 },
      { id: "5000f", title: "5000 Followers", priceIdr: 80000 },
      { id: "10000f", title: "10000 Followers", priceIdr: 150000 },
    ],
    reviews: [
      { author: "Sam", initials: "SM", rating: 4, colorStyle: "bg-sky-500/20 text-sky-400", content: "Akunnya bener-bener verified umur lama, ga gampang disuspended." }
    ]
  },
  {
    id: "telegram-old",
    name: "Account Telegram OLD",
    category: "ASSETS",
    categoryLabel: "SOCIAL MEDIA",
    imageUrl: "/produk/telegram.avif",
    plans: [
      { id: "1", title: "1 Account", priceIdr: 5000 },
      { id: "5", title: "5 Account", priceIdr: 20000 },
      { id: "10", title: "10 Account", priceIdr: 35000 },
      { id: "20", title: "20 Account", priceIdr: 50000 },
      { id: "50", title: "50 Account", priceIdr: 100000 },
    ],
    reviews: [
      { author: "Vlad", initials: "VL", rating: 5, colorStyle: "bg-blue-600/20 text-blue-500", content: "Аккаунты отличного качества. Идеально подходят для рассылок." }
    ]
  },
  {
    id: "claude-pro-max",
    name: "Claude PRO MAX (Private No Sharing)",
    category: "AI TOOLS",
    categoryLabel: "AI RESEARCH",
    imageUrl: "/produk/claude.png",
    plans: [
      { id: "1m", title: "1 Bulan", priceIdr: 20000 },
      { id: "4m", title: "4 Bulan", priceIdr: 50000 },
      { id: "6m", title: "6 Bulan", priceIdr: 150000 },
      { id: "1y", title: "1 Tahun", priceIdr: 250000 },
    ],
    reviews: [
      { author: "Researcher X", initials: "RX", rating: 5, colorStyle: "bg-purple-600/20 text-purple-400", content: "Token context-nya gila, upload pdf 500 halaman lgsg di-summary." }
    ]
  },
  {
    id: "canva-pro",
    name: "Account Canva PRO (Private No Sharing)",
    category: "SOFTWARE",
    categoryLabel: "DESIGN",
    imageUrl: "/produk/canva.png",
    plans: [
      { id: "1m", title: "1 Bulan", priceIdr: 5000 },
      { id: "4m", title: "4 Bulan", priceIdr: 15000 },
      { id: "6m", title: "6 Bulan", priceIdr: 35000 },
      { id: "1y", title: "1 Tahun", priceIdr: 100000 },
    ],
    reviews: [
      { author: "Siti", initials: "ST", rating: 5, colorStyle: "bg-cyan-500/20 text-cyan-400", content: "Murce bingiiiiitt!! Gak ribet join team aneh-aneh langsung aktif di email utama 😘" },
      { author: "Emily", initials: "EM", rating: 5, colorStyle: "bg-pink-500/20 text-pink-400", content: "Saved my life for designing quick flyers! Easy and fast." }
    ]
  }
];
