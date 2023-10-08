import { isA } from './types';

export interface A {
  platformKey: string;
  // ...
}

export interface B {
  shopId: string;
  // ...
}

function fn(params: A | B) {
  // Question
  var id = params.shopId; // warn
  var id = params.platformKey; // warn

  // Solve
  if (isA(params)) {
    var id = params.platformKey; // pass
  }

  const myFetch = (id: string) => {
    return new Promise<string>((resolve, reject) => {
      setTimeout(() => {
        resolve(id);
      });
    });
  };
}
