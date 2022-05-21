class Salario {
    constructor(SalaAtual,Plano){
        this.SalarioAtual = () =>{
        this.SalaAtual = SalaAtual
        this.Plano = Plano
        switch (Plano) {
            case "A":
               return `Seu plano é ${Plano} logo seu salário era ${SalaAtual} e ficara em ${SalaAtual * 10}`
            case "B":
               return `Seu plano é ${Plano} logo seu salário  era ${SalaAtual} e ficara em ${SalaAtual * 15}`
            case "C":
               return `Seu plano é ${Plano} logo seu salário  era ${SalaAtual} e ficara em ${SalaAtual * 20}`
        
            default:
                return "Não temos esse plano";
        }
    }
    }
}
const Joao = new Salario(15000, "A")
class Pedro extends Salario {}
const Ana = {
    __proto__ : new Salario(12000, "C")
}
const Inv = new Salario(300000, "D")
console.log(Joao.SalarioAtual());
console.log(new Pedro(20000, "B").SalarioAtual());
console.log(Ana.SalarioAtual());
console.log(Inv.SalarioAtual());