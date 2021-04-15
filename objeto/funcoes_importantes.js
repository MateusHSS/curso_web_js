const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave} : ${valor}`)
});

//ajuda a definir caracteristicas da propriedade
Object.defineProperty(pessoa, 'data_nascimento', {
    enumerable: true,
    writable: false,
    value: '01/01/2019'
})

//nao faz nada, pois o writable = false
pessoa.data_nascimento = '01/01/2017'

const dest = { a: 1}
const o1 = { b: 2}
const o2 = { c: 3, a : 4}

//assign(), 'atribui' os valores dos objetos passados, ao primeiro objeto passado
const obj = Object.assign(dest, o1, o2)

//'trava' o objeto, e nao deixa mexer nos atributos
Object.freeze()

console.log(obj)
