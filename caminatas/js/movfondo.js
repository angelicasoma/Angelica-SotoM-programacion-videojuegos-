//la variable de "game" nos sirve para una instancia de la copia del juego o JS

var game = new Phaser.Game(1080, 608, Phaser.AUTO,'',{preload:preload, create, update:update});

var player;

// El juego se divide en 3 fases, :precarga(preload), crear(create) y actualizar (update)
// Con preload cargamos en la meoria de la compu. los elemenos que vamos a usar

function preload(){
    game.load.spritesheet('chica', 'sprites/spriite1.png', 60,60);
    game.load.image('cdmx','fondos/mexico.jpeg');
};

// La funcion crear create, nos permite colocar los objetos en el escenario
function create(){
    //agregar color/ imagen de fondo
    // game.stage.backgroundColor='#4488AA';
    fondo = game.add.tileSprite(0,0, 1080,605, 'cdmx')

    // Colocar el heroe en el escenario
    player = game.add.sprite(game.width/5, game.height / 1.2,'chica');

    // Las animaciónes           el nomero de pose    10=frames(velocidad) por segunda True es que es en loop
    player.animations.add('der',[17,18,19,20, 21, 22, 23,], 10,true);
    player.animations.add('izq',[10,11,12,13, 14, 15,], 10,true);

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
        player.frame =3;
    
    }
};