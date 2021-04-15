/**
 * Crie uma função que recebe um array de números e retorna o segundo maior número presente nesse array.
 */

function segundo_maior(nums){
    return nums.sort((a, b) => b - a)[1]
}

console.log(segundo_maior([2, 3, 5, 10, 2, 1, 145]))
