function compareNum(n){
   return new Promise((resolve, reject) =>{
        if (n == 5) {
            resolve("É igual a 5")
        }else{
            reject("N é igual a 5")
        }
   })
}
compareNum(5).then((e) => console.log(e))
compareNum(6).catch((e) => console.log(e))