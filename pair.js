import { K, KI, V } from './combinators'
import { succ } from './numbers'

export const pair = V
export const fst = p => p(K)
export const snd = p => p(KI)

export const phi = p => pair(snd(p))(succ(snd(p)))