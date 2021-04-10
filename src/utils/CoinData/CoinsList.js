import {
  DLIGHT_PRIVATE,
  ELECTRUM,
  GENERAL,
  IS_VERUS,
  IS_ZCASH,
  IS_PBAAS,
  IS_PBAAS_ROOT,
  ETH,
  ERC20,
} from "../constants/intervalConstants";
import { dlightServers } from 'agama-wallet-lib/src/dlight-servers';
import { DEFAULT_DECIMALS, ETHERS } from "../constants/web3Constants";

export const coinsList = {
  vrsc: {
    id: "VRSC",
    currency_id: '',
    system_id: 'i5w5MuNik5NtLcYmNzcvaoixooEebB6MGV',
    display_ticker: 'VRSC',
    display_name: "Verus Coin",
    theme_color: "#3165D4",
    website: "https://verus.io",
    fee: 10000,
    compatible_channels: [DLIGHT_PRIVATE, ELECTRUM, GENERAL],
    tags: [IS_VERUS, IS_ZCASH, IS_PBAAS, IS_PBAAS_ROOT],
    proto: 'vrsc',
    dlight_endpoints: dlightServers.vrsc,
    decimals: DEFAULT_DECIMALS
  },
  kmd: {
    id: "KMD",
    display_name: "Komodo",
    currency_id: '.kmd',
    system_id: '',
    display_ticker: 'KMD',
    theme_color: "#2B6680",
    website: "https://komodoplatform.com/en/",
    fee: 10000,
    compatible_channels: [ELECTRUM, GENERAL],
    tags: [IS_ZCASH],
    proto: 'btc',
    decimals: DEFAULT_DECIMALS
  },
  btc: {
    id: "BTC",
    currency_id: '.btc',
    system_id: '',
    display_ticker: 'BTC',
    display_name: "Bitcoin",
    theme_color: "#F7931B",
    website: "https://bitcoin.org/en/",
    compatible_channels: [ELECTRUM, GENERAL],
    tags: [],
    proto: 'btc',
    decimals: DEFAULT_DECIMALS
  },
  eth: {
    id: "ETH",
    currency_id: '',
    system_id: '.eth',
    display_ticker: 'ETH',
    display_name: "Ethereum",
    theme_color: "#141C30", 
    website: "https://ethereum.org/en/",
    compatible_channels: [ETH, GENERAL],
    dominant_channel: ETH,
    tags: [],
    proto: 'eth',
    decimals: ETHERS
  },
  bat: {
    id: "BAT",
    currency_id: '0x0d8775f648430679a709e98d2b0cb6250d2887ef',
    system_id: '.eth',
    display_ticker: 'BAT',
    display_name: "Basic Attention Token",
    theme_color: "#FB542B",
    website: "https://basicattentiontoken.org/",
    compatible_channels: [ERC20, GENERAL],
    dominant_channel: ERC20,
    decimals: ETHERS,
    tags: [],
    proto: 'erc20'
  },
  // tst: {
  //   id: "TST",
  //   currency_id: '0x722dd3F80BAC40c951b51BdD28Dd19d435762180',
  //   system_id: '.eth',
  //   display_ticker: 'TST',
  //   display_name: "ERC20 Test Token",
  //   website: "",
  //   compatible_channels: [ERC20, GENERAL],
  //   dominant_channel: ERC20,
  //   decimals: ETHERS,
  //   tags: [],
  //   proto: 'erc20'
  // },
  yfi: {
    id: "YFI",
    currency_id: '0x0bc529c00C6401aEF6D220BE8C6Ea1667F6Ad93e',
    system_id: '.eth',
    display_ticker: 'YFI',
    display_name: "yearn.finance",
    theme_color: "#0A6AE3",
    website: "https://yearn.finance/",
    compatible_channels: [ERC20, GENERAL],
    dominant_channel: ERC20,
    decimals: ETHERS,
    tags: [],
    proto: 'erc20'
  },
  link: {
    id: "LINK",
    currency_id: '0x514910771af9ca656af840dff83e8264ecf986ca',
    system_id: '.eth',
    display_ticker: 'LUNK',
    display_name: "ChainLink",
    theme_color: "#375BD2",
    website: "https://chain.link/",
    compatible_channels: [ERC20, GENERAL],
    dominant_channel: ERC20,
    decimals: ETHERS,
    tags: [],
    proto: 'erc20'
  },
  uni: {
    id: "UNI",
    currency_id: '0x1f9840a85d5af5bf1d1762f925bdaddc4201f984',
    system_id: '.eth',
    display_ticker: 'UNI',
    display_name: "Uniswap",
    theme_color: "#FF007A",
    website: "https://uniswap.org/",
    compatible_channels: [ERC20, GENERAL],
    dominant_channel: ERC20,
    decimals: ETHERS,
    tags: [],
    proto: 'erc20'
  },
  ven: {
    id: "VEN",
    currency_id: '0xd850942ef8811f2a866692a623011bde52a462c1',
    system_id: '.eth',
    display_ticker: 'VEN',
    display_name: "VeChain",
    theme_color: "#33A4F1",
    website: "https://www.vechain.org/",
    compatible_channels: [ERC20, GENERAL],
    dominant_channel: ERC20,
    decimals: ETHERS,
    tags: [],
    proto: 'erc20'
  },
  bnt: {
    id: "BNT",
    currency_id: '0x1f573d6fb3f13d689ff844b4ce37794d79a7ff1c',
    system_id: '.eth',
    display_ticker: 'BNT',
    display_name: "Bancor",
    theme_color: "#000D2B",
    website: "https://app.bancor.network/eth/data",
    compatible_channels: [ERC20, GENERAL],
    dominant_channel: ERC20,
    decimals: ETHERS,
    tags: [],
    proto: 'erc20'
  },
  rfox: {
    id: "RFOX",
    currency_id: '0xa1d6Df714F91DeBF4e0802A542E13067f31b8262',
    system_id: '.eth',
    display_ticker: 'RFOX',
    display_name: "RedFOX Labs",
    theme_color: "#D73937",
    website: "https://www.redfoxlabs.io/",
    compatible_channels: [ERC20, GENERAL],
    dominant_channel: ERC20,
    decimals: ETHERS,
    tags: [],
    proto: 'erc20'
  },
  bal: {
    id: "BAL",
    currency_id: '0xba100000625a3754423978a60c9317c58a424e3d',
    system_id: '.eth',
    display_ticker: 'BAL',
    display_name: "Balancer",
    theme_color: "#1E1E1E",
    website: "https://balancer.finance/",
    compatible_channels: [ERC20, GENERAL],
    dominant_channel: ERC20,
    decimals: ETHERS,
    tags: [],
    proto: 'erc20'
  },
  zrx: {
    id: "ZRX",
    currency_id: '0xe41d2489571d322189246dafa5ebde1f4699f498',
    system_id: '.eth',
    display_ticker: 'ZRX',
    display_name: "0x",
    theme_color: "#000000",
    website: "https://0x.org/",
    compatible_channels: [ERC20, GENERAL],
    dominant_channel: ERC20,
    decimals: ETHERS,
    tags: [],
    proto: 'erc20'
  },
  hot: {
    id: "HOT",
    currency_id: '0x6c6ee5e31d828de241282b9606c8e98ea48526e2',
    system_id: '.eth',
    display_ticker: 'HOT',
    display_name: "HoloToken",
    theme_color: "#08838D",
    website: "https://holochain.org/",
    compatible_channels: [ERC20, GENERAL],
    dominant_channel: ERC20,
    decimals: ETHERS,
    tags: [],
    proto: 'erc20'
  },
  nexo: {
    id: "NEXO",
    currency_id: '0xb62132e35a6c13ee1ee0f84dc5d40bad8d815206',
    system_id: '.eth',
    display_ticker: 'NEXO',
    display_name: "Nexo",
    theme_color: "#1E4DD8",
    website: "https://nexo.io/",
    compatible_channels: [ERC20, GENERAL],
    dominant_channel: ERC20,
    decimals: ETHERS,
    tags: [],
    proto: 'erc20'
  },
  dai: {
    id: "DAI",
    currency_id: '0x6b175474e89094c44da98b954eedeac495271d0f',
    system_id: '.eth',
    display_ticker: 'DAI',
    display_name: "Dai",
    theme_color: "#F5AC37",
    website: "https://makerdao.com/en/",
    compatible_channels: [ERC20, GENERAL],
    dominant_channel: ERC20,
    decimals: ETHERS,
    tags: [],
    proto: 'erc20'
  },
  oot: {
    id: "OOT",
    currency_id: '.oot',
    system_id: '.kmd',
    display_ticker: 'OOT',
    display_name: "Utrum",
    theme_color: "#24AAE1",
    website: "https://utrum.io/",
    fee: 10000,
    compatible_channels: [ELECTRUM, GENERAL],
    tags: [IS_ZCASH],
    proto: 'btc',
    decimals: DEFAULT_DECIMALS
  },
  ccl: {
    id: "CCL",
    currency_id: '.ccl',
    system_id: '',
    display_ticker: 'CCL',
    display_name: "CoinCollect",
    website: "https://coincollect.cc/",
    fee: 10000,
    theme_color: "#36AFF3",
    compatible_channels: [ELECTRUM, GENERAL],
    tags: [IS_ZCASH],
    proto: 'btc',
    decimals: DEFAULT_DECIMALS
  },
  doge: {
    id: "DOGE",
    currency_id: '.doge',
    system_id: '',
    display_ticker: 'CCL',
    display_name: "Dogecoin",
    theme_color: "#BB9F32",
    website: "https://dogecoin.com/",
    fee: 100000000,
    compatible_channels: [ELECTRUM, GENERAL],
    tags: [],
    proto: 'btc',
    decimals: DEFAULT_DECIMALS,
    max_fee_rate_per_byte: 1000000,
  },
  dgb: {
    id: "DGB",
    currency_id: '.dgb',
    system_id: '',
    display_ticker: 'DGB',
    display_name: "Digibyte",
    theme_color: "#0866CC",
    website: "https://digibyte.io/en-gb/",
    fee: 100000,
    compatible_channels: [ELECTRUM, GENERAL],
    tags: [],
    proto: 'btc',
    decimals: DEFAULT_DECIMALS
  },
  bch: {
    id: "BCH",
    currency_id: '.bch',
    system_id: '',
    display_ticker: 'BCH',
    display_name: "Bitcoin Cash",
    website: "https://bch.info/en/",
    fee: 10000,
    theme_color: "#8CC351",
    compatible_channels: [ELECTRUM, GENERAL],
    tags: [],
    proto: 'btc',
    decimals: DEFAULT_DECIMALS
  },
  zec: {
    id: "ZEC",
    currency_id: '',
    system_id: '.zec',
    display_ticker: 'ZEC',
    display_name: "Zcash",
    theme_color: "#000000",
    website: "https://z.cash/",
    fee: 10000,
    compatible_channels: [ELECTRUM, GENERAL],
    tags: [IS_ZCASH],
    proto: 'btc',
    dlight_endpoints: dlightServers.zec,
    decimals: DEFAULT_DECIMALS
  },
  // zectest: {
  //   id: "ZECTEST",
  //   currency_id: '.zectest',
  //   system_id: null,
  //   display_ticker: 'ZECTEST',
  //   display_name: "ZCash Testnet",
  //   theme_color: "#000000",
  //   website: "",
  //   fee: 10000,
  //   compatible_channels: [DLIGHT_PRIVATE, GENERAL],
  //   tags: [IS_ZCASH],
  //   proto: 'btc',
  //   dlight_endpoints: dlightServers.zectest
  // },
  dash: {
    id: "DASH",
    currency_id: '.dash',
    system_id: '',
    display_ticker: 'DASH',
    theme_color: "#0D8DE4",
    display_name: "Dash",
    website: "https://www.dash.org/",
    fee: 10000,
    compatible_channels: [ELECTRUM, GENERAL],
    tags: [],
    proto: 'btc',
    decimals: DEFAULT_DECIMALS
  },
  ltc: {
    id: "LTC",
    currency_id: '.ltc',
    system_id: '',
    display_ticker: 'LTC',
    display_name: "Litecoin",
    theme_color: "#345D9D",
    website: "https://litecoin.org/",
    fee: 30000,
    compatible_channels: [ELECTRUM, GENERAL],
    tags: [],
    proto: 'btc',
    decimals: DEFAULT_DECIMALS
  },
  zilla: {
    id: "ZILLA",
    currency_id: '.zilla',
    system_id: '',
    display_ticker: 'ZILLA',
    display_name: "ChainZilla",
    theme_color: "#111126",
    website: "https://chainzilla.io/",
    fee: 10000,
    compatible_channels: [ELECTRUM, GENERAL],
    tags: [IS_ZCASH],
    proto: 'btc',
    decimals: DEFAULT_DECIMALS
  }
};