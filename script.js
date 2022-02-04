// ---------- VARIÁVEIS ----------

//Relógio
var hora = 0;
var minutos = 0;
var segundos = 0;

var tempo = 1000; //A variável tempo armazena um segundo (1000milisegundos)
var cronometro; //Responsável pelo cronômetro
var rodando = false; //Essa variável armazena se o cronometro está rodando ou não, começa em false

// ---------- FUNCÕES ----------

function iniciar() { //Play
    if (rodando == false){ //Verifica se o crônometro está em funcionamento para saber se é necessário startar
        rodando = true; //Armazena que o cronômetro está rodando
        cronometro = setInterval(() => timer(), tempo); //Chama a função timer
    }    
}

function pausar() { //Pause
    clearInterval(cronometro); //Pausa o cronômetro
    rodando = false; //Armazena que o cronômetro não está rodando
}

function parar() { //Stop
    rodando = false; //Armazena que o cronômetro não está rodando
    clearInterval(cronometro); //Pausa o cronômetro

    //Zera as variáveis
    hora = 0;
    minutos = 0;
    segundos = 0;

    document.getElementById('relogio').innerText = '00:00:00'; //Altera o display do relógio para o padrão
}

function timer() { //Timer
    segundos++; //Incrementa os segundos a cada vez que entra na função
    if (segundos == 60){ // Adiciona minuto
        segundos = 0;
        minutos++
        if (minutos == 60){ // Adiciona hora
            minutos = 0;
            hora++;
        }
    }
  
    //Retorna o display formatado
    var display = (hora < 10 ? '0' + hora : hora) + ':' + (minutos < 10 ? '0' + minutos : minutos) + ':' + (segundos < 10 ? '0' + segundos : segundos)
    document.getElementById('relogio').innerText = display
    return display;
}