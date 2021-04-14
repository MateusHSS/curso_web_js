const ver_intervalo = nums => {

    let dentro = 0
    let fora = 0

    for (let i = 0; i < nums.length; i++) {
        (nums[i] >= 10 && nums[i] <= 20) ? dentro++ : fora++
    }

    return {
        dentro,
        fora
    }
}

const { dentro, fora } = ver_intervalo([15, 10, 20, 4, 15, 29])

console.log(dentro, fora)