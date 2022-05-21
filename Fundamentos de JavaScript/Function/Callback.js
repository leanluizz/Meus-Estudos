function SayYourName() {
    var nome = prompt("Qual seu nome?");
    return nome
}

function Hello() {
    alert(`Hello ${SayYourName()}`); 
    
}

Hello()


function car() {
    var  Speed = 0;
    var  MaximumSpeed = 500;
     acelerar()
    if (Speed <= MaximumSpeed) {
        return Speed + 20
    }
}
function acelerar() {
   
    setInterval(() => {
        car()
        console.log(car());
    }, 2000);
    
}
console.log(car());


