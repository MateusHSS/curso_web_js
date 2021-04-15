/**
 * A fim de criar um mecanismo de busca para sua aplicação, você precisa iniciar criando uma função para
    identificar palavras semelhantes.
    Escreva uma função que recebe como primeiro parâmetro uma palavra e, como segundo parâmetro, um array
    de strings. A função deverá filtrar as palavras do array que contêm nelas a string do primeiro parâmetro
 */

function buscar_palavras_semelhantes(str, str_array){
    return str_array.filter(elem => elem.includes(str))
}

console.log(buscar_palavras_semelhantes("pro", ["programação", "mobile", "profissional"]))
