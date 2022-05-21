
function insert(num){
    var numero = document.getElementById("resultado").innerHTML;
    document.getElementById('resultado').innerHTML = numero + num; 
   
};

function apagar(){
    document.getElementById('resultado').innerHTML = "";
}
    
function mudaCor(){
    document.getElementById('resultado').style.fontFamily = 'arial';
    document.getElementById('resultado').style.fontSize = '30px';
    document.getElementById('resultado').style.color = 'white';	
	 }
    
    
function raizQuadrada(){
    res = split(document.getElementById('resultado'));
     resultado = parseInt(res / 2)
     resultado.innerHTML = res
}

function calcular()
{
    var resultado = document.getElementById('resultado').innerHTML;
    if(resultado)
    {
        document.getElementById('resultado').innerHTML = eval(resultado);
    }
    else
    {
        document.getElementById('resultado').innerHTML = 'Tente novamente'
    }
    
    
};

