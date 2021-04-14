function calcula_cedulas(val){

    let cedulas = {
        '100' : 0,
        '50' : 0,
        '10' : 0,
        '5' : 0,
        '1' : 0
    }

    while(val > 0){
        if(parseInt(val / 100) >= 1) {
            cedulas[100]++
            val -= 100;
            continue
        }else if(parseInt(val / 50) >= 1){
            cedulas[50]++
            val -= 50;
            continue
        }else if(parseInt(val / 10) >= 1){
            cedulas[10]++
            val -= 10
            continue
        }else if(parseInt(val / 5) >= 1){
            cedulas[5]++
            val -= 5
            continue
        }else if(parseInt(val / 1) >= 1){
            cedulas[1]++
            val -= 1
            continue
        }
    }

    let cedulas_usadas = Object.entries(cedulas).filter(([key, val]) => val > 0)

    cedulas_usadas.reverse().forEach(([cedula, qtd]) => {
        console.log(`${qtd} nota(s) de R$${cedula}`)
    });

}

calcula_cedulas(20)