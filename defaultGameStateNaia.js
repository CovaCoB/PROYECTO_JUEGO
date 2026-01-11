const defaultGameState ={
player: {
    1:{
        name: "Kael",
        health: 100,
        strength: 10,
        strengthBonus: 0,
        defense:  5,
        defenseBonus: 1,
        currentRoom: 1,
        gold: 120,
        potions: 3
    },
    2:{
        name: "Naia",
        health: 100,
        strength: 10,
        strengthBonus: 0,
        defense:  5,
        defenseBonus: 1,
        currentRoom: 1,
        gold: 120,
        potions: 3
    }
},
map: {
    rooms: [
        {
            id: 1,
            monsterProb: 0,
            isShop: false,
            name: "entrada_mundo",
            description: "Entrada al mundo de Aeloria.",
            north: "entrada_castillo",
            east: "forja",
            west: ["paisaje_izq", "paisaje_izq_bruja"],
            south: null,
            img: "mundo1.png"
         },
         {
            id: 2,
            monsterProb: 0,
            isShop: true,
            name: "forja",
            description: "Lugar donde comprar pociones y forjar tus armas.",
            west: "entrada_mundo",
            north: null,
            east: null,
            south: null,
            img: "imagen_forja.png"
            
         },
        {
            id: 3,
            monsterProb: 0,
            isShop: false,
            name: "paisaje_izq",
            description: "Lugar donde se elaboran las pociones y no está la bruja.",
            east: "entrada_mundo",
            west: null,
            north: null,
            south: null,
            img: "paisajeoeste.png"
        },
        {
            id: 4,
            monsterProb: 0,
            isShop: false,
            name: "paisaje_izq_bruja",
            description: "Lugar donde se elaboran las pociones y está la bruja.",
            east: "entrada_mundo",
            west: null,
            north: null,
            south: null,
            img: "paisajeoeste.png"
        },
        {
            id: 5,
            monsterProb: 0,
            isShop: false,
            name: "entrada_castillo",
            description: "Visión de la fachada del castillo. Momento antes de entrar",
            north: "castillo",
            south: "entrada_mundo",
            west: null,
            east: null,
            img: "castillo.png"
        },
        {
            id: 6,
            monsterProb: 0,
            isShop: false,
            name: "castillo",
            description: "Interior del castillo",
            north:"castillo_norte",
            south: "entrada_castillo",
            west: null,
            east: null,
            img: "castillo_interior.png"
        },
        {
            id: 7,
            monsterProb: 0,
            isShop: false,
            name: "castillo_norte",
            description: "Interior del castillo. Elección del jugador ante dos caminos",
            south: "castillo",
            west: "castillo_oeste",
            east: ["castillo_este", "castillomonstruo2"],
            north:null,
            img: "direccion_pasillo.png"
        },
        {
            id: 8,
            monsterProb: 0,
            isShop: false,
            name: "castillo_oeste",
            description: "Interior del castillo. Zona Oeste, sala I",
            south: "castillo_norte",
            north:"castillo_oeste2",
            west: null,
            east: null,
            img: "pasilloizq.jpg"
        },
        {
            id: 9,
            monsterProb: 0,
            isShop: false,
            name: "castillo_oeste2",
            description: "Interior del castillo. Zona Oeste, sala II",
            south: "castillo_oeste",
            north:["castillo_boss","castilloNoBoss"],
            west: null,
            east: null,
            img: "salaizq.png"
        },
        {
            id: 10,
            monsterProb: 0.2,
            isShop: false,
            name: "castillo_boss",
            description: "Interior del castillo. Boss final",
            south: "castillo_oeste2",
            north:null,
            west: null,
            east: null,
            img: "pasilloizq2.png"
        },
        {
            id: 11,
            monsterProb: 0,
            isShop: false,
            name: "castilloNoBoss",
            description: "Interior del castillo. Sala del guardián",
            south: "castillo_oeste2",
            north:null,
            west: null,
            east: null,
            img: "pasilloizq2.png"
        },
        {
            id: 12,
            monsterProb: 0,
            isShop: false,
            name: "castillo_este",
            description: "Interior del castillo. Ala este. ",
            south: "castillo_norte",
            north:["castillo_este2", "castillo_este2_monstruo"],
            west: null,
            east: null,
            img: "pasillo_direcciondcha.png"
        },
        {
            id: 13,
            monsterProb: 0.2,
            isShop: false,
            name: "castillomonstruo2",
            description: "Interior del castillo. Ala este, primer monstruo",
            south: "castillo_norte",
            north:["castillo_este2", "castillo_este2_monstruo"],
            west: null,
            east: null,
            img: "pasillo_direcciondcha.png"
        },
        {
            id: 14,
            monsterProb: 0,
            isShop: false,
            name: "castillo_este2",
            description: "Interior del castillo. Cámara del los arcos",
            south: ["castillo_este", "castillomonstruo2"],
            north:null,
            west: null,
            east: null,
            img: "saladcha.png"
        },
        {
            id: 15,
            monsterProb: 0.2,
            isShop: false,
            name: "castillo_este2_monstruo",
            description: "Interior del castillo. Cámara de los arcos, segundo monstruo",
            south: ["castillo_este", "castillomonstruo2"],
            north:null,
            west: null,
            east: null,
            img: "saladcha.png"
        }
    ],
    enemies: [
        {
            name: "La quimera",
            isBoss: false,
            description: "Monstruo quimera cuya piel está formada por hierro y gemas que lo atraviesan, posee garras afiladas y su mordedura es letal.",
            health: 40,
            strength: 6,
            defence: 3,
            img: "monstruo3_small.png"
        },
        {
            name: "Espectro",
            isBoss: false,
            description: "Monstruo que acecha en los lugares más oscuros, su cuerpo se fusiona con el entorno y es difícil verlo, si te alcanza te convertirá en un pedazo de cristal.",
            health: 25,
            strength: 4,
            defence: 2,
            img: "monstruo2_small.png"
        },
        {
            name: "El coloso",
            isBoss: true,
            description: "Es el guardián, vive en la parte más profunda del castillo. Es inmenso, su cuerpo está formado por piedra volcánica, solo acercarte te mataría. Posee un bastón en cuya punta viven las almas de los antiguos héroes.",
            health: 70,
            strength: 10,
            defence: 7,
            img: "monstruo_final_big.png"
        }
    ]
}
};
 
