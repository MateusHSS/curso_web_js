/**
 * Crie uma função que recebe um número (de 1 a 12) e retorne o mês correspondente como uma string. Por
    exemplo, se a entrada for 2, a função deverá retornar "fevereiro", pois este é o 2° mês
 */

const meses = {
    1: 'janeiro',
    2: 'fevereiro',
    3: 'marco',
    4: 'abril',
    5: 'maio',
    6: 'junho',
    7: 'julho',
    8: 'agosto',
    9: 'setembro',
    10: 'outubro',
    11: 'novembro',
    12: 'dezembro'
}

function nome_do_mes(mes){
    return meses[mes]
}

console.log(nome_do_mes(7))