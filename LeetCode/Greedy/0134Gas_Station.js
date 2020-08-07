// There are N gas stations along a circular route, 
// where the amount of gas at station i is gas[i].

// You have a car with an unlimited gas tank and it costs cost[i] 
// of gas to travel from station i to its next station (i+1). 
// You begin the journey with an empty tank at one of the gas stations.

// Return the starting gas station's index if you can travel around 
// the circuit once in the clockwise direction, otherwise return -1.

// Note:
// If there exists a solution, it is guaranteed to be unique.
// Both input arrays are non-empty and have the same length.
// Each element in the input arrays is a non-negative integer.

// gas  = [1,2,3,4,5]
// cost = [3,4,5,1,2]
// Output: 3

// gas  = [2,3,4]
// cost = [3,4,3]
// Output: -1

function canCompleteCircuit(gas, cost) {
	let total = 0;
	let pos = 0;
	let startToPosTank = 0;
	for(let i = 0; i < gas.length; i++){
		total += gas[i] - cost[i];
		startToPosTank += gas[i] - cost[i];
		if(startToPosTank < 0 ){
			pos = i + 1;
			startToPosTank = 0;
		}
	}
	return total >= 0 ? pos : -1;
}

console.log(canCompleteCircuit([1,2,3,4,5], [3,4,5,1,2]));
console.log(canCompleteCircuit([2,3,4], [3,4,3]));
console.log(canCompleteCircuit([5,1,2,3,4], [4,4,1,5,1]));





