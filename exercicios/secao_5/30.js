function maior_menor(array){
    let maior = null
    let menor = null

    for (let i = 0; i < array.length; i++) {
        if(!maior && !menor){
            maior = array[i]
            menor = array[i]

            continue
        }

        if(array[i] > maior){
            maior = array[i]
        }else if(array[i] < menor){
            menor = array[i]
        }
    }

    return {
        maior, 
        menor
    }

}

console.log(maior_menor([1, 4, 10, 38, 2, 0.5]))
