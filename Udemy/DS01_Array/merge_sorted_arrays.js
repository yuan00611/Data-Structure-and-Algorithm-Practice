// mergeSortedArrays([0,3,4,31], [4,6,30]);
// [ 0, 3, 4, 4, 6, 30, 31 ]

/*//////////////////////
My Answer
//////////////////////*/

function mergeSortedArrays(arr1, arr2){
	a1 = 0;
	a2 = 0;
	num = 0;
	ans = [];
	for (let i = 0; i < arr1.length + arr2.length; i++){
		if (arr1[a1] >= arr2[a2]) {
			ans.push(arr2[a2]);
			a2++;
			num = arr1[a1];
		}else if (arr1[a1] < arr2[a2]) {
			ans.push(arr1[a1]);
			a1++;
			num = arr2[a2];
		}
	}
	ans.push(num);
	return ans;
}

a = mergeSortedArrays([0,3,4,31], [4,6,30]);
console.log('a', a);

/*//////////////////////
Andrei's Answer
//////////////////////*/


function mergeSortedArrays2(array1, array2){
	const mergedArray = [];
	let array1Item = array1[0];
	let array2Item = array2[0];
	let i = 1;
	let j = 1;

	//Check input
	if (array1.length === 0) {
		return array2;
	}
	if (array2.length === 0) {
		return array1;
	}

	while (array1Item || array2Item) {
		if (!array2Item || array1Item < array2Item) {
			mergedArray.push(array1Item);
			array1Item = array1[i];
			i++;
		} else {
			mergedArray.push(array2Item);
			array2Item = array2[j];
			j++;
		}
	}

	return mergedArray;
}

b = mergeSortedArrays2([0,3,4,31], [4,6,30]);
console.log('b', b);










