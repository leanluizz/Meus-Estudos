class Fatorial {
    constructor(fatorial){
    this.Valor = () =>{
        this.fatorial = fatorial
        this.resultado = fatorial;
        for (var i = 1; i < fatorial; i++) {
            this.resultado *= i;
        }
        console.log(this.resultado);
    }
    }
}
const fatorial1 = new Fatorial(1)
console.log(fatorial1.Valor());