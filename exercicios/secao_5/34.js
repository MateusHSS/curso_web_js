function esta_contido(str1, str2){
    for (let i = 0; i < str1.length; i++) {
        if(!str2.includes(str1[i])){
            return false
        }
    }

    return true
}

const ver_caracteres = (str1, str2) => {
    str1 = str1.toLowerCase()
    str2 = str2.toLowerCase()
    let ok = true

    return esta_contido(str1, str2) && esta_contido(str2, str1)
}

console.log(ver_caracteres("dale", "leda"))