const rutas ={
    "entrada_mundo": "/entrada_mundo/entrada_NAIA.html",
    "forja": "/forja/forja_NAIA.html",
    "paisaje_izq" : "/paisaje_izq/paisaje_NAIA.html",
    "paisaje_izq_bruja": "/paisaje_izq_bruja/paisaje_NAIA.html",
    "entrada_castillo": "/entrada_castillo/entrada_castilloNAIA.html",
    "castillo": "/castillo/castillo_NAIA.html",
    "castillo_norte": "/castillo_norte/castillo_norteNAIA.html",
    "castillo_oeste": "/castillo_oeste/castillo_oesteNAIA.html",
    "castillo_oeste2": "/castillo_oeste2/castillo_oeste2NAIA.html",
    "castillo_boss": "/castillo_boss/castillobossNAIA.html",
    "castilloNoBoss": "/castilloNoBoss/noBossNaia.html",
    "castillo_este": "/castillo_este/castillo_esteNAIA.html",
    "castillomonstruo2": "/castillomonstruo2/monstruo2naia.html",
    "castillo_este2":  "/castillo_este2/castillo_este2NAIA.html",
    "castillo_este2_monstruo": "/castillo_este2_monstruo/castillo_este2_monstruoNAIA.html"
};


function mover(direccion) {
    let salaActual = localStorage.getItem("salaActual") || "entrada_mundo";
    let habitacionActual = defaultGameState.map.rooms.find(r=> r.name === salaActual);
    if(!habitacionActual || !habitacionActual[direccion]){
        recuadroTexto(`<p>No puedes ir hacia ahí</p>`);
        return;
    }
    let destino = habitacionActual[direccion];
    if(Array.isArray(destino)){
      let random = Math.random();
      destino = (random < 0.20) ? destino[1] : destino[0];
    }
    if(rutas[destino]){
        localStorage.setItem("salaActual", destino);
        window.location.href = rutas[destino];
    }else {
        recuadroTexto(`<p>No puedes ir hacia ahí</p>`);
    }
}

