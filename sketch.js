var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,dropPoint,dropPointIMG;
var gameState = 1;

function preload(){
	sound = loadSound("https://yashgupta789.github.io/SupplyMission/sound.mp3");
	bg = loadImage("https://yashgupta789.github.io/SupplyMission/bg3.jpg");
	packageIMG = loadImage("https://yashgupta789.github.io/SupplyMission/package.png");
	dropPointIMG = loadImage("https://yashgupta789.github.io/SupplyMission/dropPoint.png")
	helicopter1 = loadAnimation("https://yashgupta789.github.io/SupplyMission/helicopter1.png");
	helicopter2 = loadAnimation("https://yashgupta789.github.io/SupplyMission/helicopter1.png","https://yashgupta789.github.io/SupplyMission/helicopter1.png","https://yashgupta789.github.io/SupplyMission/helicopter1.png",
	"https://yashgupta789.github.io/SupplyMission/helicopter2.png","https://yashgupta789.github.io/SupplyMission/helicopter2.png","https://yashgupta789.github.io/SupplyMission/helicopter2.png",
	"https://yashgupta789.github.io/SupplyMission/helicopter3.png","https://yashgupta789.github.io/SupplyMission/helicopter3.png","https://yashgupta789.github.io/SupplyMission/helicopter3.png",
	"https://yashgupta789.github.io/SupplyMission/helicopter4.png","https://yashgupta789.github.io/SupplyMission/helicopter4.png","https://yashgupta789.github.io/SupplyMission/helicopter4.png");
}
function setup() {
	createCanvas(1000, 700);

	groundSprite=createSprite(width/2, height-5, width,10);
	groundSprite.shapeColor=color(255);
	groundSprite.visible = false;

	dropPoint = createSprite(820,620,50,20);
	dropPoint.addImage(dropPointIMG);
	dropPoint.scale = 0.48;
	//dropPoint.debug = true;
	dropPoint.setCollider("obb",0,80,350,120);

	packageSprite = createSprite(200,200,80,80);
	packageSprite.addImage(packageIMG);
	packageSprite.scale = 0.25;

	helicopterSprite=createSprite(200,200, 10,10);
	helicopterSprite.addAnimation("helicopter",helicopter2);
	helicopterSprite.scale=0.75;
	sound.play();
	
}

function draw() {
  background(bg);
 
  packageSprite.collide(groundSprite);

  if(gameState === 1){
	 packageSprite.x = helicopterSprite.x;
	 keyPressed();
	 key1();
	 key2();
  }

  if(gameState === 2){
	
	 packageSprite.velocityY = packageSprite.velocityY+2;
	 if(packageSprite.isTouching(dropPoint)){
		packageSprite.collide(dropPoint);
		gameState = 3;
	   }
   }	 

  if(gameState === 3){
	  correct();
  }

  drawSprites();
}

function keyPressed() {
  if(keyCode === DOWN_ARROW) {
    gameState = 2;   
  }
}

function key1() {
	if(keyIsDown(LEFT_ARROW)){
	   helicopterSprite.x = helicopterSprite.x-5;
	   helicopterSprite.addAnimation("helicopter",helicopter2);
	}
}

function key2() {
	if(keyIsDown(RIGHT_ARROW)){
	   helicopterSprite.x = helicopterSprite.x+5;
	   helicopterSprite.addAnimation("helicopter",helicopter2);	   
	}
}

function correct(){
	strokeWeight(4);
	stroke("yellow");
	fill("orangered");
	textSize(55);
	textFont("MV Boli");
	text("Nice! You Dropped The Parcel",130,350);
	text("At correct Place",300,420);
}
