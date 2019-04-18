var hero = {
    top: 700,
    left: 800

};

var alienShip = {
    top: 100,
    left: 800
};

var missiles = [];
var enemies = [{top: 100, left: 800}, {top: 100, left: 400}, {top: 100, left: 1200}];

function moveHero() {
    document.getElementById('hero').style.left = hero.left + 'px';
    
}

function drawMissiles() {

    document.getElementById('missiles').innerHTML = '';
    for(let missile = 0; missile < missiles.length; missile++){

        document.getElementById('missiles').innerHTML += `<div class='missile' style='left:${missiles[missile].left}px; top:${missiles[missile].top}px;'></div>`;
        
       
    }
}

function drawEnemies() {
    document.getElementById('enemies').innerHTML = '';
    for(let enemy = 0; enemy < enemies.length; enemy++){
        document.getElementById('enemies').innerHTML += `<div class='enemy' style='left:${enemies[enemy].left}px; top:${enemies[enemy].top}px;'></div>`;
    }
}

function moveMissiles() {
    for(let missile = 0; missile < missiles.length; missile++){
        missiles[missile].top = missiles[missile].top - 5;
    }
}

function moveEnemies() {
    for(let enemy = 0; enemy < enemies.length; enemy++){
        enemies[enemy].top = enemies[enemy].top + .5;
    }
}

function collisionDetection() {
    for(let enemy = 0; enemy < enemies.length; enemy++){
        for(let missile = 0; missile < missiles.length; missile++){
            if (
                (missiles[missile].top <= enemies[enemy].top + 125) && 
                (missiles[missile].top >= enemies[enemy].top)  &&
                (missiles[missile].left >= enemies[enemy].left)  &&
                (missiles[missile].left <= enemies[enemy].left + 100)     
            ){
                enemies.splice(enemy, 1);
                missiles.splice(missile, 1);

            } else if(enemies[enemy].top === hero.left){
                hero.splice();
            }
        }
    }
}

function gameLoop() {
    setTimeout(gameLoop, 10);
    moveMissiles();
    drawMissiles();
    drawEnemies();
    moveEnemies();
    collisionDetection();
}
gameLoop();

document.onkeydown = function(e) {
    console.log(e.keyCode);

    if (e.keyCode === 37) {
        console.log("LEFT");
        hero.left = hero.left - 40;
        moveHero();
    } else if (e.keyCode === 39) {
        console.log("RIGHT");
        hero.left = hero.left + 40;
        moveHero();
    } else if (e.keyCode === 32) {
        console.log('FIRE');
        missiles.push({ left: hero.left + 90, top: hero.top + 25});
        drawMissiles();

    }
}
