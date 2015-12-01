/* Ricorsione -  e la ricorsiva della somma dei quadrati degli elementi pari */

// O(myA.length)
function ex_1a(myA) {
    if(myA.length == 0) {
        return 10;
    } else {
        return 5 * myA[0] + ex_1a(myA.slice(1));
    }
}

// O(myA.length)
function ex_1b(myA) {
   if (myA.length == 0) {
        return 0;
   } else {
    var x = myA[0];
    if (x % 2 == 0) {
        return x * x + ex_1b(myA.slice(1));
    } else {
        return ex_1b(myA.slice(1));
    }
   }
}

/*somma quadrati degli elementi pari - FUNZIONALE */
// O(myA.length)
function ex_2(myA){
    return myA.filter(x => x % 2 == 0) // O(myA.length)
              .map(a => a * a)         // O(myA.length)
              .reduce((acc, x) => acc + x, 0); // O(myA.length)
}

/* esercizio sullo stack */

function Stack() {
    this.myarray = []
}

Stack.prototype.push = function(e) { this.myarray.push(e); }
Stack.prototype.pop = function() { return this.myarray.pop(); }
Stack.prototype.peek = function() { return this.myarray[this.myarray.length - 1]; }
Stack.prototype.isEmpty = function() { return this.myarray.length == 0; }

// O(myA.length)
function ex_3(myA) {
    var oddStack = new Stack();
    var evenStack = new Stack();
    
    myA.filter(x => x % 2 == 0) // O(myA.length)
       .forEach(x => evenStack.push(x)) // O(myA.length)
    myA.filter(x => x % 2 != 0) // O(myA.length)
       .forEach(x => oddStack.push(x)) // O(myA.length)
    
    var resultStack = new Stack();   
    // O(myA.length)
    while (!evenStack.isEmpty() && !oddStack.isEmpty()) {
        resultStack.push(evenStack.pop() * oddStack.pop());
    }
    
    var sum = 0;
    // O(myA.length)
    while(!resultStack.isEmpty()) {
        sum += resultStack.pop();
    }
    return sum;
}

/*implementare linked list */

function LinkedList() {

    var Node = function(item, succ, prec){

        this.item = item;
        this.succ = succ;
        this.prec = prec;
    };

    this.first = null;
    this.last = null;
}

// O(min(index, LinkedList.length))
LinkedList.prototype.getNode = function(index) {
    function nodeR(node, i) {
        if (index == i || node == null)
            return node;
        else
            return nodeR(node.succ, i + 1);
    }

    return nodeR(this.first, 0);
}

LinkedList.prototype.get = function(index) {
    var node = this.getNode(index);
    if(node == null) {
        return null
    } else {
        return node.item
    }
}

// O(min(index, LinkedList.length))
LinkedList.prototype.add = function(index, e) {
    // O(min(index, LinkedList.length))
    var node = this.getNode(index);

    // O(1)
    if (this.first == null) {
        var newNode = new Node(e, null, null);
        this.first = newNode;
        this.last = newNode;
        return;
    }

    // O(1)
    if (node == null) {
        var newNode = new Node(e, this.last, null);
        this.last.succ = newNode;
        this.last = newNode;
    } else {

        if (index == 0) {
            var newNode = new Node(e, null, node);
            node.prec = newNode;
            this.first = newNode;

        }    

        if (index != 0) {
            var newNode = new Node(e, node.prec, node);
            node.prec.succ = newNode;
            node.prec = newNode;
        }
    }

}



/* search tree */

function Node(value, leftNode, rightNode) {
    this.item = value;
    this.left = leftNode;
    this.right = rightNode;
}

function BST() {
    this.root = null;
}

// 
BST.prototype.addNode = function(currentNode, e) {
    if (e < currentNode.item) {
        if (currentNode.left == null) {
            currentNode.left = new Node(e, null, null);
        } else {
            this.addNode(currentNode.left, e);
        }
    } else {
        if (currentNode.right == null) {
            currentNode.right = new Node(e, null, null);
        } else {
            this.addNode(currentNode.right, e);
        }
    }
}

// O(BST.length)
BST.prototype.add = function(e) {
    if (this.root == null) {
        this.root = new Node(e, null, null);
    } else {
        this.addNode(this.root, e);
    }

}

BST.prototype.searchNodeR = function(node, e) {
    if (node == null) {
        return null;
    } else {
        if (node.item == e) {
            return node;
        } else {
            if (e > node.item) {
                return this.searchNodeR(node.right, e)
            } else {
                return this.searchNodeR(node.left, e)
            }
        }
    }
}

BST.prototype.searchNode = function(e) {
    return this.searchNodeR(this.root, e);
}

   