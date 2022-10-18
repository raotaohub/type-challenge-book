

```typescript
// constants.ts @业务常量
export const companyNames = {
  'ZHONGYOUEX': '众邮快递',
  '100004928': '如风达',
  '100007887': '递速物流',
}

// index.ts

// keyof typeof 得到由可索引类型 key的类型 组成的 联合类型 ； type CpKey = "ZHONGYOUEX" | "100004928" | "100007887"
type CpKey = keyof typeof companyNames

/**
 * @description: 排除 exclude 中的属性
 */
export const getCpNamesByExcludeList = (
  companyNames: typeof companyNames,
  exclude: CpKey[]
) => {
  const _wlb = Util.deepCopy(wlbRealCpNames)

  exclude.forEach(v => {
    if (_wlb[v]) delete _wlb[v]
  })

  return _wlb
}

```

