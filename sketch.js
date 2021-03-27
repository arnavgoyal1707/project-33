var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var particle;
var plinkos = [];
var Division = [];
var divisionHeight=300;
var score =0;
var count=0;
var gameState='play'
var ball;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }
    for (var k = 0; k <=width; k = k + 80) {
      Division.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
 text("Score : "+score,20,30);
  Engine.update(engine);
 
  console.log(count)
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   //if(frameCount%60===0){
   //  particles.push(new Particle(random(width/2-400, width/2+400), 10,10));
   //  score++;
   //}
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   for (var l = 0; l < Division.length; l++) {
     
    Division[l].display();
    
  }
text('500',20,560)
text('500',100,560)
text('500',180,560)
text('500',260,560)
text('100',340,560)
text('100',420,560)
text('100',500,560)
text('200',580,560)
text('200',660,560)
text('200',740,560)

if(count>4){
  gameState='end';
  fill('white');
  textSize(60);
  text("game over",250,250)}

if(particle!=null){
  particle.display();
  if(particle.body.position.y>560){
    count=count+1;
    if(particle.body.position.x>0&&particle.body.position.x<300){
      score=score+500;
      particle=null;
    }
  }
}    



if(particle!=null){
  particle.display();
  if(particle.body.position.y>560){

    if(particle.body.position.x>301&&particle.body.position.x<540){
      score=score+100;
      particle=null;
    }
  }
}


if(particle!=null){
  particle.display();
  if(particle.body.position.y>560){
    if(particle.body.position.x>541&&particle.body.position.x<800){
      score=score+200;
      particle=null;
    }
  }
}




}
function mousePressed(){
  if(gameState!='end'){
     particle=new Particle(mouseX,10,10,10);
    
    }
}