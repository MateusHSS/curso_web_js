const carrinho = [
    '{"nome" : "Borracha", "preco": 3.45}',
    '{"nome" : "Caderno", "preco": 13.90}',
    '{"nome" : "Kit de lapis", "preco": 41.22}',
    '{"nome" : "Caneta", "preco": 7.50}',
]

const to_object = json => JSON.parse(json)
const get_preco = obj => obj.preco

const result = carrinho.map(to_object).map(get_preco)

console.log(result)