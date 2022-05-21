class Notas {
    constructor (nota1, nota2, total) {
        this.nota1 = nota1;
        this.nota2 = nota2;
        this.total = total;
    this.Soma = () =>{
        this.total = total;
        total = nota1 + nota2;
        return total
        
    }

    this.Verificacao = () =>{
        if (this.Soma() < 10) {
            return "Reprovado"
        }else{
            return "Aprovado"
        }
    }
    }
}

//NÃO COLOCAR PARENTESES DOS PARAMETROS QUANDO FOR USAR HERANÇA
class Joao extends Notas {}
 class Ana extends Joao {}
  class Pedrin extends Joao {}
   class Catarina extends Joao {}

console.log(new Ana(8, 2).Verificacao());
console.log(new Joao(1, 2).Verificacao());
console.log(new Pedrin(4, 2).Verificacao());
console.log(new Catarina(9, 2).Verificacao());


class Avo {
    constructor(sobrenome = "Silva"){
        this.sobrenome = sobrenome;
    }
}
 class Pai extends Avo {}
  class Filho extends Avo{}

console.log(new Avo());
console.log(new Pai());
console.log(new Filho());