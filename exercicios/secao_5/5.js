const format_number = val => `R$${val.toFixed(2).toString().replace('.', ',')}`

console.log(format_number(0.30000000000000004))