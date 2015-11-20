function Stack(){
    this.myarray = []
}

Stack.prototype.push = function(e){ this.myarray.push(e); }
Stack.prototype.pop = function(){ return this.myarray.pop(); }
Stack.prototype.peek = function(){ return this.myarray[this.myarray.length-1]; }
Stack.prototype.isEmpty = function() { return this.myarray.length == 0; }

Stack.prototype.popall = function(callback) {
    while (!this.isEmpty()){
        callback(this.pop());
    }
}

function dec2bin(x){

    function rec(remStack, n) {
        if (n == 0) {
            return remStack;
        } else {
            remStack.push(Math.floor(n % 2));
            return rec(remStack, Math.floor(n / 2));
        }
    }

    var binaryString = '';
    rec(new Stack(), x).popAll(function(e) { binaryString += e.toString(); } )
    return binaryString;
}


