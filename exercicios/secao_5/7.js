const calc_delta = (a, b, c) => Math.pow(b, 2) - (4 * a * c)

const baskhara = (a, b, c) => {
    let delta = calc_delta(a, b, c)

    if(delta < 0){
        return "Delta é negativo"
    }

    let x1 = (-b + Math.sqrt(delta)) / 2 * a

    let x2 = (-b - Math.sqrt(delta)) / 2 * a

    return [x1, x2]
}

console.log(baskhara(3, -5, 12))