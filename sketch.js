const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var particles = [];
var divisions = [];
var plinkos = [];
var divisionHeight=300;

function setup(){
    var canvas = createCanvas(600,600);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(400,600,800,20);

    for (var k = 0; k <=width; k = k + 80) {
      divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  for (var j = 150; j <=width-100; j=j+70) 
    {
    
       plinkos.push(new Plinko(j,100));
    }

    for (var j = 25; j <=width-10; j=j+60) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

    for (var j = 70; j <=width-20; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,260));
    }  

}

function draw(){
  background("black");  

    Engine.update(engine);
   
    ground.display();

    for (var i = 0; i < plinkos.length; i++) {

        plinkos[i].display();
    }

    if(frameCount%60===0){
      particles.push(new Particle(random(100, 700), 10,10));
    }

    for (var j = 0; j < particles.length; j++){

      particles[j].display();
    }

    for (var k = 0; k < divisions.length; k++) {

      divisions[k].display();
    }


}