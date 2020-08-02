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
	if (prices.length <= 1) {
		return 0;
	}
    let buy = prices[0];
	let sell = prices[1];
	let maxAns = Math.max(0, sell - buy);
	for(let i = 1; i < prices.length; i++){
		buy = Math.min(...prices.slice(0, i));
		sell = Math.max(...prices.slice(i, prices.length));
		maxAns = Math.max(maxAns, sell - buy);
	}
	return maxAns;
}


function maxProfit2(prices) {
	var min = Number.MAX_SAFE_INTEGER; 
    var max = 0;
    for (var i = 0; i < prices.length; i++) {
        min = Math.min(min, prices[i]);
        max = Math.max(max, prices[i] - min);
    }
    return max;
}

prices = [7,1,5,3,6,4];
console.log(maxProfit2(prices));

prices2 = [7,6,4,3,1];
console.log(maxProfit2(prices2));

