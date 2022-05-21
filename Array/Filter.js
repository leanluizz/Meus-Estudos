const arrayNormal = [0 ,5, 7, 0, 4, 3];
arrayNormal.sort()
var filtre = arrayNormal.filter(function(e){
    //true or false tem que ter logica "<"
    return e <= 4
})
console.log(filtre);



const array = [
    {nome: "carro", preco:6000}, 
    {nome: "carro", preco:5000},
    {nome: "carro", preco:4000}
]

var resultado = array.filter(function(e){
    //true or false tem que ter logica
    return e.preco >= 6000
})
console.log(resultado);

const check = [ 0, 4, 8, 10, 15, 20];

//Filter se usa mais comparação
const checkando = check.filter(Check)
function Check(value, index, array){
    if (value > 18) {
        return check[1]
    }
}
console.log(checkando);