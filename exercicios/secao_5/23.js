function trata_notas(notas){
    let maior = Math.max(...notas)
    let retorno = []
    
    notas.forEach(nota => {
        retorno.push({
            valor: nota,
            peso: (maior && nota == maior) ? 4 : 3
        })

        if(nota == maior){
            maior = null
        }
    });

    return retorno
}

const cria_aluno = (cod, notas) => {

    notas = trata_notas(notas)

    return {
        cod,
        notas
    }
}

const a1 = cria_aluno(1, [10, 10, 4, 7])

const calcula_media = aluno => {
    let media = 0

    aluno.notas.forEach(({valor, peso}) => {
        media += valor * peso
    })
    
    let peso = aluno.notas.reduce((total, {peso}) => total + peso, 0)

    media /= peso

    return media
}

console.log(a1)
console.log(`Media do aluno 1: ${calcula_media(a1)}`)