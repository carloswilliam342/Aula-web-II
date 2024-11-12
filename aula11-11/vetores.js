function dobraVetor(X){
    var D = Array(x.length);
    for (let i = 0; i < X.length; i++){
        doublex[i] = x[i] * 2;
    }
}

function somaVetor(X, dobra){
    let D = dobra(X);
    var soma = Array(X.length);
    for (let i = 0; i<X.length;i++){
        soma[i] = X[i] + D[i]
    }
    return soma
}


