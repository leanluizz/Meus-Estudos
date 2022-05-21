//Para o await funcionar a função tem que ser declarada async
async function primeiro (){
        await segundo() //Esperou a segunda função ser executada primeiro
        console.log("Oiprimeiro");
}

function segundo (){
    return new Promise((res =>{
        res()
        console.log("Oisegundo");
    }))
}
primeiro()
segundo()