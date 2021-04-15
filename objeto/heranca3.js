function meu_objeto(){}

const obj1 = new meu_objeto
const obj2 = new meu_objeto

console.log(meu_objeto.prototype)

meu_objeto.prototype.nome = "anonimo"
meu_objeto.prototype.falar = function(){
    console.log(`Bom dia, meu nome eh ${this.nome}`)
}

obj1.falar()

obj2.nome = "rafael"
obj2.falar()

const obj3 = {}
obj3.__proto__ = meu_objeto.prototype
obj3.nome = 'Obj3'
obj3.falar()