//Asignamos al id del html el evento click que redirige a la ruta norte con la funcion.
document.getElementById("dir_norte").addEventListener("click", ()=>mover("north"));
document.getElementById("dir_sur").addEventListener("click", ()=>mover("south"));
document.getElementById("dir_este").addEventListener("click", ()=>mover("east"));
document.getElementById("dir_oeste").addEventListener("click", ()=>mover("west"));

//añadir al recuadro de información texto y que exista scroll

function recuadroTexto(texto){
    const informacion = document.getElementById("cuadro_narrativa");
    informacion.innerHTML += `<p>${texto}</p>`;
    informacion.scrollTop = informacion.scrollHeight;
}

const consejos = [
    "En lo más profundo del Oeste, tras la segunda torre, habita aquello que custodia la salida. No entres sin estar preparada, pues el guardián del Castillo no perdona los pasos en falso.",
    "Necesitarás piedra amatista para entrar al ala este, dicen que esa piedra ayuda a debilitar a aquello que ahí habita ",
    "A veces, retroceder al Sur es la única forma de encontrar el camino correcto.",
    "La forja del Este reparará tus armas y las reforzará con mi magia"
];

function bruja(){
    let posibilidad = Math.floor(Math.random() * consejos.length);
    let mensaje = consejos[posibilidad];
    let texto = "Bien Naia... recuerda esto: ";

    recuadroTexto(texto + mensaje);
}
let brujaHabla = document.getElementById("hablarBruja");
if(brujaHabla){
    brujaHabla.addEventListener("click", function(e){
        e.preventDefault();
        bruja();
    });
}


function despedirBruja(){
     let despedida = "No te preocupes, tómate un descanso, esta zona es segura.";
    recuadroTexto(despedida);
}
let noConsejo = document.getElementById("respuesta");
if(noConsejo){
    noConsejo.addEventListener("click", function(e){
        e.preventDefault();
        despedirBruja();

    });
}
 
function muestraHeroe(){
    localStorage.setItem("verHeroe", "true");
    let mostrar = document.getElementById("heroe");
    let heroe = cargarPartida();
    let salaActual = localStorage.getItem("salaActual") || "entrada_mundo";
    let habitacionActual = defaultGameState.map.rooms.find(r=>r.name === salaActual);
    let habitacionId = habitacionActual.id;
    let totalFuerza = heroe.strength + heroe.strengthBonus;
    let totalDefensa = heroe.defense + heroe.defenseBonus;
    let contenido = `
        <button onclick="muestraHeroe()">Muestra héroe</button> <button onclick="cerrarHeroe()">X</button>
        <p>Nombre: ${heroe.name}</p>
        <p>Vida: ${heroe.health}</p> 
        <p>Fuerza: ${totalFuerza}(${heroe.strength} + ${heroe.strengthBonus})</p> 
        <p>Defensa: ${totalDefensa}(${heroe.defense} + ${heroe.defenseBonus})</p>
        <p>Sala actual: ${habitacionId}</p> 
        <p>Oro: ${heroe.gold}</p> 
        <p>Pociones: ${heroe.potions}</p>
    `;
        
    mostrar.innerHTML = contenido;
}
function cerrarHeroe() {
    localStorage.setItem("verHeroe", "false");
    let mostrar = document.getElementById("heroe");
    mostrar.innerHTML = '<button onclick="muestraHeroe()">Muestra héroe</button>';
}


function cerrarInfo(){
    document.getElementById("datos-sala").innerHTML = "";
    document.getElementById("datos-enemigo").innerHTML = "";
    document.getElementById("datos-interaccion").innerHTML = "";
    document.getElementById("datos-gestion").innerHTML = "";

    if(document.getElementById("menu_acciones")){
        document.getElementById("menu_acciones").classList.remove("mostrar");
    }
    if(document.getElementById("opciones")){
        document.getElementById("opciones").classList.remove("mostrar");
    }
}

