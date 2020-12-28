let canvas = document.getElementById("snake");
let context = canvas.getContext("2d"); // Context renderiza o Canvas, "getContext 2d" trata o canvas como 2D //
let box = 32; // 32 pixels cada quadrado//

let snake = [];
    snake[0] = {
    x: 8 * box,
    y: 8 * box
} // Posicao de inicio //

let direction = "right";

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

function iniciarJogo(){
criarBG();
criarCobrinha();

let snakeX = snake[0].x; //Posicao ZERO de X // 
let snakeY = snake[0].y; // Posicao ZERO de Y //

//Coordenas para movimentacao //

if (direction == "right") snakeX += box; // Se a direcao for direita, aumenta um box //

if (direction == "left") snakeX -= box; // Se a direcao for esquerda, reduz um box //

if (direction == "up") snakeY -= box; // Se a direcao for para cima, reduz um box //

if (direction == "down") snakeY += box; // Se a direcao for para baixo, acrescenta um box //

snake.pop(); // funcao que retira o ultimo elemento do array //

let newHead = {
    x: snakeX,
    y: snakeY
    }

    snake.unshift(newHead); // metodo unshift, acrescenta no primeiro lugar //

}

let jogo = setInterval(iniciarJogo,100); // Irá iniciar o jogo após 100 milisegundos //