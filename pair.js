import { K, KI, V } from './combinators'
import { succ } from './numbers'

export const makePair = V
export const fst = p => p(K)
export const snd = p => p(KI)

export const phi = p => makePair(snd(p))(succ(snd(p)))