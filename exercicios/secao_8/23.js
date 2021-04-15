/**
 * Criar uma função que receba uma string como parâmetro e conte quantas palavras tem nela.
 */

function contar_palavras(str){
    return str.split(" ").length
}

console.log(contar_palavras("Me divirto aprendendo a programar"))
