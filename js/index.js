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

    var ab = document.getElementById('cor-t');
    ab.style.background = 'none';
    ab.style.border ='none';

    var abc = document.getElementById('cor-f');
    abc.style.background = 'none';
    abc.style.border ='none';

}

function alterarCorTrash(){
    var b = document.getElementById('cor-t');
    b.style.backgroundColor = 'rgba(255, 88, 27, 0.493)';
    b.style.border = '0.2px solid rgba(255, 255, 255, 0.432)';

    var ab = document.getElementById('cor-g');
    ab.style.background = 'none';
    ab.style.border ='none';

    var abc = document.getElementById('cor-f');
    abc.style.background = 'none';
    abc.style.border ='none';
}

function alterarCorFolder(){
    var c = document.getElementById('cor-f');
    c.style.backgroundColor = 'rgba(255, 88, 27, 0.493)';
    c.style.border = '0.2px solid rgba(255, 255, 255, 0.432)';

    var ab = document.getElementById('cor-t');
    ab.style.background = 'none';
    ab.style.border ='none';

    var abc = document.getElementById('cor-g');
    abc.style.background = 'none';
    abc.style.border ='none';
}

function desclick(){
    var a = document.getElementById('cor-t');
    a.style.background = 'none';
    a.style.border ='none';

    var b = document.getElementById('cor-g');
    b.style.background = 'none';
    b.style.border ='none';

    var c = document.getElementById('cor-f');
    c.style.background = 'none';
    c.style.border ='none';
}