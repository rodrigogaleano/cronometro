// ---------- VARIÁVEIS ----------

//Relógio
var hora = 0;
var minutos = 0;
var segundos = 0;

var tempo = 1000; //A variável tempo armazena um segundo (1000milisegundos)
var cronometro; //Responsável pelo cronômetro
var rodando = false; //Verifica se o cronometro está rodando ou não

// ---------- FUNÇÕES ----------


function iniciar() {
    if (rodando == false){
        cronometro = setInterval(() => timer(), tempo);
        rodando = true;
    }else{
        //alert('O cronômetro já está rodando');
    }
    
}

function pausar() {
    clearInterval(cronometro);
    rodando = false;

}

function parar() {
    clearInterval(cronometro);
 
    hora = 0;
    minutos = 0;
    segundos = 0;
    rodando = false
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