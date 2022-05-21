// Declare a variavel(ou const) que vira o nome da função = parãmetro => expressão com a 
// variavel que subsitui o parâmetro 
// (lembre-se que uma variavel SEMPRE tem que receber um valor) 

const soma = (a, b, c) => a + b + c;
console.log(soma(2, 5, 8));

const string = () => leandro = "Leandro";
console.log(string());

const menor = (d, e) => d < e ? "Sim" : "Não";
console.log(menor(8, 10));

//Usar arrow functions em bloco
const deletar = () => {
    nome = {
        nome :"Leandro",
        sobrenome: "Luiz"
    }
   if (nome.sobrenome === "Luiz") {
     delete nome.sobrenome
   }
   return nome
 }
console.log(deletar())




function contador (){
  for(num = 1; num < 10; num++){
      console.log(num);
  }
  return num
}
console.log(contador());

function contador2 (){
  num2 = 0
  setInterval(() => {
      num2++
      if (num2 > 5) {
          num2 = 1
      }
      console.log(num2);
  }, 1000);
 
}
console.log(contador2());

