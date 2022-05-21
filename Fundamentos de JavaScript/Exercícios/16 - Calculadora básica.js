class Calculadora {
    constructor(){
        this.Calc = (num1, num2, operador) =>{
            this.num1 = num1
            this.num2 = num2
            this.operador = operador
           switch (operador) {
               case "+":
                   return num1 + num2
               case "-":
                   return num1 - num2
                case "x":
                   return num1 * num2
                case ":":
                   return num1 / num2
           }
        }
    }
}
const Conta = new Calculadora()
console.log(Conta.Calc(1, 2, "+"));
console.log(Conta.Calc(1, 2, "-"));
console.log(Conta.Calc(1, 2, "x"));
console.log(Conta.Calc(1, 2, ":"));