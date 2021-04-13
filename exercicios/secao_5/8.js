function verifica_recordes(str){
    let pontuacoes = str.split(' ')
    let qtd_recordes = 0
    let recorde_atual = null
    let pior_jogo = null

    for(i in pontuacoes){
        pontuacoes[i] = parseInt(pontuacoes[i])

        if(i == 0){
            recorde_atual = i
            pior_jogo = i

            continue
        }

        if(pontuacoes[i] > pontuacoes[recorde_atual]){
            qtd_recordes++
            recorde_atual = i
        }else if (pontuacoes[i] < pontuacoes[pior_jogo]){
            pior_jogo = i
        }
    }

    return [qtd_recordes, parseInt(pior_jogo) + 1]
}

console.log(verifica_recordes("10 20 20 8 25 3 0 30 1"))