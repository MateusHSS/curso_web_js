function ver_crescimento(alt, tx_cresc){
    let c1 = {
        alt: alt[0],
        tx: tx_cresc[0]
    }

    let c2 = {
        alt: alt[1],
        tx: tx_cresc[1]
    }

    if(c1.alt !== c2.alt){
        let c_maior = (c1.alt > c2.alt) ? c1 : c2
        let c_menor = (c1.alt < c2.alt) ? c1 : c2

        if(c_menor.tx > c_maior.tx){
            let cont = 0

            while(c_menor.alt + (c_menor.tx * cont) < c_maior.alt + (c_maior.tx * cont)){
                cont++
            }

            return `A crianca de ${c_menor.alt} cm, ultrapassara a de ${c_maior.alt} cm em ${cont} anos`
        }

        return `A crianca menor nunca ultrapassara a maior`
    }
}

console.log(ver_crescimento([133, 145], [10, 5]))