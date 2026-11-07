let fondoNoche1,fondoNoche2,fondoDia;

let esNoche=false;
let inicioCiclo=0;
const DURACION=30000;

async function setup() {
  createCanvas(800,600);

  iniciarPersonaje();

  fondoDia = await loadImage ('fondos/dia.png')
  fondoNoche1 = await loadImage ('fondos/abiertos.png')
 fondoNoche2 = await loadImage ('fondos/cerrados.jpeg')

await cargarReliquias();

crearReliquias("aluxe",10);
crearReliquias("anillo",10);
crearReliquias("copa",10);
crearReliquias("corona",10);
crearReliquias("espejo",10);

inicioCiclo=millis();

}


function draw() {

if(millis()-inicioCiclo>DURACION){
  esNoche=!esNoche;
  inicioCiclo=millis();
  if(esNoche) nuevaNoche(8);
}

if(esNoche){

  if(frameCount % 120<60) {
    image(fondoNoche1,0,0,width,height) // Fondo

  } else {
   image(fondoNoche2,0,0,width,height); // Fondo

  }

  dibujarObjetos();
} else {
  image(fondoDia,0,0,width,height)
}



 dibujarPersonaje(x,y)
}