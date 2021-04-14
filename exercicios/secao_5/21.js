Number.prototype.entre = function (min, max = 200) {
    return (this >= min && this <= max) ? true : false
}

const calcula_convenio = idade => {
    let val_base = 100

    if(idade.entre(0, 10)){
        return val_base + 80
    }else if(idade.entre(11, 30)){
        return val_base + 50
    }else if(idade.entre(31, 60)){
        return val_base + 95
    }else if(idade.entre(61, 200)){
        return val_base + 130
    }else{
        return "Idade invalida"
    }
}

console.log(calcula_convenio(31))