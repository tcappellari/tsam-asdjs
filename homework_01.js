/*
Esercizio 1
Dato un array di interi, 
restituire la loro somma fino a che non viene ritrovato un valore negativo
*/
function sumwhileneg(myarray) {
    var tot = 0;
    for(i = 0; i < myarray.length; ++i) {
        var x = myarray[i];
        if (x < 0) {
            return tot;
        }
        tot += x; 
    }
}

function sumwhilenegR(myarray) {
    if (myarray.length == 0 || myarray[0] < 0) {
        return 0;
    } else {
        return myarray[0] + sumwhilenegR(myarray.slice(1));
    }
}


// Per Tiziano
function ex_1_I(x) {
    return sumwhileneg(x);
}

function ex_1_R(x) {
    return sumwhilenegR(x);
}


/*
Esercizio 2
Dato un numero n, restituire la somma dei primi n numeri interi positivi dispari
*/
function sumOdd(n) {
    var tot = 0;
    for(i = 0; i < n; ++i) {
        tot += 1 + 2 *i;
    }
    return tot;
}

function sumOddR(n) {
    if (n == 0) {
        return 0;
    } else {
        return 2 * n - 1 + sumOddR(n-1);
    }
}


function sumOddRTI(n, acc) {
    if (n == 0) {
        return acc;
    } else {
        return sumOddR(n-1, 2 * acc - 1);
    }
}

function sumOddRT(n) {
    return sumOddRTI(n, 1)
}


// Per Tiziano
function ex_2_I(x) {
    return sumOdd(x);
}

function ex_2_R(x) {
    return sumOddR(x);
}

/*
Esercizio 3
Dato un array di 10 elementi, calcolarne la media
*/
function avgAll(myarray) {
    var tot = 0;
    for(var i = 0; i < myarray.length; i++) {
        tot += myarray[i];
    }
    return tot / myarray.length;
}

function avgAllRW(myarray) {
    if (myarray.length == 0) {
        return 0;
    } else {
        return myarray[0] + avgAllRW(myarray.slice(1));
    }
}

function avgAllR(myarray) {
    return avgAllRW(myarray) / myarray.length;
}

// Per Tiziano
function ex_3_I(x) {
    return avgAll(x);
}

function ex_3_R(x) {
    return avgAllR(x);
}

/*
Esercizio 4
Dato un intervallo [a, b] con a e b due interi positivi, 
restituire la somma di tutti i numeri
compresi all’interno dell’intervallo, estremi inclusi. 
Nel caso che b fosse minore di a,
calcolare la somma nell’intervallo [b,a]
Esempio:
sumInterval(3, 5) => 12
sumInterval(5, 3) => 12
*/

function sumIntervalW(a, b) {
    var tot = 0;
    for(var i = a; i <= b; i++) {
        tot += i;
    }
    return tot;
}

function sumInterval(a, b) {
    if (a < b){
        return sumIntervalW(a, b);
    } else {
        return sumIntervalW(b, a);
    }
}

function sumIntervalRW(a, b) {
    if (a == b) {
        return a;
    } else {
        return a + sumIntervalRW(a + 1, b);
    }


}

function sumIntervalR(a, b) {
    if (a < b){
        return sumIntervalRW(a, b);
    } else {
        return sumIntervalRW(b, a);
    }
}


// Per Tiziano
function ex_4_I(x, y) {
    return sumInterval(x, y);
}

function ex_4_R(x, y) {
    return sumIntervalR(x, y);
}

function sumAllRT(b) {

    function sumAllRTail(a, acc) {
        if (a.length == 0) {
            return acc;
        }
        else {
            return sumAllRTail(a.slice(1), acc + a[0]);
        }
    }
    return sumAllRTail(b, 0);
}

function sumAllRTail(a, acc) {
    if (a.length == 0) {
        return acc;
    }
    else {
        return sumAllRTail(a.slice(1), acc + a[0]);
    }
}

//

//Esercizio 8
//Dato un array contenente n^2 elementi, 
//scrivere un algoritmo che permetta di inserire tutti gli
//oggetti in un array bidimensionale n x n.
function bidimensionaleI(myarray) {
    var n = Math.sqrt(myarray.length);
    var resarray = []
    var row = []
    for(var i = 0; i < myarray.length; ++i) {
        row[row.length] = myarray[i];
        if (row.length == n) {
            resarray.push(row);
            row = [];
        }
    }
    return resarray;
}

function magic(myarray, matrix) {
    matrix.unshift(myarray);
    return matrix;
}


function bidimensionaleRInternal(myarray, n) {
    if (myarray.length == n) {
        return [myarray];
    } else {
        return magic(myarray.slice(0, n), 
                     bidimensionaleRInternal(myarray.slice(n), n));
    }
}

function bidimensionaleR(myarray) {
    return bidimensionaleRInternal(myarray, Math.sqrt(myarray.length));
}

