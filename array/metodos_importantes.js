const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
console.log(pilotos)

pilotos.pop() //remove o ultimo elemento do array
console.log(pilotos)

pilotos.push('Verstappen') //adiciona um elemento ao fim do array
console.log(pilotos)

pilotos.shift() //remove o primeiro elemento do array
console.log(pilotos)

pilotos.unshift('Hamilton') //adiciona um elemento ao inicio do array
console.log(pilotos)

pilotos.splice(2, 0, 'Bottas', 'Massa') //adiciona ou remove elementos a partir de um indice
console.log(pilotos)

pilotos.splice(3, 1) // remove
console.log(pilotos)

const alguns_pilotos1 = pilotos.splice(2) //retorna um novo array a partir do indice informado
console.log(alguns_pilotos1)

const alguns_pilotos2 = pilotos.splice(1, 4) //retorna um novo array de acordo com o intervalo dos indices informados
console.log(alguns_pilotos2)
