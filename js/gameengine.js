/**
 * Variaveis Globais
 */
var iniciado = true;
var velocidade = 1;

function GameEngine() {}

function MovimentaCenario() {
  if (iniciado) {
    var left = parseInt($('#area_jogo').css('background-position'));
    $('#area_jogo').css('background-position', left - velocidade);
  }
}

setInterval(MovimentaCenario, 30);
