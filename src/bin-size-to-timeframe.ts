/**
 * bin-size-to-timeframe
 * Convert a BitMEX bin-size to a Trading View timeframe
 */

import ow from 'ow'


/**
 * Convert BiMEX bin size to Trading View timeframe.
 *
 * @param binSize - Length of bin
 * @returns Length of bin size as Trading View timeframe
 */
export default function binSizeToTimeframe(binSize: '1m' | '5m' | '1h' | '1d'): string {
    ow(binSize, ow.string.is(s =>
                             s === '1m' ||
                             s === '5m' ||
                             s === '1h' ||
                             s === '1d' ||
                            `Expected ${s} to be a valid BitMEX bin-size (either '1m', '5m', '1h', or '1d')`))
    return {
        '1m': '1',
        '5m': '5',
        '1h': '1H',
        '1d': '1D'
    } [binSize]
}
