let a = [2, 3, 5, 4, 1];
console.log("Esse é o Array" ,a);
//Ordena os Array se números = em ordem crescente,se em string em ordem alfabetica;
a.sort()
console.log("Esse é o sort" ,a);
//Exclui elementos no array,ou adiciona
//array.splice(primeiro elemento a ser excluido, até qual quer que seja excluido, adiciona elementos);
a.splice(0, 2 , 6, 7)
console.log("Esse é o splice" ,a);
//Exclui o ultimo elemento do Array;
a.pop()
console.log("Esse é o pop", a);
//Exclui o primeiro elemento do Array;
a.shift();
console.log("Esse é o shift" ,a);
//Adiciona no ultimo elemento do Array;
a.push(5);
a.push("6")
console.log("Esse é o push" ,a);
//Adiciona no primeiro elemento do Array;
a.unshift(6);
console.log("Esse é o unshift" ,a);
//O methodo array.slice(pega a posição do elemento do array e depois mostra o resto que está na frente dele )
const Familia = ["Maria Gorete", "Masterson", "Leandro", "Sara"];
console.log("Filhos da familia", Familia.slice(2));
console.log("Pais da familia", Familia.slice(0, 2));
