const modulo_a = require('../../modulo_a')
console.log(modulo_a.ola)

const http = require("http")

http.createServer((req, res) => {
    res.write('Bom dia!')
    res.end()
}).listen(3333)