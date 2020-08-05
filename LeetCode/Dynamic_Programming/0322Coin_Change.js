// You are given coins of different denominations and a total amount of 
// money amount. 
// Write a function to compute the fewest number of coins that 
// you need to make up that amount. 
// If that amount of money cannot be made up by any combination of the coins, 
// return -1.

// Input: coins = [1, 2, 5], amount = 11
// Output: 3 
// Explanation: 11 = 5 + 5 + 1

// Input: coins = [2], amount = 3
// Output: -1

function coinChange(coins, amount) {
	coins = coins.sort((a, b) => a - b);
	let count = 0;
	for(let i = coins.length - 1; i >= 0; i--){
		if(amount / coins[i] >= 1) {
			count += Math.floor(amount / coins[i]);
			amount %= coins[i];
			console.log('count', count);
			console.log('amount', amount);
		}
	}
	if(amount ) return -1;
	return count;
}

console.log(coinChange([1, 2, 5], 11));
console.log(coinChange([2], 3));
console.log(coinChange([2, 5, 10, 1], 27));
console.log(coinChange([186,419,83,408], 6249));
