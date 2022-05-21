//This funciona da seguine forma: Ele simplesmente é uma forma de declarar variaveis 
//porem de uma forma diferente pois existe na forma de função construtor (que não entendo ainda);
// ATENÇÃO! Fora do escopo e dentro SEMPRE tem diferença;
function sayMyName(){
    this.numb1 = 2
    this.numb3 = this.numb1
    this.numb2 = 2
    this.soma = this.numb1 + this.numb3
    console.log(this.soma);
}
sayMyName()

//Problema talvez seja que não da para usar em objeto por que tem que vir seguido do this,variavel
// A variavel "this." n pode mudar igual Const
names = {nomes : "Leandro",
         sobrenome : "Luiz"}
    this.nome = names

 //Preste atenção nos nomes das variavéis

console.log(`${nome.nomes} ${nome.sobrenome}`);

function getPreco(moeda = "R$", imposto = 0) {
    return `${moeda} ${this.preco * (1 - this.desconto) * (1 + imposto)} `
}
const produto = {
    nome: "carro",
    preco: 60000,
    desconto: 15,
    getPreco
}


console.log(produto.getPreco());
