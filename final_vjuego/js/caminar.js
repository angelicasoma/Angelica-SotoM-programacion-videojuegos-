var game = new Phaser.Game(800, 600, Phaser.AUTO,'',{preload:preload, create, update:update});

var player;

function preload(){
    game.load.spritesheet('astronauta', 'sprites/astronauta.png' ,30.9, 32);
    game.load.image('fondo', 'imagenes/comandos_2.png');
};

function create(){
    //agregar color de fondo
    game.stage.backgroundColor='#4488AA';
    fondo = game.add.tileSprite(0,0, 2048,1024, 'fondo');


    // Colocar el heroe en el escenario
    player = game.add.sprite(game.width/2,game.height/1.3,'astronauta');

    // Las animaciónes           el nomero de pose    10=frames por segunda True es que es en loop
    player.animations.add('der',[6,7,8,], 5,true);
    player.animations.add('izq',[3,4,5,], 5,true);

    //Asignar las animaciones a teclas
    derecha = game.input.keyboard.addKey(Phaser.Keyboard.D);
    izquierda = game.input.keyboard.addKey(Phaser.Keyboard.A);
    
};
function update(){
    if (derecha.isDown){
        player.x +=1;
        player.animations.play('der');
    }

    else if(izquierda.isDown){
        player.x -=1;
        player.animations.play('izq');
    }

    else{
        player.animations.stop();
        player.frame =1;
    }
};