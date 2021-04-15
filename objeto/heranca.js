Object.prototype.attr0 = '0' //nao faca isso
const avo = {attr1: 'A'}
const pai = {__proto__: avo, attr2: 'B'}
const filho = {__proto__: pai, attr3: 'C'}

console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3)

const carro = {
    vel_atual : 0,
    vel_max: 200,
    acelerar_mais(delta) {
        if(this.vel_atual += delta <= this.vel_max){
            this.vel_atual += delta
        }else {
            this.vel_atual = this.vel_max
        }
    },
    status(){
        return `${this.vel_atual}Km/h de ${this.vel_max}Km/h`
    }
}

const ferrari = {
    modelo: 'F40',
    //sobrescreve o atributo do pai
    vel_max : 350
}

const volvo = {
    modelo: 'V40',
    //'super' referencia o pai, entao busca a funcao status do pai
    status(){
        return `${this.modelo}: ${super.status()}`
    }
}

//metodo que seta o prototipo do objeto
Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
console.log(volvo.vel_max)

volvo.acelerar_mais(100)
ferrari.acelerar_mais(300)

console.log(ferrari.status())