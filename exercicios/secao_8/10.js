/**
 * Elabore uma função que recebe um número como parâmetro e retorne uma string com o símbolo "+" na
    quantidade especificada no parâmetro.
 */

function simbolo_mais(num){
    let retorno = ""

    for (let i = 0; i < num; i++) {
        retorno += '+'
    }

    return retorno
}

console.log(simbolo_mais(10))