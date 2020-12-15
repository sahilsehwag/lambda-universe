
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
