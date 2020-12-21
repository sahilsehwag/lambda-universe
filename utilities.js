
// js utility to convert church-boolean to js-boolean
export const boolean = V(true)(false)

// js utility to convert church-numerals to js-numbers
export const number = n => n(a => a + 1)(0)

// js utility to convert church-numberals to js-characters using ASCII code
export const character = B(String.fromCharCode)(number)

export const ifElseLazy = bool => x => y => bool(x)(y)()

const printElement = converter => list => {
	console.log(B(converter)(head)(list))
	return tail(list)
}
export const printList = converter => list =>
	ifElseLazy(isNotNil(list)) (() => printList(converter)(printElement(converter)(list))) (() => list)