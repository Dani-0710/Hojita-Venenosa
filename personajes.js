let personaje={
    x: 0,
    y: 0,

    velocidadX: 0,
    velocidadY: 0,
    
    rapidez:4,
    margenX:130,
    margenYArriba:140,
    margenYAbajo:110,

}

function iniciarPersonaje(){
    personaje.x = width/2;
    personaje.y = height/2;
}

function dibujarPersonaje(px,py){
    push();
    translate(personaje.x,personaje.y);
 // 1. ALAS DE MARIPOSA (Ovalos Monarca)
  fill('black');
  ellipse(px-50, py, 120, 60); // Ala izquierda arriba
  ellipse(px+50, py, 120, 60); // Ala derecha arriba
  ellipse(px-50, py+50, 80, 40); // Ala izquierda abajo
  ellipse(px+50, py+50, 80,40); //Ala derecha abajo
 fill('#F27126');
  ellipse(px-50, py, 100, 50); // Relleno1 izquierda arriba
  ellipse(px+50, py, 100, 50); // Relleno1 derecha arriba
  ellipse(px-50, py+50, 60, 30); // Relleno1 izquierda abajo
  ellipse(px+50, py+50, 60, 30); // Relleno1 derecha abajo
  fill('black');
  ellipse(px-50, py, 80, 40); // Relleno2 izquierda arriba
  ellipse(px+50, py, 80, 40); // Relleno2 derecha arriba
  ellipse(px-50, py+50, 40, 20); // Relleno2 izquierda abajo
  ellipse(px+50, py+50, 40, 20); // Relleno2 derecha abajo
  fill('#F27126');
  ellipse(px-50, py, 60, 30); // Relleno3 izquierda arriba
  ellipse(px+50, py, 60, 30); // Relleno3 derecha arriba
  ellipse(px-50, py+50, 20, 10); // Relleno3 izquierda abajo
  ellipse(px+50, py+50, 20, 10); // Relleno3 derecha abajo
  fill('black');
  ellipse(px-50, py, 40, 20); // Relleno4 izquierda arriba
  ellipse(px+50, py, 40, 20); // Relleno4 derecha arriba
  fill('#F27126');
  ellipse(px-50, py, 25, 10); // Relleno5 izquierda arriba
  ellipse(px+50, py, 25, 10); // Relleno5 derecha arriba
  
  // 2. COLA DE Cascabel (Rectángulos y círculos)
  fill('#C2A649');
  rect(px+10, py+75, 100, 20, 5); // Base
  rect(px+110, py+76, 5, 18, 2); // Cascabel1
  rect(px+115, py+78, 5, 14, 2); // Cascabel2
  rect(px+120, py+80, 5, 10, 2); // Cascabel3
  ellipse(px+128, py+85, 5, 5); // Cascabel4
  fill('#4A3525'); // Manchas
  ellipse(px+55, py+85, 8, 10);
  ellipse(px+70, py+85, 8, 10);
  ellipse(px+85, py+85, 8, 10);
  ellipse(px+100, py+85, 8, 10);
  
  // 3. CUERPO (Rectángulo morado)
  fill('green');
  rect(px-50, py-30, 100, 140, 40); //Toros
  fill('#E0E592');
  rect(px-30, py, 60, 10, 5); //Pechamen
  rect(px-35, py+10, 70, 10, 5); //Pechamen
  rect(px-40, py+20, 80, 10, 5); //Pechamen
  rect(px-40, py+30, 80, 10, 5); //Pechamen
  rect(px-40, py+40, 80, 10, 5); //Pechamen
  rect(px-40, py+50, 80, 10, 5); //Pechamen
  rect(px-40, py+60, 80, 10, 5); //Pechamen
  rect(px-35, py+70, 70, 10, 5); //Pechamen
  rect(px-30, py+80, 60, 10, 5); //Pechamen
  
  // 4. CABEZA (Triángulo gris)
  fill('gray');
  triangle(px-60, py-80, px+60, py-80, px, py);

  // 5. OREJAS DE LOBO (Triángulos gris y rosa)
  fill('gray');
  triangle(px-60, py-80, px-30, py-140, px-20, py-80); // Oreja izquierda
  triangle(px+20, py-80, px+30, py-140, px+60, py-80); // Oreja derecha
  fill('#FFB6C1');
  triangle(px-55, py-80, px-32, py-120, px-25, py-80); // Relleno oreja izquierda
  triangle(px+25, py-80, px+32, py-120, px+55, py-80); // relleno oreja derecha

  // 6. DETALLES DEL ROSTRO 
  // Ojos (rctángulo blanco, cuadro negro)
  fill('white');
  rect(px-35, py-65, 20, 10);
  rect(px+15, py-65, 20, 10);
  fill('black')
  rect(px-30, py-65, 10,10);
  rect(px+20, py-65, 10, 10);

  // Nariz (Triángulo negro)
  fill('black');
  triangle(px-10, py-35, px+10, py-35, px, py-20);
  pop();
}