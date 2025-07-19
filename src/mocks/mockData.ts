export interface BannerMockData {
  id: string;
  imageKo: string;
  imageEn: string;
  descriptionKo: string | null;
  descriptionEn: string | null;
  linkKo: string;
  linkEn: string;
  buttonTextKo: string;
  buttonTextEn: string;
}

export interface DappMockData {
  id: string;
  network?: string[] | null;
  nameKo: string;
  nameEn?: string;
  descriptionKo: string;
  descriptionEn?: string;
  iconUrl: string;
  linkUrl?: string | null;
  displayConditions: DisplayConditionsMockData;
}

export interface FavoriteIdsMockData {
  favoriteIds: string[];
}

export interface DisplayConditionsMockData {
  platforms: string[];
  envs: string[];
  langs: string[];
}

export const favoriteIdsMockData: FavoriteIdsMockData = {
  favoriteIds: ["opensea", "moonpay", "rarible"],
};

export const dappsMockData: DappMockData[] = [
  {
    id: "moonpay",
    network: null,
    nameKo: "MoonPay",
    nameEn: "MoonPay",
    descriptionKo:
      "VISA/Mastercard 결제를 통해 즉시 암호화폐를 구매하는 간단하고 안전한 방법을 제공합니다.",
    descriptionEn:
      "MoonPay offers simple and safer way to buy crypto instantly using VISA/Mastercard payment",
    iconUrl: "/icon_moonpay.png",
    linkUrl: "https://buy.moonpay.com",
    displayConditions: {
      platforms: ["ios"],
      envs: ["development", "staging", "production"],
      langs: ["en"],
    },
  },
  {
    id: "ftso-portal",
    network: ["Songbird", "Flare"],
    nameKo: "FTSO Portal",
    nameEn: "FTSO Portal",
    descriptionKo:
      "FTSO Portal은 사용자가 원하는 FTSO provider에 Vote Power를 쉽고 빠르게 위임할 수 있는 기능을 제공하는 디센트의 서비스입니다. 사용자는 Vote Power 위임을 통해 패시브인컴(passive income)을 보상으로 받을 수 있습니다.",
    descriptionEn:
      "FTSO Portal is a service by D’CENT to provide fast and easy way to delegate Vote Power to the user’s favorite FTSO provider. By delegating Vote Power, users can earn passive income as reward.",
    iconUrl: "/icon_ftso.png",
    linkUrl: "https://ftsoportal.com/",
    displayConditions: {
      platforms: ["android", "ios"],
      envs: ["development", "staging", "production"],
      langs: ["ko", "en"],
    },
  },
  {
    id: "astar-portal",
    network: ["Astar"],
    nameKo: "아스타포탈",
    nameEn: "Astar Portal",
    descriptionKo:
      "아스타포탈은 Astar Network에서 제공하는 모든 것을 사용하기 위한 Astar Network의 공식 애플리케이션입니다.",
    descriptionEn:
      "Astar Portal is the official Astar Network application for using everything that Astar Network offers.",
    iconUrl: "/icon_astar.png",
    linkUrl: "https://portal.astar.network/",
    displayConditions: {
      platforms: ["android", "ios"],
      envs: ["development", "staging"],
      langs: ["ko", "en"],
    },
  },
  {
    id: "1inch",
    network: ["Ethereum"],
    nameKo: "1inch",
    nameEn: "1inch",
    descriptionKo:
      "1inch는 모든 주요 DEX 거래소의 유동성과 가격 정보를 하나의 플랫폼에서 제공합니다. 원하는 거래의 가격을 쉽게 조회하여 토큰을 교환할 수 있습니다.",
    descriptionEn:
      "1inch is a decentralized exchange (DEX) aggregator. It's designed to roll liquidity and pricing from all major DEXes into one platform, making it easy to get the best price for the desired trade.",
    iconUrl: "/icon_1inch.png",
    linkUrl: "https://app.1inch.io/",
    displayConditions: {
      platforms: ["android", "ios"],
      envs: ["development", "staging", "production"],
      langs: ["ko", "en"],
    },
  },
  {
    id: "xdsea",
    network: ["XDC Network"],
    nameKo: "XDSea",
    nameEn: "XDSea",
    descriptionKo:
      "XDSea는 XDC 네트워크에 구축된 NFT를 사고 파는 세계 최초이자 최대 규모의 P2P 분산형 시장입니다.",
    descriptionEn:
      "XDSea is the world's first and largest peer-to-peer decentralized marketplace for buying and selling NFTs built on the XDC Network.",
    iconUrl: "/icon_xdsea.png",
    linkUrl: null,
    displayConditions: {
      platforms: ["android", "ios"],
      envs: ["development", "staging", "production"],
      langs: ["ko", "en"],
    },
  },
  {
    id: "compound",
    network: ["Ethereum"],
    nameKo: "Compound",
    nameEn: "Compound",
    descriptionKo:
      "Compound는 담보를 통해 이자를 얻거나 자산을 빌릴 수 있는 이더리움 기반의 머니 마켓 프로토콜입니다. 컴파운드의 유동성 풀에 자산을 공급하면 복리이자를 얻을 수 있습니다.",
    descriptionEn:
      "Compound is Ethereum's algorithmic money market protocol that allows users to earn interest or borrow assets through collateral. Anyone can supply assets to Compound's liquidity pool and earn continuous compound interest immediately.",
    iconUrl: "/icon_compound.png",
    linkUrl: "https://app.compound.finance/",
    displayConditions: {
      platforms: ["android", "ios"],
      envs: ["development", "staging", "production"],
      langs: ["ko", "en"],
    },
  },
  {
    id: "pooltogether",
    network: ["Ethereum"],
    nameKo: "PoolTogether",
    nameEn: "PoolTogether",
    descriptionKo:
      "PoolTogether는 저축을 재미있게 하는 이더리움 기반의 서비스입니다. 자산을 예치하면 “저축 티켓“을 받아 '풀'에 참여합니다. 각 저축 티켓은 풀에서 발생한 이자를 받을 수있는 기회를 제공하지만, 당첨되지 않더라도 손실이 없습니다.",
    descriptionEn:
      "PoolTogether is an Ethereum based application that makes saving money as fun as a game. You join a pool by getting a “savings ticket”. Each Savings Ticket gives you a chance to win a prize, but even if you don’t win, you keep all your money!",
    iconUrl: "/icon_pooltogether.png",
    linkUrl: "https://app.pooltogether.com/",
    displayConditions: {
      platforms: ["android", "ios"],
      envs: ["development", "staging", "production"],
      langs: ["ko", "en"],
    },
  },
  {
    id: "opensea",
    network: ["Ethereum", "Polygon"],
    nameKo: "OpenSea",
    nameEn: "OpenSea",
    descriptionKo:
      "OpenSea는 수집품, 게임 아이템, 디지털 아트와 같은 이더리움 기반의 디지털 상품 및 디지털 자산을 거래할 수 있는 마켓 플레이스입니다.",
    descriptionEn:
      "OpenSea is a marketplace for digital goods, including collectibles, game items, digital art, and other digital assets backed by blockchain such as Ethereum.",
    iconUrl: "/icon_opensea.png",
    linkUrl: "https://opensea.io/",
    displayConditions: {
      platforms: ["android", "ios"],
      envs: ["development", "staging", "production"],
      langs: ["ko", "en"],
    },
  },
  {
    id: "bluewhale",
    network: ["Kaia"],
    nameKo: "BlueWhale",
    descriptionKo:
      "블루웨일 프로토콜은 사용하기 쉬운 디파이 서비스를 지향하는 프로젝트입니다. 디파이 대시보드, DEX 어그리게이터, 자동 재예치 서비스 등 탈중앙화 금융(DeFi) 관련 서비스 제공을 통해 클레이튼 디파이 생태계 활동을 더 쉽고 효율적으로 만듭니다.",
    iconUrl: "/icon_bluewhale.png",
    linkUrl: "https://bwpm.io/",
    displayConditions: {
      platforms: ["android", "ios"],
      envs: ["development", "staging", "production"],
      langs: ["ko"],
    },
  },
  {
    id: "rarible",
    network: ["Ethereum"],
    nameKo: "Rarible - NFT 마켓플레이스",
    nameEn: "Rarible - NFT Marketplace for Brands, Communities and Traders",
    descriptionKo: "브랜드, 커뮤니티, 트레이더를 위한 NFT 마켓플레이스입니다.",
    descriptionEn: "NFT Marketplace for Brands, Communities and Traders.",
    iconUrl: "/icon_rarible.png",
    linkUrl: "https://rarible.com/",
    displayConditions: {
      platforms: ["android", "ios"],
      envs: ["development", "staging", "production"],
      langs: ["ko", "en"],
    },
  },
];

