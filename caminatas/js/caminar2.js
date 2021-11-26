// La variable "game" nos sirve para almacenar una instancia del juego 

var game = new Phaser.Game(516, 158, Phaser.AUTO, '', {preload: preload, create: create, update})

var player;

// El juego se divide en tres fases: precarga(preload), crear (create), y actualizar (update). 
// Con el preload cargamos memoria de la computadora con los elementos que vamos a usar

function preload(){
    game.load.spritesheet('heroe', 'sprites/alucard2.png', 56.100, 59);
    game.load.image('castillo', 'fondos/castel.png');
};

// la función de crear nos permirmite colocar los objetos en el escenario 

function create(){
    // agregar imagen de fondo
    game.add.sprite(0,0, 'castillo');
    
    //Colocar herore en el escenario
    player = game.add.sprite(game.width / 3, game.height / 1.6, 'heroe');
    
    //Las animaciones
    player.animations.add('der', [0,1,2,3,4,5,6,7,8,9,10,11,12,13,], 10, true);
    player.animations.add('izq', [14,15,16,17,18,19,20,21,22,23, 24,25, 26,27,28,29,30,], 10, true);

    player.animations.add('corder', [31,32,33,34,35,36,37,38,39,40,41,42,43,44,], 10, true);
    player.animations.add('corizq', [50,], 10, true);

    //asignar las animaciones a teclas 
    derecha = game.input.keyboard.addKey(Phaser.Keyboard.D);
    izquierda = game.input.keyboard.addKey(Phaser.Keyboard.A);

    correrderecha = game.input.keyboard.addKey(Phaser.Keyboard.L)
    correrizquierda = game.input.keyboard.addKey(Phaser.Keyboard.J)
    
};

// La funcion de update permite actualizar las animaciones con velocidad que elijamos 

function update(){
    if (derecha.isDown){
        player.x += 1;
        player.animations.play('der')
    }
    else if (izquierda.isDown){
        player.x -=1;
        player.animations.play('izq')
    }
    else {
        player.animations.stop();
        player.frame = 12;
    }

    // if (correrderecha.isDown){
    //     player.x += 1;
    //     player.animations.play('corder')
    // }
    // else if (correrizquierda.isDown){
    //     player.x -=1;
    //     player.animations.play('corizq')
    // }
    // else {
    //     player.animations.stop();
    //     player.frame = 12;
    // }

};