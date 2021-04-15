/**
 * Faça uma função que recebe a base e a altura de um triângulo e retorne a área desse triângulo. A precisão
    deverá ser de duas casas decimais, arredondando se necessário.
 */

function area_triangulo(base, altura){
    return ((base * altura) / 2).toFixed(2)
}

console.log(area_triangulo(7, 9))
