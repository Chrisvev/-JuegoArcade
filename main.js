var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var x = canvas.width / 2;
var y = canvas.height - 20;
//Variables para controlar velocidad de la bola, encargadas del eje x e y-----------
var dx = 4;
var dy = -4;
//-----------------------------------------------------
var radioBola = 10;
var alturaPala = 122;
var anchoPala = 85;
var xPala = (canvas.width - anchoPala) / 2;
var yPala = canvas.height - alturaPala + 53;
var derechaPresionada = false;
var izquierdaPresionada = false;
var numFilasLadrillos = 3;
var numColumnasLadrillos = 5;
var anchoLadrillo = 75;
var alturaLadrillo = 20;
var espacioLadrillo = 10;
var margenSuperiorLadrillos = 30;
var margenIzquierdoLadrillos = 30;
var vidas = 3;
var numFilas = 4;
var numColumnas = 8;
var anchoBloque = 75;
var altoBloque = 30;
var margenBloques = 10;
var margenSuperior = 60;
var margenIzquierdo = 60;
let juegoActivo = true;
var partidaGanada = false;
var nivel = 1;
var puntos = 0;
var congelacion = window.congelado;
window.naveuno = false;
window.navedos = false;
window.navetres = false;
window.navecuatro = false;
window.navecinco = false;
window.naveseis = false;

var pala1 = false;
var pala2 = false;
var pala3 = false;
var pala4 = false;
var pala5 = false;
var pala6 = false;
var audio2 = document.getElementById("AudioSpace2");
var imagenPala = new Image();
var imagenBola = new Image();
imagenBola.src = './Backgrounds/bolaArka.png';

var audio = document.getElementById("AudioSpace");

var boton1audio = document.getElementById("boton1");
var button = document.getElementById("Play");
var button2 = document.getElementById('Play2');
var div = document.getElementById("canvas5");
var divk = document.getElementById("canvas6");
const div1 = document.querySelector('#logotipoindex')
const div2 = document.querySelector('#divtexto')

function mostrarFormulario() {
  document.getElementById('divtexto').style.display = 'none';
  document.getElementById('logotipoindex').style.display = 'none';
  document.getElementById('formulario').style.display = 'block';
  document.getElementById('volver').style.display = 'block';
  document.getElementById('textvolver').style.display = 'block';
  document.getElementById('volver').style.marginTop = "-65px";
  document.getElementById('textvolver').style.marginTop = "-55px";
}


//Evento principal, desactiva el logotipo Index y entra a la maquina arcade
var clickevento = document.getElementById('divtexto');
clickevento.addEventListener('click', function (event) {
  if (event.button === 0) {
    document.getElementById('divtexto').style.display = 'none';
    document.getElementById('logotipoindex').style.display = 'none';
    document.getElementById('container').style.display = 'block';
    document.getElementById("body").style.backgroundImage = 'url("Backgrounds/fondoarcade.jpg")';
    document.getElementById('tableropuntuacion').style.display = 'block';
    document.getElementById('puntuaciontitulo').style.display = 'block';
    document.getElementById('botonvalorar').style.display = 'none';
  }
});
//Space click en el juego
var clickspace = document.getElementById('canvas6');
clickspace.addEventListener('click', function () {
  console.log("carga space");
  activarMenu();
  mostrarCandados();

});
//Arkanoid click en el juego
var clickarka = document.getElementById('canvas5');
clickarka.addEventListener('click', function () {
  console.log("carga space");
  activarmenuarka();
  mostrarCandadosArka();

});


//Toma el elemento canvas como terreno de juego
var botonEmpezar = document.getElementById('canvas5');
var juegoCanvas = document.getElementById('canvas');
var empezarJuego = false;

