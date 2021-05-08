var canvas;
var block1,block2,block3,block4;
var ball, edges;
var music;

function preload(){
    music = loadSound("music.mp3")
}


function setup(){
    canvas = createCanvas(800,600);

    block1 = createSprite(0,580,360,30);
    block1.shapeColor = "blue";

    block2 = createSprite(295,580,200,30);
    block2.shapeColor = "orange";
    
    block3 = createSprite(500,580,200,30);
    block3.shapeColor = "yellow";

    block4 = createSprite(700,580,200,30);
    block4.shapeColor = "green";
    

    ball = createSprite(random(20,750),100, 40,40);
    ball.shapeColor = rgb(255,255,255);
    ball.velocityY= 5;

}

function draw() {
    background(rgb(169,169,169));
    edges=createEdgeSprites();
    ball.bounceOff(edges);

    
    //write code to bounce off ball from the block1 
    if(block1.isTouching(ball) && ball.bounceOff(block1)){
        ball.shapeColor = "blue";
        ball.velocityX = -3;
        ball.velocityY = -5;
        music.stop();
    }



    if(block2.isTouching(ball) && ball.bounceOff(block2)){
        ball.shapeColor = "orange";
        ball.velocityX = -2;
        ball.velocityY = -3;
        music.play();
        
        
        

        //write code to stop music
    }

    //write code to bounce off ball from the block3
    if (block3.isTouching(ball) && ball.bounceOff(block3)){
        ball.shapeColor = "red";
        ball.velocityX = -3;
        ball.velocityY = -7;
        music.stop();
        
    }

    //write code to bounce off ball from the block4
    if (block4.isTouching(ball) && ball.bounceOff(block4)) {
        ball.shapeColor = "pink";
        ball.velocityX = -2;
        ball.velocityY = -2;
        music.play();
        
    }
    drawSprites();
}
