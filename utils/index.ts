/**
 * @description: 字符串转换元组 StringToTuple<'123'> 推导 ['1','2','3']
 */
export type StringToTuple<
  S extends string,
  Res extends string[] = []
> = S extends `${infer F}${infer Rest}`
  ? StringToTuple<Rest, [...Res, F]>
  : Res

/**
 * @description: 元组转换联合类型 TupleToUn<['1','2','3']> 推导 '1'|'2'|'3'
 */
export type TupleToUn<
  T extends unknown[],
  V = never
> = T extends [infer Val, ...infer Rest]
  ? TupleToUn<Rest, Val | V>
  : V

/**
 * @description: 
 */
export type Join<
  T extends string,
  K extends string = ','
> = T extends `${infer S}${infer R}`
  ? R extends ''
    ? S
    : `${S}${K}${Join<R, K>}`
  : ''

/**
 * @description: 将字符串元组类型，转换成按指定string分割的string字面量类型 Split<['1','2','3'],'='> 推导 "3=2=1="
 */
export type Split<
  T extends string[],
  Chunk extends string = '',
  Res extends string = ''
> = T extends [infer F, ...infer R]
  ? F extends string
    ? R extends string[]
      ? Split<R, Chunk, `${F}${Chunk}${Res}`>
      : Res
    : Res
  : Res


type Read<T> = {
  [K in keyof T]: T[K]
}

export type NoVoidValue<T> = T extends void ? never : T; /* if else */

export default Read
