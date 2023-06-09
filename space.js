// Variables globales
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var nave;
var disparos = [];
var disparosAliens = [];
var disparosJefeFinal = [];
var aliens = [];
var nivel = 1;
var intervaloDisparoAlien = 3000;
var filas = 5;
var columnas = 10;
var muertos = false;
var disparoActivo = null;
var nivelCompletado = false;
var desplazamientoY = 10;
var velocidadBaseAliens = 1;
var puedeDisparar = true;
var juegoCongelado = false;
var puntos = 0;
var angulos;
var teclaEspacioActiva = true;
var imagenAlien = new Image();
var imagenJefe = new Image();
imagenJefe.src = './Backgrounds/boss.png';
imagenAlien.src = './Backgrounds/alien2space.png';
var imagenNave = new Image();
var nave1seleccionada = window.naveuno;
var nave2seleccionada = window.navedos;
var nave3seleccionada = window.navetres;
var nave4seleccionada = window.navecuatro;
var nave5seleccionada = window.navecinco;
var nave6seleccionada = window.naveseis;
var vidaJefeFinal = 100;
var audio2 = document.getElementById("AudioSpace2");
var disparosonido = document.getElementById('shoot');
var teclas = {
  izquierda: false,
  derecha: false
};

function audioboss() {
  var audiofinal = document.getElementById("audioboss");
  audiofinal.play();
}
function bossaudiostop() {
  var audiofinal = document.getElementById("audioboss");
  audiofinal.currentTime = 0;
  audiofinal.pause();
}
function mostrarCandados() {
  document.getElementById('candado1').style.display = 'block';
  document.getElementById('candado2').style.display = 'block';
  document.getElementById('candado3').style.display = 'block';
  document.getElementById('candado4').style.display = 'block';
  document.getElementById('candado5').style.display = 'block';
}


function ocultarCandados() {
  document.getElementById('candado1').style.display = 'none';
  document.getElementById('candado2').style.display = 'none';
  document.getElementById('candado3').style.display = 'none';
  document.getElementById('candado4').style.display = 'none';
  document.getElementById('candado5').style.display = 'none';
}
// Desaparecer el puntero sobre el canvas
canvas.addEventListener("mouseenter", function () {
  canvas.style.cursor = "none";
});

canvas.addEventListener("mouseleave", function () {
  canvas.style.cursor = "default";
});

var elemento = document.getElementById('c1');
if (elemento.classList.contains('nave1')) {
  elemento.addEventListener('click', function () {
    ocultarCandados();
    window.naveuno = true;
    imagenNave.src = './Backgrounds/navespace.png';

  });
}

var elemento2 = document.getElementById('c2');
if (elemento2.classList.contains('nave2')) {
  elemento2.addEventListener('click', function () {
    window.navedos = true;
    imagenNave.src = './Backgrounds/nave1.png';
    ocultarCandados();
  });
}

var elemento3 = document.getElementById('c3');
if (elemento3.classList.contains('nave3')) {
  elemento3.addEventListener('click', function () {
    window.navetres = true;
    imagenNave.src = './Backgrounds/nave3.png';
    ocultarCandados();
  });
}

var elemento4 = document.getElementById('c4');
if (elemento4.classList.contains('nave4')) {
  elemento4.addEventListener('click', function () {
    window.navecuatro = true;
    imagenNave.src = './Backgrounds/nave4.png';
    ocultarCandados();
  });
}
var elemento5 = document.getElementById('c5');
if (elemento5.classList.contains('nave5')) {
  elemento5.addEventListener('click', function () {
    window.navecinco = true;
    imagenNave.src = './Backgrounds/nave5.png';
    ocultarCandados();
  });
}
var elemento6 = document.getElementById('c6');
if (elemento6.classList.contains('nave6')) {
  elemento6.addEventListener('click', function () {
    window.naveseis = true;
    imagenNave.src = './Backgrounds/nave6.png';
    ocultarCandados();
  });
}


if (nave1seleccionada) {
  imagenNave.src = './Backgrounds/navespace.png';
} else if (nave2seleccionada) {
  imagenNave.src = './Backgrounds/nave1.png';
} else if (nave3seleccionada) {
  imagenNave.src = './Backgrounds/nave3.png';
} else if (nave4seleccionada) {
  imagenNave.src = './Backgrounds/nave4.png';
} else if (nave5seleccionada) {
  imagenNave.src = './Backgrounds/nave5.png';
} else if (nave6seleccionada) {
  imagenNave.src = './Backgrounds/nave6.png';
}


