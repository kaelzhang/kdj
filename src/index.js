import {
  sma
} from 'moving-averages'

import {
  sub,
  div,
  mul
} from 'math-array'

import {
  hhv,
  llv
} from 'hhv-llv'


const UPPER = 100
const LOWER = 0

const clean = n => Math.min(UPPER, Math.max(LOWER, n))

export default (
  closePrices,
  lowPrices,
  highPrices,
  periods = 9,
  kPeriods = 3,
  dPeriods = 3,
  kTimes = 3,
  dTimes = 2
) => {

  const lowest = llv(lowPrices, periods)
  const highest = hhv(highPrices, periods)

  const u = div(
    mul(sub(closePrices, lowest, 1), UPPER, 1),
    sub(highest, lowest, 1)
  )

  const ks = sma(u, kPeriods)
  const ds = sma(ks, dPeriods)
  const js = sub(
    mul(kTimes, ks, 1),
    mul(dTimes, ds, 1),
    1
  )

  return {
    K: ks.map(clean),
    D: ds.map(clean),
    J: js.map(clean)
  }
}
