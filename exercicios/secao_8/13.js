/**
 * Crie uma função que receba um array de elementos e retorne um array somente com os números presentes no
    array recebido como parâmetro
 */

const filtrar_numeros = array => array.filter(e => !isNaN(e))

console.log(filtrar_numeros(['dale', 'oi', 'fala', 'fio']))
