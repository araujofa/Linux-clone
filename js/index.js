var dataAtual = new Date();
var dia = dataAtual.getDate();
var mes = (dataAtual.getMonth() + 1);
var ano = dataAtual.getFullYear();
var horas = dataAtual.getHours();
var minutos = dataAtual.getMinutes();

document.getElementById('date').innerHTML = (dia + "/0" + mes + "/" + ano + "   " + horas + ":" + minutos);

function menu(){
    window.alert("aqui vai ser um toggle menu");
}

function alterarCor(){
    var a = document.getElementById('cor-g');  
    a.style.backgroundColor = 'rgba(255, 88, 27, 0.493)';
}

function mouseEnter() {
    var a = document.getElementById('cor-g');
    a.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
}


function alterarCorTrash(){
    var b = document.getElementById('cor-t');
    b.style.backgroundColor = 'orange';

    b.addEventListener('mouseout', sair);
    function sair(){
        b.style.background = 'none'; 
    }

    b.addEventListener('mouseenter', entrar);
    function entrar(){
        b.style.background = 'rgba(255, 255, 255, 0.2)'; 
    }
}