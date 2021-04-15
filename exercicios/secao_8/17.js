/**
 * Escreva uma função que receba um array de números e retornará a soma de todos os números desse array
 */

const soma = (total, atual) => total + atual

const somar_numeros = array => array.reduce(soma)

console.log(somar_numeros([15, 15, 15, 15]))