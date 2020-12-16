

// ==================================================
// 					REFERENCE(λ)
// ==================================================
//
// I   = λa.a					(idiot|ibis-combinator) [identity-combinator]
// B   = λa.aa  				(mockingbird-combinator) [self-application-combinator]
// Y   = λa.aa  				(y-combinator) [recursion-combinator]
// Z   = λa.aa  				(z-combinator) [recursion-combinator]
// K   = λab.a  				(kestrel-combinator) [first-combinator][constant-combinator]
// KI  = λab.b  				(kite-combinator) [second-combinator]
// I*  = λab.ab 	 			(identity-once-removed-combinator) [application-combinator]
// T   = λab.ba 	 			(thrush-combinator)
// I** = λabc.abc  				(identity-twice-removed-combinator)
// C   = λabc.acb  				(cardinal-combinator) [flip-combinator]
// V   = λabc.cab  				(vireo-combinator) [pair-combinator]
// F   = λabc.cba  				(inch-combinator)
// R   = λabc.bca  				(robin-combinator)
// _   = λabc.bac  				(-combinator)
// B   = λabc.a(bc)				(bluebird-combinator) [composition-combinator]
// Q   = λabc.b(ac)				(queer-combinator) [pipe-combinator]
// Q1  = λabc.a(cb)				(quixotic-combinator)
// Q2  = λabc.b(ca)				(quizzical-combinator)
// Q3  = λabc.c(ab)				(quirky-combinator)
// Q4  = λabc.c(ba)				(quacky-combinator)
// S   = λabc.ac(bc)			(starling-combinator) [substitution-combinator]
// 
// L   = λab.a(bb)				(lark-combinator)
// M2  = λab.ab(ab)				(double-mockingbird-combinator)
// O   = λab.b(ab) 				(owl-combinator)
// U   = λab.b(aab)				(turing-combinator)
// W   = λab.abb  				(warbler-combinator) [duplication-combinator]
// CW  = λab.baa  				(converse-warbler-combinator)
// KM  = λab.bb  				(konstant-mocker-combinator)
// CKM = λab.aa  				(crossed-konstant-mocker-combinator)
// H   = λabc.abcb				(hummingbird-combinator)
// W*  = λabc.abcc				(warbler-once-removed-combinator)
// B1  = λabcd.a(bcd)			(blackbird-combinator)
// B3  = λabcd.a(b(cd))			(becard-combinator)	
// D   = λabcd.ab(cd			(dove-combinator)
// G   = λabcd.ad(bc			(goldfinch-combinator)
// J   = λabcd.ab(adc			(jay-combinator)
// C*  = λabcd.abdc				(cardinal-once-removed-combinator)
// R*  = λabcd.acdb				(robin-once-removed-combinator)
// F*  = λabcd.adcb				(finch-once-removed-combinator)
// V*  = λabcd.acbd				(vireo-once-removed-combinator)
// W** = λabcd.abcdd			(warbler-once-removed-combinator)
// B2  = λabcde.a(bcde)			(bunting-combinator)
// D1  = λabcde.abc(de)			(dickcissel-combinator)
// D2  = λabcde.a(bc)(de)		(dovekies-combinator)
// E   = λabcde.ab(cde)			(eagle-combinator)
// C** = λabcde.abced			(cardinal-twice-removed-combinator)
// R** = λabcde.abdec			(robin-twice-removed-combinator)
// F** = λabcde.abedc			(finch-twice-removed-combinator)
// V** = λabcde.abecd			(vireo-twice-removed-combinator)
// BE  = λabcdefg.a(bcd)(efg) 	(bald-eagle-combinator)
//
// ==================================================
// 					REFERENCE(JS)
// ==================================================
// 


//==================== 1-ARGUMENTS ====================//

// identity-combinator
// idiot|ibis-combinator
export const I = a => a


// self-application-combinator
// mockingbird-combinator
// export const M = a => a(a)
export const M = f => f(f)

//==================== 2-ARGUMENTS ====================//

// first|constant-combinator
// kestrel-combinator
export const K = a => b => a

// second-combinator
// kite-combinator
export const KI = a => b => b


// application-combinator (1°)
// identity-once-removed-combinator (I*)
// export const A = a => b => a(b)
export const A = f => a => f(a)
export const I1 = A

// application-combinator(inverted)
// thrush-combinator
// export const T = a => b => b(a)
export const T = a => f => f(a)

//==================== 3-ARGUMENTS ====================//

// application-combinator (2°)
// identity-twice-removed-combinator (I**)
// export const A2 = a => b => c => a(b)(c)
export const A2 = f => a => b => f(a)(b)
export const I2 = A2

// flip-combinator
// cardinal-combinator
// export const C = a => b => c => a(c)(b)
export const C = f => a => b => f(b)(a)


// vireo-combinator
// export const V = a => b => c => c(a)(b)
export const V = a => b => f => f(a)(b)

// finch-combinator
// export const F = a => b => c => c(b)(a)
export const F = a => b => f => f(b)(a)


// composition-combinator (1° <- 1°)
// bluebird-combinator
// export const B = a => b => c => a(b(c))
export const B = f => g => a => f(g(a))


// substitution-combinator
// starling-combinator
// const S = a => b => c => a(c)(b(c))
export const S = f => g => a => f(a)(g(a))

//==================== RANDOM ====================//

// composition-combinator(1° <- 2°)
// blackbird-combinator
// export const B1 = f => a => b => c => a(b(c)(d))
export const B1 = f => g => a => b => f(g(a)(b))

// composition-combinator(1° <- 3°)
// bunting-combinator
// export const B2 = a => b => c => d => e => a(b(c)(d)(e))
export const B2 = f => g => a => b => c => f(g(a)(b)(c))

// composition-combinator(1° <- 1° <- 1°)
// becard-combinator
// export const B3 = a => b => c => d => a(b(c(d)))
export const B3 = f => g => h => a => f(g(h(a)))
