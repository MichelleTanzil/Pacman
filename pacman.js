var score = 0; 
var lives = 3;

var pacman = document.getElementById('pacman'); 
var ghost = document.getElementById('ghost'); 


var pacmanPos = {
    x: 1,
    y: 1
};

var ghostPos = {
    x:12,
    y:9
};

var world = [
    [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
    [2,0,1,2,1,1,1,1,1,1,1,2,3,1,2],
    [2,1,1,2,1,2,2,2,1,3,1,2,1,1,2],
    [2,1,1,2,3,2,2,2,1,1,1,1,1,1,2],
    [2,1,1,2,1,2,1,1,1,1,1,2,1,1,2],
    [2,1,1,2,1,2,1,1,1,1,1,2,3,1,2],
    [2,1,1,2,1,2,1,1,1,1,1,2,1,1,2],
    [2,3,1,2,1,2,1,1,1,1,1,2,3,1,2],
    [2,1,1,1,1,1,1,1,1,1,1,2,1,1,2],
    [2,1,1,1,1,1,1,1,1,1,1,3,1,1,2],
    [2,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
    [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
];

// 0: empty
// 1: coin
// 2: brick
// 3: cherries

//Drawing/Display world, pacman, and score

function displayWorld(){
    var output ='';

    for(var i = 0; i < world.length; i++){
        output += "\n<div class='row'>\n";
        for(var j = 0; j < world[i].length; j++){
            if(world[i][j] == 2){
                output +="<div class='brick'></div>";
            }
            else if(world[i][j] == 1){
                output +="<div class='coin'></div>";
            }
            else if(world[i][j] == 0){
                output +="<div class='empty'></div>";
            }
            else if(world[i][j] == 3){
                output +="<div class='cherry'></div>";
            }
        }
        output += "\n</div>";
    }
    // console.log(output);
    document.getElementById("world").innerHTML = output; 
}

function displayPacMan(){
    pacman.style.top = pacmanPos.y*20+"px";
    pacman.style.left = pacmanPos.x*20+"px";
}

function displayGhost(){
    ghost.style.top = ghostPos.y*20+"px";
    ghost.style.left = ghostPos.x*20+"px";
}

function displayScore(){
    document.getElementById('score').textContent = "Score: " + score;
}

function displayLives(){
    document.getElementById('lives').textContent = "Lives: " + lives;
}

//Score update
function updateScore(){
    if(world[pacmanPos.y][pacmanPos.x] == 1){
        world[pacmanPos.y][pacmanPos.x] = 0;
        score += 10; 
        displayWorld();
        displayScore();
    }
    else if(world[pacmanPos.y][pacmanPos.x] == 3){
        world[pacmanPos.y][pacmanPos.x] = 0;
        score += 50; 
        displayWorld();
        displayScore();
    }
}

//Mobility of pacman
document.onkeydown = function(e){
    if(e.keyCode == 37 && world[pacmanPos.y][pacmanPos.x -1] != 2 && pacmanPos.x > 0){
        pacmanPos.x -= 1; 
        pacman.style.backgroundImage= "url('pacman_left.gif')";       
    }
    else if(e.keyCode == 39 && world[pacmanPos.y][pacmanPos.x + 1] != 2 && pacmanPos.x > 0){
        pacmanPos.x += 1; 
        pacman.style.backgroundImage= "url('pacman_right.gif')";
    }
    else if(e.keyCode == 38 && world[pacmanPos.y - 1][pacmanPos.x] != 2 && pacmanPos.y > 0){
        pacmanPos.y -= 1; 
        pacman.style.backgroundImage= "url('pacman_up.gif')";
    }
    else if(e.keyCode == 40 && world[pacmanPos.y + 1][pacmanPos.x] != 2 && pacmanPos.y > 0){
        pacmanPos.y += 1;  
        pacman.style.backgroundImage= "url('pacman_down.gif')";
    }

    updateScore();
    displayPacMan();
    displayLives();
}



//Running the game
function runGame(){
    displayWorld();
    displayPacMan();
    displayGhost();
    displayScore();
    displayLives();
}

runGame();
