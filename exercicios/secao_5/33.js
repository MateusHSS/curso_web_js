






const vetorInteiro = [3, 4, 5, 1]
const vetorString = ['sad', 'sad', 'kjhdk', 'isa']
const vetorDouble = [3.1, 4.2, 54.4, 3.1]

let result = vetorInteiro.concat(vetorDouble, vetorString)

console.log(result)

result = vetorString.concat(vetorInteiro, vetorDouble)

console.log(result)
