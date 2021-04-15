// forma literal
const obj = {}

//object em js
const obj2 = new Object

//funcoes construtoras
function Produto(nome, preco, desc){
    this.nome = nome
    this.getPrecoComDesconto = () =>{
        return preco * (1 - desc)
    }
}

const p1 = new Produto('Caneta', 7.99, 0.15)
const p2 = new Produto('Notebook', 2988.99, 0.25)

//funcao factory
function criar_funcionario(nome, salario_base, faltas){
    return {
        nome,
        salario_base,
        faltas,
        getSalario() {
            return (salario_base / 30) * (30 - faltas)
        }
    }
}

const f1 = criar_funcionario("Joao", 1500, 3)

//Object.create

const filha = Object.create(null)
filha.nome = "Ana"

//funcao que retorna um object
const fromJSON = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJSON)