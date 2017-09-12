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
  r,
  i,
  a
) => {

  const lowest = llv(lowPrices, r)
  const highest = hhv(highPrices, r)

  const u = div(
    mul(sub(closePrices, lowest), UPPER),
    sub(highest, lowest)
  )

  const ks = sma(u, i)
  const ds = sma(sk, a)
  const js = sub(
    mul(3, ks),
    mul(2, ds)
  )

  return {
    K: ks.map(clean),
    D: ds.map(clean),
    J: js.map(clean)
  }
}
