function Produto(maiusculo, nome, preco, desc) {
    this.nome = nome
    this.desc = desc
    this.DeixaGrande = () =>{
        capslock = maiusculo.toUpperCase();
        
        return capslock
    }
    this.PegaOPrecos = () => {
        this.concat = `${this.DeixaGrande()}${nome} custa: ${preco - desc}R$`
        return this.concat
    }
}
const produto1 = new Produto("c", "omputador", 150000, 10);
const produto2 = new Produto("r","elógio", 10000, 10);
const produto3 = new Produto("c","arro",60000, 40)
console.log(produto1.PegaOPrecos());
console.log(produto2.PegaOPrecos());
console.log(produto3.PegaOPrecos());