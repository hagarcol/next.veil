export const HeaderItems = [
  {
    name: "Home",
    url: "/home"
  },
  {
    name: "FAQs",
    url: "/faq"
  },
  {
    name: "Utility Token",
    url: "/token"
  },
  {
    name: "Revenue Share",
    url: "/revenue"
  },
  {
    name: "How to use",
    url: "#"
  },
]

export const CORE_BENEFITS_DATA = {
  title: "We are all about privacy and security",
  detail: [
    {
      img: "/images/lock.webp",
      subTitle: "Privacy-Driven",
      content: "Anonymized exchange with no sign-ups or limits."
    },
    {
      img: "/images/guard.webp",
      subTitle: "Seamless Exchange",
      content: "Fast and effective exchange between wallets and cryptocurrencies."
    },
    {
      img: "/images/wallet.webp",
      subTitle: "Zero Wallet Limits",
      content: "No wallet or amount limitations on all exchanges through us!"
    },
  ]
}

export const LATEST_UPDATES_DATA = {
  title: "Latest Updates",
  detail: [
    {
      img: "/images/update1.webp",
      label: "New Release",
      title: "New Token Supported:",
      content: "BEERCOIN(SOL)",
      date: "04/12/24" 
    },
    {
      img: "/images/update2.webp",
      label: "New Release",
      title: "New Token Supported:",
      content: "Daddy Tate(SOL)",
      date: "04/12/24" 
    },
    {
      img: "/images/update3.webp",
      label: "New Release",
      title: "New Token Supported:",
      content: "Catizen(TON)",
      date: "04/12/24" 
    },
  ]
}

export const FOOTER_DATA = {
  logo: {
    img: "/images/logo/veil.svg",
    title: "Veil",
  },
  items: [
    {
      title: "Exchange",
      url: ""
    },
    {
      title: "Track Order",
      url: ""
    },
    {
      title: "FAQs",
      url: ""
    },
    {
      title: "Token",
      url: ""
    },
    {
      title: "Support",
      url: ""
    },
  ]
}

export const RECENT_TRANSACTION = [
  {
    date: "17/12/2024",
    time: "08:22",
    crypto1: "/images/logo/logo14.svg",
    crypto2: "/images/logo/logo15.svg",
    amount: "0.01",
  },
  {
    date: "17/12/2024",
    time: "08:15",
    crypto1: "/images/logo/logo16.svg",
    crypto2: "/images/logo/logo15.svg",
    amount: "410",
  },
  {
    date: "17/12/2024",
    time: "06:47",
    crypto1: "/images/logo/logo17.svg",
    crypto2: "/images/logo/logo18.svg",
    amount: "50",
  },
  {
    date: "17/12/2024",
    time: "03:19",
    crypto1: "/images/logo/logo6.svg",
    crypto2: "/images/logo/logo5.svg",
    amount: "257",
  },
  {
    date: "17/12/2024",
    time: "01:38",
    crypto1: "/images/logo/logo16.svg",
    crypto2: "/images/logo/logo15.svg",
    amount: "205",
  },
  {
    date: "16/12/2024",
    time: "23:38",
    crypto1: "/images/logo/logo7.svg",
    crypto2: "/images/logo/logo8.svg",
    amount: "100",
  },
  {
    date: "16/12/2024",
    time: "23:22",
    crypto1: "/images/logo/logo11.svg",
    crypto2: "/images/logo/logo5.svg",
    amount: "4372",
  },
  {
    date: "16/12/2024",
    time: "23:16",
    crypto1: "/images/logo/logo16.svg",
    crypto2: "/images/logo/logo5.svg",
    amount: "5000",
  },
  {
    date: "16/12/2024",
    time: "22:58",
    crypto1: "/images/logo/logo13.svg",
    crypto2: "/images/logo/logo15.svg",
    amount: "4.5",
  },
  {
    date: "16/12/2024",
    time: "22:53",
    crypto1: "/images/logo/logo9.svg",
    crypto2: "/images/logo/logo15.svg",
    amount: "5000",
  },
];
export interface CRYPTO_TYPE {
  img: string;
  name: string;
  subName: string;
}

