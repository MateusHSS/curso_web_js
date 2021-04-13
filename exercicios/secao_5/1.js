function calcula(n1, n2){
    let soma = n1 + n2
    let subtr = n1 - n2
    let mult = n1 * n2
    let div = (n1 / n2).toFixed(2)

    console.log(`${n1} + ${n2} = ${soma}`)
    console.log(`${n1} - ${n2} = ${subtr}`)
    console.log(`${n1} * ${n2} = ${mult}`)
    console.log(`${n1} / ${n2} = ${div}`)
}

calcula(5, 3)