function cargarSpaceInvaders() {
  activarMenu();
  document.getElementById("Play2").style.display = "block";
  document.getElementById("Play").style.display = "none";
  document.getElementById('canvas').style.background = 'none';
  document.getElementById('canvas5').style.display = 'none';
  document.getElementById('canvas6').style.display = 'none';
  document.getElementById('textovidas').style.display = 'none';
  document.getElementById('contador').style.display = 'none';
  document.getElementById('contadorpuntos').style.display = 'block';
  document.getElementById('niveles').style.display = 'block';
  document.getElementById('pantallatuto').style.display = 'block';
  var canvas2 = document.getElementById('canvas2').style.display = 'none';
  var canvas4 = document.getElementById('canvas4').style.display = 'none';
  var canvast = document.getElementById('canvas');
  canvast.style.display = 'none';
  document.getElementById('p2').innerHTML = 'Consigue pasar de nivel, para desbloquear nuevas skins y recompensas';
  document.getElementById("volver").style.display = "block";
  document.getElementById("textvolver").style.display = "block";
  var botonspace = document.getElementById('botonempezar');
  botonspace.addEventListener('click', function () {

    mostrarPuntuacion();
    document.getElementById('tableropuntuacion').style.display = 'block';
    document.getElementById('puntuaciontitulo').style.display = 'block';
    desactivarMenu();
    ocultarCandados();
    const newScript = document.createElement('script');
    newScript.src = 'space.js'
    const originalScript = document.getElementById('scriptl');
    originalScript.parentNode.replaceChild(newScript, originalScript);
    var clicknave = document.getElementById('clicknave');
    //Carga el juego de spacec una vez que le damos al boton empezar luego del tutorial
    var audio2 = document.getElementById("AudioSpace2");
    boton1audio.play();
    reproducirConDelayspace();



    document.getElementById('pantallatuto').style.display = 'none';
    canvast.style.display = 'block';
    canvas2 = document.getElementById('canvas2').style.display = 'block';
    canvas4 = document.getElementById('canvas4').style.display = 'block';
    document.getElementById('pantallatuto').style.display = 'none';
  });
}

function mostrarPuntuacion() {

  var puntu = document.getElementById('tableropuntuacion');
  puntu.classList.toggle('active');
  var titulo = document.getElementById('puntuaciontitulo');
  titulo.classList.toggle('active');
}
function mostrarDesbloqueo(){
  
}

function elegirJuego() {
  var elegirjuegosonido = document.getElementById('seleccionjuego');
  elegirjuegosonido.play();
}

//Activa el menu de eleccion de las naves al dar click en el canvas6 (space invaders)
function activarMenu() {
  var menu = document.getElementById('containermenuspace');
  menu.classList.toggle('active');
}
function desactivarMenu() {
  var menu = document.getElementById('containermenuspace');
  menu.classList.remove('active');
}

function activarmenuarka() {
  console.log("arka menu");
  var menu2 = document.getElementById('containermenuarka');
  menu2.classList.toggle('active');
}

function desactivarmenuarka() {
  var menu2 = document.getElementById('containermenuarka');
  menu2.classList.remove('active');
}

//Menu seleccion de palas para arkanoid
var elementoa1 = document.getElementById('a1');
if (elementoa1.classList.contains('pala1')) {
  elementoa1.addEventListener('click', function () {
    audioSeleccion2();
    pala1 = true;
    mostrarBoton();
    desactivarmenuarka();
    ocultarCandadosArka();
    imagenPala.src = './Backgrounds/palaArkanoid.png';
  });
}

var elementoa2 = document.getElementById('a2');
if (elementoa2.classList.contains('pala2')) {
  elementoa2.addEventListener('click', function () {
    audioSeleccion2();
    pala2 = true;
    mostrarBoton();
    desactivarmenuarka();
    ocultarCandadosArka();
    imagenPala.src = './Backgrounds/palaazul.png';
  });
}

var elementoa3 = document.getElementById('a3');
if (elementoa3.classList.contains('pala3')) {
  elementoa3.addEventListener('click', function () {
    pala3 = true;
    audioSeleccion2();
    mostrarBoton();
    desactivarmenuarka();
    ocultarCandadosArka();
    imagenPala.src = './Backgrounds/palabarra.png';
  });
}

var elementoa4 = document.getElementById('a4');
if (elementoa4.classList.contains('pala4')) {
  elementoa4.addEventListener('click', function () {
    pala4 = true;
    audioSeleccion2();
    mostrarBoton();
    desactivarmenuarka();
    ocultarCandadosArka();
    imagenPala.src = './Backgrounds/palalila.png';
  });
}

