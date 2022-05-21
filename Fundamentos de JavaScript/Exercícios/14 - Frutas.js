class Fruit {
    constructor(fruta){
      this.Produto = () =>{
        this.fruta = fruta
       switch (fruta) {
           case "Maça":
               return "Não vendemos essa fruta aqui";
           case "Kiwi":
               return "Estamos com escassez de kiwis";
           case "Melancia":
               return "“Aqui está, são 3 reais o quilo";
           default:
            return "Desculpe, estamos sem nenhuma " + fruta + ".";
       }
    }
    }
}
const Maça = new Fruit("Maça")
const Pera = {
    __proto__ : new Fruit("Pera")
}
const Melancia = {
    __proto__ : new Fruit("Melancia")
}
class Kiwi extends Fruit{}

console.log(Maça.Produto());
console.log(Pera.Produto());
console.log(Melancia.Produto());
console.log(new Kiwi("Kiwi").Produto());