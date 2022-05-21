class For {
    constructor(vetor){
        this.quantidade = 0
        this.vetor = vetor;
    this.Repeat = () => {
          for (let i = 0;i < vetor.length; i++){
               if(vetor[i] >= 10 && vetor[i] <= 20){
                   this.quantidade++
               }
          }
          return `${this.quantidade} De números é o que falta`
    }
    }
}

const Teste = new For([1, 3, 8, 12, 14, 15, 16, 17, 18, 20])
console.log(Teste.Repeat());