function muestraSala(){
    let cajaEnemigo = document.getElementById("datos-enemigo");
    if (cajaEnemigo) {
        cajaEnemigo.innerHTML = "";
    }
    let mostrar = document.getElementById("datos-sala");
    let sala = defaultGameState.map.rooms;
    let aleatorio = Math.floor(Math.random() * sala.length);
    let seleccion = sala[aleatorio];
    let contenido = `
        <p>Id: ${seleccion.id}</p>
        <p>Probabilidad de monstruo: ${seleccion.monsterProb}</p>
        <p>Tienda: ${seleccion.isShop}</p>
        <p>Nombre: ${seleccion.name}</p>
        <p>Descripcion: ${seleccion.description}</p>
        <p>Norte: ${seleccion.north}</p>
        <p>Sur: ${seleccion.south}</p>
        <p>Este: ${seleccion.east}</p>
        <p>Oeste: ${seleccion.west}</p>
        <p>Imagen:</p>
        <img src="../Imagenes/${seleccion.img}" alt= "${seleccion.name}">
        
    `;  
    mostrar.innerHTML   = contenido;
}

function muestraEnemigo(){
    let cajaSala = document.getElementById("datos-sala");
    if (cajaSala) {
        cajaSala.innerHTML = "";
    }
    let mostrar = document.getElementById("datos-enemigo");
    let enemigos = defaultGameState.map.enemies;
    let aleatorio = Math.floor(Math.random() * enemigos.length);
    let seleccion = enemigos [aleatorio];
    mostrar.innerHTML = `
        <p>Nombre: ${seleccion.name}</p>
        <p>Jefe: ${seleccion.isBoss}</p>
        <p>Descripción: ${seleccion.description}</p>
        <p>Vida: ${seleccion.health}</p>
        <p>Fuerza: ${seleccion.strength}</p>
        <p>Defensa: ${seleccion.defence}</p>
        <p>Imagen:</p>
        <img src= "../Imagenes/${seleccion.img}" alt= "${seleccion.name}">
        
    `;
}

function interaccion(){
    document.getElementById("menu_acciones").classList.remove("mostrar");
    let menu = document.querySelector(".acciones");
    menu.classList.toggle("mostrar");
}

function gestion(){
    document.getElementById("opciones").classList.remove("mostrar");
    let menu = document.querySelector(".opciones_ocultas");
    menu.classList.toggle("mostrar");
}

function cargarPartida(){
    const personaje = localStorage.getItem("datosNaia");
    if(personaje){
        return JSON.parse(personaje);
    }else{
        return defaultGameState.player[2];
    }
}
let iniciarPartida = document.getElementById("cargar");
if(iniciarPartida){
    iniciarPartida.addEventListener("click", function(e){
        e.preventDefault();
        cargarPartida();
        recuadroTexto(`<p>Bienvenido/a de nuevo, comienza tu partida con los mismos datos</p>`);
    });
}

function guardarPartida(heroe){
    localStorage.setItem("datosNaia", JSON.stringify(heroe));
}
let guardarProgreso = document.getElementById("guardar");
if(guardarProgreso){
    guardarProgreso.addEventListener("click", function(e){
        e.preventDefault();
        cargarPartida();
        recuadroTexto(`<p>Has guardado la partida.</p>`);
    });
}

function buscarOro(){
    let heroe = cargarPartida();
    let salaActual = localStorage.getItem("salaActual") || "entrada_mundo";
    let habitacionActual = defaultGameState.map.rooms.find(r => r.name === salaActual);

    if(habitacionActual && habitacionActual.monsterProb >0){
    let suerte = Math.random();
    if(suerte > 0.5){
        let encontrado = Math.floor(Math.random() *10) +1;
        heroe.gold +=encontrado;
        guardarPartida(heroe);
        let texto= `<p>¡Hoy estás de suerte! has encontrado ${encontrado} monedas y ahora tienes ${heroe.gold} monedas de oro.</p>`;
        recuadroTexto(texto);
        muestraHeroe();
    }else {
        let texto= `<p>Aunque te has arriesgado buscando aquí, esta vez no había oro.</p>`;
          recuadroTexto(texto);
    }
    }else {
        recuadroTexto(`<p>Esta zona parece demasiado segura para encontrar oro, prueba en el castillo.</p>`);
    }
}
let botonMochila = document.getElementById("dinero");
if(botonMochila){
    botonMochila.addEventListener("click", function(e){
        e.preventDefault();
        buscarOro();
    });
}

