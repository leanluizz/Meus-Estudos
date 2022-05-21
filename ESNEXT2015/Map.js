// O new Map atribuido a constante é como se fosse um array em que vc pode alterar com os methodos abaixo
// LEMBRETE: Para modificar a constante você tem que dar uma chave e um valor assim como na linha 4
const framework = new Map()
framework.set("chave", "valor")
console.log(framework.get("chave"))
console.log(framework.has("chave"));
console.log(framework.delete("chave"));
console.log(framework.has("chave"));
console.log(framework.set("angular", "true"));
console.log(framework);