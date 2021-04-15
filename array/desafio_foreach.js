Array.prototype.forEach2 = function (f) {
    for (let i = 0; i < this.length; i++) {
        f(this[i], i, this)
    }
}


const aprovados = ['Mateus', 'Rafael', 'Thiago', 'Daniel']
// console.log(typeof aprovados)

aprovados.forEach2((nome, indice) => {
    console.log(nome)
    console.log(indice)
})