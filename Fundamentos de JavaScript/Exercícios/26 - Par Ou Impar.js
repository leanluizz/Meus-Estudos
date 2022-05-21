class ParouImpar{
    constructor(num){
       this.num = num;
       this.Compare = () =>{
            if (num % 2 == 0) {
                return "O número é par"
            }else{
                return "O numero é impar"
            }
       }
    }
}

const TestArray = [
 Test = new ParouImpar(1),
  Test1 = new ParouImpar(2),
   Test2 = new ParouImpar(3),
    Test3 = new ParouImpar(82)
]
TestArray.forEach(function(nome, indice, array){
    console.log(`${indice + 1} - ${nome.Compare()}`)
})
