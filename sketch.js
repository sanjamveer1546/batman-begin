const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var maxdrops =100;
var man;
var drops=[];
function preload(){
   
    
}

function setup(){
    var canvas = createCanvas(400,800);
    engine = Engine.create();
    world = engine.world;
     
    
    for(var i = 0 ;i<maxdrops ; i++){
     drops.push(new Drop(random(0,400),random(0,400),5,5));
    }
    man = new Umbrella(200,650,300,300)
}

function draw(){
    background(0);
   // Engine.update(engine);
    for(var i = 0 ;i<maxdrops ; i++){
        console.log(drops[i]);
       drops[i].display();
       }
       man.display();
}   

