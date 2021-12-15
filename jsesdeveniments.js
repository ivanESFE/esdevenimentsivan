document.onkeydown=function(tecla){
       document.getElementById('hola').innerHTML=tecla.key
}

document.onkeyup=function(){
       document.getElementById('hola').innerHTML=""
}
   