import { ConstRecord } from '../../../types/const';
import Token from '../../../types/token';
declare const _tokens: {
    readonly WTLOS: {
        readonly name: "WTLOS";
        readonly symbol: "WTLOS";
        readonly address: "0xD102cE6A4dB07D247fcc28F366A623Df0938CA9E";
        readonly chainId: 40;
        readonly decimals: 18;
        readonly logoURI: "";
        readonly website: "";
        readonly description: "";
    };
    readonly WNATIVE: {
        readonly name: "WTLOS";
        readonly address: "0xD102cE6A4dB07D247fcc28F366A623Df0938CA9E";
        readonly symbol: "WTLOS";
        readonly chainId: 40;
        readonly decimals: 18;
        readonly website: "";
        readonly description: "";
        readonly logoURI: "";
    };
    readonly ZAP: {
        readonly name: "ZAPPY";
        readonly address: "0x9A271E3748F59222f5581BaE2540dAa5806b3F77";
        readonly symbol: "ZAP";
        readonly chainId: 40;
        readonly decimals: 18;
        readonly website: "";
        readonly description: "";
        readonly logoURI: "https://raw.githubusercontent.com/zappy-finance/zappy-tokenlists/main/logos/0x9A271E3748F59222f5581BaE2540dAa5806b3F77/logo.png";
    };
    readonly FTM: {
        readonly name: "FANTOM";
        readonly address: "0xC1Be9a4D5D45BeeACAE296a7BD5fADBfc14602C4";
        readonly symbol: "FTM";
        readonly chainId: 40;
        readonly decimals: 18;
        readonly website: "https://fantom.foundation/";
        readonly description: "Fantom is a fast, high-throughput open-source smart contract platform for digital assets and dApps.";
        readonly logoURI: "https://raw.githubusercontent.com/zappy-finance/zappy-tokenlists/main/logos/0xC1Be9a4D5D45BeeACAE296a7BD5fADBfc14602C4/logo.png";
    };
    readonly USDC: {
        readonly name: "USD Coin";
        readonly address: "0x818ec0A7Fe18Ff94269904fCED6AE3DaE6d6dC0b";
        readonly symbol: "USDC";
        readonly chainId: 40;
        readonly decimals: 6;
        readonly website: "https://www.circle.com/usdc";
        readonly description: "USDC is a fully collateralized US dollar stablecoin. USDC is issued by regulated financial institutions, backed by fully reserved assets, redeemable on a 1:1 basis for US dollars.";
        readonly logoURI: "https://raw.githubusercontent.com/zappy-finance/zappy-tokenlists/main/logos/0x818ec0A7Fe18Ff94269904fCED6AE3DaE6d6dC0b/logo.png";
    };
    readonly USDT: {
        readonly name: "USD Tether";
        readonly address: "0xeFAeeE334F0Fd1712f9a8cc375f427D9Cdd40d73";
        readonly symbol: "USDT";
        readonly chainId: 40;
        readonly decimals: 6;
        readonly website: "https://tether.to/en/";
        readonly description: "Launched in 2014, Tether tokens (USD₮) pioneered the stablecoin model and are the most widely traded. Tether tokens offer the stability and simplicity of fiat currencies coupled with the innovative nature of blockchain technology, representing a perfect combination of both worlds.";
        readonly logoURI: "https://raw.githubusercontent.com/zappy-finance/zappy-tokenlists/main/logos/0xeFAeeE334F0Fd1712f9a8cc375f427D9Cdd40d73/logo.png";
    };
    readonly BNB: {
        readonly name: "BNB Coin";
        readonly address: "0x2C78f1b70Ccf63CDEe49F9233e9fAa99D43AA07e";
        readonly symbol: "BNB";
        readonly chainId: 40;
        readonly decimals: 18;
        readonly website: "https://www.binance.com/";
        readonly description: "Binance Coin (BNB) is an exchange-based token created and issued by the cryptocurrency exchange Binance. Initially created on the Ethereum blockchain as an ERC-20 token in July 2017, BNB was migrated over to Binance Chain in February 2019 and became the native coin of the Binance Chain.";
        readonly logoURI: "https://raw.githubusercontent.com/zappy-finance/zappy-tokenlists/main/logos/0x2C78f1b70Ccf63CDEe49F9233e9fAa99D43AA07e/logo.png";
    };
    readonly WETH: {
        readonly name: "Wrapped Ether";
        readonly address: "0xfA9343C3897324496A05fC75abeD6bAC29f8A40f";
        readonly symbol: "WETH";
        readonly chainId: 40;
        readonly decimals: 18;
        readonly website: "https://ethereum.org/";
        readonly description: "The native currency that flows within the Ethereum economy is called Ether (ETH). Ether is typically used to pay for transaction fees called Gas, and it is the base currency of the network.";
        readonly logoURI: "https://raw.githubusercontent.com/zappy-finance/zappy-tokenlists/main/logos/0xfA9343C3897324496A05fC75abeD6bAC29f8A40f/logo.png";
    };
    readonly WBTC: {
        readonly name: "Wrapped Bitcoin";
        readonly address: "0xf390830DF829cf22c53c8840554B98eafC5dCBc2";
        readonly symbol: "WBTC";
        readonly chainId: 40;
        readonly decimals: 18;
        readonly website: "https://wbtc.network/";
        readonly description: "Wrapped Bitcoin (WBTC) is the first ERC20 token backed 1:1 with Bitcoin. Completely transparent. 100% verifiable. Community led.";
        readonly logoURI: "https://ftmscan.com/token/images/wBTC_32.png";
    };
    readonly MATIC: {
        readonly name: "MATIC";
        readonly address: "0x332730a4F6E03D9C55829435f10360E13cfA41Ff";
        readonly symbol: "MATIC";
        readonly chainId: 40;
        readonly decimals: 18;
        readonly website: "https://polygon.technology/";
        readonly description: "Polygon is a protocol and a framework for building and connecting Ethereum-compatible blockchain networks. Aggregating scalable solutions on Ethereum supporting a multi-chain Ethereum ecosystem.";
        readonly logoURI: "https://raw.githubusercontent.com/zappy-finance/zappy-tokenlists/main/logos/0x332730a4F6E03D9C55829435f10360E13cfA41Ff/logo.png";
    };
    readonly AVAX: {
        readonly name: "Avalanche";
        readonly address: "0x7C598c96D02398d89FbCb9d41Eab3DF0C16F227D";
        readonly symbol: "AVAX";
        readonly chainId: 40;
        readonly decimals: 18;
        readonly website: "https://www.avalabs.org/";
        readonly description: "Avalanche is the fastest smart contracts platform in the blockchain industry, as measured by time-to-finality, and has the most validators securing its activity of any proof-of-stake protocol.";
        readonly logoURI: "https://raw.githubusercontent.com/zappy-finance/zappy-tokenlists/main/logos/0x7C598c96D02398d89FbCb9d41Eab3DF0C16F227D/logo.png";
    };
    readonly CHARM: {
        readonly name: "Charm Token";
        readonly address: "0xd2504a02fABd7E546e41aD39597c377cA8B0E1Df";
        readonly symbol: "CHARM";
        readonly chainId: 40;
        readonly decimals: 18;
        readonly website: "https://omnidex.finance";
        readonly description: "CHARM is the OmniDex utility token that will be used to support the future governance of the exchange.  CHARM can be earned as a reward for farming on the platform or can be purchased by swapping for other tokens.";
        readonly logoURI: "https://2830501391-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4KUesZZWmWBxRWzlDyTx%2Fuploads%2FvNTmGGVzkz3TZRF8103J%2F2022-02-22%2013.28.52.jpg?alt=media&token=12415c72-8efe-429b-a50c-df223564e7ce";
    };
    readonly KARMA: {
        readonly name: "Karma Token";
        readonly address: "0x730d2Fa7dC7642E041bcE231E85b39e9bF4a6a64";
        readonly symbol: "KARMA";
        readonly chainId: 40;
        readonly decimals: 18;
        readonly website: "https://omnidex.finance";
        readonly description: "Karma is the new Omnidex utility token";
        readonly logoURI: "https://raw.githubusercontent.com/zappy-finance/zappy-tokenlists/main/logos/0x7C598c96D02398d89FbCb9d41Eab3DF0C16F227D/logo.png";
    };
    readonly BANANA: {
        readonly name: "Apeswap Banana";
        readonly address: "0x667Fd83E24Ca1D935d36717D305D54fA0CAC991C";
        readonly symbol: "BANANA";
        readonly chainId: 40;
        readonly decimals: 18;
        readonly website: "https://apeswap.finance";
        readonly description: "BANANA is apeswaps emission token";
        readonly logoURI: "https://bscscan.com/token/images/apeswap_32.png?v=2";
    };
    readonly STLOS: {
        readonly name: "Staked TLOS";
        readonly address: "0xB4B01216a5Bc8F1C8A33CD990A1239030E60C905";
        readonly symbol: "STLOS";
        readonly chainId: 40;
        readonly decimals: 18;
        readonly website: "https://telos.net/";
        readonly description: "The sTLOS receipt token is very exciting for the future development of the Telos Defi ecosystem. sTLOS liquid staking allows you to remain flexible with your investments while enjoying staking rewards.";
        readonly logoURI: "https://raw.githubusercontent.com/telosnetwork/teloscan/master/public/stlos-logo.png";
    };
};
export declare const tokens: ConstRecord<typeof _tokens, Token>;
export {};
