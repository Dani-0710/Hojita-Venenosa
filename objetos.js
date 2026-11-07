let imgReliquias = {}

async function cargarReliquias() {

    imgReliquias= {

        aluxe: await Promise.all([
          loadImage ('assets/Aluxe1.png'),
          loadImage ('assets/Aluxe2.png'),
          loadImage ('assets/Aluxe3.png'),
          loadImage ('assets/Aluxe4.png'),
         loadImage ('assets/Aluxe5.png'),
         loadImage ('assets/Aluxe6.png'),
         loadImage ('assets/Aluxe7.png'),
         loadImage ('assets/Aluxe8.png'),
         loadImage ('assets/Aluxe9.png'),
         loadImage ('assets/Aluxe10.png'),
        ]),

         anillo: await Promise.all([
         loadImage ('assets/Anillo1.png'),
        loadImage ('assets/Anillo2.png'),
        loadImage ('assets/Anillo3.png'),
        loadImage ('assets/Anillo4.png'),
        loadImage ('assets/Anillo5.png'),
        loadImage ('assets/Anillo6.png'),
        loadImage ('assets/Anillo7.png'),
        loadImage ('assets/Anillo8.png'),
        loadImage ('assets/Anillo9.png'),
        loadImage ('assets/Anillo10.png'),

         ]),

         copa: await Promise.all([
            loadImage ('assets/Copa1.png'),
            loadImage ('assets/Copa2.png'),
            loadImage ('assets/Copa3.png'),
            loadImage ('assets/Copa4.png'),
            loadImage ('assets/Copa5.png'),
            loadImage ('assets/Copa6.png'),
            loadImage ('assets/Copa7.png'),
            loadImage ('assets/Copa8.png'),
            loadImage ('assets/Copa9.png'),
            loadImage ('assets/Copa10.png'),

         ]),
         
         corona: await Promise.all([
            loadImage ('assets/Corona1.png'),
            loadImage ('assets/Corona2.png'),
            loadImage ('assets/Corona3.png'),
            loadImage ('assets/Corona4.png'),
            loadImage ('assets/Corona5.png'),
            loadImage ('assets/Corona6.png'),
            loadImage ('assets/Corona7.png'),
            loadImage ('assets/Corona8.png'),
            loadImage ('assets/Corona9.png'),
            loadImage ('assets/Corona10.png'),

         ]),

         espejo: await Promise. all([
            loadImage ('assets/Espejo1.png'),
            loadImage ('assets/Espejo2.png'),
            loadImage ('assets/Espejo3.png'),
            loadImage ('assets/Espejo4.png'),
            loadImage ('assets/Espejo5.png'),
            loadImage ('assets/Espejo6.png'),
            loadImage ('assets/Espejo7.png'),
            loadImage ('assets/Espejo8.png'),
            loadImage ('assets/Espejo9.png'),
            loadImage ('assets/Espejo10.png'),

         ])
        
    }
}

function crearReliquias(tipo, cantidad) {
for (let i = 0; i < cantidad; i++) { 
    objetos.push({ 
        tipo: tipo, 
        x: random(width - 40), 
        // solo el pasto 
        y: random(height / 2, height - 40), 
        img: random(imgs[tipo]), 
        activa: true 
    }); 
} 
}

function nuevaNoche(cantidad){
    let reliquias = objetos.filter(o => o.tipo === 'reliquia'); 
    for (let r of reliquias) r.activa = false; 
    shuffle(reliquias, true); 
    for (let i = 0; i < cantidad; i++) { reliquias[i].activa = true; 
        reliquias[i].x = random(width - 40); 
        reliquias[i].y = random(height / 2, height - 40); 
    } 
} 
        // Solo dibuja las que están activas 
        function dibujarObjetos() { 
            for (let o of objetos) { 
                if (o.activa) { 
                    image(o.img, o.x, o.y, 40, 40); 
                } 
            } 
        }