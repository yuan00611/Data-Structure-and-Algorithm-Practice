// Suppose Andy and Doris want to choose a restaurant for dinner, 
// and they both have a list of favorite restaurants represented by strings.

// You need to help them find out their common interest with 
// the least list index sum. If there is a choice tie between answers, 
// output all of them with no order requirement. 
// You could assume there always exists an answer.

// Input:
// ["Shogun", "Tapioca Express", "Burger King", "KFC"]
// ["Piatti", "The Grill at Torrey Pines", "Hungry Hunter Steakhouse", "Shogun"]
// Output: ["Shogun"]
// Explanation: The only restaurant they both like is "Shogun".

// Input:
// ["Shogun", "Tapioca Express", "Burger King", "KFC"]
// ["KFC", "Shogun", "Burger King"]
// Output: ["Shogun"]
// Explanation: The restaurant they both like and have the least index sum is "Shogun" with index sum 1 (0+1).

// Note:
// The length of both lists will be in the range of [1, 1000].
// The length of strings in both lists will be in the range of [1, 30].
// The index is starting from 0 to the list length minus 1.
// No duplicates in both lists.


function findRestaurant(list1, list2) {
	
	let dict = {};
	for(let i = 0; i < list1.length; i++){
		if (!dict.hasOwnProperty(list1[i])) {
			dict[list1[i]] = i;
		}
	}
	let index_sum = {};
	let min_num = Number.MAX_SAFE_INTEGER;
	for(let j = 0; j < list2.length; j++){
		if (dict.hasOwnProperty(list2[j])) {
			index_sum[list2[j]] = dict[list2[j]] + j;
			if (dict[list2[j]] + j < min_num) {
				min_num = dict[list2[j]] + j;
			}
		}
	}

	let ans = [];
	for(let word in index_sum){
		if (index_sum[word] === min_num) {
			ans.push(word);
		}
	}
	return ans;
}

let l1 = ["Shogun", "Tapioca Express", "Burger King", "KFC"];
let l2 = ["KFC", "Shogun", "Burger King"];
console.log(findRestaurant(l1, l2));


let l3 = ["Shogun", "Tapioca Express", "Burger King", "KFC"]
let l4 = ["Piatti", "The Grill at Torrey Pines", "Hungry Hunter Steakhouse", "Shogun"]
console.log(findRestaurant(l3, l4));

let l5 = ["Shogun","Tapioca Express","Burger King","KFC"];
let l6 = ["KFC","Burger King","Tapioca Express","Shogun"];
console.log(findRestaurant(l5, l6));







