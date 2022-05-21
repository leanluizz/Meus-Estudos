class Aluno {
    constructor (nome, code,nota = []){
        this.nome = nome;
        this.Soma = (total, value, index, array) =>{
            return total + value
        }
    this.CandN = () =>{
        this.code = code
        this.nota = nota
        return `Nome: ${nome}
Código:${code} 
Notas : ${nota} 
Soma das notas: ${nota.reduce(this.Soma)}`
    }
    this.Compara = () =>{
        if (code <= 4 && nota.reduce(this.Soma) >= 5) {
            return `${this.CandN()} 
Parabéns você passou`
        }else if (code > 4) {
            return `Código de Aluno não encontrado`
        }
        else{
            return`${this.CandN()} 
Tente denovo ano que vem `
        }   
    }
    }
}
const Alunos = [
    Joao = new Aluno("Joao",1,[1, 2, 1]),
    Ana = new Aluno("Ana",2,[1, 2, 1]),
    Maria = new Aluno("Maria",3,[1, 2, 1]),
    Pedro = new Aluno("Pedro",4,[1, 2, 1])
]
const Todos = Alunos.forEach(function(nome, indice, array){
    console.log(`${indice + 1} - 
${nome.Compara()}`);
})
console.log(Todos);