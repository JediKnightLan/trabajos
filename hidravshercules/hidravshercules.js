let imagenes=[];
let estado=0;
let botonstart;
let botontutorial;
let botonvolver;
let r=0;
let g=255;
let b=0;
let r1=0;
let g1=255;
let b1=0;
let aNpc;
function preload (){
 imagenes [0]=loadImage ('data/ok.jpeg'); 
  
  
}


class Player{
constructor(x, y, ancho, alto){
this.x=x
this.y=y
this.ancho=ancho
this.alto=alto

}

dibuja(){
  image (imagenes[0], this.x, this.y, this.ancho, this.alto);//reemplazar por imagen de hidra 
}

ataca(){
  fill (0,255,0);
 ellipse (this.x, this.y, this.ancho, this.alto); //reemplazar cargando imagen de hidra atacando 
  
}
}

let player=new Player(100, 400, 100, 100);

class Npc{
constructor(x, y, ancho, alto){
this.x=x
this.y=y
this.ancho=ancho
this.alto=alto

}

dibuja(){
  image (imagenes[0], this.x, this.y, this.ancho, this.alto);//reemplazar por imagen de hercules
}

ataca(){
  fill (0,255,0);
 ellipse (this.x, this.y, this.ancho, this.alto); //reemplazar cargando imagen de hercules atacando 
}
}

let npc=new Npc(540, 100, 100, 100);


var vida={
  x:100,
  y:300,
  tamL:200,
  tamA:80,
  x1: 540,
  y1: 200}
  
var barra={
tamL:150,
tamA:20
}  

var barraNpc={
tamL:150,
tamA:20
}  

  


function setup() {
createCanvas (640, 480);
imageMode (CENTER);
rectMode (CENTER);
textAlign (CENTER, CENTER);
textSize (20);

botonstart = createButton('START');
  botonstart.position(width/2-60, 300);
  botonstart.size(120, 40);
  botonstart.style('font-size', '16px');
  botonstart.style('background-color', '#04F404');
  botonstart.style('color', 'white');
  botonstart.style('border-radius', '8px');
  botonstart.style('cursor', 'pointer');
botonstart.mousePressed(() => (estado = 1));


botontutorial = createButton('TUTORIAL');
  botontutorial.position(width/2-60, 400);
  botontutorial.size(120, 40);
  botontutorial.style('font-size', '16px');
  botontutorial.style('background-color', '#04F404');
  botontutorial.style('color', 'white');
 botontutorial.style('border-radius', '8px');
  botontutorial.style('cursor', 'pointer');
botontutorial.mousePressed(() => (estado = 2));


botonvolver = createButton('VOLVER');
  botonvolver.position(width/2-60, 400);
  botonvolver.size(120, 40);
  botonvolver.style('font-size', '16px');
 botonvolver.style('background-color', '#04F404');
  botonvolver.style('color', 'white');
 botonvolver.style('border-radius', '8px');
  botonvolver.style('cursor', 'pointer');
botonvolver.mousePressed(() => (estado = 0));


}



function draw() {

  if (estado === 0) {
    background(0,255,0);
    stroke (0);
    text('HIDRA VS HÉRCULES', width / 2, 150);
    botonstart.show();
    botontutorial.show();
    botonvolver.hide();
    barra.tamL=150;
    barraNpc.tamL=150;
    r=0;
    g=255;
    b=0;
    
   }else if (estado===1){
     batalla();
     botonstart.hide();
     botontutorial.hide();
     botonvolver.hide();
   } else if (estado==2){
       background (255,0,0);
     botonstart.hide();
     botontutorial.hide();
     botonvolver.show();
   }else if (estado==3){
     background (0,0,255);
     botonstart.hide();
     botontutorial.hide();
     botonvolver.show();
   }  else if (estado==4){
     background (255,0,0);
     botonvolver.show();
     botonstart.hide();
     botontutorial.hide();

  }}



function batalla (){
  background (0);
  player.dibuja();
  npc.dibuja();
  
  rect (vida.x, vida.y, vida.tamL, vida.tamA);
  rect (vida.x1, vida.y1, vida.tamL, vida.tamA);
  fill (r, g, b);
  rect (vida.x, vida.y, barra.tamL, barra.tamA);
  
  fill (r1,g1,b1);
  rect (vida.x1, vida.y1, barraNpc.tamL, barraNpc.tamA);
 
    if (barra.tamL==0){
    estado=3;
   }
   
   if (barraNpc.tamL<10){
     estado=4;
   }
   
  
}

function keyPressed (){
  if (estado==1 && key==1){
barraNpc.tamL=barraNpc.tamL-10;  
}else if (estado==1 && key==2){
  barraNpc.tamL=barraNpc.tamL-30}
  else if (estado ==1 && key==3){
    barraNpc.tamL=barraNpc.tamL-5}
    else if (estado ==1 && key==4){
      barraNpc.tamL=barraNpc.tamL-40}
}
