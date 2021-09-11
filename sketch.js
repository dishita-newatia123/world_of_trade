var player_sprite,trader1_sprite,trader2_sprite,trader3_sprite,trader4_sprite,buy_or_sell;


function preload(){
  player = loadImage("me.png")
  trader1 = loadImage("trader1.png")
  trader2 = loadImage("trader 2.png")
  market = loadImage("market.jpg")
  trader3 = loadImage("trader 3.png")
  trader4 = loadImage("trader 4.png")

}

function setup() {
  createCanvas(1400,1400);


  player_sprite = createSprite(700,1200,10,10);
  player_sprite.addImage(player);
  player_sprite.scale=0.7

  trader1_sprite = createSprite(90,900,10,10);
  trader1_sprite.addImage(trader1);
  trader1_sprite.scale=0.7

  trader2_sprite = createSprite(900,700,10,10);
  trader2_sprite.addImage(trader2);
  trader2_sprite.scale=0.7

  trader3_sprite = createSprite(600,800,10,10);
  trader3_sprite.addImage(trader3);
  trader3_sprite.scale=0.4
 
  trader4_sprite = createSprite(1000,1000,10,10);
  trader4_sprite.addImage(trader4);
  trader4_sprite.scale=0.8
 
  
}

function draw() {
  background(market);  
drawSprites();

}