const objeto = {
    obj1: "Hello",
    obj2: function name(nome) {
        return nome
    },
    obj3: ",tudo bem?"
}

console.log(`${Object.values(objeto.obj1)} ${Object.values(objeto.obj2("Pedro"))}${Object.values(objeto.obj3)}`);
console.log(`${objeto.obj1} ${objeto.obj2("Pedro")} ${objeto.obj3}`)
//Pega todos os valores do objeto
console.log(Object.values(objeto));
//Pega todas as variaveis(chaves) do objeto
console.log(Object.keys(objeto));
//Pega a keys e a values junto
console.log(Object.entries(objeto));
//Não entendi
console.log(Object.assign(objeto));
//Impedindo de adicionar atributos no objeto
var objetoE = Object.preventExtensions({
  nome: "Leandro" , idade: 18 , sexo: "Masculino"
})

objetoE.nome = "Sara"
delete objetoE.idade
objetoE.descripion = "FMSDGNSDAGFDGNDFSGSDF"

console.log("Impedindo o objetoE", objetoE);
