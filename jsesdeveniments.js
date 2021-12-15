document.onkeydown=function(tecla){
       document.getElementById('hola').innerHTML=tecla.key
       var guardarLletra = document.getElementById('lletres')
       guardarLletra.innerHTML += tecla.key + ' , '
       
       var reiniciar = document.getElementById("reset")
       reiniciar.onclick = function(){
       guardarLletra.innerHTML=''
} 
       
}

document.onkeyup=function(){
       document.getElementById('hola').innerHTML=""
}



