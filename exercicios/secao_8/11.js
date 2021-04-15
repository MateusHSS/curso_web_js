/**
 * Crie uma função que receba uma array e retorne o primeiro e o último elemento desse array como um novo
    array:
 */


function primeiro_e_ultimo_elementos(array){
    let retorno = []

    retorno.push(array[0]) //para o caso de um array ja preenchido, usaria 'unshift'
    retorno.push(array[array.length - 1])

    return retorno
}

console.log(primeiro_e_ultimo_elementos(['3', 4, 5, 'Dale', 3, "Opaaaa"]))