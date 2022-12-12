import Chain from 'blockchain-addressbook/build/types/chain';
import { ConstInterface } from 'blockchain-addressbook/build/types/const';
declare const _telos: {
    readonly platforms: {
        readonly beefyfinance: {
            readonly devMultisig: "0x26f4b46e3f49687129081677e466fc5a99374795";
            readonly treasuryMultisig: "0x26f4b46e3f49687129081677e466fc5a99374795";
            readonly strategyOwner: "0x26f4b46e3f49687129081677e466fc5a99374795";
            readonly vaultOwner: "0x26f4b46e3f49687129081677e466fc5a99374795";
            readonly keeper: "0x340465d9D2EbDE78F15a3870884757584F97aBB4";
            readonly treasurer: "0x26f4b46e3f49687129081677e466fc5a99374795";
            readonly launchpoolOwner: "0x26f4b46e3f49687129081677e466fc5a99374795";
            readonly rewardPool: "0x26f4b46e3f49687129081677e466fc5a99374795";
            readonly treasury: "0x26f4b46e3f49687129081677e466fc5a99374795";
            readonly beefyFeeRecipient: "0x26f4b46e3f49687129081677e466fc5a99374795";
            readonly multicall: "0x7f49c8dB7BD9A41b09f38faEdfBc223DA9A2A7CA";
            readonly bifiMaxiStrategy: "0x26f4b46e3f49687129081677e466fc5a99374795";
            readonly voter: "0x26f4b46e3f49687129081677e466fc5a99374795";
        };
        readonly zappy: {
            readonly router: "0xB9239AF0697C8efb42cBA3568424b06753c6da71";
            readonly masterchef: "0x3D2c6bCED5f50f5412234b87fF0B445aBA4d10e9";
        };
    };
    readonly tokens: import("blockchain-addressbook/build/types/const").ConstRecord<{
        readonly WTLOS: {
            readonly name: "WTLOS";
            readonly address: "0xD102cE6A4dB07D247fcc28F366A623Df0938CA9E";
            readonly symbol: "WTLOS";
            readonly chainId: 40;
            readonly decimals: 18;
            readonly website: "https://www.telos.net/";
            readonly description: "Telos.";
            readonly logoURI: "";
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
            readonly symbol: "ZAP";
            readonly address: "0x9A271E3748F59222f5581BaE2540dAa5806b3F77";
            readonly chainId: 40;
            readonly decimals: 18;
            readonly logoURI: "";
            readonly website: "https://zappy.finance/";
            readonly description: "Zappy Dex";
        };
    }, import("blockchain-addressbook/build/types/token").default>;
    readonly tokenAddressMap: import("blockchain-addressbook/build/util/convertSymbolTokenMapToAddressTokenMap").AddressToTokenMap<import("blockchain-addressbook/build/types/const").ConstRecord<{
        readonly WTLOS: {
            readonly name: "WTLOS";
            readonly address: "0xD102cE6A4dB07D247fcc28F366A623Df0938CA9E";
            readonly symbol: "WTLOS";
            readonly chainId: 40;
            readonly decimals: 18;
            readonly website: "https://www.telos.net/";
            readonly description: "Telos.";
            readonly logoURI: "";
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
            readonly logoURI: "";
        };
    }, import("blockchain-addressbook/build/types/token").default>>;
};
export declare const metis: ConstInterface<typeof _telos, Chain>;
export {};
