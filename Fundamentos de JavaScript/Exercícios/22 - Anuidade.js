class Anuidade {
    constructor(mounth, valor){
        this.mounth = mounth;
        this.valor = valor;
    this.Pay = () =>{
        if(mounth > 0 && mounth < 13) {
            this.atraso = mounth - 1
            return (valor * ((1 + (5/100))**this.atraso)).toFixed(2)
        } else {
            return 'Mês inválido.'
        }
    }
    }
}
const Mes = [
    Janeiro = new Anuidade(1, 200),
    Fevereiro = new Anuidade(2, 200),
    Marco = new Anuidade(3, 200),
    Abril = new Anuidade(4, 200), 
    Maio = new Anuidade(5, 200), 
    Junho = new Anuidade(6, 200), 
    Julho = new Anuidade(7, 200), 
    Agosto = new Anuidade(8, 200), 
    Setembro = new Anuidade(9, 200), 
    Outubro = new Anuidade(10, 200),
    Novembro = new Anuidade(11, 200),
    Dezembro = new Anuidade(12, 200),
]
const Pagamento = Mes.forEach(function(nome, indice, array) {
    console.log(nome.Pay());
})
console.log(Pagamento);