// You are playing the following Bulls and Cows game with your friend: 
// You write down a number and ask your friend to guess what the number is. 
// Each time your friend makes a guess, you provide a hint that indicates 
// how many digits in said guess match your secret number exactly 
// in both digit and position (called "bulls") and 
// how many digits match the secret number but locate 
// in the wrong position (called "cows"). 
// Your friend will use successive guesses and 
// hints to eventually derive the secret number.

// Write a function to return a hint according to the secret number 
// and friend's guess, use A to indicate the bulls and B to indicate the cows. 

// Please note that both secret number and friend's guess 
// may contain duplicate digits.

// Input: secret = "1807", guess = "7810"
// Output: "1A3B"

// Input: secret = "1123", guess = "0111"
// Output: "1A1B"

function getHint(secret, guess) {
	let posDict = {};
	let numDict = {};
	for (let i = 0; i < secret.length; i++){
		posDict[i] = secret[i];
		if (!numDict[secret[i]]) {
			numDict[secret[i]] = 1;
		} else {
			numDict[secret[i]]++;
		}
	}
	let countA = 0;
	let countB = 0;
	for(let j = 0; j < guess.length; j++){
		if (posDict[j] === guess[j]) {
			countA++;
		}
		if (numDict.hasOwnProperty(guess[j]) && numDict[guess[j]] > 0) {
			countB++;
			numDict[guess[j]]--;
		}
	}
	countB -= countA;
	return countA + 'A' + countB + 'B';
}

console.log(getHint("1807", "7810"));
console.log(getHint("1123", "0111"));





