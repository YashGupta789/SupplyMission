var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,dropPoint,dropPointIMG,boy,boyIMG;
var button1,button2,button3;
var gameState = 1;

function preload(){
	sound = loadSound("https://yashgupta789.github.io/SupplyMission/sound.mp3");
	boyIMG = loadImage("https://yashgupta789.github.io/SupplyMission/boy.png");
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

	dropPoint = createSprite(780,620,50,20);
	dropPoint.addImage(dropPointIMG);
	dropPoint.scale = 0.48;
	//dropPoint.debug = true;
	dropPoint.setCollider("obb",0,80,350,120);

        boy = createSprite(920,580,20,20);
	boy.addImage(boyIMG);
	boy.scale = 0.4;

	packageSprite = createSprite(200,220,80,80);
	packageSprite.addImage(packageIMG);
	packageSprite.scale = 0.25;

	helicopterSprite=createSprite(200,220, 10,10);
	helicopterSprite.addAnimation("helicopter",helicopter2);
	helicopterSprite.scale=0.75;
	sound.play();

	button1 = createButton('🡸');
	button1.position(930,910);
	button1.style('font-size','28px');
	button1.style('width', '55px');
        button1.style('height', '42px');
	button1.style('background',  rgb(255, 185, 207));
	
	button2 = createButton('🡺');
	button2.position(1010,910);
	button2.style('font-size','28px');
	button2.style('width', '55px');
        button2.style('height', '42px');
	button2.style('background', rgb(255, 185, 207));

	button3 = createButton('DROP THE PACKAGE');
	button3.position(890,970);
	button3.style('font-size','20px');
	button3.style('width', '220px');
        button3.style('height', '40px');
	button3.style('background', rgb(44, 255, 59));
}

function draw() {
  background(bg);
 
  packageSprite.collide(groundSprite);

  if(gameState === 1){
	 packageSprite.x = helicopterSprite.x;
	 keyPressed();
	 key1();
	 key2();
	 key3();
	button1.mousePressed(() => {
		helicopterSprite.x = helicopterSprite.x-30;
		helicopterSprite.addAnimation("helicopter",helicopter2);
	})
	button2.mousePressed(() => {
		helicopterSprite.x = helicopterSprite.x+30;
		helicopterSprite.addAnimation("helicopter",helicopter2);
	})
  }

  if(gameState === 2){
	 packageSprite.velocityY = packageSprite.velocityY+2;
	 if(packageSprite.isTouching(dropPoint)){
		packageSprite.collide(dropPoint);
		gameState = 3;
	   }
	   button1.mousePressed(() => {
		helicopterSprite.x = helicopterSprite.x-0;
	  })
	  button2.mousePressed(() => {
		helicopterSprite.x = helicopterSprite.x+0;
	  })
	  button3.mousePressed(() => {
		 
	  })
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

function key3(){
	button3.mousePressed(() => {
	    gameState = 2;
	})
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
