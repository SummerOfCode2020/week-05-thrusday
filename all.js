/**
 * Returns `true` if all items are true
 * Returns `false` if any item is false
 */
function all(items) {
	const allAreTrue = true
	// Loop through every item in the array
	// If the item evaluates to false, return false
	for (let arrayPosition = 0; arrayPosition < items.length; arrayPosition = arrayPosition + 1) {
		const item = items[arrayPosition]
		if (!item) {
			return false
		}
	}
	// If the loop ends, return true
	return allAreTrue
}

const expectToBeTrue = all([true, true, true])
const expectToBeFalse = all([true, true, true, false])

console.log({ expectToBeTrue, expectToBeFalse})