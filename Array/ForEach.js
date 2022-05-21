let aprovados = ['Ana', 'Rafael', 'Pedrin', 'Carlos'];
/*O forEach serve da seguinte maneira ele pega todos os elementos e você TEM que criar uma função
que pega todos eles 

EX: function(nome = string/numero que está escrito no array, indice = os numeros da posição(numeros) do array
    todos = todos os elementos do array) Ele so pega esses 3 
    
    SO FUNCIONA COM ARRAY!!!!!!*/

let result = aprovados.forEach(function(nome, indice, todos) {
    console.log(`${indice} - ${nome} => ${todos}`);
    console.log(`Iniciais ${nome[0]}`);
})
