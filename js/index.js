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
    a.style.border = '0.2px solid rgba(255, 255, 255, 0.432)';

}

function mouseEnter() {
    var a = document.getElementById('cor-g');
    a.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
    a.style.border = 'none';
}


function alterarCorTrash(){
    var b = document.getElementById('cor-t');
    b.style.backgroundColor = 'orange';

    var ab = document.getElementById('cor-g');
    ab.style.background = 'none';
    ab.style.border ='none';
}