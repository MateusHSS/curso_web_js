const taxa_juros = 0.05
const mes_pagamento = 1 // Janeiro

function calcula_anuidade(mes, valor){
    return (valor * Math.pow((1 + taxa_juros), mes - mes_pagamento)).toFixed(2)
}

console.log(calcula_anuidade(12, 100))