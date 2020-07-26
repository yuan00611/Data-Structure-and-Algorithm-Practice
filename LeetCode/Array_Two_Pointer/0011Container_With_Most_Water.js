// Given n non-negative integers a1, a2, ..., an , where each represents 
// a point at coordinate (i, ai). 
// n vertical lines are drawn such that the two endpoints of line i 
// is at (i, ai) and (i, 0). 
// Find two lines, which together with x-axis forms a container, 
// such that the container contains the most water.

// Note: You may not slant the container and n is at least 2.

// Input: [1,8,6,2,5,4,8,3,7]
// Output: 49


function maxArea(height) {
	let p1 = 0;
	let p2 = height.length - 1;
	let max = 0;
	while (p1 !== p2) {
		let area;
		if (height[p1] <= height[p2]) {
			area = height[p1] * (p2 - p1);
			p1++;
		} else {
			area = height[p2] * (p2 - p1);
			p2--;
		}
		if (area > max) {
			max = area;
		}
	}
	return max;
}


console.log(maxArea([1,8,6,2,5,4,8,3,7]));






