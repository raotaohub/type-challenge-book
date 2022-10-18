type Join<T extends string, K extends string = ","> = T extends `${infer S}${infer R}`
    ? R extends ""
    ? S
    : `${S}${K}${Join<R, K>}`
    : "";

type join = Join<"aaaaa", "=">; // "a=a=a=a=a"


type StrToArray<T extends string, Res extends string[] = []> =
    T extends `${infer S}${infer R}` ? StrToArray<R, [S, ...Res]> : Res

type strToArray = StrToArray<"aaaaa">; // ["a", "a", "a", "a", "a"]


type Split<
    T extends unknown[],
    Chunk extends string = "",
    Res extends string = ''
    > = T extends [infer F, ...infer R]
    ? F extends string ? R extends string[]
    ? Split<R, Chunk, `${F}${Chunk}${Res}`>
    : Res
    : Res
    : Res


type split = Split<['1', '2', '3'], ",">; // => "3,2,1,"

export type Read<T> = {
    [K in keyof T]: T[K]
}