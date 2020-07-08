const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function selectionSort(arr){
	for(let i = 0; i < arr.length; i++){
		let smallest = arr[i];
		let swapNum = i;
		for(let j = i + 1; j < arr.length; j++){
			if (arr[j] < smallest) {
				smallest = arr[j];
				swapNum = j;
			}
		}
		let temp = arr[i];
		arr[i] = smallest;
		arr[swapNum] = temp;
	}
	return arr;
}

console.log(selectionSort(numbers));