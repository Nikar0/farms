import type Token from '../types/token';
export declare type AddressToTokenMap<T extends Record<string, Token>> = {
    readonly [Obj in T[keyof T] as Obj['address']]: Obj;
};
export declare function convertSymbolTokenMapToAddressTokenMap<T extends Record<string, Token>>(symbolTokenMap: T): AddressToTokenMap<T>;