var elementoa5 = document.getElementById('a5');
if (elementoa5.classList.contains('pala5')) {
  elementoa5.addEventListener('click', function () {
    pala5 = true;
    audioSeleccion2();
    mostrarBoton();
    desactivarmenuarka();
    ocultarCandadosArka();
    imagenPala.src = './Backgrounds/palaroja.png';
  });
}

var elementoa6 = document.getElementById('a6');
if (elementoa6.classList.contains('pala6')) {
  elementoa6.addEventListener('click', function () {
    pala6 = true;
    audioSeleccion2();
    mostrarBoton();
    desactivarmenuarka();
    ocultarCandadosArka();
    imagenPala.src = './Backgrounds/palapurpura.png';
  });
}

//Menu de seleccion de naves space invaders
var elemento = document.getElementById('c1');
if (elemento.classList.contains('nave1')) {
  elemento.addEventListener('click', function () {
    window.naveuno = true;
    desactivarMenu();
    ocultarCandados();
  });
}

var elemento2 = document.getElementById('c2');
if (elemento2.classList.contains('nave2')) {
  elemento2.addEventListener('click', function () {
    window.navedos = true;
    desactivarMenu();
    ocultarCandados();
  });
}

var elemento3 = document.getElementById('c3');
if (elemento3.classList.contains('nave3')) {
  elemento3.addEventListener('click', function () {
    window.navetres = true;
    desactivarMenu();
    ocultarCandados();
  });
}
var elemento4 = document.getElementById('c4');
if (elemento4.classList.contains('nave4')) {
  elemento4.addEventListener('click', function () {
    window.navecuatro = true;
    desactivarMenu();
    ocultarCandados();
  });
}
var elemento5 = document.getElementById('c5');
if (elemento5.classList.contains('nave5')) {
  elemento5.addEventListener('click', function () {
    window.navecinco = true;
    desactivarMenu();
    ocultarCandados();
  });
}
var elemento6 = document.getElementById('c6');
if (elemento6.classList.contains('nave6')) {
  elemento6.addEventListener('click', function () {
    window.naveseis = true;
    desactivarMenu();
    ocultarCandados();
  });
}

function audioSeleccion() {
  var audioseleccion = document.getElementById('seleccionnave');
  audioseleccion.play();
}
function audioSeleccion2() {
  var audioclick = document.getElementById('clicknave');
  audioclick.play();
}
function audioenter() {
  var audioenter = document.getElementById('enter');
  audioenter.play();
}


function entrarJuego() {

  document.getElementById('p4').textContent = 'Utiliza las teclas de derecha e izquierda';
  document.getElementById("Play").style.display = "block";
  document.getElementById('canvas').style.background = 'none';
  document.getElementById('canvas5').style.display = 'none';
  document.getElementById('canvas6').style.display = 'none';
  document.getElementById('contador').style.display = 'block';
  document.getElementById('textovidas').style.display = 'block'
  document.getElementById('contadorpuntos').style.display = 'none';
  document.getElementById("volver").style.display = "block";
  document.getElementById("textvolver").style.display = "block";
  document.getElementById('p5').style.display = 'none';
  document.getElementById('espacio').style.display = 'none';
}

//Evento que hace que vuelva al principio
var volverindex = document.getElementById("volver");
volverindex.addEventListener('click', function () {
  var url = 'index.html';
  window.location.href = url;
});
function mostrar() {

  clicknave.play();
  document.getElementById('textoboton').style.display = 'block';
  document.getElementById('botonempezar').style.display = 'block';

}

function mostrarBoton() {
  document.getElementById('textobotonarka').style.display = 'block';
  document.getElementById('botonempezararka').style.display = 'block';
}

