const objet1 = {
    nome:"Leandro Luiz Ribeiro Gomes",
    idade: 18,
    estado:"Minas Gerais",
    cidade:"Conselheiro Lafaiete",
    n:250,
    sexo: "Masculino"
}
if (objet1.nome == "Leandro Luiz Ribeiro Gomes") {
    objet1.sexo = "Masculino";
} else {
    objet1.sexo = "Feminino";
}
console.log(objet1.sexo);