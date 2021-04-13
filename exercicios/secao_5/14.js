function vende_frutas(fruta){
    switch (fruta.toLowerCase()){
        case 'maca':
            console.log("Nao vendemos essa fruta aqui")
            break
        case 'kiwi':
            console.log("Estamos com escassez de kiwis")
            break
        case 'melancia':
            console.log("Aqui esta, sao 3 reais o quilo")
            break
        default:
            console.log("Fruta nao encontrada")
            break
    }
}

vende_frutas("uvas")