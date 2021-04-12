/* 
  * NULL = ausencia de valor
  * undefined = variavel nao inicializada
 */

let valor //nao inicializada
console.log(valor)

valor = null //...ausencia de valor
console.log(valor)
// console.log(valor.toString()) //Erro!

// CUIDADO AO ACESSAR METODOS DE VARIAVEIS QUE PODEM SER NULL OU undefined

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.5
console.log(produto.preco)

produto.preco = undefined // EVITE SEMPRE ATRIBUIR UNDEFINED
console.log(!!produto.preco)
console.log(produto)

produto.preco = null // sem preco
console.log(!!produto.preco)

console.log(produto)