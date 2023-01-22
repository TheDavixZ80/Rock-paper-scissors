// Variables
let puntajeHumano = 0;
let puntajeCpu = 0;

// Funciones | Metodos
function get_computerChoice() {

    const actions = ["Rock", "Paper", "Scissors" ];
    const cpu_generateAction = Math.floor(Math.random() * actions.length);

    const cpu_actionChoice = actions[cpu_generateAction];
    return cpu_actionChoice;
}

function get_playerChoice(x) {
    const player_actionChoice = document.getElementById(x).value;      
    return player_actionChoice;    
}

function set_result(x){
    result = x;
    document.querySelector('.result').textContent = result;    
}

function drawPickOnBoard(playerPick, playerType){
    
    x1='.playerSelection'
    x2='.cpuSelection' 

    if (playerType == 'human'){
        switch (playerPick){
            case "Rock":
                document.querySelector(x1).textContent = "✊"
                break;
            case "Paper":
                document.querySelector(x1).textContent = "📄"
                break;
            case "Scissors":
                document.querySelector(x1).textContent = "✂️"
                break;    
        }
    } else if (playerType == 'cpu'){
        switch (playerPick){
            case "Rock":
                document.querySelector(x2).textContent = "✊"
                break;
            case "Paper":
                document.querySelector(x2).textContent = "📄"
                break;
            case "Scissors":
                document.querySelector(x2).textContent = "✂️"
                break; 
        }   
    } else {
        alert("Select a valid option!");
    }
}

function play_game(computerChoice, playerChoice) {

    cpu_select = computerChoice;

    if (cpu_select === "Rock"){        
        switch (playerChoice) {
            case "Scissors":
                set_result("CPU wins!");
                puntajeCpu++;
                break;
            case "Paper":
                set_result("YOU win!");
                puntajeHumano++;
                break;
            case "Rock":
                set_result("DRAW");
                break;            
            default:
                set_result("NOT VALID")
                break;
        }

    } else if (cpu_select === "Paper"){
        switch (playerChoice) {
            case "Rock":
                set_result("CPU wins!");
                puntajeCpu++;
                break;
            case "Scissors":
                set_result("YOU win!");
                puntajeHumano++;
                break;
            case "Paper":
                set_result("DRAW");
                break;            
            default:
                set_result("NOT VALID");
                break;
        }

    } else if (cpu_select === "Scissors") {
        switch (playerChoice) {
            case "Paper":                
                set_result("CPU wins!");
                puntajeCpu++;
                break;
            case "Rock":                
                set_result("YOU win!");
                puntajeHumano++;
                break;
            case "Scissors":                
                set_result("DRAW");
                break;            
            default:
                set_result("NOT VALID");
                break;
        }

    } else {
        alert("Select a valid option!");
    }  

    // Actualizar & verificar puntajes
    /*document.querySelector('.humanScore').textContent = puntajeHumano;   
    document.querySelector('.cpuScore').textContent = puntajeCpu;*/
    updateScores(puntajeHumano, puntajeCpu);
    checkScores(puntajeHumano, puntajeCpu);
}
function updateScores(puntajeHumano, puntajeCpu){
    document.querySelector('.humanScore').textContent = puntajeHumano;   
    document.querySelector('.cpuScore').textContent = puntajeCpu;
}

function checkScores(){
    if (puntajeHumano == 5 || puntajeCpu == 5){
        openModal();
    }    
}

function resetScores(){
    puntajeCpu = 0;
    puntajeHumano = 0;
    document.querySelector('.result').textContent = "Best of 5";
    updateScores();
}

//ROCK
document.querySelector('#pl_rock').addEventListener('click', function () {
    document.querySelector('.mypick').textContent = 'Rock'; 
    
    const btn_value_get = document.getElementById("pl_rock").value; // Esto toma el valor del boton especificado en archivo html

    const playerChoice = btn_value_get;
    drawPickOnBoard(btn_value_get, 'human');
    const computerChoice = get_computerChoice();    
    drawPickOnBoard(computerChoice, 'cpu');
    document.querySelector('.cpupick').textContent = computerChoice;
    
    play_game(computerChoice, playerChoice);
});

//PAPER
document.querySelector('#pl_paper').addEventListener('click', function () {
    document.querySelector('.mypick').textContent = 'Paper';
    
    const btn_value_get = document.getElementById("pl_paper").value; 

    const playerChoice = btn_value_get; // Como podria mejorar esto? Deberia estar dentro de una funcion?
    drawPickOnBoard(btn_value_get, 'human');
    const computerChoice = get_computerChoice();    
    drawPickOnBoard(computerChoice, 'cpu');
    document.querySelector('.cpupick').textContent = computerChoice;
    
    play_game(computerChoice, playerChoice);
});

//SCISSORS
document.querySelector('#pl_scissors').addEventListener('click', function () {
    document.querySelector('.mypick').textContent = 'Scissors';   
    
    const btn_value_get = document.getElementById("pl_scissors").value; 

    const playerChoice = btn_value_get; 
    drawPickOnBoard(btn_value_get, 'human');
    const computerChoice = get_computerChoice();    
    drawPickOnBoard(computerChoice, 'cpu');
    document.querySelector('.cpupick').textContent = computerChoice;

    play_game(computerChoice, playerChoice);
});

// Modal Window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btn_restartGame = document.querySelector('.btn_restartGame')

const openModal = function () {
    if (puntajeHumano == 5) {        
        document.querySelector('.modal_message').textContent = '¡You have won the game!'
    }else{
        document.querySelector('.modal_message').textContent = 'You lose the game. ¡Try again!'
    }  
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

const closeModal = function () {      
    modal.classList.add('hidden');
    overlay.classList.add('hidden'); 
    resetScores();
}

btn_restartGame.addEventListener('click', closeModal)

