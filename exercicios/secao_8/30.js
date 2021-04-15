/**
 * Elabore uma função que recebe um objeto com estudantes e suas notas. As notas de cada estudante estarão
    num array, conforme exemplo abaixo. Você deverá calcular a média da nota de cada aluno e retornar um objeto
    com os atributos nome e media, que indica o aluno que teve o melhor desempenho nas notas.
 */

const soma = (total, atual) => total + atual
const calcula_media = notas => notas.reduce(soma) / notas.length

function melhor_estudante(obj){
    const array = Object.entries(obj)

    let medias =  array.map(e => {
        return {nome: e[0], media: calcula_media(e[1])}
    });

    return medias.sort((a, b) => b.media - a.media)[0]

}

console.log(melhor_estudante({
    Joao: [8, 7.6, 8.9, 6], // média 7.625
    Mariana: [9, 6.6, 7.9, 8], // média 7.875
    Carla: [7, 7, 8, 9] // média 7.75
}))
