const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Constraint=Matter.Constraint;

var engine,world;
var exit
var coinGroup,MazesGroup,zombieGroup;
var score = 0;
var lifes = 3;
var you;
var noOfCoins = 0;
var noOfzombie = 0;






function preload(){
coinImg = loadImage("coin.jpg");
zombieImg = loadImage("mummy.jpg");
youImg = loadImage("you.jpg");
}

function setup() {
  createCanvas(1350,650);
  engine=Engine.create();
  world=engine.world;


  coinGroup = new Group();
  MazesGroup = new Group();
  zombieGroup = new Group();


  reset = createSprite(680,350,50,50);
  reset.visible = false;

  


  you = createSprite(100,100,20,20);
  you.shapeColor = "white";
  you.addImage(youImg);
  you.scale = 0.08


  Maze1 = createSprite(54,345,4,550);
  Maze1.shapeColor = "red";
  MazesGroup.add(Maze1);
  Maze2 = createSprite(1310,345,4,550);
  Maze2.shapeColor = "red";
  MazesGroup.add(Maze2);
  Maze3 = createSprite(680,68,1255,4);
  Maze3.shapeColor = "red";
  MazesGroup.add(Maze3);
  Maze4 = createSprite(680,618,1255,4);
  Maze4.shapeColor = "red";
  MazesGroup.add(Maze4);
  
  //creating inner walls
  Maze5 = createSprite(96,264,80,4);
  Maze5.shapeColor = "yellow";
  MazesGroup.add(Maze5);
  Maze6 = createSprite(96,420,80,4);
  Maze6.shapeColor = "yellow";
  MazesGroup.add(Maze6);
  Maze7 = createSprite(1267,264,80,4);
  Maze7.shapeColor = "yellow";
  MazesGroup.add(Maze7);
  Maze8 = createSprite(1267,420,80,4);
  Maze8.shapeColor = "yellow";
  MazesGroup.add(Maze8);

  Maze9 = createSprite(178,343,83,4);
  Maze9.shapeColor = "yellow";
  MazesGroup.add(Maze9);
  Maze10 = createSprite(1187,343,83,4);
  Maze10.shapeColor = "yellow";
  MazesGroup.add(Maze10);

  Maze11 = createSprite(178,147,83,4);
  Maze11.shapeColor = "yellow";
  MazesGroup.add(Maze11);
  Maze12 = createSprite(1185,147,83,4);
  Maze12.shapeColor = "yellow";
  MazesGroup.add(Maze12);
  Maze13 = createSprite(178,538,83,4);
  Maze13.shapeColor = "yellow";
  MazesGroup.add(Maze13);


  Maze15 = createSprite(430,147,83,4);
  Maze15.shapeColor = "yellow";
  MazesGroup.add(Maze15);
  Maze16 = createSprite(430,539,83,4);
  Maze16.shapeColor = "yellow";
  MazesGroup.add(Maze16);
  Maze17 = createSprite(933,147,83,4);
  Maze17.shapeColor = "yellow";
  MazesGroup.add(Maze17);


  Maze19 = createSprite(346,304,83,4);
  Maze19.shapeColor = "yellow";
  MazesGroup.add(Maze19);
  Maze20 = createSprite(1016,304,83,4);
  Maze20.shapeColor = "yellow";
  MazesGroup.add(Maze20);
  Maze21 = createSprite(1016,382,83,4);
  Maze21.shapeColor = "yellow";
  MazesGroup.add(Maze21);

  Maze22 = createSprite(599,304,83,4);
  Maze22.shapeColor = "yellow";
  MazesGroup.add(Maze22);
  Maze23 = createSprite(764,304,83,4);
  Maze23.shapeColor = "yellow";
  MazesGroup.add(Maze23);

  Maze24 = createSprite(262,225,83,4);
  Maze24.shapeColor = "yellow";
  MazesGroup.add(Maze24);
  Maze25 = createSprite(1100,225,83,4);
  Maze25.shapeColor = "yellow";
  MazesGroup.add(Maze25);
  Maze26 = createSprite(262,459,83,4);
  Maze26.shapeColor = "yellow";
  MazesGroup.add(Maze26);
  Maze27 = createSprite(1100,459,83,4);
  Maze27.shapeColor = "yellow";
  MazesGroup.add(Maze27);

  Maze28 = createSprite(682,187,4,77);
  Maze28.shapeColor = "yellow";
  MazesGroup.add(Maze28);
  Maze29 = createSprite(682,499,4,77);
  Maze29.shapeColor = "yellow";
  MazesGroup.add(Maze29);

  Maze30 = createSprite(304,110,4,77);
  Maze30.shapeColor = "yellow";
  MazesGroup.add(Maze30);
  Maze31 = createSprite(1059,110,4,77);
  Maze31.shapeColor = "yellow";
  MazesGroup.add(Maze31);
  Maze32 = createSprite(304,576,4,77);
  Maze32.shapeColor = "yellow";
  MazesGroup.add(Maze32);
  Maze33 = createSprite(1059,576,4,77);
  Maze33.shapeColor = "yellow";
  MazesGroup.add(Maze33);

  Maze34 = createSprite(473,420,4,77);
  Maze34.shapeColor = "yellow";
  MazesGroup.add(Maze34);
  Maze35 = createSprite(473,265,4,77);
  Maze35.shapeColor = "yellow";
  MazesGroup.add(Maze35);
  Maze36 = createSprite(890,420,4,77);
  Maze36.shapeColor = "yellow";
  MazesGroup.add(Maze36);
  Maze37 = createSprite(890,265,4,77);
  Maze37.shapeColor = "yellow";
  MazesGroup.add(Maze37);

  Maze38 = createSprite(557,344,4,77);
  Maze38.shapeColor = "yellow";
  MazesGroup.add(Maze38);
  Maze39 = createSprite(807,344,4,77);
  Maze39.shapeColor = "yellow";
  MazesGroup.add(Maze39);

  Maze40 = createSprite(389,227,4,155);
  Maze40.shapeColor = "yellow";
  MazesGroup.add(Maze40);
  Maze41 = createSprite(975,227,4,155);
  Maze41.shapeColor = "yellow";
  MazesGroup.add(Maze41);
  Maze42 = createSprite(389,460,4,155);
  Maze42.shapeColor = "yellow";
  MazesGroup.add(Maze42);
 

  Maze44 = createSprite(220,343,4,235);
  Maze44.shapeColor = "yellow";
  MazesGroup.add(Maze44);
  Maze45 = createSprite(1143,343,4,235);
  Maze45.shapeColor = "yellow";
  MazesGroup.add(Maze45);

  Maze46 = createSprite(137,167,4,40);
  Maze46.shapeColor = "yellow";
  MazesGroup.add(Maze46);
  Maze47 = createSprite(137,519,4,40);
  Maze47.shapeColor = "yellow";
  MazesGroup.add(Maze47);
  Maze48 = createSprite(1227,167,4,40);
  Maze48.shapeColor = "yellow";
  MazesGroup.add(Maze48);
  Maze50 = createSprite(682,382,247,4);
  Maze50.shapeColor = "yellow";
  MazesGroup.add(Maze50);

  Maze51 = createSprite(682,148,249,4);
  Maze51.shapeColor = "yellow";
  MazesGroup.add(Maze51);
  Maze52 = createSprite(682,538,249,4);
  Maze52.shapeColor = "yellow";
  MazesGroup.add(Maze52);

  Maze53 = createSprite(535,225,126,4);
  Maze53.shapeColor = "yellow";
  MazesGroup.add(Maze53);
  Maze54 = createSprite(535,460,126,4);
  Maze54.shapeColor = "yellow";
  MazesGroup.add(Maze54);
  Maze55 = createSprite(829,225,126,4);
  Maze55.shapeColor = "yellow";
  MazesGroup.add(Maze55);
Maze57 = createSprite(346,382,83,4);
Maze57.shapeColor = "yellow";
MazesGroup.add(Maze57);
}

