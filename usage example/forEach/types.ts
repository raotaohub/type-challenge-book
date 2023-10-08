export type _Tuple = ['1', '2', '3'];

export type _Map = { name: string; id: number; type: boolean };

export type _Str = '123';

export type CapitalizeStr<T extends string> =
  T extends `${infer First}${infer Rest}` ? `${Uppercase<First>}${Rest}` : T;
