const url = "http://files.cod3r.com.br/curso-js/funcionarios.json"
const axios = require('axios')



// DESAFIO AULA 132

const filtra_pais = obj => obj.pais === "China"
const filtra_genero = obj => obj.genero === "F"
const menor_salario = (menor, atual) => {
    if(atual.salario < menor.salario){
        return atual
    }
    return menor
}

axios.get(url).then(response => {
    let data = response.data
    console.log(data.filter(filtra_pais).filter(filtra_genero).reduce(menor_salario))
})
