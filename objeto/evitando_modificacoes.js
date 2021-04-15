//Object.preventExtensions (nao permite adicionar atributos ao objeto)
const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'promocao'
})

console.log('Extensivel:' , Object.isExtensible(produto))

produto.nome = 'Borracha'
//nao podemos adicionar novos atributos
produto.descricao = 'Borracha escolar branca'
delete produto.tag
console.log(produto)


//Object.seal (nao permite adicionar, nem excluir atributos, mas permite altera-los)
const pessoa = {nome: 'Juliana', idade: 35}
Object.seal(pessoa)

console.log('Selado:', Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa)

//Object.freeze selado + nao permite alterar os atributos