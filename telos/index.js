
Object.defineProperty(exports, "__esModule", { value: true });
exports.telos = void 0;
var beefyfinance_1 = require("./platforms/beefyfinance");
var zappy_1 = require("./platforms/zappy");
var tokens_1 = require("./tokens/tokens");
var convertSymbolTokenMapToAddressTokenMap_1 = require("../../util/convertSymbolTokenMapToAddressTokenMap");
var _telos = {
    platforms: {
        beefyfinance: beefyfinance_1.beefyfinance,
        zappy: zappy_1.zappy,
        
    },
    tokens: tokens_1.tokens,
    tokenAddressMap: convertSymbolTokenMapToAddressTokenMap_1.convertSymbolTokenMapToAddressTokenMap(tokens_1.tokens),
};
exports.telos = _telos;
