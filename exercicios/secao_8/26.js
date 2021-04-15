/**
 * Desenvolva uma função que receba uma string como parâmetro e retorne essa string somente com as
    consoantes, ou seja, sem as vogais.
 */

const vogais = ['A', 'E', 'I', 'O', 'U']

function remover_vogais(str){
    return str.split('').filter(el => !vogais.includes(el.toUpperCase()))
}

console.log(remover_vogais("Mateus"))