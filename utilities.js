
// js utility to convert church-boolean to js-boolean
export const toJsBool = V(true)(false)

// js utility to convert church-numerals to js-numbers
export const toJsNumber = n => n(a => a + 1)(0)