//Añado el evento de click para que muestre el canvas con el terreno de juevo
botonEmpezar.addEventListener("click", function () {
  activarmenuarka();
  document.getElementById('botonempezar').style.display = 'none';
  document.getElementById('textoboton').style.display = 'none'
  var tutorial = document.getElementById('pantallatuto').style.display = 'block';
  canvas.style.display = 'none';
  var canvas2 = document.getElementById('canvas2').style.display = 'none';
  var canvas4 = document.getElementById('canvas4').style.display = 'none';

  var botonarka = document.getElementById('botonempezararka');

  botonarka.addEventListener('click', function () {
    boton1audio.play();
    reproducirConDelay();
    mostrarPuntuacion();
    ocultarCandadosArka();
    var canvas2 = document.getElementById('canvas2').style.display = 'block';
    var canvas4 = document.getElementById('canvas4').style.display = 'block';
    var tutorial = document.getElementById('pantallatuto').style.display = 'none';
    if (!empezarJuego) {
      juegoCanvas.style.display = "block";
      empezarJuego = true;
      dibujar();
      const canvas = document.getElementById('canvas');
      canvas.style.backgroundSize = 'cover';
      canvas.style.backgroundImage = 'url("Backgrounds/fondoarka2.jpg")';
    }
  });

});

//Reproduce el audio con delay al empezar el juego de arkanoid
function reproducirConDelay() {
  setTimeout(function () {
    audio.play();
  }, 700);
}

//Reproduce el audio con delay al empezar el juego de space
function reproducirConDelayspace() {
  setTimeout(function () {
    audio2.play();
  }, 700);
}



//Eventos a la escucha para el boton de quitar la musica y ponerla

//Sonido ARKANOID
button.addEventListener("click", function () {
  if (audio.paused) {
    audio.play();

    button.innerHTML = "Musica: On";
  } else {
    audio.pause();

    button.innerHTML = "Musica: Off";
  }
});
//Sonido Space Invaders
button2.addEventListener("click", function () {
  if (audio2.paused) {
    audio2.play();

    button2.innerHTML = "Musica: On";
  } else {
    audio2.pause();

    button2.innerHTML = "Musica: Off";
  }
});



//Mover las palancas con las teclas de direccion
const palanca1 = document.querySelector('#palo1');
const palanca2 = document.querySelector('#palo2');
document.addEventListener('keydown', (event) => {
  if (event.keyCode === 37) { // Flecha izquierda

    palanca1.style.transform = 'rotate(-40deg)';
    palanca2.style.transform = 'rotate(-40deg)';
  } else if (event.keyCode === 39) { // Flecha derecha
    palanca1.style.transform = 'rotate(40deg)';
    palanca2.style.transform = 'rotate(40deg)';
  }
});

//Vuelve la palancas a la posicion inicial
document.addEventListener('keyup', (event) => {
  palanca1.style.transform = 'translateX(0)';
  palanca2.style.transform = 'translateX(0)';
});


//Dibujo la bola
function dibujarBola() {
  ctx.drawImage(imagenBola, x, y);
  //ctx.arc(x, y, radioBola, 0, Math.PI * 2);
}


function dibujarPala() {
  ctx.drawImage(imagenPala, xPala, yPala, anchoPala, alturaPala);
}

var bloques = [];
for (var c = 0; c < numColumnas; c++) {
  bloques[c] = [];
  for (var r = 0; r < numFilas; r++) {
    bloques[c][r] = { x: 0, y: 0, estado: 1 };
  }
}

function dibujarBloques() {
  if (nivel === 1) {
    for (var c = 0; c < numColumnas; c++) {
      for (var r = 0; r < numFilas; r++) {
        if (bloques[c][r].estado == 1) {
          var bloqueX = (c * (anchoBloque + margenBloques)) + margenIzquierdo;
          var bloqueY = (r * (altoBloque + margenBloques)) + margenSuperior;
          bloques[c][r].x = bloqueX;
          bloques[c][r].y = bloqueY;
          ctx.beginPath();
          ctx.rect(bloqueX, bloqueY, anchoBloque, altoBloque);
          //Generacion degradados para los bloques
          ctx.fillStyle = `rgb(
          ${Math.floor(255 - 42.5 * c)},
          ${Math.floor(255 - 42.5 * r)},
          0)`;

          ctx.fill();
          ctx.closePath();
        }
      }
    }
  }
}


