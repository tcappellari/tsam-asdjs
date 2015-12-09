
function initialArray() {
	var seed = 1;
	function random() {
	    var x = Math.sin(seed++) * 10000;
	    return Math.floor(x);
	}

	var a = [];
	for(var i = 0; i < 10000; ++i) {
		a.push(random());
	}
	return a;
}

function howmany(a) {
	if (a.length == 0)
		return 0;
	else
		if (a[0] == 5070) return 1 +  howmany(a.slice(1));
		else return howmany(a.slice(1));
}

function magnitude(a) {
	return Math.sqrt(a.filter(x => x % 2 == 0 && x > 0)
					  .map(x => x * x)
					  .reduce((acc, x) => acc += x, 0));
}

function Stack() {
    this.myarray = [];
}

Stack.prototype.push = function(e) {  
    this.myarray.push(e);
}

Stack.prototype.pop = function() {
    return this.myarray.pop();
}

Stack.prototype.peek = function() {
    return this.myarray[this.myarray.length - 1];
}

Stack.prototype.isEmpty = function() {
    return this.myarray.length == 0;
}


function operation(v1, op, v2) {
	switch (op) {
			case '+':
				return v1 + v2;
				break;
			case '-':
				return v1 - v2;
				break;
			case '*':
				return v1 * v2;
				break;
			case '/':
				return v1 / v2;
				break;
	}

	return 0;
}

function evaluate(expr) {
	var expa = expr.split(" ");
	var s = new Stack();
	var v = new Stack();
	v.pop();

	expa.forEach(x => {
		switch (x) {
			case '+':
			case '-':
			case '*':
			case '/':
			case '(':
				s.push(x);
				break;
			case ')':
				var v1 = v.pop();
				var v2 = v.pop();
				var op = s.pop();
				s.pop();
				v.push(operation(parseInt(v2), op, parseInt(v1)))
				break;
			default:
				v.push(x);

		}
	});
	return v.pop();
}

function Node(i, left, right) {
    this.item = i;
    this.l = left;
    this.r = right;
}

function BST() {
    this.root = null;

}

BST.prototype.addNode = function(currentNode, newNode) {
    if (newNode.item < currentNode.item) {
         if (currentNode.l == null)
           currentNode.l = newNode;
         else
           this.addNode(currentNode.l, newNode);
    } else {
         if (currentNode.r == null)
           currentNode.r = newNode;
         else
           this.addNode(currentNode.r, newNode);
    }
}

BST.prototype.add = function(item) {
    if (this.root == null) {
        this.root = new Node(item, null, null);
    } else {
        this.addNode(this.root, new Node(item, null, null));
    }
}

BST.prototype.maxNode = function(node) {
	if (node.r == null) {
		return node.item;
	}
	else {
		return this.maxNode(node.r);
	}
}

BST.prototype.max = function() {
	return this.maxNode(this.root);
}

function calculateMax() {
	var t = new BST();

	var a = initialArray();
	a.forEach(x => t.add(x));
	return t.max();
}


