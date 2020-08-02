//Say you have an array for which the ith element is the price
// of a given stock on day i.

//If you were only permitted to complete at most one transaction 
//(i.e., buy one and sell one share of the stock), 
//design an algorithm to find the maximum profit.

//Note that you cannot sell a stock before you buy one.

//Input: [7,1,5,3,6,4]
//Output: 5
//Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), 
//profit = 6-1 = 5.

//Input: [7,6,4,3,1]
//Output: 0

function maxProfit(prices) {
	let profit = 0;
	let min = prices[0];
	for(let i = 1; i < prices.length; i++){
		min = Math.min(prices[i], min);
		profit = Math.max(profit, prices[i] - min); 
	}
	return profit;
}

console.log(maxProfit([7,1,5,3,6,4]));
console.log(maxProfit([7,6,4,3,1]));




