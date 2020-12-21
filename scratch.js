
// ======================================================================
// 	REFERENCE(λ)
// ======================================================================
// I   = λa.a                   (idiot|ibis-combinator) [identity-combinator]
// M   = λa.aa                  (mockingbird-combinator) [self-application-combinator]
// Y   = λa...                  (y-combinator) [recursion-combinator]
// Z   = λa...                  (z-combinator) [recursion-combinator]
// K   = λab.a                  (kestrel-combinator) [first-combinator][constant-combinator]
// KI  = λab.b                  (kite-combinator) [second-combinator]
// I*  = λab.ab                 (identity-once-removed-combinator) [application-combinator]
// T   = λab.ba                 (thrush-combinator)
// L   = λab.a(bb)              (lark-combinator)
// M2  = λab.ab(ab)             (double-mockingbird-combinator)
// O   = λab.b(ab)              (owl-combinator)
// U   = λab.b(aab)             (turing-combinator)
// W   = λab.abb                (warbler-combinator) [duplication-combinator]
// CW  = λab.baa                (converse-warbler-combinator)
// KM  = λab.bb                 (konstant-mocker-combinator)
// CKM = λab.aa                 (crossed-konstant-mocker-combinator)
// I** = λabc.abc               (identity-twice-removed-combinator)
// C   = λabc.acb               (cardinal-combinator) [flip-combinator]
// V   = λabc.cab               (vireo-combinator) [pair-combinator]
// F   = λabc.cba               (finch-combinator)
// R   = λabc.bca               (robin-combinator)
// _   = λabc.bac               (-combinator)
// B   = λabc.a(bc)             (bluebird-combinator) [composition-combinator]
// Q   = λabc.b(ac)             (queer-combinator) [pipe-combinator]
// Q1  = λabc.a(cb)             (quixotic-combinator)
// Q2  = λabc.b(ca)             (quizzical-combinator)
// Q3  = λabc.c(ab)             (quirky-combinator)
// Q4  = λabc.c(ba)             (quacky-combinator)
// S   = λabc.ac(bc)            (starling-combinator) [substitution-combinator]
// H   = λabc.abcb              (hummingbird-combinator)
// W*  = λabc.abcc              (warbler-once-removed-combinator)
// B1  = λabcd.a(bcd)           (blackbird-combinator)
// B3  = λabcd.a(b(cd))         (becard-combinator)	
// D   = λabcd.ab(cd)           (dove-combinator)
// G   = λabcd.ad(bc)           (goldfinch-combinator)
// J   = λabcd.ab(adc)          (jay-combinator)
// C*  = λabcd.abdc             (cardinal-once-removed-combinator)
// R*  = λabcd.acdb             (robin-once-removed-combinator)
// F*  = λabcd.adcb             (finch-once-removed-combinator)
// V*  = λabcd.acbd             (vireo-once-removed-combinator)
// W** = λabcd.abcdd            (warbler-once-removed-combinator)
// B2  = λabcde.a(bcde)         (bunting-combinator)
// D1  = λabcde.abc(de)         (dickcissel-combinator)
// D2  = λabcde.a(bc)(de)       (dovekies-combinator)
// E   = λabcde.ab(cde)         (eagle-combinator)
// C** = λabcde.abced           (cardinal-twice-removed-combinator)
// R** = λabcde.abdec           (robin-twice-removed-combinator)
// F** = λabcde.abedc           (finch-twice-removed-combinator)
// V** = λabcde.abecd           (vireo-twice-removed-combinator)
// BE  = λabcdefg.a(bcd)(efg)   (bald-eagle-combinator)


// ======================================================================
// 	REFERENCE(JS)
// ======================================================================
// I   = a => a
// M   = a => a(a)
// Y   = a => //TODO
// Z   = a => //TODO
// K   = a => b => a
// KI  = a => b => b
// I*  = a => b => a(b)
// T   = a => b => b(a)
// L   = a => b => a(b(b))
// M2  = a => b => a(b)(a(b))
// O   = a => b => b(a(b))
// U   = a => b => b(a(a)(b))
// W   = a => b => a(b)(b)
// CW  = a => b => b(a)(a)
// KM  = a => b => b(b)
// CKM = a => b => a(a)
// I** = a => b => c => a(b)(c)
// C   = a => b => c => a(c)(b)
// V   = a => b => c => c(a)(b)
// F   = a => b => c => c(b)(a)
// _   = a => b => c => b(a)(c)
// R   = a => b => c => b(c)(a)
// B   = a => b => c => a(b(c))
// Q   = a => b => c => b(a(c))
// Q1  = a => b => c => a(c(b))
// Q2  = a => b => c => b(c(a))
// Q3  = a => b => c => c(a(b))
// Q4  = a => b => c => c(b(a))
// S   = a => b => c => a(c)(b(c)
// H   = a => b => c => a(b)(c)(b)
// W*  = a => b => c => a(b)(c)(c)
// B1  = a => b => c => d => a(b(c)(d))
// B3  = a => b => c => d => a(b(c(d)))
// D   = a => b => c => d => a(b)(c(d))
// G   = a => b => c => d => a(d)(b(c))
// J   = a => b => c => d => a(b)(a(d)(c))
// C*  = a => b => c => d => a(b)(d)(c)
// R*  = a => b => c => d => a(c)(d)(b)
// F*  = a => b => c => d => a(d)(c)(b)
// V*  = a => b => c => d => a(c)(b)(d)
// W** = a => b => c => d => a(b)(c)(d)(d)
// B2  = a => b => c => d => e => a(b(c)(d)(e))
// D1  = a => b => c => d => e => a(b)(c)(d(e))
// D2  = a => b => c => d => e => a(b(c))(d(e))
// E   = a => b => c => d => e => a(b)(c(d)(e))
// C** = a => b => c => d => e => a(b)(c)(e)(d)
// R** = a => b => c => d => e => a(b)(d)(e)(c)
// F** = a => b => c => d => e => a(b)(e)(d)(c)
// V** = a => b => c => d => e => a(b)(e)(c)(d)
// BE  = a => b => c => d => e => f => g => a(b(c)(d))(e(f)(g))


