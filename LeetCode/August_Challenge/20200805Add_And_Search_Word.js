// Design a data structure that supports the following two operations:

// void addWord(word)
// bool search(word)

// search(word) can search a literal word or a regular expression string 
// containing only letters a-z or .. A . means it can represent any one letter.

/**
 * Initialize your data structure here.
 */

var TrieNode = function() {
    this.next = {};
    this.isEnd = false;
};

var WordDictionary = function() {
    this.root = new TrieNode();
};

/**
 * Adds a word into the data structure. 
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function(word) {
    if(!word) return;

    let node = this.root;
    for(let i = 0; i < word.length; ++i) {
    	if(!node.next[word[i]]) {
    		node.next[word[i]] = new TrieNode();
    	}
    	node = node.next[word[i]];
    }
    node.isEnd = true;
};

/**
 * Returns if the word is in the data structure. A word could contain the dot character '.' to represent any one letter. 
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function(word) {
	if(!word.length) return false;

	return this.dfs(this.root, word);
};

WordDictionary.prototype.dfs = function(root, word) {
	const length = word.length;
	let node = root;
	for(let i = 0; i < length; ++i) {
		const ch = word[i];
		if(ch === '.') {
			const keys = Reflect.ownKeys(node.next);
			for(const key of keys) {
				const found = this.dfs(node.next[key], word.slice(i+1));
				if(found) return true;
			}
			return false;
		}
		if (!node.next[ch]) {
			return false;
		}
		node = node.next[ch];
	}
	return node.isEnd;
};


// addWord("bad")
// addWord("dad")
// addWord("mad")
// search("pad") -> false
// search("bad") -> true
// search(".ad") -> true
// search("b..") -> true
















