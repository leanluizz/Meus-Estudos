function Triangulos(comp1, comp2, comp3) {
    triang = [comp1, comp2, comp3]
    //Tem os dois primeiros valores iguais
    if (comp1 == comp2 && comp2 < comp3) {
        var triang = `Isósceles pois ${triang} tem os dois primeiros valores iguais`
    }
    //Tem todos os valores iguais
    if (comp1 && comp2 == comp3) {
        var triang = `Equilátero pois ${triang} tem todos os valores iguais`
    }
    //Tem todos o primeiro valor maior que o segundo e o segundo valor menor que o terceiro
    if (comp1 < comp2 && comp2 < comp3) {
        var triang = `Escaleno pois ${triang} tem todos o primeiro valor maior que o segundo e o segundo valor menor que o terceiro`
    }
    return triang
}
console.log(Triangulos(10, 10, 12));
console.log(Triangulos(10, 10, 10));
console.log(Triangulos(10, 12, 14));