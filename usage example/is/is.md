# 类型守护


```ts
interface A {

 	a:[]

}

interface B {
 
 	a:{}

}

type IData 
data :IData = A | B

用的时候

if(typeof data.a === 'array'){
	data as A
	// do something
}else{
	data as B
	// do something
}
```


## 获取 interface 子项类型


**example**

```tsx

type ItemType = IWorkOrderListResult['list'][0];

const array = ['a', '1', true];
type ItemType = (typeof array)[number];       // string | number | boolean
type ItemTypeString = (typeof array)[0];        // string

```



