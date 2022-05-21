class Carros {
    constructor(car){
    this.Automoveis = () =>{
        switch (car) {
            case "Hatch":
                return "Compra efetuada com sucesso!"
            case "Sedans":
                return "Tem certeza que quer comprar esse carro?"
            case "Motocicletas":
                 return "Tem certeza que quer motocicletas?"
            case "Caminhões":
                 return "Tem certeza que quer caminhões?"
            default:
                return "Não temos esse automovel"
        }
    }
  }
}
class Joao extends Carros {}
console.log(new Joao("Hatch").Automoveis());