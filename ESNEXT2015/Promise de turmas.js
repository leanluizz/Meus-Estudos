const HTTP = require("http")

const getTurma = (letra, callback) =>{
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    HTTP.get(url, res =>{
         let resultado = ""

         res.on("data", dados =>{
             resultado += dados
         })

         res.on("end", () =>{
                callback(JSON.parse(resultado))
         })
    })
}

let nomes = []

getTurma("A", alunos => {
     nomes = alunos.concat(alunos.map(a => `A: ${a.nome}`))
     console.log(nomes);
})
getTurma("B", alunos =>{
    console.log(alunos);
})