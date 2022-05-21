class Ano {
    constructor(ano){
      this.ContagemdosAnos = () =>{
        setInterval(() => {
        this.ano = ano
        ano++
        //Aqui calcula o ano bixesto se for divísivel por 4 é ano bissexto
        if (ano % 4 == 0 || ano % 400 == 0) {
           console.log(`${ano} É ano bissexto`);
        }
        console.log(ano);
        }, 1000);
     }
  }
}
const year = new Ano(2000)
console.log(year.ContagemdosAnos());