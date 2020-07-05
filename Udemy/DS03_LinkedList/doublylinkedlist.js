class Node{
	constructor(value){
		this.value =  value;
		this.next = null;
		this.prev = null;
	}
}

class DoublyLinkedList {
	constructor(value){
		this.head = {
			value: value,
			next: null,
			prev: null
		}
		this.tail = this.head;
		this.length = 1;
	}
	append(value){
		const newNode = new Node(value);
		newNode.prev = this.tail;
		this.tail.next = newNode;
		this.tail = newNode;
		this.length++;
		return this;
	}
	prepend(value){
		const newNode = new Node(value);
		this.head.prev = newNode;
		newNode.next = this.head;
		this.head = newNode;
		this.length++;
		return this;
	}
	printList(){
		const array = [];
		let currentNode = this.head;
		while (currentNode != null) {
			array.push(currentNode.value);
			currentNode = currentNode.next;
		}
		return array;
	}
	traverseToIndex(index) {
		let counter = 0;
		let currentNode = this.head;
		while (counter !== index) {
			currentNode = currentNode.next;
			counter++;
		}
		return currentNode;
	}
	insert(index, value){
		//check params
		if (index === 0) {
			this.prepend(value);
			return this.printList();
		}
		if (index >= this.length) {
			return this.append(value);
		}

		const insertNode = new Node(value);

		let leaderNode = this.traverseToIndex(index-1);
		let holdingPointer = leaderNode.next;

		insertNode.next = holdingPointer;
		insertNode.prev = leaderNode;
		leaderNode.next = insertNode;
		holdingPointer.prev = insertNode;
		this.length++;
		return this.printList();

	}
	remove(index){
		if (index === 0) {
			this.head = this.head.next;
			return this.printList();
		}
		if (index >= this.length) {
			return console.log('out of range');
		}

		let leaderNode = this.traverseToIndex(index-1);
		let holdingPointer = leaderNode.next.next;
		leaderNode.next = holdingPointer;
		holdingPointer.prev = leaderNode;
		this.length--;
		return this.printList();
	}

}

const myLinkedList = new DoublyLinkedList(10);
console.log(myLinkedList);
myLinkedList.append(5);
console.log(myLinkedList);
myLinkedList.append(16);
console.log(myLinkedList);
myLinkedList.prepend(1);
console.log(myLinkedList);
console.log(myLinkedList.printList())
myLinkedList.insert(2, 99);
console.log(myLinkedList);
console.log(myLinkedList.printList())
myLinkedList.remove(1);
console.log(myLinkedList);
console.log(myLinkedList.printList())
