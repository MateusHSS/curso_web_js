/**
 * Desenvolva uma função que recebe dois números inteiros não negativos (maiores ou iguais a zero) e realize a
    multiplicação deles. Porém, não utilize o operador de mutiplicação.
 */


function multiplicar(n1, n2){
    let result = 0

    if(!(n1 >= 0 && n2 >= 0)){
        return "Informe valores maiores que zero"
    }

    for (let i = 0; i < n2; i++) {
        result += n1
    }

    return result
}

console.log(multiplicar(5, 2))