let canvas = document.getElementById("snake");
let context = canvas.getContext("2d"); // Context renderiza o Canvas, "getContext 2d" trata o canvas como 2D //
let box = 32; // 32 pixels cada quadrado//

function criarBG(){ // Funcao para definir background //
    context.fillStyle = "lightgreen"; // fillStyle trabalha com o Context do Canvas //
    context.fillRect(0, 0, 16 * box, 16 * box); // fillRect, irá desenhar o "retangulo", onde irá ocorrer o game **** Trabalha com 4 parametros: posicao de X e Y, altura e largura//
}
criarBG();