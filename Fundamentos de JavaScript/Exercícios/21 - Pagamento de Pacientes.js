class SaudePlan {
    constructor(idade){
        this.idade = idade;
       this.Verfica = () =>{ 
           if (idade < 10) {
            return `Tem ${idade} anos de idade,ele paga R$80`
           }else if(idade >= 10 && idade <= 30){
            return `Tem ${idade} anos de idade,ele paga R$50`
           }
           else if(idade > 30 && idade < 60){
            return `Tem ${idade} anos de idade,ele paga R$95`
           }else if(idade >= 60){
            return `Tem ${idade} anos de idade,ele paga R$130`
           } 
       }
    }
}

const Nomes = [
    Joao = new SaudePlan(10),
    Ana = new SaudePlan(15),
    Maria = new SaudePlan(30),
    Rodrigo = new SaudePlan(31),
    MariaClara = new SaudePlan(80),
    Davi = new SaudePlan(18)
]

const Pacientes = Nomes.forEach(function(nome, indice, array) {
    console.log(`Paciente número ${indice + 1} - ${nome.Verfica()}`)
})
console.log(Pacientes);