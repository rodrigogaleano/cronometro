var hora = 0;
var minutos = 0;
var segundos = 0;

var tempo = 1000; //Qntd milesimos segundo
var cronometro;

function iniciar() {
    cronometro = setInterval(() => timer(), tempo);
}

function pausar() {
    clearInterval(cronometro);
    
}

function parar() {
    clearInterval(cronometro);
    var hora = 0;
    var minutos = 0;
    var segundos = 0;
    document.getElementById('relogio').innerText = '00:00:00'
}

function timer() {
    segundos++;
    if (segundos == 60){
        segundos = 0;
        minutos++
        if (minutos == 60){
            minutos = 0;
            hora++;
        }
    }

    var format = (hora < 10 ? '0' + hora : hora) + ':' + (minutos < 10 ? '0' + minutos : minutos) + ':' + (segundos < 10 ? '0' + segundos : segundos)
    document.getElementById('relogio').innerText = format
    return format;
}
