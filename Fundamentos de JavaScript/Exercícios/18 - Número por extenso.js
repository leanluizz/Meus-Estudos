class Read {
    constructor(num){
     this.ReadNum = () =>{
         this.num = num
         switch (num) {
             case 1:
                 return "Um"
            case 2:
                 return "Dois"
            case 3:
                 return "Três"
            case 4:
                 return "Quatro"
            case 5:
                 return "Cinco"
            case 6:
                 return "Seis"
            case 7:
                 return "Sete"
            case 8:
                 return "Oito"
            case 9:
                 return "Nove"
            case 10:
                 return "Dez"
             default:
                 if (num > 10) {
                     return "Número inválido"
           }
         }
     }
    }
}
const Numero1 = new Read(1)
const Numero2 = new Read(2)
const Numero3 = new Read(3)
const Numero4 = new Read(4)
const Numero5 = new Read(5)
const Numero11 = new Read(11)
const Numero12 = new Read(12)
console.log(Numero1.ReadNum());
console.log(Numero2.ReadNum());
console.log(Numero3.ReadNum());
console.log(Numero4.ReadNum());
console.log(Numero5.ReadNum());
console.log(Numero11.ReadNum());
console.log(Numero12.ReadNum());
