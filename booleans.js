import { K, KI, B1, C, M, I } from './combinators'

export const True = K
export const False = KI

export const not = C
export const or = M
export const and = a => b => a(b)(a)

export const xor = a => b => a(not(b))(b)
export const nand = B1(not)(and)
export const nor = B1(not)(or)
export const xnor = B1(not)(xor)
export const beq = xnor

export const imp = a => b => a(b)(not(a))
export const cimp = a => b => b(a)(not(b))

export const ifElse = I
