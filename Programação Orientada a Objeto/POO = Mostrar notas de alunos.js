function NOTA(nota) {
    this.nota = nota;
    this.notaMedia = 5;

   this.Teste = () =>{
    if (this.nota < this.notaMedia) {
        return "Você foi reprovado"
    }else{
        return "Você foi aprovado"
}

}
}

const Juninho = {
    __proto__ : new NOTA(2)
}
const Alberto = {
    __proto__ : new NOTA(5)
}
const Catarina = {
    __proto__ : new NOTA(2)
}
console.log(`${Juninho.Teste()},Juninho sua nota é ${Juninho.nota}`);
console.log(`${Alberto.Teste()},Alberto sua nota é ${Alberto.nota}`);
console.log(`${Catarina.Teste()},Catarina sua nota é ${Catarina.nota}`);
