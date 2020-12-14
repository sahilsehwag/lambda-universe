//variables
//function-definition
//function-application

//identity-combinator
const I = a => a

//self-application-combinator
//mockingbird-combinator
const M = f => f(f)

//first-combinator
//kestrel-combinator
const K = a => b => a

//second-combinator
//kite-combinator
// const KI = K(I)
const KI = a => b => b

//application-combinator
//identity-removed-combinator (I*)
const A = f => a => f(a)
const I1 = A

//application-combinator(inverted)
//thrush-combinator
const T = a => f => f(a)

// //warbler-combinator
// const W = f => a => f(a)(a)
// //inverse-warbler
// const W1 = a => f => f(a)(a)


//identity-twice-removed-combinator
const I2 = f => a => b => f(a)(b)
//cardinal-combinator
const C = f => a => b => f(b)(a)

//argument-first composition-combinator
//vireo-combinator
const V = a => b => f => f(a)(b)
//argument-first composition-combinator(reversed-arguments)
//finch-combinator
const F = a => b => f => f(b)(a)

//composition-combinator (1* <- 1*)
//bluebird-combinator
const B = f => g => a => f(g(a))

//composition-combinator(1* <- 2*)
//blackbird-combinator
const B1 = f => g => a => b => f(g(a)(b))

//composition-combinator(1* <- 3*)
//bunting-combinator
const B2 = f => g => a => b => c => f(g(a)(b)(c))

//composition-combinator(1* <- 3*)
//becard-combinator
const B3 = f => g => h => a => f(g(h(a)))



//owl-combinator
const O = a => b => b(a(b))

//starling-combinator
const S = a => b => c => a(c)(b)(c)

//y-combinator
// const Y = f => (x => f(x(x)))(x => f(x(x)))
// const Z = f => (x => f(x(x)))(x => f(x(x)))


//booleans
const bool = V('true')('false')
const True = K
const False = KI


//numbers(church-numerals)
const n0 = f => a => a
const n1 = f => a => f(a)
const number = n => n(a => a + 1)(0)

//peano-numbers
const succ = n => f => a => f(n(f)(a))

const n2 = succ(n1)
const n3 = succ(n2)
const n4 = succ(n3)
const n5 = succ(n4)


//character
//string


//data-structures
//pair
const pair = V
const fst = p => p(K)
const snd = p => p(KI)
const phi = p => pair(snd(p))(succ(snd(p)))
// const fst = T(K)
// const snd = T(KI)

//list
//stack
//queue
//tree
//graph


//boolean-operations
//intensional|extensional equality
// const not = F(True)(False)
const not = C

// const or = a => b => a(a)(b)
const or = M

// const and = a => b => a(b)(a)
const and = a => b => a(b)(a)

// const xor = a => b => or(and(a)(not(b)))(and(not(a))(b))
const xor = a => b => a(not(b))(b)
const nand = B1(not)(and)
const nor = B1(not)(or)
const xnor = B1(not)(xor)
const beq = xnor

const imp = a => b => a(b)(not(a))
const convimp = a => b => b(a)(not(b))


//flow-control
// const ifElse = B
// console.log()


//arithematic-operations
const pred = n => fst(n(phi)(pair(n0)(n0)))
const inc = succ
const dec = pred

const add = n => m => n(succ)(m)
const mul = n => m => n(add(m))(n0)
	//alpha-equivalence = equivalent function with just different argument-names
	// const mul = n => m => B(n)(m)
	// const mul = B
const exp = n => m => m(mul(n))(n1)

const sub = n => m => m(pred)(n)
// const div = n => m => //TODO
// const log = n => m => //TODO

const is0 = n => n(K(False))(True)

//arithematic-boolean-operations
const eq = n => m => is0(sub(n)(m))
const neq = B1(not)(eq)
// const lt =
// const gt =
// const lte = and(lt)
// const gte = and()








//variables
//function-definition
//function-application

//function-uses = value(input|output)|application

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

// // const S = a => b => c => //TODO
