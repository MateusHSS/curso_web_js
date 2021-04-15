const sequencia = {
    _valor : 1, //convencao '_' que informa que o atributo eh "privado"
    get valor(){return this._valor++},
    set valor(valor) {
        if(valor > this._valor){
            this._valor = valor
        }
    }
}

//ao fazer uma busca da variavel sem o '_', o js automaticamente chama a funcao get
console.log(sequencia.valor)

//ao fazer uma atribuicao da variavel sem o '_', o js automaticamente chama a funcao set
sequencia.valor = 1000

console.log(sequencia.valor, sequencia.valor)