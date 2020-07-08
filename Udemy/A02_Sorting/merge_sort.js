const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function mergeSort(arr) {
	if (arr.length === 1) {
		return arr;
	}
	//Split Array in into right and left
	let left = arr.slice(0, Math.floor(arr.length / 2));
	let right = arr.slice(Math.floor(arr.length / 2));
	console.log('left', left);
	console.log('right', right);

	return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
	const result = [];
	let leftIndex = 0;
	let rightIndex = 0;
	while (leftIndex < left.length && rightIndex < right.length) {
		if (left[leftIndex] < right[rightIndex]) {
			result.push(left[leftIndex]);
			leftIndex++;
		} else {
			result.push(right[rightIndex]);
			rightIndex++;
		}
	}
	console.log(left, right);
	return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}


console.log(mergeSort(numbers));




