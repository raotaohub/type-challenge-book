import { Read } from "./types";

type StringToTuple<S extends string, Res extends string[] = []> =
    S extends `${infer F}${infer Rest}` ? StringToTuple<Rest, [...Res, F]> : Res

type TupleToUn<T extends unknown[], V = never> = T extends [infer Val, ...infer Rest]
    ? TupleToUn<Rest, Val | V>
    : V;


const digits = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

type IDigitsUn = TupleToUn<StringToTuple<typeof digits>>

type IObj = Record<IDigitsUn, any>

const o = digits.split('').reduce<IObj>((a, c) => {
    o[c] = c
    return a
}, {} as any)

type AbstractInterface = IObj

// 现在我们得到一个接口 AbstractInterface

// 在现有的业务模型中我们只用到 A 、B 、C

// bad
type IFoob = {
    A: any
    B: any
    C: any
}

// good
type IFoog = Pick<AbstractInterface, 'A' | 'B' | 'C'>

// 再进一步 我们现在的业务里 A是可选 B必选 C只读 需要修改索引签名修饰符

// bad
// type IFooob = Partial<IFoog> ...
type IFooobb = {
    A?: any;
    B: any;
    readonly C: any;
}

// good
type IFooog = Partial<Pick<IFoog, 'A'>> & Pick<IFoog, 'B'> & Readonly<Pick<IFoog, 'C'>>

type res = Read<IFooog>

// 业务增长了，D、E、F、G、H、I、J、K、L、M、N、O、P、Q、R、S、T、U、V、W、X、Y、 也用起来了 就差Z

type ZZZ = TupleToUn<["D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y"]>

// bad
type IFoooob = Partial<Pick<IFoog, 'A'>> & Pick<AbstractInterface, ZZZ> & Pick<IFoog, 'B'> & Readonly<Pick<IFoog, 'C'>>
type read1 = Read<IFoooob>

// good
type IFoooog = Omit<AbstractInterface, 'Z' | 'C'> & Pick<IFoog, 'B'> & Readonly<Pick<IFoog, 'C'>>

// 业务又变化了 A、B、C 为只读 ；E、 F、G 可选 ； H、I、J 必选 

type ReadonlyUn = TupleToUn<['A', 'B', 'C']>
type PartialUn = TupleToUn<['E', 'F', 'G']>
type RequiredUn = TupleToUn<['H', 'I', 'J']>

type IFoooog2 =
    Readonly<Pick<AbstractInterface, ReadonlyUn>>
    & Partial<Pick<AbstractInterface, PartialUn>>
    & Required<Pick<AbstractInterface, RequiredUn>>

type read = Read<IFoooog>
type read3333 = Read<IFoooog2>

