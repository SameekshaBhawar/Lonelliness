var dman,a1,a2,a3
var mayor,p1,p2,p3,p4,p5,p6,p7,stone

function preload(){
 dmanImg = loadImage("Images/Diseased Man.png")
 cityImg = loadImage("Images/City.jpg")
 a1Img = loadImage("Images/A1.png")
 a2Img = loadImage("Images/A2.png")
 a3Img = loadImage("Images/A3.png")
 mayorImg = loadImage("Images/Mayor.png")
 p1Img = loadImage("Images/P1.png")
 p2Img = loadImage("Images/P2.png")
 p3Img = loadImage("Images/P3.png")
 p4Img = loadImage("Images/P4.png")
 p5Img = loadImage("Images/P5.png")
 p6Img = loadImage("Images/P6.png")
 p7Img = loadImage("Images/P7.png")
 stoneImg = loadImage("Images/Stone.png")
 }



function setup() {
  createCanvas(1550,700);
 dman = createSprite(750, 550, 50, 50);
 city = createSprite(800,300); 
 a1 = createSprite(600,500);
 a2 = createSprite(200,500);
 a3 = createSprite(100,120);
 mayor = createSprite(750,550,50,50);
 p1 = createSprite(420,520,30,40);
 p2 = createSprite(430,530,30,60);
 p3 = createSprite(130,230,10,50);
 p4 = createSprite(300,200,60,50);
 p5 = createSprite(260,320,60,50);
 p6 = createSprite(350,420,20,50);
 p7 = createSprite(250,220,10,40);
 
 stone = createSprite(440,440,20,10);

 dman.addImage(dmanImg)
 dman.scale=0.2
 
 city.addImage(cityImg)
 city.scale=3.0
 
 a1.addImage(a1Img)
 a1.scale=0.5
 a2.addImage(a2Img)
 a2.scale=0.2
 a3.addImage(a3Img)
 a3.scale=0.3

 mayor.addImage(mayorImg)
 mayor.scale=0.2

 p1.addImage(p1Img)
 p1.scale=0.2
 p2.addImage(p2Img)
 p2.scale=0.2
 p3.addImage(p3Img)
 p3.scale=0.2
 p4.addImage(p4Img)
 p4.scale=0.2
 p5.addImage(p5Img)
 p5.scale=0.2
 p6.addImage(p6Img)
 p6.scale=0.2
 p7.addImage(p7Img)
 p7.scale=0.2

 stone.addImage(stoneImg)
 
 }


function draw() {
  background("white");  
  drawSprites();


 }