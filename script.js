// ---------- VARIÁVEIS ----------

//Relógio
var hora = 0;
var minutos = 0;
var segundos = 0;

var tempo = 1000; //A variável tempo armazena um segundo (1000milisegundos)
var cronometro; //Responsável pelo cronômetro
var rodando = false; //Essa variável armazena se o cronometro está rodando ou não, começa em false

//Botões
var btn_iniciar = document.getElementById('iniciar');
var btn_pausar = document.getElementById('pausar');
var btn_zerar = document.getElementById('zerar');

// ---------- FUNCÕES ----------

function iniciar() { //Play
    if (rodando == false) { //Verifica se o crônometro está em funcionamento para saber se é necessário startar
        rodando = true; //Armazena que o cronômetro está rodando
        cronometro = setInterval(() => timer(), tempo); //Chama a função timer

        //Estilo dos botões
        btn_iniciar.style = 'transform: scale(1.1);'
        btn_pausar.style = 'transform: scale(1.0);'
        btn_zerar.style = 'color: linear-gradient(to right, #38ef7d, #11998e);'
    }
}

function pausar() { //Pause
    if (rodando == true) {
        clearInterval(cronometro); //Pausa o cronômetro
        rodando = false; //Armazena que o cronômetro não está rodando

        //Estilo dos botões
        btn_iniciar.style = 'transform: scale(1.0);'
        btn_pausar.style = 'transform: scale(1.1);'
        btn_zerar.style = 'color: linear-gradient(to right, #38ef7d, #11998e);'
    }
}

function zerar() { //Stop
    rodando = false; //Armazena que o cronômetro não está rodando
    clearInterval(cronometro); //Pausa o cronômetro

    //Zera as variáveis
    hora = 0;
    minutos = 0;
    segundos = 0;

    //Estilo dos botões
    btn_iniciar.style = 'transform: scale(1.0);'
    btn_pausar.style = 'transform: scale(1.0);'
    btn_zerar.style = 'background: linear-gradient(to right, #f85032, #e73827);'

    document.getElementById('relogio').innerText = '00:00:00'; //Altera o display do relógio para o padrão
}

function timer() { //Timer
    segundos++; //Incrementa os segundos a cada vez que entra na função
    if (segundos == 60) { // Adiciona minuto
        segundos = 0;
        minutos++
        if (minutos == 60) { // Adiciona hora
            minutos = 0;
            hora++;
        }
    }

    //Retorna o display formatado
    var display = (hora < 10 ? '0' + hora : hora) + ':' + (minutos < 10 ? '0' + minutos : minutos) + ':' + (segundos < 10 ? '0' + segundos : segundos)
    document.getElementById('relogio').innerText = display
    return display;
}