class Vetor {
    constructor(array){
         this.array = array;
    this.Par = () =>{
        this.pares = array.filter(function(e){
            return e % 2 == 0
        })
        return this.pares
    }

    this.Impar = () =>{
        this.impares = array.filter(function(e){
            return e % 2 != 0
        })
        return this.impares
    }
    this.Compare = () =>{
        return `Esses são os pares ${this.Par()}, e esses são os impares ${this.Impar()}`
    }
    
    }
}

const Test = new Vetor([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
console.log(Test.Compare());