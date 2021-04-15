/**
 * Criar uma função que receba um array de números e retorne o menor número desse array
 */

const verifica_menor = function (menor, atual){
    if(atual < menor){
        return atual
    }

    return menor
}

function menor_numero(array){
    let new_array = array.reduce(verifica_menor)

    return new_array
}

console.log(menor_numero([10, -15, 35, 65]))
