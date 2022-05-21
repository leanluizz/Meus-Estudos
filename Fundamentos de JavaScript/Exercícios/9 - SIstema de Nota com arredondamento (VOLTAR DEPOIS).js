class Nota {
    constructor(nota){
       this.nota = nota 

    this.Arredondamento = () =>{
        return Math.round(nota)
    }
    this.Condition = () =>{
        if (this.Arredondamento() < 40) {
            return `Sua nota é ${this.Arredondamento()}, Reprovado`
        }else if (this.Arredondamento() >= 40) {
            return `Sua nota é ${this.Arredondamento()}, Aprovado`
        }
    }
    }
}


const Jão = {
    __proto__ : new Nota(39.5)
}
console.log(Jão.Condition());