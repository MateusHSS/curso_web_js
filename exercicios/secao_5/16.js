function calculadora(n1, op, n2){
    switch(op){
        case '+':
            return n1 + n2
        case '-':
            return n1 - n2
        case '*':
            return n1 * n2
        case '/':
            return n1 / n2
        default:
            return "Operacao invalida"
    }
}

console.log(calculadora(3, '+', 5))