function activarMenu() {
  var menu = document.getElementById('containermenuspace');
  menu.classList.toggle('active');
}

function desactivarMenu() {
  var menu = document.getElementById('containermenuspace');
  menu.classList.remove('active');

}

var reiniciar = document.getElementById('Reiniciar');

reiniciar.addEventListener('click', function () {
  imagenAlien.src = 'Backgrounds/alien2space.png';
  document.getElementById('perdiste').style.display = 'none';
  document.getElementById('contadorpuntos').textContent = '0';
  document.getElementById('puntuacion1').textContent = '0'
  teclaEspacioActiva = true;
  juegoCongelado = false;
  nivel = 1;
  intervaloDisparoAlien = 3000;
  filas = 5;
  columnas = 10;
  muertos = false;
  disparoActivo = null;
  nivelCompletado = false;
  desplazamientoY = 10;
  velocidadBaseAliens = 1;
  puedeDisparar = true;
  teclas.izquierda = false;
  teclas.derecha = false;
  puntos = 0;
  audio2.currentTime = 0;
  audio2.play();
  bossaudiostop();
  document.getElementById("Play2").style.display = "block";
  desactivarMenu();
  ocultarCandados();
  crearNave();
  crearAliens();
  actualizar();

});



// Crea la nave del jugador
function crearNave() {
  nave = {
    x: canvas.width / 2 - 20,
    y: canvas.height - 60,
    ancho: 40,
    alto: 40,
    velocidad: 13
  };
}
var vidaAlienNivel10 = vidaJefeFinal;
// Crear los aliens
// Crear los aliens
function crearAliens() {
  aliens = [];
  if (nivel === 10) {
    aliens.push({
      x: canvas.width / 2 - 20,
      y: 50,
      ancho: 100,
      alto: 100,
      vida: 100,
      velocidad: velocidadBaseAliens,
      estado: 1,
      disparar: Math.floor(Math.random() * 20) + 40
    });
  } else {
    for (var i = 0; i < filas; i++) {
      for (var j = 0; j < columnas; j++) {
        aliens.push({
          x: j * 50 + 50,
          y: i * 30 + 50,
          ancho: 20,
          alto: 30,
          vida: 1, 
          velocidad: velocidadBaseAliens,
          estado: 1, 
          disparar: Math.floor(Math.random() * 100) + 3000 //disparo aleatorio para cada alien
        });
      }
    }
  }
  if (nivel >= 3 && nivel <= 4) {
    filas = 6;
    columnas = 12;
  }
  if (nivel >= 5 && nivel <= 6) {
    filas = 7;
    columnas = 13;
  }
  if (nivel >= 7 && nivel <= 8) {
    filas = 7;
    columnas = 13;
  }
  if (nivel >= 9 && nivel <= 10) {
    filas = 5;
    columnas = 5;
  } else if (nivel > 10) {
    filas = 5;
    columnas = 5;
  }
}

function generarniveles() {
  audio2.play();
  document.getElementById("Play2").style.display = "block";
  crearNave();
  crearAliens();
  actualizar();
}






// Dibuja la nave 
function dibujarNave() {

  ctx.drawImage(imagenNave, nave.x, nave.y, nave.ancho, nave.alto);
}

// Dibujar los aliens
function dibujarAliens() {
  for (var i = 0; i < aliens.length; i++) {
    if (aliens[i].estado == 1) {
      ctx.drawImage(imagenAlien, aliens[i].x, aliens[i].y, aliens[i].ancho, aliens[i].alto);

      // Verificar si es el jefe final del nivel 10
      if (nivel === 10 && i === 0) {
        var barraVida = (vidaJefeFinal / 100) * aliens[i].ancho;
        ctx.fillStyle = "red";
        ctx.fillRect(aliens[i].x, aliens[i].y - 10, barraVida, 5);
      }
    }
  }
}

// Mover la nave del jugador
function moverNave(direccion) {
  if (direccion == "izquierda" && nave.x > 0) {
    nave.x -= nave.velocidad;
  } else if (direccion == "derecha" && nave.x < canvas.width - nave.ancho) {
    nave.x += nave.velocidad;
  }
}

