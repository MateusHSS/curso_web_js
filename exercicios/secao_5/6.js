function juros_simples(cap_ini, tx_juros, tempo_apl){
    return cap_ini + (cap_ini * tx_juros * tempo_apl)
}

function juros_compostos(cap_ini, tx_juros, tempo_apl){
    return cap_ini * Math.pow((1 + tx_juros), tempo_apl)
}

console.log(juros_simples(100, 0.1, 5))
console.log(juros_compostos(100, 0.1, 5))