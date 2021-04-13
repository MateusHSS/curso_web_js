class Aluno {
    nota
}

function verifica_aprovacao(nota) {
    let nota_arredondada = Math.round(nota/5)*5
    if( nota_arredondada >= 40){
        console.log(`Aprovado com ${nota_arredondada}`)
    }else{
        console.log(`Reprovado com ${nota}`)
    }
}

verifica_aprovacao(38)