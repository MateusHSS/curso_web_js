function dia_da_semana (dia){
    switch(dia){
        case 7: case 1:
            console.log("Fim de semana")
            break
        case 2: case 3: case 4: case 5: case 6:
            console.log("Dia util")
            break
        default:
            console.log("Dia invalido")
            break
    }
}

dia_da_semana(4)