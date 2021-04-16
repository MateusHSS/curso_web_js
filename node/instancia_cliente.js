//'instancia_unica' retorna apenas um objeto
const cont_a = require('./instancia_unica')
const cont_b = require('./instancia_unica')

//'instancia_nova' retorna uma funcao que cria um objeto
const cont_c = require('./instancia_nova')()
const cont_d = require('./instancia_nova')()

cont_a.inc()
cont_a.inc()

console.log(cont_b.valor, cont_a.valor)

cont_c.inc()
cont_c.inc()

console.log(cont_c.valor, cont_d.valor)