// Crear disparos del jugador
function crearDisparo() {
  if (!puedeDisparar) {
    return;
  }

  disparos.push({
    x: nave.x + nave.ancho / 2,
    y: nave.y - 10,
    ancho: 3,
    alto: 10,
    velocidad: 10
  });

  //Delay para los disparos
  puedeDisparar = false;
  setTimeout(function () {
    puedeDisparar = true;
  }, 0);
}



function dispararAlien(naveAlien) {

  var velocidadX = Math.random() * 4 - 2; 
  var velocidadY = 4; 

  // Crear un nuevo objeto disparo con propiedades aleatorias
  var nuevoDisparo = {
    x: naveAlien.x + naveAlien.ancho / 2,
    y: naveAlien.y + naveAlien.alto,
    ancho: 3,
    alto: 10,
    velocidadX: velocidadX,
    velocidadY: velocidadY
  };

  // Agregar el nuevo disparo a la matriz de disparosAliens
  disparosAliens.push(nuevoDisparo);
}

// Mover disparos del jugador
function moverDisparos() {

  for (var i = 0; i < disparos.length; i++) {
    disparos[i].y -= disparos[i].velocidad;
    if (disparos[i].y < 0) {
      disparos.splice(i, 1);
      i--;
    }
  }
}

// Mover disparos de los aliens
function moverDisparosAliens() {
  for (var i = 0; i < disparosAliens.length; i++) {
    var disparo = disparosAliens[i];


    disparo.x += disparo.velocidadX;
    disparo.y += disparo.velocidadY;


    ctx.fillStyle = "#afffa1";
    ctx.fillRect(disparo.x, disparo.y, disparo.ancho, disparo.alto);

    // Verificar si el disparo ha salido de la pantalla y eliminarlo
    if (disparo.y > canvas.height || disparo.x < 0 || disparo.x > canvas.width) {
      disparosAliens.splice(i, 1);
      i--;
    }
  }
}

function moverAliens() {
  for (var i = 0; i < aliens.length; i++) {
    aliens[i].x += aliens[i].velocidad;

    if (aliens[i].x + aliens[i].ancho > canvas.width || aliens[i].x < 0) {
      for (var j = 0; j < aliens.length; j++) {
        aliens[j].velocidad *= -1; // Cambiar la dirección horizontal de los aliens
        aliens[j].y += desplazamientoY; // Desplazar los aliens hacia abajo
      }
      desplazamientoY += 10; // Incrementar la distancia vertical de desplazamiento
      break;
    }

    if (aliens[i].estado == 1 && Math.random() < 0.001) {
      dispararAlien(aliens[i]);
    }

    if (aliens[i].estado == 1 && nivel === 10 && Math.random() < 0.03) {
      dispararAlien(aliens[i]);

      // Disparar en todas las direcciones
      dispararAlien({
        x: aliens[i].x,
        y: aliens[i].y,
        ancho: aliens[i].ancho,
        alto: aliens[i].alto,
        velocidad: aliens[i].velocidad
      });
      dispararAlien({
        x: aliens[i].x,
        y: aliens[i].y,
        ancho: aliens[i].ancho,
        alto: aliens[i].alto,
        velocidad: -aliens[i].velocidad
      });
      dispararAlien({
        x: aliens[i].x,
        y: aliens[i].y,
        ancho: aliens[i].ancho,
        alto: aliens[i].alto,
        velocidad: 0
      });
    }


    if (nivel === 10) {
      if (Math.random() < 0.05) {
        if (Math.random() < 0.5) {
          aliens[i].y += 2;
        }
      }
    }
  }
}

