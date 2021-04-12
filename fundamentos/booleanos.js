let active = true
console.log(active)

active = false
console.log(active)

active = 1
console.log(!!active)

console.log("Verdadeiros:")
console.log(!!3) //qualquer valor inteiro eh verdadeiro (exceto o 0)
console.log(!!-1)
console.log(!!' ') //strings com qualquer caractere, incluindo espacos
console.log(!!'texto')
console.log(!![]) //arrays vazios
console.log(!!{}) //objetos
console.log(!!Infinity)
console.log(!!(active = true)) //atribuicoes que atribuem valores true

console.log("Falsos:")
console.log(!!0)
console.log(!!'') //strings vazias
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(active = false)) //atribuicoes que atribuem valores false

console.log("Pra finalizar:")
console.log(!!('' || null || 0 || ' '))

let nome = 'Mateus'
console.log(nome || 'Desconhecido')