function draw() {
  if(lifes > 0){
  background("white");  }
if (lifes === 0){
  background("black")
}

  Engine.update(engine);

  zombieGroup.bounceOff(MazesGroup);
  you.bounceOff(MazesGroup);

  if(score === 2){
    zombieGroup.destroyEach;
  }
  
  if(you.isTouching(coinGroup)){
        coinGroup.destroyEach();
        score = score+1;
        noOfCoins = noOfCoins - 1;
    
  }
  if(you.isTouching(zombieGroup)){
    lifes = lifes - 1;
    you.x = 100;
    you.y = 100;
  }
  if(lifes === 0){
    coinGroup.destroyEach();
    MazesGroup.destroyEach();
    zombieGroup.destroyEach();
    textSize(50);
    textAlign(CENTER,TOP);
    fill("yellow");
    stroke("red");
    strokeWeight(5);
    text("you died", 500, 500, 300, 300);
  }
  if(score === 92){
    coinGroup.destroyEach();
    MazesGroup.destroyEach();
    zombieGroup.destroyEach();
    textSize(50);
    textAlign(CENTER,TOP);
    fill("yellow");
    stroke("red");
    strokeWeight(5);
    text("you win", 500, 500, 300, 300);
  }




textSize(20);
textAlign(CENTER,TOP);
fill("yellow");
stroke("red");
strokeWeight(5);
text(score,50, 10, 300, 300);

textSize(20);
    textAlign(CENTER,TOP);
    fill("yellow");
    stroke("red");
    strokeWeight(5);
    text("money", 100, 10, 300, 300);

    textSize(20);
    textAlign(CENTER,TOP);
    fill("yellow");
    stroke("red");
    strokeWeight(5);
    text(lifes, 250, 10, 300, 300);

textSize(20);
    textAlign(CENTER,TOP);
    fill("yellow");
    stroke("red");
    strokeWeight(5);
    text("lifes", 280, 10, 300, 300);
if (score === 0){
    textSize(20);
    textAlign(CENTER,TOP);
    fill("yellow");
    stroke("red");
    strokeWeight(5);
    text("you need money to escape and it sells for a random amount", 500, 600, 300, 300);}
if (score === 1){
   zombie1 = createSprite(600,400,20,20);  
zombie1.shapeColor ="green"; 
zombie1.velocityX = 5; 
zombie1.velocityY = 4;
 zombieGroup.add(zombie1); 
 zombie1.addImage(zombieImg); 
 zombie1.scale = 0.05 
 score = score + 9;
 }
 if (score === 15){
  zombie2 = createSprite(200,400,20,20);
  zombie2.shapeColor ="green"; 
  zombie2.velocityX = -10; 
  zombie2.velocityY = +10;
  zombieGroup.add(zombie2); 
  zombie2.addImage(zombieImg); 
  zombie2.scale = 0.05
 score = score + 9;
 }
  if (score === 28){
  zombie3 = createSprite(1000,400,20,20); 
  zombie3.shapeColor ="green"; 
    zombie3.velocityX = -6; 
    zombie3.velocityY = +2;
     zombieGroup.add(zombie3);
      zombie3.addImage(zombieImg); 
      zombie3.scale = 0.05
 score = score + 9;
 }

if (score === 40){
zombie4 = createSprite(970,100,20,20); 
      zombie4.shapeColor ="green"; 
      zombie4.velocityX = +1; 
      zombie4.velocityY = +1; zombieGroup.add(zombie4);
       zombie4.addImage(zombieImg); 
       zombie4.scale = 0.05 
 score = score + 9;
 }
  
  if (score === 51){
zombie5 = createSprite(1000,400,20,20); 
       zombie5.shapeColor ="green"; 
       zombie5.velocityX = 7; 
       zombie5.velocityY = 8; 
       zombieGroup.add(zombie5); 
       zombie5.addImage(zombieImg); 
       zombie5.scale = 0.05  
 score = score + 9;
 }
   if (score === 61){
       zombie6 = createSprite(600,200,20,20); 
       zombie6.shapeColor ="green"; 
       zombie6.velocityX = 6; 
       zombie6.velocityY = -6; 
       zombieGroup.add(zombie6); 
       zombie6.addImage(zombieImg);
        zombie6.scale = 0.05  
 score = score + 9;
 }
   if (score === 72){
zombie7 = createSprite(700,500,20,20); 
        zombie7.shapeColor ="green"; 
        zombie7.velocityX = 4;
         zombie7.velocityY = 5; 
         zombieGroup.add(zombie7);
          zombie7.addImage(zombieImg); 
          zombie7.scale = 0.05 
 score = score + 9;
 }
    if (score === 82){
          zombie8 = createSprite(800,600,20,20); 
          zombie8.shapeColor ="green"; 
          zombie8.velocityX = -4; 
          zombie8.velocityY = 4; 
          zombieGroup.add(zombie8);
           zombie8.addImage(zombieImg);
            zombie8.scale = 0.05
 score = score + 9;
   }

  if(keyCode === 38){
    you.velocityY = -5;
    you.velocityX = 0;
  }
  else if(keyCode === 40){
    you.velocityY = 5;
    you.velocityX = 0;
  }
  else if(keyCode === 37){
    you.velocityX = -5;
  you.velocityY = 0;
  }
  else if(keyCode === 39){
    you.velocityX = 5;
    you.velocityY = 0;
  }
     drawSprites();
     if(noOfCoins === 1){}
     else{spawnCoins();
     }

     
}
    



   if(lifes === 0){
  coinGroup.destroyEach();
  you.velocityX = 0;
  you.velocityY = 0;
  zombieGroup.destroyEach();
  MazesGroup.destroyEach();
   }
   function spawnCoins(){ 
  
  var coins = createSprite(Math.round(random(80,1200)),Math.round(random(80,600)),40,10);
  noOfCoins = noOfCoins + 1;
 coins.addImage(coinImg);
 coins.scale = 0.02;
coinGroup.add(coins);}


