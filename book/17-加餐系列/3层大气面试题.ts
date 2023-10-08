// https://juejin.cn/book/7047524421182947366/section/7182028978251628600?enter_from=course_center&utm_source=course_center

/* 第一层的要求是这样的：

实现一个 zip 函数，对两个数组的元素按顺序两两合并，比如输入 [1,2,3], [4,5,6] 时，返回 [[1,4], [2,5],[3,6]]

这层就是每次各从两个数组取一个元素，合并之后放到数组里，然后继续处理下一个，递归进行这个流程，直到数组为空即可。 */

function zip(target, other) {
  if (!target.length || !other.length) return [];

  const [one, ...rest1] = target;
  const [two, ...rest2] = other;

  return [[one, two], ...zip(rest1, rest2)];
}

console.log('start');

console.log(zip([1, 2, 3], [4, 5, 6]));

/* 定义函数返回 */

function zip<Target extends unknown[], Other extends unknown[]>(
  target: unknown[],
  other: unknown[],
): Zip<Target, Other> {
  if (!target.length || !other.length) return [];

  const [one, ...rest1] = target;
  const [two, ...rest2] = other;

  return [[one, two], ...zip(rest1, rest2)];
}

type Zip<One extends unknown[], Two extends unknown[]> = One extends [
  infer First,
  ...infer Rest1,
]
  ? Two extends [infer Second, ...infer Rest2]
    ? [One, Two]
    : []
  : [];

export {};
