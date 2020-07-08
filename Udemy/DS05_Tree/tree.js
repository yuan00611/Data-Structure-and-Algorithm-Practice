
/*//////////////////////
build Tree
//////////////////////*/

class Node {
	constructor(value){
		this.left = null;
		this.right = null;
		this.value = value;
	}	
}

class BinarySearchTree {
	constructor(){
		this.root = null;
	}
	insert(value){
		const newNode = new Node(value);
		if (this.root === null) {
			this.root = newNode;
			return this;
		} else {
			let currentNode = this.root;
			while (true) {
				if (value < currentNode.value) {
					//Left
					if (!currentNode.left) {
						currentNode.left = newNode;
						return this;
					}
					currentNode = currentNode.left;
				} else {
					//Right
					if (!currentNode.right) {
						currentNode.right = newNode;
						return this;
					}
					currentNode = currentNode.right;
				}
			}
		}
	}
	lookup(value){
		if (!this.root) {
			return false;
		}
		let currentNode = this.root;
		while (currentNode) {
			if (value < currentNode.value) {
				currentNode = currentNode.left;
			} else if ( value > currentNode.value) {
				currentNode = currentNode.right;
			} else if (currentNode.value === value) {
				return currentNode;
			}
		}
		return false;
	}
	remove(value){
		if (!this.root) {
			return false;
		}
		let currentNode = this.root;
		let parentNode = null;
		while (currentNode) {
			if (value < currentNode.value) {
				parentNode = currentNode;
				currentNode = currentNode.left;
			}else if (value > currentNode.value) {
				parentNode = currentNode;
				currentNode = currentNode.right;
			}else if (value === currentNode.value) {

				//Option1: No right child
				if (currentNode.right === null) {
					if (parentNode === null) {
						this.root = currentNode.left;
					}else {
						if (currentNode.value < parentNode.value) {
							parentNode.left = currentNode.left;
						} else if (currentNode.value > parentNode.value) {
							parentNode.right = currentNode.left;
						}
					}

				//Option2: Right child which doesn't have a left child
				}else if (currentNode.right.left === null) {
					if (parentNode === null) {
						this.root = currentNode.left;
					}else {
						currentNode.right.left = currentNode.left;

						if (currentNode.value < parentNode.value) {
							parentNode.left = currentNode.right;
						}else if (currentNode.value > parentNode.value) {
							parentNode.right = currentNode.right;
						}
					}
				//Option3: Right child that has a left child
				}else {
					//find the Right child's left most child
					let leftmost = currentNode.right.left;
					let leftmostParent = currentNode.right;
					while (leftmost.left !== null) {
						leftmostParent = leftmost;
						leftmost = leftmost.left;
					}
					//Parent's left subtree is now leftmost's right subtree
					leftmostParent.left = leftmost.right;
					leftmost.left = currentNode.left;
					leftmost.right = currentNode.right;

					if (parentNode === null) {
						this.root = leftmost
					} else {
						if (currentNode.value < parentNode.value) {
							parentNode.left = leftmost;
						} else if (currentNode.value > parentNode.value) {
							parentNode.right = leftmost;
						}
					}
				}
			return true;
			}
		}
	}
}

function traverse(node){
	const tree = { value: node.value };
	tree.left = node.left === null ? null :
	traverse(node.left);
	tree.right = node.right === null ? null : 
	traverse(node.right);
	return tree;
}

const tree = new BinarySearchTree();
console.log(tree.insert(9));
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
tree.remove(20);
console.log(JSON.stringify(traverse(tree.root)));
console.log(tree.lookup(90));