function comprarPocion(){
    let heroe = cargarPartida();
    if(heroe.gold >= 3){
        heroe.gold-=3;
        heroe.potions+=1;
        heroe.defenseBonus +=1;
        guardarPartida(heroe);
        let texto = `<p>Esta poción te será de gran ayuda en el viaje. Tienes ${heroe.potions} pociones y te quedan ${heroe.gold} monedas</p>`;
        recuadroTexto(texto);
        muestraHeroe();
    }else {
        recuadroTexto(`<p>No tienes suficiente oro para comprar la poción, quizás encuentres algo en la mochila</p>`);
        muestraHeroe();
    }

}
let pocion = document.getElementById("comprar");
if(pocion){
pocion.addEventListener("click", function(e){
    e.preventDefault();
    comprarPocion();
});
}
function repararArma(){
    let heroe = cargarPartida();
    if(heroe.gold >=5){
        heroe.gold-=5;
        heroe.strengthBonus+= 2;
        guardarPartida(heroe);
        let texto = `<p>He arreglado tu arco, has sumado dos puntos de defensa, ahora tienes ${heroe.defense} puntos.</p>`;
        recuadroTexto(texto);
        muestraHeroe();
    }else {
        recuadroTexto(`<p>No tienes suficiente oro para reparar tu arco, quizás encuentres algo en la mochila</p>`);
        muestraHeroe();
    }
}
let arma = document.getElementById("reparar");
if(arma){
arma.addEventListener("click", function(e){
    e.preventDefault();
    repararArma();
});
}
function verPociones(){
    let heroe = cargarPartida();
    if(heroe.potions>0){
        let texto = `<p>Tienes ${heroe.potions} pociones</p>`;
        recuadroTexto(texto);
        muestraHeroe();
    }else {
         recuadroTexto(`<p>No tienes pociones en este momento</p>`);
         muestraHeroe();
    }
}
let pociones = document.getElementById("pociones");
if(pociones){
    pociones.addEventListener("click", function(e){
        e.preventDefault();
        verPociones();
    });
}

function cuadroAyuda(){
    let texto = `
        <p>Haz click en las flechas para moverte por el mapa.</p>
        <p>Presta mucha atención a este cuadro de texto, te indicará a qué dirección ir.</p>
        <p>El botón de "Muestra sala" te ofrece datos sobre las salas del mapa, direcciones posibles, probabilidad de encontrar un monstruo y una foto representativa.</p>
        <p>El botón "Muestra enemigo" te enseña los monstruos que se encuentran en el mapa y su poder. Te ayudará a entrenar a tu personaje antes de entrar al castillo.</p>
        <p>El oro se encuentra distribuido por zonas específicas del mapa, cuando llegues a una sala haz click en el botón "Buscar oro".</p>
        <p>Haz click en el botón de "Pociones" para conocer cuantas posees.</p>
        <p>No te olvides de guardar tu partida.</p>
    `;
    recuadroTexto(texto);
}
let botonAyuda = document.getElementById("ayuda"); 
if (botonAyuda) {
    botonAyuda.addEventListener("click", function(e) {
        e.preventDefault();
        cuadroAyuda();
    });
}

function recuperarVida(){
    let heroe = cargarPartida();
    if(heroe.potions>0){
        heroe.potions--;
        heroe.health+=10;
        guardarPartida(heroe);
        recuadroTexto(`<p>Has recuperado 10 puntos de vida.</p>`);
        muestraHeroe();
    }else{
        recuadroTexto(`<p>No tienes suficientes pociones, ve a la tienda a adquirir más.</p>`);
    }
}

let recuperar = document.getElementById("beberPocion");
if(recuperar){
    recuperar.addEventListener("click", function(e){
        e.preventDefault();
        recuperarVida();
    });
}


let enemigoActual = null;

