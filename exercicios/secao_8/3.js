/**
 * Desenvolva uma função que recebe dois parâmetros, um é a quantidade de horas trabalhadas por um
    funcionário num mês, e o quanto ele recebe por hora. O retorno da função deve ser a string "Salário igual a R$
    X", em que X é o quanto o funcionário ganhou no mês.
 */

const format_dinheiro = val => val.toFixed(2).replace('.', ',')

function calcular_salario(horas, val_h){
    return `Salario igual a R$${format_dinheiro(horas * val_h)}`
}

console.log(calcular_salario(150, 40.5))