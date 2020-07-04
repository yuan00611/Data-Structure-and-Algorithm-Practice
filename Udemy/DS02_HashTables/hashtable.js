let user = {
	age: 54,
	name: 'Kylie',
	magic: true,
	scream: function(){
		console.log('aaaaa');
	}
}

//look up
user.age //O(1)

//insert 
user.spell = 'abea kafjief'; //O(1)

/*//////////////////////
build HashTable
//////////////////////*/

class HashTable {
	constructor(size){
		this.data = new Array(size);
	}
	
	//_是暗示private的狀態
	_hash(key) {
		let hash = 0;
		for (let i = 0; i < key.length; i++){
			hash = (hash + key.charCodeAt(i) * i) % this.data.length;
		}
		return hash;
	}

	set(key, value){
		let address = this._hash(key);
		if (!this.data[address]) {
			this.data[address] = [];
		}
		this.data[address].push([key, value]);
		return this.data;
	}

	get(key){
		let address = this._hash(key);
		const currentBucket = this.data[address];
		if (currentBucket) {
			for(let i = 0; i < currentBucket.length; i++){
				if (currentBucket[i][0] === key) {
					return currentBucket[i][1];
				}
			}
		}
		return undefined;
	}
	keys(){
		if (!this.data.length) {
			return undefined;
		}
		const keysArray = [];
		for(let i = 0; i < this.data.length; i++){
			if (this.data[i] && this.data[i].length) {
				if(this.data.length > 1){
					for(let j = 0; j < this.data[i].length; j++){
						keysArray.push(this.data[i][j][0]);
					}
				} else {
					keysArray.push(this.data[i][0]);
				}
				
			}
		}
		return keysArray;
	}
}

const myHashTable = new HashTable(50);
myHashTable.set('grapes', 10000);
myHashTable.set('apples', 546);
myHashTable.set('oranges', 8657);
console.log(myHashTable.get('grapes'));
console.log(myHashTable.keys());