// Detectar colisiones entre disparos del jugador y los aliens
function detectarColision() {
  for (var i = 0; i < disparos.length; i++) {
    for (var j = 0; j < aliens.length; j++) {
      if (
        aliens[j].estado == 1 &&
        disparos[i].x > aliens[j].x &&
        disparos[i].x < aliens[j].x + aliens[j].ancho &&
        disparos[i].y > aliens[j].y &&
        disparos[i].y < aliens[j].y + aliens[j].alto
      ) {
        if (nivel === 10) {
          // Resta una vida al boss
          vidaAlienNivel10--;

          // Verifica si el boss ha perdido toda su vida
          if (vidaAlienNivel10 <= 0) {
            aliens[j].estado = 0;
          }
        } else {
          aliens[j].estado = 0;
        }

        // Incrementar los puntos
        puntos += 10;
        document.getElementById('contadorpuntos').textContent = puntos.toString();

        disparos.splice(i, 1);
        i--;

        break;
      }
    }
  }
}
function detectarColisionNave() {
  for (var i = 0; i < disparosAliens.length; i++) {
    if (
      disparosAliens[i].x > nave.x &&
      disparosAliens[i].x < nave.x + nave.ancho &&
      disparosAliens[i].y > nave.y &&
      disparosAliens[i].y < nave.y + nave.alto
    ) {

      perderPartida();
      break;
    }
  }
}
function perderPartida() {
  teclaEspacioActiva = false;
  verificarNuevasNaves();
  activarMenu();
  mostrarCandados();
  document.getElementById('puntuacion1').textContent = puntos;
  document.getElementById('volver').style.display = "block";
  document.getElementById('textvolver').style.display = "block";
  juegoCongelado = true;
  document.getElementById('perdiste').style.display = 'block';
  document.getElementById("Play2").style.display = "none";
  audio2.pause();
  var audiogameoverspace = document.getElementById('gameoverspace');
  audiogameoverspace.play();
  disparosAliens = [];
  cancelAnimationFrame(animationId);

}


// Dibujar en el canvas y depende de los niveles
function dibujar() {

  if (nivel >= 1 && nivel <= 2) {
    desplazamientoY = 10;
    const canvas = document.getElementById("canvas");
    canvas.style.backgroundImage = 'url("./Backgrounds/backspace.png")';
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    dibujarNave();
    dibujarAliens();

    for (var i = 0; i < disparos.length; i++) {
      ctx.fillStyle = "#FFFF00";
      ctx.fillRect(
        disparos[i].x,
        disparos[i].y,
        disparos[i].ancho,
        disparos[i].alto
      );
    }
    for (var i = 0; i < disparosAliens.length; i++) {
      ctx.fillStyle = "#FF0000";
      ctx.fillRect(
        disparosAliens[i].x,
        disparosAliens[i].y,
        disparosAliens[i].ancho,
        disparosAliens[i].alto
      );
    }
    if (nivelCompletado) {
      disparosAliens = [];
    }
    var contadorPuntos = document.getElementById('contadorpuntos');
    contadorPuntos.textContent = "Puntos: " + puntos;
    var contadorNiveles = document.getElementById('niveles');
    contadorNiveles.textContent = "Nivel: " + nivel;

  } else if (nivel >= 3 && nivel <= 4) {
    desplazamientoY = 10;
    const canvas = document.getElementById("canvas");
    canvas.style.backgroundImage = 'url("./Backgrounds/backdosspace.png")';
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    dibujarNave();
    dibujarAliens();
    for (var i = 0; i < disparos.length; i++) {
      ctx.fillStyle = "F32B00";
      ctx.fillRect(
        disparos[i].x,
        disparos[i].y,
        disparos[i].ancho,
        disparos[i].alto
      );
    }
    for (var i = 0; i < disparosAliens.length; i++) {
      ctx.fillStyle = "#FF0000";
      ctx.fillRect(
        disparosAliens[i].x,
        disparosAliens[i].y,
        disparosAliens[i].ancho,
        disparosAliens[i].alto
      );
    }
    if (nivelCompletado) {
      disparosAliens = [];
    }
    var contadorPuntos = document.getElementById('contadorpuntos');
    contadorPuntos.textContent = "Puntos: " + puntos;
    var contadorNiveles = document.getElementById('niveles');
    contadorNiveles.textContent = "Nivel: " + nivel;

  } else if (nivel >= 5 && nivel <= 9) {
    desplazamientoY = 10;
    const canvas = document.getElementById("canvas");
    canvas.style.backgroundImage = 'url("./Backgrounds/backdosspace.png")';
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    dibujarNave();
    dibujarAliens();
    for (var i = 0; i < disparos.length; i++) {
      ctx.fillStyle = "#f5f7f7";
      ctx.fillRect(
        disparos[i].x,
        disparos[i].y,
        disparos[i].ancho,
        disparos[i].alto
      );
    }
    for (var i = 0; i < disparosAliens.length; i++) {
      ctx.fillStyle = "#afffa1";
      ctx.fillRect(
        disparosAliens[i].x,
        disparosAliens[i].y,
        disparosAliens[i].ancho,
        disparosAliens[i].alto
      );
    }
    if (nivelCompletado) {
      disparosAliens = [];
    }
    var contadorPuntos = document.getElementById('contadorpuntos');
    contadorPuntos.textContent = "Puntos: " + puntos;
    var contadorNiveles = document.getElementById('niveles');
    contadorNiveles.textContent = "Nivel: " + nivel;

  } else if (nivel >= 10) {
    audio2.pause();
    audioboss();
    desplazamientoY = 10;
    const canvas = document.getElementById("canvas");
    canvas.style.backgroundImage = 'url("./Backgrounds/fondofinal.png")';
    canvas.style.backgroundSize = 'cover';
    canvas.style.backgroundRepeat = 'none';
    imagenAlien.src = './Backgrounds/boss2.png';
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    dibujarNave();
    dibujarAliens();
    for (var i = 0; i < disparos.length; i++) {
      ctx.fillStyle = "#f5f7f7";
      ctx.fillRect(
        disparos[i].x,
        disparos[i].y,
        disparos[i].ancho,
        disparos[i].alto
      );
    }
    for (var i = 0; i < disparosAliens.length; i++) {
      ctx.fillStyle = "#afffa1";
      ctx.fillRect(
        disparosAliens[i].x,
        disparosAliens[i].y,
        disparosAliens[i].ancho,
        disparosAliens[i].alto
      );
    }
    if (nivelCompletado) {
      
      disparosAliens = [];
    }
    var contadorPuntos = document.getElementById('contadorpuntos');
    contadorPuntos.textContent = "Puntos: " + puntos;
    var contadorNiveles = document.getElementById('niveles');
    contadorNiveles.textContent = "Nivel: " + nivel;


    iniciarTemporizadorDisparoAlien(); 
  }

  var temporizadorDisparoAlien;

  function iniciarTemporizadorDisparoAlien() {
    temporizadorDisparoAlien = setInterval(function () {  
     
    }, 100); 

  
}
}

