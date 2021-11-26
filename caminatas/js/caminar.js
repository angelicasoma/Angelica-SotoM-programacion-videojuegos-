var game = new Phaser.Game(3000, 1024, Phaser.AUTO,'',{preload:preload, create, update:update});

var player;

function preload(){
    game.load.spritesheet('yukiko', 'sprites/yukiko2.png' ,148.9999, 279.99);
    game.load.image('fondo', 'fondos/Backgrounds/bg109_01.png');
};

function create(){
    //agregar color de fondo
    game.stage.backgroundColor='#4488AA';
    fondo = game.add.tileSprite(0,0, 2048,1024, 'fondo');


    // Colocar el heroe en el escenario
    player = game.add.sprite(game.width/3,game.height/1.7,'yukiko');

    // Las animaciónes           el nomero de pose    10=frames por segunda True es que es en loop
    player.animations.add('der',[11,12,13,14,15,16,17,18,19,20,], 10,true);
    player.animations.add('izq',[1,2,3,4,5,6,7,8,9,10,], 10,true);

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
        player.frame =0;
    }
};