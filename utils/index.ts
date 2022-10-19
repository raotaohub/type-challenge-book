export type StringToTuple<
  S extends string,
  Res extends string[] = []
> = S extends `${infer F}${infer Rest}`
  ? StringToTuple<Rest, [...Res, F]>
  : Res

export type TupleToUn<
  T extends unknown[],
  V = never
> = T extends [infer Val, ...infer Rest]
  ? TupleToUn<Rest, Val | V>
  : V

export type Join<
  T extends string,
  K extends string = ','
> = T extends `${infer S}${infer R}`
  ? R extends ''
    ? S
    : `${S}${K}${Join<R, K>}`
  : ''

export type Split<
  T extends unknown[],
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

export default Read
