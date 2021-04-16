const fs = require('fs')


const caminho = __dirname + '/arquivo.json'

// sincrono...
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)

//assincrono
fs.readFile(caminho, 'utf-8', (err, cont) => {
    const config = JSON.parse(cont)

    console.log(`${config.db.host}:${config.db.port}`)
})


//arquivos json nao necessitam do readFile
const config = require('./arquivo.json')
console.log(config.db)

fs.readdir(__dirname, (err, arq) => {
    console.log("Conteudo da pasta")
    console.log(arq)
})