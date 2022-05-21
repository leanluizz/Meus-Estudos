class Produto{
    constructor(Codigo,Quantidade, Preco){
        this.Compra = () =>{
            this.Codigo = Codigo
            this.Quantidade = Quantidade
            this.Preco = Preco
            Preco = Quantidade * Preco
            switch (Codigo) {
                case 100:
                    return `R$${Preco.toFixed(2)} para ${Quantidade} Cachorro Quente `
                case 200:
                    return `R$${Preco.toFixed(2)} para ${Quantidade} Hambúrguer Simples `
                case 300:
                    return `R$${Preco.toFixed(2)} para ${Quantidade} Cheesburguer `
                case 400:
                    return `R$${Preco.toFixed(2)} para ${Quantidade} Bauru `
                case 500:
                    return `R$${Preco.toFixed(2)} para ${Quantidade} Refrigerante `
                case 600:
                    return `R$${Preco.toFixed(2)} para ${Quantidade} Suco `
            
                default:
                    return `Código não registrado`
            }
        }
    }
}
const Joao = new Produto(100, 2, 3)
const Maria = new Produto(200, 3, 4)
const Pedro = new Produto(300, 1, 5.50)
const Clara = new Produto(400, 6, 7.50)
const Fernando = new Produto(500, 3, 3.50)
const Vitoria = new Produto(600, 9, 2.80)
const Davi = new Produto(700, 6)
console.log(Joao.Compra());
console.log(Maria.Compra());
console.log(Pedro.Compra());
console.log(Clara.Compra());
console.log(Fernando.Compra());
console.log(Vitoria.Compra());
console.log(Davi.Compra());