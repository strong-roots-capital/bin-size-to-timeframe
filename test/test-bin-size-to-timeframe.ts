import test from 'ava'

/**
 * Library under test
 */

type BinSize = '1m' | '5m' | '1h' | '1d'

import binSizeToTimeframe from '../src/bin-size-to-timeframe'

const transformsBinSizeToExpectedTimeframe = (t: any, binSize: '1m' | '5m' | '1h' | '1d', timeframe: string) => t.is(binSizeToTimeframe(binSize), timeframe)
transformsBinSizeToExpectedTimeframe.title = (_ = '', binSize: '1m' | '5m' | '1h' | '1d', timeframe: string) => `${binSize} should become ${timeframe}`

test(transformsBinSizeToExpectedTimeframe, '1m', '1')
test(transformsBinSizeToExpectedTimeframe, '5m', '5')
test(transformsBinSizeToExpectedTimeframe, '1h', '1H')
test(transformsBinSizeToExpectedTimeframe, '1d', '1D')

test('should reject non-bin-sizes', t => {
    const error = t.throws(() => {
        binSizeToTimeframe('1H' as BinSize)
    })
    t.is(error.name, 'ArgumentError')
})
