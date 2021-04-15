/**
 * Elabore uma função que receba um array de números e retorne um array que tenha todos os números que são
    pares e que também tenham índices pares
 */

const receber_somente_pares = array => array.filter((elem, i) => !(elem % 2) && !(i % 2))

console.log(receber_somente_pares([10, 70, 22, 43]))
