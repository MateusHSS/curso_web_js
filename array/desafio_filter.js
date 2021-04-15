Array.prototype.filter2 = function(f){
    let new_array = []
    for (let i = 0; i < this.length; i++) {
        if(f(this[i], i, this)){
            new_array.push(this[i])
        }
    }

    return new_array
}   

const produtos = [
    { nome: 'Notebook', preco: 4899, fragil: true},
    { nome: 'iPad Pro', preco: 12599, fragil: true},
    { nome: 'Copo de vidro', preco: 10.45, fragil: true},
    { nome: 'Copo de plastico', preco: 8.5, fragil: false}
]

const caro = p => p.preco > 500
const fragil = p => p.fragil

console.log(produtos.filter2(caro).filter(fragil))