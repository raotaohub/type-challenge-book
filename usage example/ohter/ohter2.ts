type MergeValue<Val, OtherVla> = Val extends OtherVla
  ? Val
  : OtherVla extends unknown[]
  ? [Val, ...OtherVla]
  : [Val, OtherVla];

type ParseParam<Str extends string> = Str extends `${infer Key}=${infer Val}`
  ? { [K in Key]: Val }
  : {};

type MergeParam<
  Result extends Record<string, string>,
  OtherResult extends Record<string, string>,
> = {
  [K in keyof Result | keyof OtherResult]: K extends keyof Result
    ? K extends keyof OtherResult
      ? MergeValue<Result[K], OtherResult[K]>
      : Result[K]
    : K extends keyof OtherResult
    ? OtherResult[K]
    : never;
};

type ParseString<Str extends string> =
  Str extends `${infer Param}&${infer Rest}`
    ? MergeParam<ParseParam<Param>, ParseString<Rest>>
    : ParseParam<Str>;

type ParseQueryString<Str extends string> =
  Str extends `${infer Url}?${infer Qs}` ? ParseString<Qs> : ParseString<Str>;

const getUrlParams = <S extends string>(url: S): ParseQueryString<S> => {
  return (url.match(/([^?=&]+)(=([^&]*))/g) || []).reduce((a, v) => {
    const [key, value] = v.split('=');
    if (a[key]) {
      a[key] = (
        (typeof a[key] === 'string' ? [a[key]] : a[key]) as string[]
      ).concat(value);
    } else {
      a[key] = value;
    }
    return a;
  }, {} as any);
};

export {};
/**
 * description
 * use

 */
const test1 = getUrlParams('www.fhd001.com?a=1&b=2&c=3&a=true&b=false');
const test2 = getUrlParams('a=1&b=2&c=3&a=true&b=false');
type look = Readonly<typeof test1>;
type look2 = Readonly<typeof test2>;