//Detecta las colisiones
function deteccionColisiones() {
  var bloquesRestantes = 0;
  bloques.forEach(columna => {
    columna.forEach(bloque => {
      if (bloque.estado === 1 && x > bloque.x && x < bloque.x + anchoBloque && y > bloque.y && y < bloque.y + altoBloque) {
        dy = -dy;
        bloque.estado = 0;
        puntos += 5;
        console.log(puntos);
        var contadorPuntos = document.getElementById('contadorpuntos');
        contadorPuntos.textContent = "Puntos: " + puntos;

      }
      if (bloque.estado === 1) {
        bloquesRestantes++;
      }
    });
  });
  if (bloquesRestantes === 0) {
    
    activarmenuarka();
    mostrarCandadosArka();
    audio.pause();
    nivel++;
    document.getElementById('puntuacion1').textContent=puntos;
    verificarNuevasPalas();
    document.getElementById('ganaste').style.display = 'block';
    document.getElementById("Play").style.display = "none";
    partidaGanada = true;
    audio.pause();
    var botonsiguiente = document.getElementById('siguientenivel');
    botonsiguiente.addEventListener('click', function () {
      document.getElementById("volver").style.display = "block";
      document.getElementById("textvolver").style.display = "block";
      reiniciarPartida();
      desactivarmenuarka();
      ocultarCandadosArka();
      audio.currentTime=0;
      audio.play();
    });

  }
}

function sonidoPerderVida() {
  var perdervidas = document.getElementById('perdervida');
  perdervidas.play();
}

//Funcion para dibujar los elementos del juego, llamados uno por uno
function dibujar() {
  if (partidaGanada) {
    return;
  }
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  dibujarBola();
  dibujarPala();
  dibujarBloques();
  deteccionColisiones();
  const contador = document.getElementById('contador').innerHTML = vidas;
  if (x + dx > canvas.width - radioBola || x + dx < radioBola) {
    dx = -dx;
  }
  if (y + dy < radioBola) {
    dy = -dy;
  } else if (y + dy > canvas.height - radioBola - 14) { //Altura del rebote de la bola en el canvas
    if (x > xPala && x < xPala + anchoPala) {
      dy = -dy;
    }
    else {
      vidas--;
      if (vidas == 3) {
        sonidoPerderVida();
      } else if (vidas == 2) {
        sonidoPerderVida();
      } else if (vidas == 1) {
        sonidoPerderVida();
      }
      //Condicion para cuando no quedan vidas
      if (vidas === 0) {
        puntos=0;
        document.getElementById('contador').textContent=0;
        var audiogameover = document.getElementById('gameoverarka');
        juegoActivo = false;
        audio.pause();
        audiogameover.play();
        document.getElementById('puntuacion1').textContent=0;
        document.getElementById('perdiste').style.display = 'block';
        const contador = document.getElementById('contador').innerHTML = vidas;
        document.getElementById("Play").style.display = "none";
        activarmenuarka();
        mostrarCandadosArka();

        return;
      }
      else {
        x = canvas.width / 2;
        y = canvas.height - 30;
        dx = 4;
        dy = -4;
        xPala = (canvas.width - anchoPala) / 2;
      }
    }
  }
  if (x + dx < radioBola || x + dx > canvas.width - radioBola) {
    dx = -dx;
  }
  if (izquierdaPresionada && xPala > 0) {
    xPala -= 7;
  }
  if (derechaPresionada && xPala < canvas.width - anchoPala) {
    xPala += 7;
  }

  x += dx;
  y += dy;
  if (juegoActivo) {
    animacion = requestAnimationFrame(dibujar);
  }
  var contadorPuntos = document.getElementById('contadorpuntos').style.display = 'block';
  contadorPuntos.textContent = "Puntos: " + puntos;

}

function depurarBloques() {
  for (var c = 0; c < numColumnas; c++) {
    for (var r = 0; r < numFilas; r++) {
      bloques[c][r].estado = 0;
    }
  }
}


