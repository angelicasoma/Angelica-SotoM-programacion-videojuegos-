//la variable de "game" nos sirve para una instancia de la copia del juego o JS

var game = new Phaser.Game(800, 600, Phaser.AUTO,'',{preload:preload, create, update:update});

var player;

// El juego se divide en 3 fases, :precarga(preload), crear(create) y actualizar (update)
// Con preload cargamos en la meoria de la compu. los elemenos que vamos a usar

function preload(){
    game.load.spritesheet('astronauta', 'sprites/astronauta.png', 30.9,32);
    game.load.image('luna','imagenes/superficie_luna2.png');
};

// La funcion crear create, nos permite colocar los objetos en el escenario
function create(){
    //agregar color/ imagen de fondo
    // game.stage.backgroundColor='#4488AA';
    fondo = game.add.tileSprite(0,0, 1080,605, 'luna')

    // Colocar el heroe en el escenario
    player = game.add.sprite(game.width/2, game.height / 1.3,'astronauta');

    // Las animaciónes           el nomero de pose    10=frames(velocidad) por segunda True es que es en loop
    player.animations.add('der',[6,7,8,], 6,true);
    player.animations.add('izq',[3,4,5,], 6,true);

    //Asignar las animaciones a teclas
    derecha = game.input.keyboard.addKey(Phaser.Keyboard.D);
    izquierda = game.input.keyboard.addKey(Phaser.Keyboard.A);
    
};

// La funcion update  permite actualizar las animaciónes con velicidad que elijamos 

function update(){
    if (derecha.isDown){
        fondo.tilePosition.x -=1;
        player.animations.play('der');
    }

    else if(izquierda.isDown){
        fondo.tilePosition.x +=1;
        player.animations.play('izq');
    }

    else{
        player.animations.stop();
        player.frame =1;
    
    }
};

