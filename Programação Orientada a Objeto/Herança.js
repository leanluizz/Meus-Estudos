const vo = {
    atributo1 : "1",
}
const pai = {
    atributo2 : "2",
    __proto__: vo,
    
}
const filho = {
    atributo3 : "3",
    __proto__: pai
}
console.log(filho.atributo1);
console.log(filho.atributo2);
console.log(pai.atributo1);
//Retorna undefined pois o bojeto pai so obtem as keys da constante Vo
console.log(pai.atributo3);


const carro = {
    velocidade : 0,
    velocidadeMax : 500,
    Acelerando(delta) {
         if (this.velocidade + delta <= this.velocidadeMax) {
           return this.velocidade += delta
       }else{
             return "Velocidade máxima atingida"
       }
       
    }
}

const ferrari = {
    __proto__: carro
}
const bugati = {
    __proto__: carro
}
console.log(bugati.Acelerando(300));
console.log(ferrari.Acelerando(300))
console.log(carro.Acelerando(600));

function MeuObjet() {}
console.log(MeuObjet.prototype);

const obj1 = new MeuObjet
const obj2 = new MeuObjet
console.log(obj1.__proto__ === obj2.__proto__);

console.log(String);
console.log(Array);
console.log(Object);

var string = "Olá amigo"

String.prototype.reverso = function () {
    return this.split("").reverse().join("")
}
console.log(string.reverso());

function Revertendo(string) {
    return string.split("").reverse().join("")
}
console.log(Revertendo("ogima alÓ"));

var array = [1, 2, 3, 4, 5]

Array.prototype.first = function () {
    return this[0]
}
console.log(array.first());

var object = {
    nome: "Leandro",
    idade: "18"
}
Object.prototype.keys = function () {
    return Object.keys(object)
}
console.log(object.keys());