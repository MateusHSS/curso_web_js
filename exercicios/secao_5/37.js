function pa(n, a1, r){
    let soma = 0

    for (let i = 0; i < n; i++) {
        console.log(a1)
        a1 += r
        soma += a1
    }

    console.log(`Soma = ${soma}`)

}

pa(10, 5, 2)