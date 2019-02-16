# bin-size-to-timeframe [![Build status](https://travis-ci.org/strong-roots-capital/bin-size-to-timeframe.svg?branch=master)](https://travis-ci.org/strong-roots-capital/bin-size-to-timeframe) [![npm version](https://img.shields.io/npm/v/@strong-roots-capital/bin-size-to-timeframe.svg)](https://npmjs.org/package/@strong-roots-capital/bin-size-to-timeframe) [![codecov](https://codecov.io/gh/strong-roots-capital/bin-size-to-timeframe/branch/master/graph/badge.svg)](https://codecov.io/gh/strong-roots-capital/bin-size-to-timeframe)

> Convert a BitMEX bin-size to a Trading View timeframe

## Install

``` shell
npm install @strong-roots-capital/bin-size-to-timeframe
```

## Use

``` typescript
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

## Related

- [to-bitmex-timeframe](TODO)
