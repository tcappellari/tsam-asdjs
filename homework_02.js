/*
Esercizio 1
Dato un array di interi, 
restituire la loro somma fino a che non viene ritrovato un valore negativo
*/

function sumuntilnegF(myarray) {
    var tot = 0;
    myarray.every( x => { 
        if (x > 0) {
            tot += x;
        }
        return x > 0; 
    });
    return tot;
}

function sumuntilnegF2(myarray) {
    var tmparray = [];
    myarray.every( x => { 
        if (x > 0) {
            tmparray.push(x);
        }
        return x > 0; 
    });
    return tmparray.reduce((acc, x) => acc + x, 0);
}

function buildUntil(myarray, check) {
    var tmparray = [];
    myarray.every( x => { 
        if (check(x)) {
            tmparray.push(x);
            return true;
        } else {
            return false;
        }
    });
    return tmparray;
}

function sumuntilnegF3(myarray) {
    return buildUntil(myarray, x => x > 0).reduce((acc, x) => acc + x, 0);
}




// Per Tiziano
function ex_1_I(x) {
    return sumwhileneg(x);
}

function ex_1_R(x) {
    return sumwhilenegR(x);
}

function ex_1_F(x) {
    return sumuntilnegF(x);
}


/*
Esercizio 2
Dato un numero n, restituire la somma dei primi n numeri interi positivi dispari
*/
function range(n) {
    a = [];
    for(var i = 0; i < n; ++i) {
        a[i] = i;
    }
    return a;
}

function sumOddRF(n) {
    return range(n).map(x => 2 * x + 1).reduce((acc, x) => acc + x);
}

// Per Tiziano
function ex_2_I(x) {
    return sumOdd(x);
}

function ex_2_R(x) {
    return sumOddR(x);
}
