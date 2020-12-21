import { B, C, I } from './combinators'
import { True, False, ifElse, eq } from './booleans'
import { pred, n1 } from './numbers'
import { makePair, fst, snd } from './pair'

export const nil = makePair(True)(True)
export const head = B(fst)(snd)
export const tail = B(snd)(snd)

export const isNil = fst
export const isNotNil = B(not)(isNil)

export const prepend = element => list => makePair(False)(makePair(element)(list))
export const append = element => list => I
export const prependTo = C(prepend)
export const appendTo = C(append)

export const prependManyTo = list => howMany => element =>
	ifElse(eq(n1)(howMany)) (prepend(element)(list)) (prependManyTo(prepend(element)(list))(pred(howMany)))

export const appendManyTo = list => howMany => element =>
	ifElse(eq(n1)(howMany)) (append(element)(list)) (appendManyTo(append(element)(list))(pred(howMany)))

export const map = I
export const filter = I
export const reduceLR = I
export const reduceRL = I