
bin-size-to-timeframe [![Build status](https://travis-ci.org/strong-roots-capital/bin-size-to-timeframe.svg?branch=master)](https://travis-ci.org/strong-roots-capital/bin-size-to-timeframe) [![npm version](https://img.shields.io/npm/v/@strong-roots-capital/bin-size-to-timeframe.svg)](https://npmjs.org/package/@strong-roots-capital/bin-size-to-timeframe) [![codecov](https://codecov.io/gh/strong-roots-capital/bin-size-to-timeframe/branch/master/graph/badge.svg)](https://codecov.io/gh/strong-roots-capital/bin-size-to-timeframe)
==================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================

> Convert a BitMEX bin-size to a Trading View timeframe

Install
-------

```shell
npm install @strong-roots-capital/bin-size-to-timeframe
```

Use
---

```typescript
import binSizeToTimeframe from '@strong-roots-capital/bin-size-to-timeframe'

binSizeToTimeframe('1m')
//=> '1'

binSizeToTimeframe('5m')
//=> '5'

binSizeToTimeframe('1h')
//=> '1H'

binSizeToTimeframe('1d')
//=> '1D'
```

Related
-------

*   [to-bitmex-timeframe](TODO)

## Index

### Functions

* [binSizeToTimeframe](#binsizetotimeframe)

---

## Functions

<a id="binsizetotimeframe"></a>

###  binSizeToTimeframe

▸ **binSizeToTimeframe**(binSize: *"1m" \| "5m" \| "1h" \| "1d"*): `string`

*Defined in [bin-size-to-timeframe.ts:13](https://github.com/strong-roots-capital/bin-size-to-timeframe/blob/f005e24/src/bin-size-to-timeframe.ts#L13)*

Convert BiMEX bin size to Trading View timeframe.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| binSize | "1m" \| "5m" \| "1h" \| "1d" |  Length of bin |

**Returns:** `string`
Length of bin size as Trading View timeframe

___

