
// FUNÇÃO DO CHECK DO FORMULARIO
const arrayCheck = [document.getElementById("1"), document.getElementById("2"), document.getElementById("3")];

  function checkOne(){
    arrayCheck[1].checked = false
    arrayCheck[2].checked = false
  }
  function checkTwo(){
      arrayCheck[0].checked = false
      arrayCheck[2].checked = false
  }
  function checkThree(){
    arrayCheck[0].checked = false
    arrayCheck[1].checked = false
  }

arrayCheck[0].addEventListener("click", () =>{
     checkOne()
})
arrayCheck[1].addEventListener("click", () =>{
    checkTwo()
})
arrayCheck[2].addEventListener("click", () =>{
    checkThree()
})

// Validando o password
const password = document.querySelector(".senha")
const confirm = document.querySelector(".confirm")

const ValidPass = () =>{
  if (password.value != confirm.value) {
     document.querySelector(".Erro").innerHTML = "As senhas não batem,tente novamente"
    //Precisa de alguma ordem para que impeça o envio dos dados
  }
}

document.querySelector(".Register").addEventListener("click", ()=>{
    ValidPass()
})
