const porta = 3333

const express = require('express')
const body_parser = require("body-parser")
const app = express()
app.use(express.json())
const banco_de_dados = require('./banco_de_dados')

// app.get('/produtos', (req, res, next) => {
//     console.log("middleware 1")
//     next()
// })

app.get('/produtos', (req, res) => {
    res.send(banco_de_dados.get_produtos())
})

app.get('/produtos/:id', (req, res) => {
    res.send(banco_de_dados.get_produto(req.params.id))
})

app.post('/produtos', (req, res) => {
    const produto = banco_de_dados.salvar_produto({
        name: req.body.name,
        preco: req.body.preco
    })

    res.send(produto)
})

app.put('/produtos/:id', (req, res) => {
    const produto = banco_de_dados.salvar_produto({
        id: req.params.id,
        nome: req.body.name,
        preco: req.body.preco
    })

    res.send(produto)
})

app.delete('/produtos/:id', (req, res) => {
    banco_de_dados.delete_produto(req.params.id)

    res.send(`produto ${req.params.id} excluido`)
})

app.listen(porta, () => {
    console.log(`Servidor rodando na porta ${porta}.`)
})
