import { SiNetflix, SiGmail, SiDiscord, SiGooglegemini, SiX, SiInstagram, SiAnthropic } from '@icons-pack/react-simple-icons';
import { Bot } from 'lucide-react';

export const products = [
  {
    id: 'netflix',
    name: 'Netflix Premium',
    category: 'Streaming',
    image: '/netflix_cover.png',
    logo: <SiNetflix color="#E50914" size={28} />,
    variants: [
      { id: 'nf-1m1s', name: '1 Month - 1 Screen', price: 3.99 },
      { id: 'nf-1m4s', name: '1 Month - 4 Screens', price: 9.99 }
    ]
  },
  {
    id: 'gmail',
    name: 'Gmail Accounts',
    category: 'Accounts',
    image: '/gmail_cover.png',
    logo: <SiGmail color="#EA4335" size={28} />,
    variants: [
      { id: 'gm-fresh', name: 'Fresh Gmail (PVA)', price: 0.50 },
      { id: 'gm-old', name: 'Old Gmail (2018-2020)', price: 2.50 }
    ]
  },
  {
    id: 'discord',
    name: 'Discord Nitro',
    category: 'Social',
    image: '/discord_cover.png',
    logo: <SiDiscord color="#5865F2" size={28} />,
    variants: [
      { id: 'dc-3m', name: 'Nitro Boost 3 Months', price: 12.99 }
    ]
  },
  {
    id: 'chatgpt',
    name: 'ChatGPT Plus',
    category: 'AI Tools',
    image: '/chatgpt_cover.png',
    logo: <Bot color="#10A37F" size={28} />,
    variants: [
      { id: 'cg-1m', name: '1 Month Subscription', price: 18.99 },
      { id: 'cg-12m', name: '12 Months Subscription', price: 199.99 }
    ]
  },
  {
    id: 'gemini',
    name: 'Gemini Advanced',
    category: 'AI Tools',
    image: '/gemini_cover.png',
    logo: <SiGooglegemini color="#8E75B2" size={28} />,
    variants: [
      { id: 'gmp-4m', name: 'Gemini PRO 4 Months', price: 35.00 },
      { id: 'gmp-12m', name: 'Gemini PRO 12 Months', price: 95.00 },
      { id: 'gmu-1m', name: 'Gemini Ultra 1 Month', price: 19.99 },
      { id: 'gmu-12m', name: 'Gemini Ultra 12 Months', price: 180.00 }
    ]
  },
  {
    id: 'x-acc',
    name: 'X (Twitter) Accounts',
    category: 'Social Accounts',
    image: '/x_cover.png',
    logo: <SiX color="#FFFFFF" size={26} />,
    variants: [
      { id: 'x-100', name: '100 Followers', price: 5.00 },
      { id: 'x-1k', name: '1,000 Followers', price: 25.00 },
      { id: 'x-10k', name: '10,000 Followers', price: 150.00 },
      { id: 'x-100k', name: '100,000 Followers', price: 999.00 }
    ]
  },
  {
    id: 'ig-acc',
    name: 'Instagram Accounts',
    category: 'Social Accounts',
    image: '/instagram_cover.png',
    logo: <SiInstagram color="#E4405F" size={28} />,
    variants: [
      { id: 'ig-100', name: '100 Followers', price: 4.00 },
      { id: 'ig-1k', name: '1,000 Followers', price: 20.00 },
      { id: 'ig-10k', name: '10,000 Followers', price: 140.00 },
      { id: 'ig-100k', name: '100,000 Followers', price: 950.00 }
    ]
  },
  {
    id: 'claude',
    name: 'Claude AI PRO',
    category: 'AI Tools',
    image: '/claude_cover.png',
    logo: <SiAnthropic color="#D97757" size={28} />,
    variants: [
      { id: 'cl-1m', name: '1 Month Subscription', price: 18.50 },
      { id: 'cl-12m', name: '12 Months Subscription', price: 190.00 }
    ]
  }
];
