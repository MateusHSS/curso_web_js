//short sintax
const a = 1
const b = 2
const c = 3

const obj1 = { a: a, b: b, c: c}
const obj2 = {a, b, c}


//atribuicao por colchetes
const nomeAttr = 'nota'
const valorAttr = 7.89

const obj3 = {}
obj3[nomeAttr] = valorAttr

const obj4 = {[nomeAttr] : valorAttr}

//short sintax function

const obj5 = {
    funcao1: function(){
        //...
    },
    funcao2(){
        //...
    }
}
