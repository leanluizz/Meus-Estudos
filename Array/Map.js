let array = [1, 2, 3, 4, 5];
const resultado = array.map(function(e) {
    return e + 2
})
console.log(resultado);

const ordem = array.map(function(c) {
    return c = "Oi";
})
console.log(ordem);

const produto = [
    {nome: "carro", preco: 6000}, 
    {nome: "carro", preco: 5000},
    {nome: "carro", preco: 4000}
]
const mape = produto.map(function(e, f, r){
    element = [f, r]
    return element
})
console.log(mape);
