/**
 * Escreva uma função que receba dois parâmetros. O primeiro parâmetro é o elemento que repetirá, enquanto
    que o segundo será o número de vezes que haverá repetição. Um array será retornado.
 */

function repetir(elem, qtd){
    let array = []

    for (let i = 0; i < qtd; i++) {
        array.push(elem)
    }

    return array
}

console.log(repetir(3, 3))
