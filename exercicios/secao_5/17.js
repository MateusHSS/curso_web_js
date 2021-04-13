const cria_funcionario = (salario, plano) => {
    return {
        salario,
        plano
    }
}

const format_value = val => val.toFixed(2)

const calcula_aumento = func => {
    switch(func.plano.toUpperCase()){
        case 'A':
            func.salario = format_value(func.salario * (1 + 0.1))
            console.log(`Novo salario: ${func.salario}`)
            break
        case 'B':
            func.salario = format_value(func.salario * (1 + 0.15))
            console.log(`Novo salario: ${func.salario}`)
            break
        case 'C':
            func.salario = format_value(func.salario * (1 + 0.2))
            console.log(`Novo salario: ${func.salario}`)
            break
        default:
            console.log("Plano invalido")
            break
    }
}

const f1 = cria_funcionario(1500, 'c')
console.log(f1)

calcula_aumento(f1)

console.log(f1)