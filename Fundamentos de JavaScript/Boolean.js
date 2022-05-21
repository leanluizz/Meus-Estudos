let num = 2;
if (num === 2) {
    console.log(true);
} ;
console.log(!! ("" || 0 || NaN || null || undefined));

let verdadeiro = true;
let falso = false;
let negacao = verdadeiro;
let opOu = falso || negacao;
console.log(opOu);

const maior = 3 > 1;
const menor = 5 < 100;
console.log(maior);
console.log(menor);
res = maior || menor; // "||" = Um dos tem que ser true (Leia deste jeito);
if (res = true) {
    console.log("sim"); // É verdade que os 2 são falsos
}else{
    console.log("não"); 
}


const maior1 = 3 < 1;
const menor2 = 5 > 100;
console.log(maior1);
console.log(menor2);
res2 = maior1 && menor2; // "&&" os 2 tem q ser ou falso ou verdadeiro (Leia deste jeito);
if (res2 = false) {
    console.log("sim"); // É verdade que os 2 são falsos
}else{
    console.log("não"); 
}

const verdade = false;
const entenda = false || false || true ; // || = "OU" se tiver dificuldade leia desta forma;
console.log(entenda);

const entenda2 = true && false; // && = Se um já for falso ele retornara ''false'';
console.log(entenda2);

const entenda3 = true && false; // ! = É o operador "NÃO" simplesmente inverte de true para false e false para true;
console.log(!entenda3);

