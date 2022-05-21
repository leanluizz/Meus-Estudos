const alunos = [
    {nome: "João", nota: 7.1}, 
    {nome: "Maria", nota: 10.1},
    {nome: "Pedro", nota: 11.1},
    {nome: "Fernanda", nota: 15.1}
]

//Imperativo
var total = 0
for(i = 0; i < alunos.length; i++){
    total += alunos[i].nota
   // console.log(alunos[i]);
}

console.log(total / alunos.length);
console.log(alunos.length);

//Declarativo

const Alunos = aluno => aluno.nota
const Somas = (total, valor) => total + valor
// O map pego a função Alunos e capturou todos os elementos do array
const totals = alunos.map(Alunos).reduce(Somas)
console.log("Esse é o alunos.map: ",alunos.map(Alunos));
console.log("Esse é o alunos.reduce: ",alunos.map(Alunos).reduce(Somas));
console.log("Esse é a média dos alunos: ",totals / alunos.length);