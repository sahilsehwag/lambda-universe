import { B, K, B1 } from './combinators'
import { pair, fst } from './pairs'

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
export const add = n => m => n(succ)(m)
export const mul = n => m => n(add(m))(n0)
export const exp = n => m => m(mul(n))(n1)

export const sub = n => m => m(pred)(n)
// export const div = n => m => //TODO
// export const log = n => m => //TODO


//arithematic-boolean-operations
export const eq = n => m => is0(sub(n)(m))
export const neq = B1(not)(eq)
// export const lt =
// export const gt =
// export const lte = and(lt)
// export const gte = and()