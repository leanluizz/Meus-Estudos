// SPREAD:
const obj = {
    nome: "Joao",
    idade: 19
}
console.log(obj);
const ObjWithSpread = {one:"one", two:"two", three:"three",...obj};
const ObjWithoutSpread = {one:"one", two:"two", three:"three", obj}
console.log(ObjWithSpread);
console.log(ObjWithoutSpread);

let adcionado = []
console.log(adcionado);

// Ele fez o SPREAD = "Espalhou"
const ADD = (n) =>{
    return [...n]
}
console.log(adcionado = ADD("cuzin"), ADD("Pedro"));
console.log(adcionado);



// REST:
const soma = (...numeros) =>{
       let total = 0
       numeros.forEach(n => total += n)
       return total
}
console.log(soma(2, 3 , 4 , 5));

const red = (...numeros) =>{
    let total = 0
    numeros.reduce(n => total += n)
    return total
}
console.log(red(4, 5));
