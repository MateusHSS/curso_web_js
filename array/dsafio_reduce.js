const alunos = [
    { nome: 'Joao', nota: 7.3, bolsista: false},
    { nome: 'Maria', nota: 9.2, bolsista: false},
    { nome: 'Pedro', nota: 9.8, bolsista: false},
    { nome: 'Ana', nota: 8.7, bolsista: true},
]

function todos_bolsistas(status, atual) {    
    if(!atual || !status){
        return false
    }

    return true
}

function algum_bolsista(status, atual) {
    if(status || atual){
        return true
    }

    return false
}

console.log(alunos.map(a => a.bolsista).reduce(todos_bolsistas))
console.log(alunos.map(a => a.bolsista).reduce(algum_bolsista))