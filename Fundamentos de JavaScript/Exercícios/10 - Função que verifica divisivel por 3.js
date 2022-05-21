class Verifica {
    constructor(){
      this.Número = (n) =>{
        this.n = n;
        this.conta = parseInt(n) % 3
      if (this.conta === 0) {
          return `${true}, É divisível`
      }else{
          return `${false}, Não é divisível`
      }
  }
      }
  }
  
  const num = new Verifica();
  
  console.log(num.Número(3));
  console.log(num.Número(2));
  console.log(num.Número(5));
  console.log(num.Número(6));
  console.log(num.Número(12));
  console.log(num.Número(18));