/**
 * bin-size-to-timeframe
 * Convert a BitMEX bin-size to a Trading View timeframe
 */


/**
 * Convert BiMEX bin size to Trading View timeframe.
 *
 * @param binSize - Length of bin
 * @returns Length of bin size as Trading View timeframe
 */
export default function binSizeToTimeframe(binSize: '1m' | '5m' | '1h' | '1d'): string {
    return {
        '1m': '1',
        '5m': '5',
        '1h': '1H',
        '1d': '1D'
    } [binSize]
}
