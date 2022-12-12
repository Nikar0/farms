import type Token from '../types/token';
import { TokenList } from './tokenList';
declare const transformTokenListToObject: (tokenList: TokenList, chainIdFilter?: number | undefined) => Record<string, Token>;
export default transformTokenListToObject;
