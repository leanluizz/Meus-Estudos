const array = [0, 49, 50, 30];
const ordem = array.sort();
//Função de reduzir o array em um valor so (TEM QUE TER LOGICA)
const soma = ordem.reduce(Soma)

 function Soma(total, value, index, array){
     return total + value
 }

 console.log(soma);

 const arrayRight = [4, 3, 2, 1];

// Ele pega o lado esquerdo do array e soma até o primeiro e retorna em um valor so pois ele "Reduz"
const somaRight = arrayRight.reduceRight(SomaRight)

/* total = primeiro array, value = valor de todos os array, index = posição dos array,
array = repete o array de acrodo com a lenght dele */
 function SomaRight(total, value, index, array){
     return total + value
 }
 console.log(somaRight);