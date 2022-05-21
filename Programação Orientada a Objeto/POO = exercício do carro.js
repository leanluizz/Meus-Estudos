function Car(velocidade) {
    this.velocidade = velocidade;
    
    //Callback 
        this.acelerar = () =>{
               
            return velocidade +=20
      }
      this.Programa = () => {
          for (aumentandoVel = carro1.acelerar();aumentandoVel < 101; aumentandoVel+=20){
        console.log(aumentandoVel);
        if (aumentandoVel >= 100) {
            return "Velocidade maxíma alcancada";
        }
        
}}};

const carro1 = new Car(0);
console.log(carro1.Programa(), "do Carro");
//HERANÇA
const bugati = {
    __proto__ : new Car
}
console.log(bugati.Programa(), "do Bugati");



//Objeto so que mais simples
function CarAcelerando(velocidade, maxvel) {
    this.velocidade = velocidade;
    this.maxvel = maxvel;
        this.acelerar = () =>{
            if (velocidade >= maxvel) {
                console.log("Velocidade maxíma atingida");
            }
        return velocidade +=20
      }
      
    }
 const carro2 = new CarAcelerando(0, 100);
 console.log(carro2.acelerar());
 console.log(carro2.acelerar());
 console.log(carro2.acelerar());
 console.log(carro2.acelerar());
 console.log(carro2.acelerar());
 console.log(carro2.acelerar());
 