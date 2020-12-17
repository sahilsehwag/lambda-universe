import { B, K, B1 } from './combinators'
import { pair, fst, phi } from './pairs'
import { not, and } from './booleans'

//numbers(church-numerals)
export const n0 = f => a => a
export const n1 = f => a => f(a)

export const succ = n => f => a => f(n(f)(a))
export const pred = n => fst(n(phi)(pair(n0)(n0)))
export const is0 = n => n(K(False))(True)

export const n2 = succ(n1)
export const n3 = succ(n2)
export const n4 = succ(n3)
export const n5 = succ(n4)
export const n6 = succ(n5)
export const n7 = succ(n6)
export const n8 = succ(n7)
export const n9 = succ(n8)
export const n10 = succ(n9)


//arithematic-operations
export const add = y => x => y(succ)(x)
export const mul = y => x => y(add(x))(n0)
export const exp = y => x => y(mul(x))(n1)

export const sub = y => x => y(pred)(x)
// export const div = n => m => //TODO
// export const log = n => m => //TODO


//arithematic-boolean-operations
const isNot0 = B(not)(is0)

const _eq = B1(is0)(sub)
export const eq = x => y => and(_eq(x)(y))(_eq(y)(x))

export const lt = B1(isNot0)(C(sub))
export const gt = B1(isNot0)(sub)

export const neq = B1(not)(eq)
export const lte = B1(not)(gt)
export const gte = B1(not)(lt)