export const bannersMockData: BannerMockData[] = [
  {
    id: "mapo-airdrop",
    imageKo: "/banner_mapo_kr.png",
    imageEn: "/banner_mapo_en.png",
    descriptionKo: null,
    descriptionEn: null,
    linkKo:
      "https://store-kr.dcentwallet.com/blogs/post/tap-that-drop-with-map-protocol",
    linkEn:
      "https://store.dcentwallet.com/blogs/post/tap-that-drop-with-map-protocol",
    buttonTextKo: "확인하기",
    buttonTextEn: "Explore",
  },
  {
    id: "dcent-wallet",
    imageKo: "/banner_dcent.png",
    imageEn: "/banner_dcent.png",
    descriptionKo:
      "디센트 지문인증형 지갑으로 한층 더 강화된 보안을 경험하세요!",
    descriptionEn: "Enhance your security with D'CENT biometric wallet",
    linkKo: "https://store-kr.dcentwallet.com",
    linkEn: "https://store.dcentwallet.com",
    buttonTextKo: "구매하기",
    buttonTextEn: "Buy Now",
  },
  {
    id: "dcent-blog",
    imageKo: "/banner_blog.png",
    imageEn: "/banner_blog.png",
    descriptionKo:
      "새로운 디센트 블로그를 방문하여 최신 업데이트를 먼저 확인해보세요!",
    descriptionEn:
      "Visit the new D’CENT Blog to explore the latest updates first!",
    linkKo: "https://store-kr.dcentwallet.com/blogs/post",
    linkEn: "https://store-kr.dcentwallet.com/blogs/post",
    buttonTextKo: "확인하기",
    buttonTextEn: "Explore",
  },
];
