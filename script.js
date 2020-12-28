let canvas = document.getElementById("snake");
let context = canvas.getContext("2d"); // Context renderiza o Canvas, "getContext 2d" trata o canvas como 2D //
let box = 32; // 32 pixels cada quadrado//
let snake = [];
snake[0] = {
    x: 8 * box,
    y: 8 * box
} // Posicao de inicio //



function criarBG(){ // Funcao para definir background //
    context.fillStyle = "lightgreen"; // fillStyle trabalha com o Context do Canvas //
    context.fillRect(0, 0, 16 * box, 16 * box); // fillRect, irá desenhar o "retangulo", onde irá ocorrer o game **** Trabalha com 4 parametros: posicao de X e Y, altura e largura//
}

function criarCobrinha (){
    for(i=0; i < snake.length; i++){ // Vai percorrer todo o tamanho do array e vai incrementar //
    context.fillStyle = "green"; // Setando a cor verde //
    context.fillRect(snake[i].x, snake[i].y, box, box);
    } // tamanho de x e y setado lá em cima no let snake, o box setado em let box - tamanho de um quadradinho //
}

criarBG();
criarCobrinha();