import { isA } from "./types"

export interface A {
  platformKey: string
  // ...
}

export interface B {
  shopId: string
  // ...
}


function fn(params: A | B) {
if (isA(params)){
  var id = params.platformKey
}
  
  var id = params.shopId

  const myFetch = (id: string) => {
    return new Promise<string>((resolve, reject) => {
      setTimeout(() => {
        resolve(id)
      })
    })
  }

}