const I = a => a
const M = f => f(f)
const K = a => b => a
const KI = a => b => b
const A = f => a => f(a)
const I1 = A
const T = a => f => f(a)
const I2 = f => a => b => f(a)(b)
const C = f => a => b => f(b)(a)
const V = a => b => f => f(a)(b)
const F = a => b => f => f(b)(a)
const B = f => g => a => f(g(a))
const B1 = f => g => a => b => f(g(a)(b))
const B2 = f => g => a => b => c => f(g(a)(b)(c))
const B3 = f => g => h => a => f(g(h(a)))
const S = f => g => a => f(a)(g(a))
const BE = f => g => a => b => h => c => d => f(g(a)(b))(h(c)(d))
const W = f => a => f(a)(a)
const D2 = f => g => x => h => y => f(g(x))(h(y))


// js-utitlities
const ifElseLazy = bool => x => y => bool(x)(y)()
const boolean = V(true)(false)
const number = n => n(a => a + 1)(0)
const character = B(String.fromCharCode)(number)

//booleans
const True = K
const False = KI

//boolean-operations
const not = C
const or = M
const and = a => b => a(b)(a)

const xor = a => b => a(not(b))(b)
const nand = B1(not)(and)
const nor = B1(not)(or)
const xnor = B1(not)(xor)
const beq = xnor

const imp = a => b => a(b)(not(a))
const convimp = a => b => b(a)(not(b))

// control-flow
const ifElse = I

//pair
const makePair = V
const fst = p => p(K)
const snd = p => p(KI)
const phi = p => makePair(snd(p))(succ(snd(p)))

//numbers(church-numerals)
const n0 = f => a => a
const n1 = f => a => f(a)
const succ = n => f => a => f(n(f)(a))
const pred = n => fst(n(phi)(makePair(n0)(n0)))

const n2 = succ(n1)
const n3 = succ(n2)
const n4 = succ(n3)
const n5 = succ(n4)
const n6 = succ(n5)
const n7 = succ(n6)
const n8 = succ(n7)
const n9 = succ(n8)
const n10 = succ(n9)

//arithematic-boolean-operations
const is0 = n => n(K(False))(True)
const isNot0 = B(not)(is0)

//arithematic-operations
const add = y => x => y(succ)(x)
const mul = y => x => y(add(x))(n0)
const exp = y => x => y(mul(x))(n1)

const sub = y => x => y(pred)(x)

const _div = r => y => x => ifElseLazy (isNot0(x)) (() => _div(succ(r))(y)(sub(y)(x))) (() => r)
const div = _div(n0)

const _eq = B1(is0)(sub)
const eq = x => y => and(_eq(x)(y))(_eq(y)(x))

const lt = B1(isNot0)(C(sub))
const gt = B1(isNot0)(sub)

const neq = B1(not)(eq)
const lte = B1(not)(gt)
const gte = B1(not)(lt)

// list
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

// js-utitlities
const printElement = converter => list => {
	console.log(B(converter)(head)(list))
	return tail(list)
}
const printList = converter => list =>
	ifElseLazy(isNotNil(list)) (() => printList(converter)(printElement(converter)(list))) (() => nil)

// string
const string = I


// const Y = f => (g => f(g(g)))(g => f(g(g)))
// const Y = f => (g => g(g))(g => f(x => g(g)(x)))
// const Y = le => (
// 	f => f(f)
// )(
// 	f => le(
// 		x => f(f)(x)
// 	)
// )

// const fact = f => n => n < 2 ? 1 : n * f(n-1)
// const fact = f => n => ifElse(lt(n2)(n)) (n1) (mul(n)(f(pred(n))))

// console.log(Y(fact)(4))