var botonReiniciar = document.getElementById('Reiniciar');
botonReiniciar.addEventListener('click', function () {
  reiniciarPartida();
  ocultarCandadosArka();
  document.getElementById("Play").style.display = "block";
  //Reinicia el audio, cuando perdemos y le damos click a Reiniciar
  audio.currentTime = 0;
  audio.play();
  desactivarmenuarka();
});

//Restablece los valores por defecto al primer nivel
function reiniciarPartida() {
  vidas = 3;
  x = canvas.width / 2;
  y = canvas.height - 20;
  dx = 4;
  dy = -4;
  xPala = (canvas.width - anchoPala) / 2;
  juegoActivo = true;
  partidaGanada = false;
  nivel = 1;
  document.getElementById('perdiste').style.display = 'none';
  document.getElementById('ganaste').style.display = 'none';
  document.getElementById('contador').innerHTML = vidas;
  document.getElementById("volver").style.display = "block";
  document.getElementById("textvolver").style.display = "block";

  // Generar una nueva configuración de bloques aleatoria
  generarBloquesAleatorios();

  cancelAnimationFrame(animacion);
  dibujar();
}

function generarBloquesAleatorios() {
  for (var c = 0; c < numColumnas; c++) {
    for (var r = 0; r < numFilas; r++) {
      bloques[c][r].estado = Math.round(Math.random());
    }
  }
}

// Aqui añado los eventListener de las teclas, asignando las direcciones
document.addEventListener("keydown", presionarTecla, false);
document.addEventListener("keyup", soltarTecla, false);

function presionarTecla(e) {
  if (e.keyCode == 39) {
    derechaPresionada = true;
  }
  else if (e.keyCode == 37) {
    izquierdaPresionada = true;
  }
}

function soltarTecla(e) {
  if (e.keyCode == 39) {
    derechaPresionada = false;
  }
  else if (e.keyCode == 37) {
    izquierdaPresionada = false;
  }
}

/*
document.addEventListener("keydown", function (event) {
  if (event.keyCode === 32) {
    depurarBloques();
  }
});
*/

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

function mostrarCandadosArka() {
  document.getElementById('candado1a').style.display = 'block';
  document.getElementById('candado2a').style.display = 'block';
  document.getElementById('candado3a').style.display = 'block';
  document.getElementById('candado4a').style.display = 'block';
  document.getElementById('candado5a').style.display = 'block';
}

function ocultarCandadosArka() {

  document.getElementById('candado1a').style.display = 'none';
  document.getElementById('candado2a').style.display = 'none';
  document.getElementById('candado3a').style.display = 'none';
  document.getElementById('candado4a').style.display = 'none';
  document.getElementById('candado5a').style.display = 'none';
}




