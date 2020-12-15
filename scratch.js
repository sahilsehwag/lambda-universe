
export const M = f => f(f)
export const K = a => _ => a
export const KI = _ => b => b
export const A = f => a => f(a)
export const I1 = A
export const T = a => f => f(a)
export const I2 = f => a => b => f(a)(b)
export const C = f => a => b => f(b)(a)
export const V = a => b => f => f(a)(b)
export const F = a => b => f => f(b)(a)
export const B = f => g => a => f(g(a))
export const B1 = f => g => a => b => f(g(a)(b))
export const B2 = f => g => a => b => c => f(g(a)(b)(c))
export const B3 = f => g => h => a => f(g(h(a)))
export const S = f => g => a => f(a)(g(a))

// //warbler-combinator
// const W = f => a => f(a)(a)
// //inverse-warbler
// const W1 = a => f => f(a)(a)

//owl-combinator
const O = a => b => b(a(b))

//y-combinator
// const Y = f => f(f)
// const Z = f => (x => f(x(x)))(x => f(x(x)))


//booleans
export const toJsBool = V(true)(false)
export const True = K
export const False = KI

//boolean-operations
export const not = C
export const or = M
export const and = a => b => a(b)(a)

export const xor = a => b => a(not(b))(b)
export const nand = B1(not)(and)
export const nor = B1(not)(or)
export const xnor = B1(not)(xor)
export const beq = xnor

export const imp = a => b => a(b)(not(a))
export const convimp = a => b => b(a)(not(b))


//numbers(church-numerals)
export const toJsNumber = n => n(a => a + 1)(0)

export const n0 = f => a => a
export const n1 = f => a => f(a)
export const succ = n => f => a => f(n(f)(a))

export const n2 = succ(n1)
export const n3 = succ(n2)
export const n4 = succ(n3)
export const n5 = succ(n4)
export const n6 = succ(n5)
export const n7 = succ(n6)
export const n8 = succ(n7)
export const n9 = succ(n8)
export const n10 = succ(n9)

export const is0 = n => n(K(False))(True)

//arithematic-operations
export const pred = n => fst(n(phi)(pair(n0)(n0)))

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

//pair
const pair = V
const fst = p => p(K)
const snd = p => p(KI)
const phi = p => pair(snd(p))(succ(snd(p)))



// // 1-arguments (identity)(self-application)
// // const I = a => a
// // const M = f => f(f)

// // 2-arguments (selection)(application)(inversion)
// // (selection)
// const K = a => b => a
// const KI = a => b => b

// // (application)
// const I1 = f => a => f(a)
// // (inversion)
// const T  = a => f => f(a)

// // 3-arguments (order)(composition)(pipe)(data-structure(pair))
// // (order)
// const I2 = f => a => b => f(a)(b)
// const C  = f => a => b => f(b)(a)

// // (data-structure)(pair)
// const V  = a => b => f => f(a)(b)
// const F  = a => b => f => f(b)(a)
// 	// const I2 = a => b => c => a(b)(c)
// 	// const C  = a => b => c => a(c)(b)
// 	// const V  = a => b => c => c(a)(b)
// 	// const F  = a => b => c => c(b)(a)
// 	// const R  = a => b => c => b(c(a))
// 	// const _  = a => b => c => b(a(c))

// // (composition)
// const B = f => g => a => f(g(a))
// // (pipe)
// const Q = f => g => a => g(f(a))
// 	// const B  = a => b => c => a(b(c))
// 	// const Q  = a => b => c => b(a(c))
// 	// const Q1 = a => b => c => a(c(b))
// 	// const Q2 = a => b => c => b(c(a))
// 	// const Q3 = a => b => c => c(a(b))
// 	// const Q4 = a => b => c => c(b(a))


// RANDOM
// // 4-arguments
// // const _  = f => a => b => c => f(a)(b)(c)
// const B1 = f => g => a => b => f(g(a)(b))
// const B3 = f => g => h => a => f(g(h(a)))

// //5-arguments
// // const _  = f => a => b => c => d => f(a)(b)(c)(d)
// const B2 = f => g => a => b => c => f(g(a)(b)(c))
// // const _  = f => g => h => a => b => f(g(h(a)(b)))
// // const _  = f => g => h => i => a => f(g(h(i(a))))

// // random
// const D  = a => b => c => d => a(b)(c(d))
// const D1 = a => b => c => d => e => a(b)(c)(d(e))
// const D2 = a => b => c => d => e => a(b(c))(d(e))

// const E = f => a => g => b => c => f(a)(g(b)(c))
// const BE = f => g => a => b => h => c => d => f(g(a)(b))(h(c)(d))

// const GF = f => g => a => b => f(b)(g(a))
// const H = f => a => b => f(a)(b)(a)
// const J = f => a => b => c => f(a)(f(c)(b))
// const L = f => g => f(g(g))
// const M2 = f => g => f(g)(f(g))
// const U = a => b => b(a(a)(b))