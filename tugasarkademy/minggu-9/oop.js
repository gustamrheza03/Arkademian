class Mobil {
    constructor(type, color) {
        this.type = type
        this.color = color
        this.engineStatus = 'off'
    }

    engineStatus () {
        this.engineStatus = 'on'
        console.log('engine start, mobilnya warna '+this.color+" typenya: "+this.type+" status mesin: "+this.engineStatus)
    }

     static isEngineOn (mobil){
         if (mobil.engineStatus === 'on'){
             console.log('Engine on')

         }else{
             console.log('Engine off')
         }
     }
}

const m = new Mobil ('phanter','hitam');

Mobil.isEngineOn(m);

class Car {
    constructor(color) {
        this._color = color;
    }
}

let a = new Car('merah')

console.log(a._color);

class car2 {
    constructor(color){
        this._color = null
    }

    get color () {
        return `Warna Mobilnya adalah ${this._color}`
    }

    set color (color){
        this._color = `${color}keren`
    }
}

const carr2 = new car2()

carr2.color =  'merah'

console.log(carr2.color)