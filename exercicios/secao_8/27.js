/**
 * Desenvolva uma função que recebe um objeto como parâmetro e retorne um outro objeto que corresponde ao
    ao objeto recebido como parâmetro, porém com as posições das chaves e valores invertidas, conforme
    exemplo a seguir:
 */

function inverter(obj){
    let array = Object.entries(obj)
    let new_obj = {}

    array.map(e => e.reverse()).forEach(([chave, valor]) => {
        new_obj[chave] = valor
    });

    return new_obj

}

console.log(inverter({ a: 1, b: 2, c: 3}))