var ventanaDesbloqueadaMostrada1 = false;
var ventanaDesbloqueadaMostrada2 = false;
var ventanaDesbloqueadaMostrada3 = false;
var ventanaDesbloqueadaMostrada4 = false;
var ventanaDesbloqueadaMostrada5 = false;


  
function verificarNuevasPalas() {
  var puntaje = document.getElementById('puntuacion1').innerText; 
  var puntos = parseInt(puntaje);
  
  if (puntos >= 60 && puntos < 120) {

    document.getElementById('nuevasnaves').src = 'Backgrounds/palaazul.png';
    document.getElementById('candado1a').style.display = 'none';

    if (!ventanaDesbloqueadaMostrada1) {
      var texto=document.getElementById('textonave').innerHTML='PALA DESBLOQUEADA!';
      document.getElementById('bloqueo2a').style.display = 'none';
      var a2 = document.getElementById('a2');
      a2.style.pointerEvents = 'all';
      var div = document.getElementById('divdesbloquear');
      div.style.display = 'block';
      setTimeout(function () {
        div.style.display = 'none';
      }, 5000);
      ventanaDesbloqueadaMostrada1 = true;
    }

  } else if (puntos >= 125 && puntos <= 200) {
    document.getElementById('nuevasnaves').src = 'Backgrounds/palabarra.png';
    document.getElementById('candado1a').style.display = 'none';
    document.getElementById('bloqueo3a').style.display = 'none';
    document.getElementById('candado2a').style.display = 'none';
    document.getElementById('bloqueo2a').style.display = 'none';

    if (!ventanaDesbloqueadaMostrada2) {
      audiodesbloqueo();
      var texto=document.getElementById('textonave').innerHTML='PALA DESBLOQUEADA!';
      var a3 = document.getElementById('a3');
      a3.style.pointerEvents = 'all';

      var div = document.getElementById('divdesbloquear');
      div.style.display = 'block';
      setTimeout(function () {
        div.style.display = 'none';
      }, 5000);
      ventanaDesbloqueadaMostrada2 = true;
    }

  } else if (puntos >= 250 && puntos < 400) {
    document.getElementById('nuevasnaves').src = 'Backgrounds/palalila.png';
    document.getElementById('candado1a').style.display = 'none';
    document.getElementById('candado2a').style.display = 'none';
    document.getElementById('candado3a').style.display = 'none';
    document.getElementById('bloqueo2a').style.display = 'none';
    document.getElementById('bloqueo3a').style.display = 'none';

    if (!ventanaDesbloqueadaMostrada3) {
      var texto=document.getElementById('textonave').innerHTML='PALA DESBLOQUEADA!';
      audiodesbloqueo();
      document.getElementById('bloqueo4a').style.display = 'none';
      document.getElementById('candado1a').style.display = 'none';
      document.getElementById('candado2a').style.display = 'none';
      document.getElementById('candado3a').style.display = 'none';
      document.getElementById('bloqueo2a').style.display = 'none';
      document.getElementById('bloqueo3a').style.display = 'none';
      var a4 = document.getElementById('a4');
      a4.style.pointerEvents = 'all';

      var div = document.getElementById('divdesbloquear');
      div.style.display = 'block';
      setTimeout(function () {
        div.style.display = 'none';
      }, 5000);
      ventanaDesbloqueadaMostrada3 = true;

    }
  } else if (puntos >= 450 && puntos < 800) {
    document.getElementById('nuevasnaves').src = 'Backgrounds/palaroja.png';
    document.getElementById('candado1a').style.display = 'none';
    document.getElementById('candado2a').style.display = 'none';
    document.getElementById('candado3a').style.display = 'none';
    document.getElementById('candado4a').style.display = 'none';
    document.getElementById('bloqueo2a').style.display = 'none';
    document.getElementById('bloqueo3a').style.display = 'none';
    document.getElementById('bloqueo4a').style.display = 'none';
    document.getElementById('bloqueo5a').style.display = 'none';
    document.getElementById('candado5a').style.display = 'none';

    if (!ventanaDesbloqueadaMostrada4) {
      audiodesbloqueo();
      document.getElementById('bloqueo4a').style.display = 'none';
      var a5 = document.getElementById('a5');
      a5.style.pointerEvents = 'all';

      var div = document.getElementById('divdesbloquear');
      div.style.display = 'block';
      setTimeout(function () {
        div.style.display = 'none';
      }, 5000);
      ventanaDesbloqueadaMostrada4 = true;
    }
  } else if (puntos >= 1000) {
    document.getElementById('nuevasnaves').src = 'Backgrounds/palapurpura.png';
    document.getElementById('candado1a').style.display = 'none';
    document.getElementById('candado2a').style.display = 'none';
    document.getElementById('candado3a').style.display = 'none';
    document.getElementById('candado4a').style.display = 'none';
    document.getElementById('candado5a').style.display = 'none';
    document.getElementById('bloqueo2a').style.display = 'none';
    document.getElementById('bloqueo3a').style.display = 'none';
    document.getElementById('bloqueo4a').style.display = 'none';
    document.getElementById('bloqueo5a').style.display = 'none';
    document.getElementById('bloqueo6a').style.display = 'none';

    if (!ventanaDesbloqueadaMostrada5) {
      var texto=document.getElementById('textonave').innerHTML='PALA DESBLOQUEADA!';
      audiodesbloqueo();
      document.getElementById('bloque64a').style.display = 'none';
      var a6 = document.getElementById('a6');
      a6.style.pointerEvents = 'all';

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

