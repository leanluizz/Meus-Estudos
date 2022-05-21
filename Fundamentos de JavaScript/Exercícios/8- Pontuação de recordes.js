var pontos = "10, 1, 2, 5, 6, 10, 50"


function Compare() {
    //Ultima caractere da string
   var ultimapontuacao = pontos.slice(-3);
   var penultimapontuacao = pontos.slice(-6);
   if (pontos.slice(-2)) {
    ultimapontuacao = pontos.slice(-2)
   }
   if (ultimapontuacao > penultimapontuacao) {
       console.log("Parabéns você está crescendo");
   }else{
       console.log("Pontuação menor que o esperado");
   }
   return pontos
}
console.log(Compare(pontos));
