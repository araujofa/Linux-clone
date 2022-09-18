var dataAtual = new Date();
var dia = dataAtual.getDate();
var mes = (dataAtual.getMonth() + 1);
var ano = dataAtual.getFullYear();
var horas = dataAtual.getHours();
var minutos = dataAtual.getMinutes();

document.getElementById('date').innerHTML = (dia + "/0" + mes + "/" + ano + "   " + horas + ":" + minutos);