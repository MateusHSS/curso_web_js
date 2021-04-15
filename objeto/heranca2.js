const pai = { nome: 'Pedro', cor_cabelo: 'preto'}

//cria a filha com o prototipo pai
const filha1 = Object.create(pai)
filha1.nome = 'Ana'

console.log(filha1.cor_cabelo)

const filha2 = Object.create(pai, {
    nome: { value: 'Bia', writable: false, enumerable: true }
})

console.log(filha2.nome)

console.log(`${filha2.nome} tem cabelo ${filha2.cor_cabelo}`)

//Object.keys nao lista os atributos dos objetos pai
console.log(Object.keys(filha1))
console.log(Object.keys(filha2))

//porem com for in, esses atributos sao listados
for(let key in filha1){
    //hasOwnProperty verifica se o atributo eh daquele objeto, ou de uma heranca
    filha1.hasOwnProperty(key) ? console.log(key) : console.log(`Por henranca: ${key}`)
}
