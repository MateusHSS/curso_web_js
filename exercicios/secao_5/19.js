function calcula_valor(cod, qtd){
    switch(cod){
        case 100:
            console.log(`Total R$${qtd * 3.0}`)
            break
        case 200:
            console.log(`Total R$${qtd * 4.0}`)
            break
        case 300:
            console.log(`Total R$${qtd * 5.5}`)
            break
        case 400:
            console.log(`Total R$${qtd * 7.5}`)
            break
        case 500:
            console.log(`Total R$${qtd * 3.5}`)
            break
        case 600:
            console.log(`Total R$${qtd * 2.8}`)
            break
        default:
            console.log("Produto inexistente")
            break
    }
}

calcula_valor(300, 5)