/**
 * Desenvolva uma função que recebe um caractere e uma string como parâmetros e retorne a quantidade de
    vezes que o caractere se repete na string. A função deverá ser case-sensitive, ou seja, irá diferenciar
    maiúsculas de minúsculas.
 */

function contar_caractere(char, str){
    let chars = str.split('')
    let qtd = 0

    chars.forEach(c => {
        if(c === char){
            qtd++
        }
    });

    return qtd
}

console.log(contar_caractere("o", "Borogodo"))
