function mult_vetor(array, num){
    for (let i = 0; i < array.length; i++) {
        array[i] *= num
    }

    return array
}

const mult_vetor_se_maior_5 = (array, num) =>{
    if(num > 5){
        for (let i = 0; i < array.length; i++) {
            array[i] *= num
        }

        return array
    }

    return "Numero <= 5"
}

console.log(mult_vetor([3, 5, 2, 7, 9], 3))

console.log(mult_vetor_se_maior_5([3, 5, 2, 7, 9], 6))