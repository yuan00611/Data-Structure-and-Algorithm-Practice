//Given an array = [2, 5, 1, 2, 3, 5, 1, 2, 4];
//It should return 2

//Given an array = [2, 3, 4, 5];
//It should return undefined

/*//////////////////////
My Answer
//////////////////////*/

function firstRecurringCharacter(array){
	//check error
	if (!array.length) {
		return undefined;
	}

	let checkSet = new Set();
	for (let i = 0; i < array.length; i++){
		if ( !checkSet.has(array[i]) ) {
			checkSet.add(array[i]);
		}else {
			return array[i];
		}
	}
	return undefined;
}

givenArray1 = [2, 5, 1, 2, 3, 5, 1, 2, 4];
console.log(firstRecurringCharacter(givenArray1));

givenArray2 = [2, 1, 1, 2, 3, 5, 1, 2, 4];
console.log(firstRecurringCharacter(givenArray2));

givenArray3 = [2, 3, 4, 5];
console.log(firstRecurringCharacter(givenArray3));

/*//////////////////////
Andrei's Answer
//////////////////////*/
function firstRecurringCharacter2(input){
	let map = {};
	for(let i = 0; i < input.length; i++){
		if(map[input[i]] !== undefined){
			return input[i];
		}else {
			map[input[i]] = i;
		}
	}
	return undefined;
} 


givenArray1 = [2, 5, 1, 2, 3, 5, 1, 2, 4];
console.log(firstRecurringCharacter2(givenArray1));

givenArray2 = [2, 1, 1, 2, 3, 5, 1, 2, 4];
console.log(firstRecurringCharacter2(givenArray2));

givenArray3 = [2, 3, 4, 5];
console.log(firstRecurringCharacter2(givenArray3));
