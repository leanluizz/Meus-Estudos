//class é a mesma coisa que declara uma função
class Soma {
    //constructor é declarar os parâmetros da função
    constructor (a, b){
        this.a = a
        this.b = b
    this.Somando = () => {
        return a + b
    }
    }
}
const soma = new Soma(2, 2)
    console.log(soma.Somando());
    class Ordem{
        constructor(a){
        this.Sort = () =>{
            this.a = a;
            a = [4, 7, 9, 3, 0]
           return a.sort()
        }
    }
    }
    const ordenado = new Ordem()
    console.log(ordenado.Sort());