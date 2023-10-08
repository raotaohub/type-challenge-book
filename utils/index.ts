/**
 * @description: 字符串转换元组 StringToTuple<'123'> 推导 ['1','2','3']
 */
export type StringToTuple<
  S extends string,
  Res extends string[] = [],
> = S extends `${infer F}${infer Rest}`
  ? StringToTuple<Rest, [...Res, F]>
  : Res;

/**
 * @description: 元组转换联合类型 TupleToUn<['1','2','3']> 推导 '1'|'2'|'3'
 */
export type TupleToUn<T extends unknown[], V = never> = T extends [
  infer Val,
  ...infer Rest,
]
  ? TupleToUn<Rest, Val | V>
  : V;

/**
 * @description: 将字符串类型，转换成按指定string分割的string字面量类型 Join<'123','['> 推导 "1[2[3"
 */
export type Join<
  T extends string,
  K extends string = ',',
> = T extends `${infer S}${infer R}`
  ? R extends ''
    ? S
    : `${S}${K}${Join<R, K>}`
  : '';

/**
 * @description: 将字符串元祖类型，转换成按指定string分割的string字面量类型 JoinArr<['1', '2'], ','> 推导 "1,2"
 */
export type JoinArr<
  T extends string[],
  K extends string = ',',
  Res extends string = '',
> = T extends [infer F, ...infer R]
  ? F extends string
    ? R extends string[]
      ? JoinArr<R, K, Res extends '' ? `${F}` : `${Res}${K}${F}`>
      : Res
    : Res
  : Res;

/**
 * @description: 将字符串元组类型，转换成按指定string分割的string字面量类型 Split<['1','2','3'],'='> 推导 "3=2=1="
 */
export type Split<
  T extends unknown[],
  Chunk extends string = '',
  Res extends string = '',
> = T extends [infer F, ...infer R]
  ? F extends string | boolean | number
    ? R extends unknown[]
      ? Split<R, Chunk, `${Res}${Chunk}${F}`>
      : Res
    : Res
  : Res;

type res = Split<[1, 2, '3', true], '-'>;

type Read<T> = {
  [K in keyof T]: T[K];
};

export type NoVoidValue<T> = T extends void ? never : T; /* if else */

export default Read;
