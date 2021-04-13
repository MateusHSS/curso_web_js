const criarProduto = (nome = 'Prod', preco = 0.0) => {
    return {
        nome,
        preco
    }
}

console.log(criarProduto('Celular', 10.5))