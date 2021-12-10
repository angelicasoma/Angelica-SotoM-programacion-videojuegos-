// La variable "game" nos sirve para almacenar una instancia del juego 

var game = new Phaser.Game(800, 600, Phaser.AUTO, '', {preload: preload, create: create, update})

var player;

// El juego se divide en tres fases: precarga(preload), crear (create), y actualizar (update). 
// Con el preload cargamos memoria de la computadora con los elementos que vamos a usar

function preload(){
    game.load.spritesheet('astronauta', 'sprites/astronauta.png', 30.9, 32);
    game.load.image('medica', 'imagenes/ala_medica.png');
};

// la función de crear nos permirmite colocar los objetos en el escenario 

function create(){
    // agregar imagen de fondo
    game.add.sprite(0,0, 'medica');
    
    //Colocar herore en el escenario
    player = game.add.sprite(game.width / 3, game.height / 1.6, 'astronauta');
   
    
    //Las animaciones
    player.animations.add('der', [6,7,8,], 5, true);
    player.animations.add('izq', [3,4,5,], 5, true);

    player.animations.add('cordeer', [6,7,8,], 15, true);
    player.animations.add('coriizq', [3,4,5,], 15, true);

    //asignar las animaciones a teclas 
    derecha = game.input.keyboard.addKey(Phaser.Keyboard.D);
    izquierda = game.input.keyboard.addKey(Phaser.Keyboard.A);

    corrderecha = game.input.keyboard.addKey(Phaser.Keyboard.L)
    corrizquierda = game.input.keyboard.addKey(Phaser.Keyboard.J)
    
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
    else if (corrderecha.isDown){
        player.x += 1;
        player.animations.play('cordeer')
    }
    else if (corrizquierda.isDown){
        player.x -=1;
        player.animations.play('coriizq')
    }

    else {
        player.animations.stop();
        player.frame = 1;
    }
    // else {
    //     player.animations.stop();
    //     player.frame = 1;
    // }

};