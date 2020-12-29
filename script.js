let canvas = document.getElementById("snake");
let context = canvas.getContext("2d"); // Context renderiza o Canvas, "getContext 2d" trata o canvas como 2D //
let box = 32; // 32 pixels cada quadrado//

let snake = [];
    snake[0] = {
    x: 8 * box,
    y: 8 * box
} // Posicao de inicio //

let direction = "right";

let food = {
    x: Math.floor(Math.random() * 15 + 1) * box, // Math.floor irá retornar um número INTEIRO que esteja dentro de Math.random. 
    
    //Math.random irá gerar um número aleatório entre ZERO e UM.
    y: Math.floor(Math.random() * 15 + 1) * box
}





// Criar Background //

function criarBG(){ // Funcao para definir background //
    context.fillStyle = "lightgreen"; // fillStyle trabalha com o Context do Canvas //
    context.fillRect(0, 0, 16 * box, 16 * box); // fillRect, irá desenhar o "retangulo", onde irá ocorrer o game **** Trabalha com 4 parametros: posicao de X e Y, altura e largura//
}





// Criar Cobra //

function criarCobrinha (){
    for(i=0; i < snake.length; i++){ // Vai percorrer todo o tamanho do array e vai incrementar //
    context.fillStyle = "green"; // Setando a cor verde //
    context.fillRect(snake[i].x, snake[i].y, box, box);
    } // tamanho de x e y setado lá em cima no let snake, o box setado em let box - tamanho de um quadradinho //
}


// Comida //
function drawFood(){
    context.fillStyle = "red"; // Cor da comida //
    context.fillRect(food.x,food.y, box, box); // Definir a localizacao da comida
}




// Movimentacao //

document.addEventListener('keydown', update); // Evento listener, irá chamar a funcao update quando o clique no keydown for realizado //

function update (event) {
    if(event.keyCode == 37 && direction !="right") direction = "left";
    if(event.keyCode == 38 && direction != "down") direction = "up";
    if(event.keyCode == 39 && direction != "left") direction = "right";
    if(event.keyCode == 40 && direction != "up") direction = "down"; 
}




// Iniciar Jogo //

function iniciarJogo(){

    // Criando o "loop" para a cobrinha nao sair do quadrado //
    if(snake[0].x > 15 * box && direction == "right") snake[0].x = 0; // Se a posicao ZERO do snake for maior que 15 na direcao Right, a posicao ZERO do snake recebera ZERO novamente.
    if(snake[0].x < 0 && direction == "left") snake[0].x = 16 * box; // Se a posicao ZERO do snake for menor que ZERO (no caso -1) na direcao left, a posicao ZERO do snake recebera 16.
    if(snake[0].y > 15 * box && direction == "down") snake[0].y = 0; // Se a posicao ZERO do snake for maior que 15 na direcao down, a posicao ZERO do snake recebera ZERO novamente.
    if(snake[0].y < 0 && direction == "up") snake[0].y = 16 * box; // Se a posicao ZERO do snake for menor que 0 na direcao up, a posicao ZERO do snake recebera ZERO novamente.
criarBG();
criarCobrinha();
drawFood();

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