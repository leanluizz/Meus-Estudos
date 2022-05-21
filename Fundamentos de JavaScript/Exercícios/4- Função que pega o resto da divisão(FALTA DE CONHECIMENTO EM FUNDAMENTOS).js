function Divisao(dividendo, divisor) {
    var divisao = Math.floor(dividendo / divisor)
    var resto = dividendo % divisor;
    const res = `Resultado da divisão é ${divisao} com o resto = ${resto}`
    
    return res
}
console.log(Divisao(11, 4));