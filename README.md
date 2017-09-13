[![Build Status](https://travis-ci.org/kaelzhang/kdj.svg?branch=master)](https://travis-ci.org/kaelzhang/kdj)
[![Coverage](https://codecov.io/gh/kaelzhang/kdj/branch/master/graph/badge.svg)](https://codecov.io/gh/kaelzhang/kdj)
<!-- optional appveyor tst
[![Windows Build Status](https://ci.appveyor.com/api/projects/status/github/kaelzhang/kdj?branch=master&svg=true)](https://ci.appveyor.com/project/kaelzhang/kdj)
-->
<!-- optional npm version
[![NPM version](https://badge.fury.io/js/kdj.svg)](http://badge.fury.io/js/kdj)
-->
<!-- optional npm downloads
[![npm module downloads per month](http://img.shields.io/npm/dm/kdj.svg)](https://www.npmjs.org/package/kdj)
-->
<!-- optional dependency status
[![Dependency Status](https://david-dm.org/kaelzhang/kdj.svg)](https://david-dm.org/kaelzhang/kdj)
-->

# kdj

FinTech utility method to calculate the KDJ indicator.

KDJ is a derived form of the [Stochastic Oscillator Indicator](https://en.wikipedia.org/wiki/Stochastic_oscillator) with the only difference of having an extra line called the J line.

The J line represents the divergence of the %D value from the %K.

## Install

```sh
$ npm install kdj
```

## Usage

```js
import kdj from 'kdj'
```

## kdj(close, low, high, periods, kPeriods, dPeriods, kTimes, dTimes)

To understand the parameters better, we need to mathematically describe the tree lines. (via [wikipedia](https://en.wikipedia.org/wiki/Stochastic_oscillator))

```
%K = SMA( (closePrices - L) / (H - L), kPeriods )
```

L is the lowest prices over the last `periods` periods.

H is the highst prices over the last `periods` periods.

```
%D = SMA( %K, dPeriods )
```

%D is the `dPeriods`-periods moving average of %K.


KDJ is calculated quite alike Stochastic indicator, but the difference is in having a J line, which Stochastic does not have.

```
%J = %K * kTimes + %D * dTimes
```


- **close** `Array.<Number>` array of closing prices.
- **low** `Array.<Number>` array of low prices.
- **high** `Array.<Number>` array of high prices.
- **periods** `Number=9` the size of time periods to get the highest / lowest prices. Defaults to `3`.
- **kPeriods** `Number=3` the time periods to calculate the moving average for %K. Defaults to `3`.
- **dPeriods** `Number=3` the time periods to calculate the moving average for %D. Defaults to `3`.
- **kTimes** `Number=3`
- **dTimes** `Number=2`

Returns `DKJValue`

### struct `DKJValue`

- **K** `Array.<Number|>` the array of K values.
- **D** `Array.<Number|>` the array of D values.
- **J** `Array.<Number|>` the array of J values.

## License

MIT