var vidaAlienNivel10 = 100;
var disparosNave = [];

// Bucle del juego
function actualizar() {
  if (juegoCongelado) {
    return;
  }
  juegoCongelado = false;
  moverDisparos();
  moverDisparosAliens();
  actualizarNave();
  moverAliens();
  verificarVictoria();
  detectarColision();
  detectarColisionNave();
  dibujar();

  if (verificarVictoria()) {
    bossaudiostop();
    document.getElementById('puntuacion1').textContent = puntos;
    audio2.pause();
    activarMenu();
    mostrarCandados();
    verificarNuevasNaves();
    var boton = document.getElementById('siguientenivel');
    boton.style.display = 'block';
    document.getElementById('ganaste').style.display = 'block';
    document.getElementById("Play2").style.display = "none";
    return;
  }

  // Colisión entre disparos de la nave y el alien del nivel 10
  disparosNave.forEach(function (disparo) {
    if (nivel === 10) {
      aliens.forEach(function (alien) {
        if (colision(disparo, alien)) {
          // Restar una unidad de vida al alien del último nivel
          vidaAlienNivel10--;

          // Eliminar el disparo de la nave
          var index = disparosNave.indexOf(disparo);
          disparosNave.splice(index, 1);

          // Verificar si el alien ha perdido toda su vida
          if (vidaAlienNivel10 <= 0) {
            alien.estado = 0;
            document.getElementById('ganaste').style.display = 'block';
          }
        }
      });
    }
  });

  animationId = window.requestAnimationFrame(actualizar);
}
// Verificar si todos los aliens han sido destruidos
function verificarVictoria() {
  var todosMuertos = true;
  for (var i = 0; i < aliens.length; i++) {
    if (aliens[i].estado !== 0) {
      todosMuertos = false;
      break;
    }
  }
  return todosMuertos;
}

