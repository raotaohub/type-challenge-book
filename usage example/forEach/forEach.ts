import { _Tuple, _Map, _Str, CapitalizeStr } from './types';

// 索引类型
type forEachMap<T extends {}> = {
  [K in keyof T]: T[K];
};
type res1 = forEachMap<_Map>;

type UppercaseKey<O extends object> = {
  [Key in keyof O as CapitalizeStr<Key & string>]: O[Key];
};

type res11 = UppercaseKey<res1>;

// 字符串

type forEachStr<T extends string> = T extends `${infer S}${infer R}`
  ? R extends ''
    ? S
    : `${S}${forEachStr<R>}`
  : '';

type res2 = forEachStr<_Str>;

// 数组

type forEachTuple<
  A extends unknown[],
  I extends string = '',
  Result extends unknown[] = [],
> = A extends [infer F, ...infer Rest]
  ? forEachTuple<Rest, I, [...Result, `${F & string}${I}`]>
  : Result;

type res3 = forEachTuple<_Tuple, 'i'>;

export {};
