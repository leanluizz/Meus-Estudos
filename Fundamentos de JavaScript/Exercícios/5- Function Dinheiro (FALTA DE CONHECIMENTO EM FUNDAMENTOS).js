function Dinheiro(rs) {
    var valor = rs.toFixed(2);
    dinheiro = `R$${valor}`;
    reescreva = dinheiro.replace(".", ",")
    return reescreva
}
console.log(Dinheiro(0.1 + 0.2));