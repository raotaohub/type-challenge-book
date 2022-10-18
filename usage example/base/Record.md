# Typescript 提供的泛型的用法

## Record

最常用之一

### 例子:

```typescript
interface PageInfo {
  title: string;
}

type Page = "home" | "about" | "contact"; // 键名

const nav: Record<Page, PageInfo> = {
  about: { title: "about" },
  contact: { title: "contact" },
  home: { title: "home" },
};

```

#### 解释:

Record: 	可以申明1个可索引类型; 

可索引类型:   如对象、类; 如 `{}，clss Person {}`

use:		Record<key的类型, 值的类型>

### 项目中常用到的写法

```typescript
export type IAllProps = Record<keyof any,any>  		// 任意键值

export type IMapType = Record<string,string>		// 任意键值

export type INumberMapType = Record<number,number>	// 任意键number 值number 用在一些枚举值
```

### 思考

上面常用写法，其实只起到了最基础的类型限制，它们做到了将传入的值，约束为可索引类型。

其实还有更多用法，在日常开发中会慢慢有体会。

相信我一但开始习惯并使用，就是进阶的开始。
