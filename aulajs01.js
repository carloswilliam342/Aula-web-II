// var calcular = require('./calculadora');

// var a = calcular.divisao(3,4);
// console.log(a)

function equacao(a, b, operacao){
    let r = a + b * operacao(a,b);
    return r;
}

function acao (a,b){
    return a + (b * b);
}
let x = equacao(5,6, (a,b)=>{
    return a + (b*b);
})

