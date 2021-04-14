function conta_impar_par(nums){
    let pares = 0
    let impares = 0

    nums.forEach(num => {
        (num%2) ? impares++ : pares++
    });

    console.log(`${pares} pares e ${impares} impares`)
}

conta_impar_par([2, 3, 4, 6, 2, 65, 21])