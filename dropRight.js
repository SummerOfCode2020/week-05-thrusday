function dropRight(items, numberOfItemsToDrop) {
	// if the array is shorter than the number do drop, 
	// then we can return an empty array
	if (numberOfItemsToDrop >= items.length) return []
	
	// subtract the number to drop from the number of items
	// this gives us the number we are keeping
	let itemsToKeep = (items.length - numberOfItemsToDrop);
	
	// start at the first item and return as many as we calculated
	return items.slice(0, itemsToKeep)
}

const friends = ['Jim B.', 'Tito', 'Jack D.']
const goodFriends = dropRight(friends, 1)
const bestFriendForever = dropRight(friends, 2)
const noFriendos = dropRight(friends, 3)

console.log( {friends, goodFriends, bestFriendForever, noFriendos })