function ataque() {
    let heroe = cargarPartida();
    let sala = localStorage.getItem("salaActual");
    let listaEnemigos = defaultGameState.map.enemies;

    if (enemigoActual === null) {
        let enemigoGuardado = localStorage.getItem("enemigoEnCombate");
        if (enemigoGuardado) {
            enemigoActual = JSON.parse(enemigoGuardado);
        }
    }

    if (enemigoActual === null) {
        if (sala === "castillo_este2_monstruo") {
            enemigoActual = { ...listaEnemigos[0] }; 
        } else if (sala === "castillomonstruo2") {
            enemigoActual = { ...listaEnemigos[1] }; 
        } else if (sala === "castillo_boss") {
            enemigoActual = { ...listaEnemigos[2] };
        }
    }

    if (enemigoActual === null) {
        recuadroTexto(`<p>Aquí no hay enemigos.</p>`);
        return;
    }

    let miFuerzaTotal = heroe.strength + heroe.strengthBonus;
    let miDefensaTotal = heroe.defense + heroe.defenseBonus;
    
    let dañoEnemigo = Math.max(1, miFuerzaTotal - enemigoActual.defence);
    enemigoActual.health -= dañoEnemigo;
    
    localStorage.setItem("enemigoEnCombate", JSON.stringify(enemigoActual));
    
    recuadroTexto(`<p>Has atacado a ${enemigoActual.name} y le has hecho ${dañoEnemigo} de daño.</p>`);

    if (enemigoActual.health <= 0) {
        recuadroTexto(`<p>¡Has derrotado a ${enemigoActual.name}!</p>`);
        enemigoActual = null;
        localStorage.removeItem("enemigoEnCombate"); 

        setTimeout(function() {
            
            if (sala === "castillo_boss") {
                localStorage.setItem("salaActual", "castilloNoBoss");
                window.location.href = "../castilloNoBoss/noBossNaia.html";
            } 
            else if (sala === "castillo_este2_monstruo") {
                localStorage.setItem("salaActual", "castillo_este2"); 
                window.location.href = "../castillo_este2/castillo_este2NAIA.html"; 
            } 
            else if (sala === "castillomonstruo2") {
                localStorage.setItem("salaActual", "castillo_este"); 
                window.location.href = "../castillo_este/castillo_esteNAIA.html";
            }
        }, 1500);
        return;
    }

    let dañoHeroe = Math.max(1, enemigoActual.strength - miDefensaTotal);
    heroe.health -= dañoHeroe;

    if (heroe.health <= 0) {
        recuadroTexto(`<p>${enemigoActual.name} te ha matado.</p>`);
        heroe.health = 10;
        
        localStorage.setItem("salaActual", "entrada_mundo");
        localStorage.removeItem("enemigoEnCombate");
        guardarPartida(heroe);
        
        setTimeout(function() {
            window.location.href = "../entrada_mundo/entrada_NAIA.html";
        }, 1500);
        return;
    }

    guardarPartida(heroe);
    muestraHeroe();
    recuadroTexto(`<p>${enemigoActual.name} te ataca y te hace ${dañoHeroe} de daño.</p>`);
}

let pelea = document.getElementById("atacar");
if (pelea) {
    pelea.addEventListener("click", function(e) {
        e.preventDefault();
        ataque();
    });
}

function resetearPersonaje(){
 localStorage.removeItem("datosNaia");
    localStorage.removeItem("enemigoEnCombate");
    
    let heroeNuevo = defaultGameState.player[2]; // Volvemos a Naia inicial
    localStorage.setItem("datosNaia", JSON.stringify(heroeNuevo));
    localStorage.setItem("verHeroe", "false"); 
    localStorage.setItem("salaActual", "entrada_mundo");

    recuadroTexto(`<p>Has reseteado correctamente tu personaje</p>`);
    window.location.href = "../entrada_mundo/entrada_NAIA.html";
}
let resetear = document.getElementById("reseteo");
if(resetear){
    resetear.addEventListener("click", function(e){
        e.preventDefault();
        resetearPersonaje();
    });
}
    

document.addEventListener("DOMContentLoaded", function() {
    let visible = localStorage.getItem("verHeroe");
    
    if (visible === "true") {
        muestraHeroe();
    }
});