var siguiente = document.getElementById('siguientenivel');
siguiente.addEventListener('click', function () {
  if(nivel===10){
    ocultarCandados();
    desactivarMenu();
    document.getElementById('canvas2').style.display='none';
    document.getElementById('tableropuntuacion').style.display = 'none';
    document.getElementById('puntuaciontitulo').style.display = 'none';
    document.getElementById('formulario').style.display='block';
    document.getElementById('ganaste').style.display = 'none';
    document.getElementById('canvas4').style.display='none';
document.getElementById('canvas').style.display='none';
  }else{
    disparosAliens = [];
    desactivarMenu();
    ocultarCandados();
    document.getElementById("volver").style.display = "block";
    document.getElementById("textvolver").style.display = "block";
    document.getElementById('ganaste').style.display = 'none';
    document.getElementById("Play2").style.display = "block";
    audio2.currentTime = 0;
    audio2.play();
    nivel++;
    console.log(nivel);
    //nivelCompletado = false;
    juegoCongelado = false;
    audio2.currentTime = 0;
    if (nivel === 2) {
      imagenAlien.src = './Backgrounds/alien2.ico';
      generarniveles();
    } else if (nivel === 3) {
      imagenAlien.src = './Backgrounds/alien2.ico';
      generarniveles();
    } else if (nivel === 4) {
      imagenAlien.src = './Backgrounds/alienverde.png';
      generarniveles();
    } else if (nivel === 5) {
      imagenAlien.src = './Backgrounds/alienverde.png';
      generarniveles();
    } else if (nivel === 6) {
      imagenAlien.src = './Backgrounds/alienlila.png';
      generarniveles();
    } else if (nivel === 7) {
      imagenAlien.src = './Backgrounds/alienlila.png';
      generarniveles();
    } else if (nivel === 8) {
      imagenAlien.src = './Backgrounds/alienlila.png';
      generarniveles();
    } else if (nivel === 9) {
      imagenAlien.src = './Backgrounds/alienlila.png';
      generarniveles();
    } else if (nivel === 10) {
      generarniveles();
    }else if (nivel > 10){
      generarniveles();
    }
  
  }
 
});
// Iniciar el juego
crearNave();
crearAliens();
actualizar();


document.addEventListener("keydown", function (event) {
  if (event.keyCode === 32 && teclaEspacioActiva) {
    crearDisparo();
    disparosonido.play();
  }
});


// Eventos para detectar teclas presionadas y soltadas
window.addEventListener("keydown", function (event) {
  if (event.keyCode == 37) {
    // izquierda
    teclas.izquierda = true;
  } else if (event.keyCode == 39) {
    // derecha
    teclas.derecha = true;
  }
});

window.addEventListener("keyup", function (event) {
  if (event.keyCode == 37) {
    // izquierda
    teclas.izquierda = false;
  } else if (event.keyCode == 39) {
    // derecha
    teclas.derecha = false;
  }
});

// Actualizar el movimiento de la nave
function actualizarNave() {
  if (teclas.izquierda && nave.x > 0) {
    nave.x -= nave.velocidad;
  } else if (teclas.derecha && nave.x < canvas.width - nave.ancho) {
    nave.x += nave.velocidad;
  }
}

function debugMatarAliens() {
  for (var i = 0; i < aliens.length; i++) {
    aliens[i].estado = 0;
  }
  puntos += aliens.length * 5;
}

// Evento de clic para activar la función de debug
canvas.addEventListener("click", function (event) {
  debugMatarAliens();
});




var ventanaDesbloqueadaMostrada1 = false;
var ventanaDesbloqueadaMostrada2 = false;
var ventanaDesbloqueadaMostrada3 = false;
var ventanaDesbloqueadaMostrada4 = false;
var ventanaDesbloqueadaMostrada5 = false;



