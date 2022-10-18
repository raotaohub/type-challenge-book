
// 参考 
// 1. https://github1s.com/graphql/graphql-js/blob/HEAD/src/execution/execute.ts
// 2. https://github1s.com/graphql/graphql-js/blob/HEAD/src/jsutils/instanceOf.ts

import { A, B } from "./is"

export function isA(_: any): _ is A {
    return _.platformKey
}


export function isB(_: any): _ is B {
    return _.shopId
}
