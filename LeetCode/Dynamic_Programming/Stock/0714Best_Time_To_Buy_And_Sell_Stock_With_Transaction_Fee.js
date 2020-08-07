// Your are given an array of integers prices, 
// for which the i-th element is the price of a given stock on day i; 
// 	and a non-negative integer fee representing a transaction fee.

// You may complete as many transactions as you like, 
// but you need to pay the transaction fee for each transaction. 
// You may not buy more than 1 share of a stock at a time 
// (ie. you must sell the stock share before you buy again.)

// Return the maximum profit you can make.

// Input: prices = [1, 3, 2, 8, 4, 9], fee = 2
// Output: 8
// Explanation: The maximum profit can be achieved by:
// Buying at prices[0] = 1
// Selling at prices[3] = 8
// Buying at prices[4] = 4
// Selling at prices[5] = 9
// The total profit is ((8 - 1) - 2) + ((9 - 4) - 2) = 8.

// Note:

// 0 < prices.length <= 50000.
// 0 < prices[i] < 50000.
// 0 <= fee < 50000.

//https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-with-transaction-fee/solution/chu-xue-dong-tai-gui-hua-zheng-li-liao-yi-xia-ji-g/
var maxProfit = function(prices, fee) {
    let dp=new Array(prices.length);//i行，对应i天
    for(let i = 0;i < dp.length; i++){
        dp[i] = new Array(2);    //每行有2列，对应2种持股状态
    }
    dp[0][0]=0;
    dp[0][1]=0-fee-prices[0];
    for(let i=1;i<prices.length;i++){
        dp[i][0]=Math.max(dp[i-1][0],dp[i-1][1]+prices[i]);
        dp[i][1]=Math.max(dp[i-1][1],dp[i-1][0]-prices[i]-fee);
    }
    return  dp[prices.length-1][0]
};

console.log(maxProfit([7,1,5,3,6,4],2));
console.log(maxProfit([1,2,3,4,5],2));

console.log(maxProfit([1, 3, 2, 8, 4, 9], 2));








