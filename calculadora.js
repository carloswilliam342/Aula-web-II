// function soma(a,b){
//     let s = a + b;
//     return s;
// }

// function subtracao(a,b){
//     let s = a - b;
//     return s;
// }

// function divisao(a,b){
//     let d = a / b;
//     return d;
// }

// function multiplicacao(a,b){
//     let m = a * b;
//     return m;
// }

// module.exports = {soma, subtracao, divisao, multiplicacao};

module.exports = {
    soma: (a,b)=>{
        return a + b;
    },
    subtracao: (a,b)=>{
        return a - b;
    },
    divisao: (a,b)=>{
        return a / b;
    },
    multiplicacao: (a,b)=>{
        return a * b;
    }
}