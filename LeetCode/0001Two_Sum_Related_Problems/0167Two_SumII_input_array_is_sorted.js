function twoSum(number, target) {
	p1 = 0;
	p2 = number.length - 1;
	while (p1 !== p2) {
		if (number[p1] + number[p2] > target) {
			p2--;
		} else if (number[p1] + number[p2] < target) {
			p1++;
		} else {
			return [p1+1, p2+1];
		}
	}
	return -1;
}

console.log(twoSum([2,7,11,15], 9));
