const vende_carro = carro => {
    switch(carro.toLowerCase()){
        case 'hatch':
            console.log("Compra efetuada com sucesso")
            break
        case 'sedan': case 'motocicleta': case 'caminhonete':
            console.log("Tem certeza que nao prefere este modelo?")
            break
        default:
            console.log("Nao trabalhamos com este tipo de automovel aqui")
            break
    }
}

vende_carro("caminhao")