function verificarNuevasNaves() {

  var puntaje = document.getElementById('puntuacion1').innerText; // Obtener el valor de puntos
  // Convertir puntaje a número
  var puntos = parseInt(puntaje);

  if (puntos >= 250 && puntos < 700) {
    console.log(puntos);
    document.getElementById('nuevasnaves').src = 'Backgrounds/nave1.png';
    document.getElementById('candado1').style.display = 'none';

    if (!ventanaDesbloqueadaMostrada1) {
      audiodesbloqueo();
      document.getElementById('bloqueo2').style.display = 'none';
      var c2 = document.getElementById('c2');
      c2.style.pointerEvents = 'all';
      var div = document.getElementById('divdesbloquear');
      div.style.display = 'block';
      setTimeout(function () {
        div.style.display = 'none';
      }, 5000);
      ventanaDesbloqueadaMostrada1 = true;
    }

  } else if (puntos >= 750 && puntos <= 1250) {
    document.getElementById('nuevasnaves').src = 'Backgrounds/nave3.png';
    document.getElementById('candado1').style.display = 'none';
    document.getElementById('bloqueo3').style.display = 'none';
    document.getElementById('candado2').style.display = 'none';
    document.getElementById('bloqueo2').style.display = 'none';

    if (!ventanaDesbloqueadaMostrada2) {
      audiodesbloqueo();
      var c3 = document.getElementById('c3');
      c3.style.pointerEvents = 'all';

      var div = document.getElementById('divdesbloquear');
      div.style.display = 'block';
      setTimeout(function () {
        div.style.display = 'none';
      }, 5000);
      ventanaDesbloqueadaMostrada2 = true;
    }

  } else if (puntos >= 1300 && puntos < 1800) {
    document.getElementById('nuevasnaves').src = 'Backgrounds/nave4.png';
    document.getElementById('candado1').style.display = 'none';
    document.getElementById('candado2').style.display = 'none';
    document.getElementById('candado3').style.display = 'none';
    document.getElementById('bloqueo2').style.display = 'none';
    document.getElementById('bloqueo3').style.display = 'none';

    if (!ventanaDesbloqueadaMostrada3) {
      audiodesbloqueo();
      document.getElementById('bloqueo4').style.display = 'none';
      document.getElementById('candado1').style.display = 'none';
      document.getElementById('candado2').style.display = 'none';
      document.getElementById('candado3').style.display = 'none';
      document.getElementById('bloqueo2').style.display = 'none';
      document.getElementById('bloqueo3').style.display = 'none';
      var c4 = document.getElementById('c4');
      c4.style.pointerEvents = 'all';

      var div = document.getElementById('divdesbloquear');
      div.style.display = 'block';
      setTimeout(function () {
        div.style.display = 'none';
      }, 5000);
      ventanaDesbloqueadaMostrada3 = true;

    }
  } else if (puntos >= 1850 && puntos < 2350) {
    document.getElementById('nuevasnaves').src = 'Backgrounds/nave5.png';
    document.getElementById('candado1').style.display = 'none';
    document.getElementById('candado2').style.display = 'none';
    document.getElementById('candado3').style.display = 'none';
    document.getElementById('candado4').style.display = 'none';
    document.getElementById('bloqueo2').style.display = 'none';
    document.getElementById('bloqueo3').style.display = 'none';
    document.getElementById('bloqueo4').style.display = 'none';
    document.getElementById('bloqueo5').style.display = 'none';
    document.getElementById('candado5').style.display = 'none';

    if (!ventanaDesbloqueadaMostrada4) {
      audiodesbloqueo();
      document.getElementById('bloqueo4').style.display = 'none';
      var c5 = document.getElementById('c5');
      c5.style.pointerEvents = 'all';

      var div = document.getElementById('divdesbloquear');
      div.style.display = 'block';
      setTimeout(function () {
        div.style.display = 'none';
      }, 5000);
      ventanaDesbloqueadaMostrada4 = true;
    }
  } else if (puntos >= 2350) {
    document.getElementById('nuevasnaves').src = 'Backgrounds/nave6.png';
    document.getElementById('candado1').style.display = 'none';
    document.getElementById('candado2').style.display = 'none';
    document.getElementById('candado3').style.display = 'none';
    document.getElementById('candado4').style.display = 'none';
    document.getElementById('candado5').style.display = 'none';
    document.getElementById('bloqueo2').style.display = 'none';
    document.getElementById('bloqueo3').style.display = 'none';
    document.getElementById('bloqueo4').style.display = 'none';
    document.getElementById('bloqueo5').style.display = 'none';
    document.getElementById('bloqueo6').style.display = 'none';

    if (!ventanaDesbloqueadaMostrada5) {
      audiodesbloqueo();
      document.getElementById('bloqueo4').style.display = 'none';
      var c6 = document.getElementById('c6');
      c6.style.pointerEvents = 'all';

      var div = document.getElementById('divdesbloquear');
      div.style.display = 'block';
      setTimeout(function () {
        div.style.display = 'none';
      }, 5000);
      ventanaDesbloqueadaMostrada5 = true;
    }
  }
}

function audiodesbloqueo() {
  var audiodesbloqueo = document.getElementById('desbloqueo');
  audiodesbloqueo.play();
}

