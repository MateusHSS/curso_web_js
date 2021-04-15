Array.prototype.map2 = function (f){
    let new_array = []
    
    for (let i = 0; i < this.length; i++) {
        new_array.push(f(this[i], i, this))
    }

    return new_array
}

const carrinho = [
    '{"nome" : "Borracha", "preco": 3.45}',
    '{"nome" : "Caderno", "preco": 13.90}',
    '{"nome" : "Kit de lapis", "preco": 41.22}',
    '{"nome" : "Caneta", "preco": 7.50}',
]

const to_object = json => JSON.parse(json)
const get_preco = obj => obj.preco

const result = carrinho.map2(to_object).map2(get_preco)

console.log(result)