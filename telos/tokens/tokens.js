
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.tokens = void 0;
var WTLOS = {
    name: 'WTLOS',
    address: '0xD102cE6A4dB07D247fcc28F366A623Df0938CA9E',
    symbol: 'WTLOS',
    chainId: 40,
    decimals: 18,
    website: 'https://telos.net/',
    description: '',
    logoURI: '',
};
var ZAP = {
    name: 'Zappy',
    address: '0x9A271E3748F59222f5581BaE2540dAa5806b3F77',
    symbol: 'ZAP',
    chainId: 40,
    decimals: 18,
    website: 'https://zappy.finance/',
    description: '',
    logoURI: 'https://raw.githubusercontent.com/zappy-finance/zappy-tokenlists/main/logos/0x9A271E3748F59222f5581BaE2540dAa5806b3F77/logo.png',
};
var FTM = {
    name: 'FANTOM',
    address: '0x9A271E3748F59222f5581BaE2540dAa5806b3F77',
    symbol: 'FTM',
    chainId: 40,
    decimals: 18,
    website: 'https://fantom.foundation/',
    description: 'Fantom is a fast, high-throughput open-source smart contract platform for digital assets and dApps.',
    logoURI: 'https://raw.githubusercontent.com/zappy-finance/zappy-tokenlists/main/logos/0x9A271E3748F59222f5581BaE2540dAa5806b3F77/logo.png',
};
var USDC = {
    name: 'USD Coin',
    address: '0x818ec0A7Fe18Ff94269904fCED6AE3DaE6d6dC0b',
    symbol: 'USDC',
    chainId: 40,
    decimals: 6,
    website: 'https://www.circle.com/usdc/',
    description: 'USDC is a fully collateralized US dollar stablecoin. USDC is issued by regulated financial institutions, backed by fully reserved assets, redeemable on a 1:1 basis for US dollars.',
    logoURI: 'https://raw.githubusercontent.com/zappy-finance/zappy-tokenlists/main/logos/0x818ec0A7Fe18Ff94269904fCED6AE3DaE6d6dC0b/logo.png',
};
var USDT = {
    name: 'USD Tether',
    address: '0xeFAeeE334F0Fd1712f9a8cc375f427D9Cdd40d73',
    symbol: 'USDT',
    chainId: 40,
    decimals: 6,
    website: 'https://tether.to/en/',
    description: 'Launched in 2014, Tether tokens (USD₮) pioneered the stablecoin model and are the most widely traded. Tether tokens offer the stability and simplicity of fiat currencies coupled with the innovative nature of blockchain technology, representing a perfect combination of both worlds.',
    logoURI: 'https://raw.githubusercontent.com/zappy-finance/zappy-tokenlists/main/logos/0xeFAeeE334F0Fd1712f9a8cc375f427D9Cdd40d73/logo.png',
};
var BNB = {
    name: 'Binance Coin',
    address: '0x2C78f1b70Ccf63CDEe49F9233e9fAa99D43AA07e',
    symbol: 'BNB',
    chainId: 40,
    decimals: 18,
    website: 'https://www.binance.com/',
    description: 'Binance Coin (BNB) is an exchange-based token created and issued by the cryptocurrency exchange Binance. Initially created on the Ethereum blockchain as an ERC-20 token in July 2017, BNB was migrated over to Binance Chain in February 2019 and became the native coin of the Binance Chain.',
    logoURI: 'https://raw.githubusercontent.com/zappy-finance/zappy-tokenlists/main/logos/0x2C78f1b70Ccf63CDEe49F9233e9fAa99D43AA07e/logo.png',
};
var WETH = {
    name: 'Wrapped Ether',
    address: '0xfA9343C3897324496A05fC75abeD6bAC29f8A40f',
    symbol: 'WETH',
    chainId: 40,
    decimals: 18,
    website: 'https://ethereum.org/',
    description: 'The native currency that flows within the Ethereum economy is called Ether (ETH). Ether is typically used to pay for transaction fees called Gas, and it is the base currency of the network.',
    logoURI: 'https://raw.githubusercontent.com/zappy-finance/zappy-tokenlists/main/logos/0xfA9343C3897324496A05fC75abeD6bAC29f8A40f/logo.png',
};
var WBTC = {
    name: 'Wrapped Bitcoin',
    address: '0xf390830DF829cf22c53c8840554B98eafC5dCBc2',
    symbol: 'WBTC',
    chainId: 40,
    decimals: 18,
    website: 'https://wbtc.network/',
    description: 'Wrapped Bitcoin (WBTC) is the first ERC20 token backed 1:1 with Bitcoin. Completely transparent. 100% verifiable. Community led.',
    logoURI: 'https://ftmscan.com/token/images/wBTC_32.png',
};
var MATIC = {
    name: 'MATIC',
    address: '0x332730a4F6E03D9C55829435f10360E13cfA41Ff',
    symbol: 'MATIC',
    chainId: 40,
    decimals: 18,
    website: 'https://polygon.technology/',
    description: 'Polygon is a protocol and a framework for building and connecting Ethereum-compatible blockchain networks. Aggregating scalable solutions on Ethereum supporting a multi-chain Ethereum ecosystem.',
    logoURI: 'https://raw.githubusercontent.com/zappy-finance/zappy-tokenlists/main/logos/0x332730a4F6E03D9C55829435f10360E13cfA41Ff/logo.png',
};
var AVAX = {
    name: 'Avalanche',
    address: '0x7C598c96D02398d89FbCb9d41Eab3DF0C16F227D',
    symbol: 'AVAX',
    chainId: 40,
    decimals: 18,
    website: 'https://www.avalabs.org/',
    description: 'Avalanche is the fastest smart contracts platform in the blockchain industry, as measured by time-to-finality, and has the most validators securing its activity of any proof-of-stake protocol.',
    logoURI: 'https://raw.githubusercontent.com/zappy-finance/zappy-tokenlists/main/logos/0x7C598c96D02398d89FbCb9d41Eab3DF0C16F227D/logo.png',
};
var CHARM = {
    name: 'Charm Token',
    address: '0xd2504a02fABd7E546e41aD39597c377cA8B0E1Df',
    symbol: 'CHARM',
    chainId: 40,
    decimals: 18,
    website: 'https://omnidex.finance',
    description: 'CHARM is the OmniDex utility token that will be used to support the future governance of the exchange.  CHARM can be earned as a reward for farming on the platform or can be purchased by swapping for other tokens.',
    logoURI: 'https://2830501391-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4KUesZZWmWBxRWzlDyTx%2Fuploads%2FvNTmGGVzkz3TZRF8103J%2F2022-02-22%2013.28.52.jpg?alt=media&token=12415c72-8efe-429b-a50c-df223564e7ce',
};
var KARMA = {
    name: 'Karma Token',
    address: '0x730d2Fa7dC7642E041bcE231E85b39e9bF4a6a64',
    symbol: 'KARMA',
    chainId: 40,
    decimals: 18,
    website: 'https://omnidex.finance',
    description: 'Karma is the new Omnidex utility token',
    logoURI: 'https://raw.githubusercontent.com/zappy-finance/zappy-tokenlists/main/logos/0x7C598c96D02398d89FbCb9d41Eab3DF0C16F227D/logo.png',
};
var BANANA = {
    name: 'Apeswap Banana',
    address: '0x667Fd83E24Ca1D935d36717D305D54fA0CAC991C',
    symbol: 'BANANA',
    chainId: 40,
    decimals: 18,
    website: 'https://apeswap.finance',
    description: 'BANANA is apeswaps emission token',
    logoURI: 'https://raw.githubusercontent.com/zappy-finance/zappy-tokenlists/main/logos/0x7C598c96D02398d89FbCb9d41Eab3DF0C16F227D/logo.png',
};
var STLOS = {
    name: 'Staked TLOS',
    address: '0xB4B01216a5Bc8F1C8A33CD990A1239030E60C905',
    symbol: 'STLOS',
    chainId: 40,
    decimals: 18,
    website: 'https://telos.net/',
    description: 'The sTLOS receipt token is very exciting for the future development of the Telos Defi ecosystem. sTLOS liquid staking allows you to remain flexible with your investments while enjoying staking rewards.',
    logoURI: 'https://raw.githubusercontent.com/telosnetwork/teloscan/master/public/stlos-logo.png"',
};
var _tokens = {
    WTLOS: WTLOS,
    ZAP: ZAP,
    WNATIVE: WTLOS,
    FTM: FTM,
    USDC: USDC,
    USDT: USDT,
    BNB: BNB,
    WETH: WETH,
    WBTC: WBTC,
    MATIC: MATIC,
    AVAX: AVAX,
    CHARM: CHARM,
    KARMA: KARMA,
    BANANA: BANANA,
    STLOS: STLOS,
}
exports.tokens = _tokens;