export const CRYPTO_DATA = [
  {
    img: "/images/crypto/btc.svg",
    name: "Bitcoin",
    subName: "BTC",
  },
  {
    img: "/images/crypto/eth.svg",
    name: "Ethereum",
    subName: "ETH",
  },
  {
    img: "/images/crypto/bnb.svg",
    name: "BNB Smart Chain",
    subName: "BNBBSC",
  },
  {
    img: "/images/crypto/sol.svg",
    name: "Solana",
    subName: "SOL",
  },
  {
    img: "/images/crypto/uni.svg",
    name: "Uniswap",
    subName: "UNI",
  },
  {
    img: "/images/crypto/ada.svg",
    name: "Cardano",
    subName: "ADA",
  },
  {
    img: "/images/crypto/busd.svg",
    name: "BinanceUSD(ERC20)",
    subName: "BUSD",
  },
  {
    img: "/images/crypto/dai.svg",
    name: "Dai",
    subName: "DAI",
  },
  {
    img: "/images/crypto/doge.svg",
    name: "Dogecoin",
    subName: "DOGE",
  },
  {
    img: "/images/crypto/link.svg",
    name: "Chainlink",
    subName: "LINK",
  },
  {
    img: "/images/crypto/ltc.svg",
    name: "Litecoin",
    subName: "LTC",
  },
  {
    img: "/images/crypto/trx.svg",
    name: "Tron",
    subName: "trx",
  },
];


export interface Logo {
  id: string;
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

export const logos: Logo[] = [
  {
    id: '1',
    src: '/images/logo/logo1.svg',
    alt: 'Logo 1',
    width: 80,
  },
  {
    id: '1',
    src: '/images/logo/logo2.svg',
    alt: 'Logo 1',
    width: 80,
  },
  {
    id: '1',
    src: '/images/logo/logo3.svg',
    alt: 'Logo 1',
    width: 80,
  },
  {
    id: '1',
    src: '/images/logo/logo4.svg',
    alt: 'Logo 1',
    width: 80,
  },
  {
    id: '1',
    src: '/images/logo/logo5.svg',
    alt: 'Logo 1',
    width: 80,
  },
  {
    id: '1',
    src: '/images/logo/logo6.svg',
    alt: 'Logo 1',
    width: 80,
  },
  {
    id: '1',
    src: '/images/logo/logo7.svg',
    alt: 'Logo 1',
    width: 80,
  },
  {
    id: '1',
    src: '/images/logo/logo8.svg',
    alt: 'Logo 1',
    width: 80,
  },
  {
    id: '1',
    src: '/images/logo/logo9.svg',
    alt: 'Logo 1',
    width: 80,
  },
  {
    id: '1',
    src: '/images/logo/logo10.svg',
    alt: 'Logo 1',
    width: 80,
  },
  {
    id: '1',
    src: '/images/logo/logo11.svg',
    alt: 'Logo 1',
    width: 80,
  },
  {
    id: '1',
    src: '/images/logo/logo12.svg',
    alt: 'Logo 1',
    width: 80,
  },
  {
    id: '1',
    src: '/images/logo/logo13.svg',
    alt: 'Logo 1',
    width: 80,
  },
  {
    id: '1',
    src: '/images/logo/logo14.svg',
    alt: 'Logo 1',
    width: 80,
  },
];

export const FAQ_DATA = [
  {
    title: "1. Is Veil a decentralized exchange (DEX)?",
    content: "No, Veil is not a decentralized exchange (DEX) platform. Instead, it functions as a protocol and bridge between different blockchain networks, enabling cryptocurrency swaps and transactions. While it's not a DEX, Veil emphasizes privacy, security, and community engagement."
  },
  {
    title: "2. How can I participate in the Veil Revenue Share Program?",
    content: "To participate in the Veil Revenue Share Program, you need to hold a minimum amount of Veil tokens in your wallet. The specific amount required for eligibility is determined by the platform and is transparently communicated to the community. The program distributes a share of the exchange's revenue, including trading fees from both the Veil token and the exchange, to eligible token holders regularly."
  },
  {
    title: "3. What percentage of the Trading fee and token fee is allocated towards the Veil Revenue Share Program?",
    content: "20% of the total trading fees generated by the Veil platform and the Veil Token are allocated to the Veil Revenue Share Program. This includes both the trading fee from the Veil token and the trading fee from the exchange. This revenue is distributed proportionally among eligible token holders as part of the program, allowing them to earn a share of the exchange's success."
  },
];

export const VEIL_TOKENOMICS_DATA = [
  {
    name: "Token Taxes:",
    amount: "5% / 5%"
  },
  {
    name: "Total Supply:",
    amount: "1,000,000,000"
  },
  {
    name: "CEX Allocation:",
    amount: "80,000,000"
  },
];

export const Revenue_Allocation_DATA = [
  {
    name: "Marketing:",
    percent: "30%",
    color: "#DC3545"
  },
  {
    name: "Revenue Share:",
    percent: "20%",
    color: "#10CD75"
  },
  {
    name: "Team:",
    percent: "20%",
    color: "#8671FF"
  },
  {
    name: "Development:",
    percent: "15%",
    color: "#0DCAF0"
  },
  {
    name: "Treasury:",
    percent: "15%",
    color: "#FFA800"
  },
];