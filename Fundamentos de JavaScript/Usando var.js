let letra = "string2";
{
    let letra = "string1";
    console.log("dentro =", letra);
}
console.log("fora =", letra);

var numero = 1;
{
    var numero = 2;
    console.log("dentro =", numero);
}
console.log("fora =", numero);