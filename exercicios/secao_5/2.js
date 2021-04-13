function classifica_triangulo(l1, l2, l3){
    if(l1 === l2 && l2 === l3){
        console.log("Triangulo equilatero")
    }else if (l1 !== l2 && l1 !== l3 && l2 !== l3){
        console.log("Triangulo escaleno")
    }else {
        console.log("Triangulo isoceles")
    }
        
}

classifica_triangulo(2, 1, 3)