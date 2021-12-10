document.body.style.backgroundColor = 'green';

var boton = document.getElementById('boton')
boton.addEventListener('mousedown' , blue)
boton.addEventListener('mouseup' , taronja)


function blue() {
    document.body.style.backgroundColor = 'blue';
}

function taronja() { 
    document.body.style.backgroundColor = 'orange';
}