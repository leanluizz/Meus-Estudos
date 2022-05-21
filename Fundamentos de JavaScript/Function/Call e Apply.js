function SistemaDeDesconto(moeda = "R$", imposto = 0) {
    return `${moeda} ${this.preco * (1 - this.desconto) * (1 + imposto)} `
}
const produto = {
    nome: "carro",
    preco: 60000,
    desconto: 15,
    SistemaDeDesconto
}
//Apply e Call fazem o mesmo q o "objeto.SistemaDeDesconto"
console.log(produto.SistemaDeDesconto());
console.log(SistemaDeDesconto.apply(produto));
console.log(SistemaDeDesconto.call(produto));