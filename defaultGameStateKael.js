/*se crea el objeto literal con sus dos propiedades.
Como diseñé las salas de monstruos creando un nuevo html con la foto de ellos, algunas direcciones son arrays de los dos html. 
*/
const defaultGameState ={
player: {
    1:{
        name: "Kael",
        health: 100,
        strength: 10,
        strengthBonus: 0,
        defense:  8,
        defenseBonus: 0,
        currentRoom: 1,
        gold: 120,
        potions: 3
    },
    2:{
        name: "Naia",
        health: 100,
        strength: 10,
        strengthBonus: 0,
        defense:  8,
        defenseBonus: 0,
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
            monsterProb: 0.02,
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
            monsterProb: 0.30,
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
            monsterProb: 0.20,
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
            description: "Monstruo quimera cuya piel esta formada por hierro y gemas que lo atraviesan, posee garras afiladas y su mordedura es letal",
            health: 40,
            strength: 7,
            defence: 5,
            img: "monstruo3_small.png"
        },
        {
            name: "Espectro",
            isBoss: false,
            description: "Monstruo que acecha en los lugares más oscuros, su cuerpo se fusiona con el entorno y es difícil verlo, si te alcanza te convertirá en un pedazo de cristal",
            health: 25,
            strength: 6,
            defence: 3,
            img: "monstruo2_small.png"
        },
        {
            name: "El coloso",
            isBoss: true,
            description: "Es el guardián, vive en la parte más profunda del castillo. Es inmenso, su cuerpo esta formado por piedra volcánica, solo acercarte te mataría. Posee una lanza en cuya punta viven las almas de los antiguos héroes",
            health: 100,
            strength: 15,
            defence: 10,
            img: "monstruo_final_big.png"
        }
    ]
}
};
/*
Se crea la constante rutas, de tal manera que introduciendo la clave nos dirige correctamente al destino.
Introduzco la ruta absoluta para que no me de fallos cuando el personaje comience a moverse por el mapa.
*/
const rutas ={
    "entrada_mundo": "/entrada_mundo/entrada_KAEL.html",
    "forja": "/forja/forja_KAEL.html",
    "paisaje_izq" : "/paisaje_izq/paisaje_KAEL.html",
    "paisaje_izq_bruja": "/paisaje_izq_bruja/paisaje_KAEL.html",
    "entrada_castillo": "/entrada_castillo/entrada_castilloKAEL.html",
    "castillo": "/castillo/castillo_KAEL.html",
    "castillo_norte": "/castillo_norte/castillo_norteKAEL.html",
    "castillo_oeste": "/castillo_oeste/castillo_oesteKAEL.html",
    "castillo_oeste2": "/castillo_oeste2/castillo_oeste2KAEL.html",
    "castillo_boss": "/castillo_boss/castillobossKAEL.html",
    "castilloNoBoss": "/castilloNoBoss/noBossKael.html",
    "castillo_este": "/castillo_este/castillo_esteKAEL.html",
    "castillomonstruo2": "/castillomonstruo2/monstruo2kael.html",
    "castillo_este2":  "/castillo_este2/castillo_este2KAEL.html",
    "castillo_este2_monstruo": "/castillo_este2_monstruo/castillo_este2_monstruoKAEL.html"
};

/*
Obtengo la sala actual guardada en el localStorage. Si no existe, posición inicial.
Se recorre el array de rooms y se busca el nombre que coincida con la sala actual y se guarda en habitacionActual.
Se comprueba que la habitación exista y que se puede ir hacia esa dirección.
El movimiento del jugador se guarda en destino.
*/

function mover(direccion) {
    let salaActual = localStorage.getItem("salaActual") || "entrada_mundo";
    let habitacionActual = defaultGameState.map.rooms.find(r => r.name === salaActual);

    if (!habitacionActual || !habitacionActual[direccion]) {
        recuadroTexto(`<p>No puedes ir hacia ahí</p>`);
        return;
    }

    let destino = habitacionActual[direccion];
    /*
    Se crea la variable random que se usará para generar la probabilidad de encontrar un monstruo dependiendo el tipo.
    Al principio habia creado un if(Array.isArray(destino)){destino = (random < 0.02) ? destino[1]:destino[0];} Pero no
    podía darle más probabilidad a un monstruo que a otro porque directamente cogía del array de rooms la habitación[1] que
    es la que tiene el monstruo. Al final, diseñé el programa con includes buscando por clave.
    */
    let random = Math.random();

    if (Array.isArray(destino)) {
        if (destino.includes("castillomonstruo2")) {
            destino = (random <= 0.30) ? "castillomonstruo2" : "castillo_este";
        } 
        
        else if (destino.includes("castillo_boss")) {
            destino = (random <= 0.02) ? "castillo_boss" : "castilloNoBoss";
        }
      
        else if (destino.includes("castillo_este2_monstruo")) {
            destino = (random <= 0.20) ? "castillo_este2_monstruo": "castillo_este2";
        }
        else if (destino.includes("paisaje_izq_bruja")) {
            destino = (random <= 0.20) ? "paisaje_izq_bruja": "paisaje_izq";
        }
        else {
            destino = destino[0];
        }
    }
    //Se guarda en el local storage el nombre con la nueva sala, asi se puede recordar la posicion del jugador para cambiar a otra.
    if (rutas[destino]) {
        localStorage.setItem("salaActual", destino);
        window.location.href = rutas[destino];
    } else {
        recuadroTexto(`<p>No puedes ir hacia ahí (Ruta no encontrada)</p>`);
    }
}

//Busco en el html los elementos con esas id y al hacer click se ejecuta la función mover();
document.getElementById("dir_norte").addEventListener("click", ()=>mover("north"));
document.getElementById("dir_sur").addEventListener("click", ()=>mover("south"));
document.getElementById("dir_este").addEventListener("click", ()=>mover("east"));
document.getElementById("dir_oeste").addEventListener("click", ()=>mover("west"));

//añadir al recuadro de información texto y que exista scroll. Se añade al css "overflow-y:auto;" para que funcione el scroll.

function recuadroTexto(texto){
    const informacion = document.getElementById("cuadro_narrativa");
    informacion.innerHTML += `<p>${texto}</p>`;
    informacion.scrollTop = informacion.scrollHeight;
}
/*
Introduje un personaje de bruja por la historia que diseñé para el juego. Hice una constante con diferentes consejos
que se activarán aleatoriamente. Es decir, primero la bruja no está siempre en esa zona, aparece como los monstruos con
cierta probabilidad. Además, si seleccionas el botón para el consejo no siempre será el mismo, se muestran aleatoriamente
estos cuatro.
*/
const consejos = [
    "En lo más profundo del Oeste, tras la segunda torre, habita aquello que custodia la salida. No entres sin estar preparado, pues el guardián del Castillo no perdona los pasos en falso.",
    "Necesitarás piedra amatista para entrar al ala este, dicen que esa piedra ayuda a debilitar a aquello que ahí habita ",
    "A veces, retroceder al Sur es la única forma de encontrar el camino correcto.",
    "La forja del Este reparará tus armas y las reforzará con mi magia"
];

function bruja(){
    let posibilidad = Math.floor(Math.random() * consejos.length);
    let mensaje = consejos[posibilidad];
    //texto adaptado a Kael.
    let texto = "Bien Kael... recuerda esto: ";
    //como fui modificando el juego, a lo largo de este js se encuentra la funcion de recuadroTexto que llamo aquí.
    recuadroTexto(texto + mensaje);
}
//la funcion bruja(); se activa con el evento click que surge al pulsar el botón de aceptar consejo. Se enlaza con el id que está en el html.
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
/*
He creado un botón en el html para cargar la partida, de tal manera que busca en localStorage los datos guardados del jugador
y si existen los devuelve como objeto. Se utiliza como "mediador de lenguaje" JSON porque adapta las entradas de datos en el localStorage
que solo almacena texto y viceversa. Si no encuentra datos del personaje genera la carta con los datos de inicio.
*/
function cargarPartida(){
    const personaje = localStorage.getItem("datosKael");
    if(personaje){
        return JSON.parse(personaje);
    }else{
        return defaultGameState.player[1];
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

//Se guardan los datos en localStorage en formato texto mediante JSON.stringify.
function guardarPartida(heroe){
    localStorage.setItem("datosKael", JSON.stringify(heroe));
}
let guardarProgreso = document.getElementById("guardar");
if(guardarProgreso){
    guardarProgreso.addEventListener("click", function(e){
        e.preventDefault();
        let heroe = cargarPartida();
        guardarPartida(heroe);
        recuadroTexto(`<p>Has guardado la partida.</p>`);
    });
}
/*
Esta es la carta del heroe que se va actualizando mientras se juega.
Se guarda en localStorage la clave: valor.
El botón del html tiene un id heroe. Uso la función cargarPartida();
Nuavemente, guardo la sala actual guardada en el localStorage. Si no existe, posición inicial.
Se comprueba que aparezca su nombre en el array y se muestra su id. Esto es necesario para que la carta del heroe
vaya actualizando el id de la sala según va avanzando.
Creo dos variables que sumen la defensa con su bonus al igual que con fuerza y así mostrarlo en la carta.
*/
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
//dar opción a cerrar la pestaña con los items del jugador.
function cerrarHeroe() {
    localStorage.setItem("verHeroe", "false");
    let mostrar = document.getElementById("heroe");
    //muestro el botón porque esto cerraba todo y luego no la podía abrir.
    mostrar.innerHTML = '<button onclick="muestraHeroe()">Muestra héroe</button>';
}
//Esta función sirve para cerrar el resto de botones.
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
    //Tuve que generar estas líneas para que se cerrase la caja enemigo cuando se abriese la caja de sala.
    let cajaEnemigo = document.getElementById("datos-enemigo");
    if (cajaEnemigo) {
        cajaEnemigo.innerHTML = "";
    }
    /*Genero una sala aleatoria, la guardo en una variable y la uso como llave para acceder a sus datos específicos.
    Genero la imagen con html.
    */
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
//Misma manera que la anterior.
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
/*
Tanto para interaccion como gestion planteé la misma funcion: necesitaba dos botones que hiciesen de menu y, al 
hacerle click fuese un desplegable de mas botones pero que se pudiesen ocultar para que no fuese incómodo para
el usuario que juega. Para ello, se alterna eliminar con monstrar. Con remove oculto el menu y con toggle lo abro y cierro
alternando estos dos botones.
*/

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

/*
Misma manera de proceder que antes para saber donde esta el personaje y se mueva por el mapa.
Cargo el personaje con sus datos.
Si la zona en la que está es >0 en probabilidad de que salga un monstruo, entonces aparece oro.
Aquí también le apliqué un random para que no encontrase siempre oro aunque sea una sala con monstruo, para que fuese
más realista.
Cuando encuentra oro se suman y se guardan los datos del personaje.
*/
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
        let texto= `<p>¡Qué bien! has encontrado ${encontrado} monedas y ahora tienes ${heroe.gold} monedas de oro.</p>`;
        recuadroTexto(texto);
        muestraHeroe();
    }else {
        let texto= `<p>No parece que haya más oro...</p>`;
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

/*
Función comprar poción que suma pociones y resta 3 de oro.
*/
function comprarPocion(){
    let heroe = cargarPartida();
    if(heroe.gold >= 3){
        heroe.gold-=3;
        heroe.potions+=1;
        guardarPartida(heroe);
        let texto = `<p>Esta poción te será de gran ayuda en el viaje.<br>
        Tienes ${heroe.potions} pociones y te quedan ${heroe.gold} monedas.</p>`;
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

/*reparar arma tambien te suma en fuerza. Es una función que añadí por seguir la lógica de mi diseño.
Le he puesto un limite al bonus, porque sino el heroe podría tener fuerza infinita.
*/
}
function repararArma(){
    let heroe = cargarPartida();
    let bonus_maximo = 15;
    if(heroe.strengthBonus >= bonus_maximo){
        recuadroTexto(`<p>Tu lanza es suficientemente poderosa</p>`);
        return;
    }
    if(heroe.gold >=5){
        heroe.gold-=5;
        heroe.strengthBonus+= 2;
        guardarPartida(heroe);
        let texto = `<p>He arreglado tu lanza, has sumado dos puntos de fuerza, ahora tienes ${heroe.strength + heroe.strengthBonus} puntos.</p>`;
        recuadroTexto(texto);
        muestraHeroe();
    }else {
        recuadroTexto(`<p>No tienes suficiente oro para reparar tu lanza, quizás encuentres algo en la mochila</p>`);
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

//si no tiene pociones le sale un aviso en el recuadro de juego.
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


function sumarDefensa(){
    let heroe = cargarPartida();
    //Se ponen limites como el bonus de fuerza.
    if(heroe.defenseBonus >= 10){
        recuadroTexto(`<p>Tu defensa ya está al máximo nivel posible.</p>`);
        return;
    }

    // Se comprueba si tiene pociones.
    if (heroe.potions > 0){
        heroe.potions--;
        heroe.defenseBonus += 5;
        heroe.isBuffed = true;
        
        guardarPartida(heroe);
        recuadroTexto(`<p>Te sientes más fuerte. (Defensa +5 para el próximo combate).</p>`);
        muestraHeroe();
    } else {
        recuadroTexto(`<p>No te quedan pociones de defensa.</p>`);
    }
}
let masDefensa = document.getElementById("pocionDefensa");
if(masDefensa){
    masDefensa.addEventListener("click", function(e){
        e.preventDefault();
        sumarDefensa();
    });
}

//texto para el botón de ayuda del juego.
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

//El heroe recupera vida al tomar pociones. 

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
/*
Se inicializa enemigoActual fuera para que pueda bajarle la vida. Si estuviese dentro se reiniciaría todo el tiempo y el
personaje no podría vencerlo.
*/

let enemigoActual = null;

function ataque() {
    let heroe = cargarPartida();
    let sala = localStorage.getItem("salaActual");
    let listaEnemigos = defaultGameState.map.enemies;
    //Se mira si hay enemigos guardados. Se convierte el string json a formato javascript y se asigna a enemigoActual.
    if (enemigoActual === null) {
        let enemigoGuardado = localStorage.getItem("enemigoEnCombate");
        if (enemigoGuardado) {
            enemigoActual = JSON.parse(enemigoGuardado);
        }
    }
    //Si no hay enemigo cargado, se crea una copia. Se utiliza spread {...} que copia el existente sin modificar el original.
    if (enemigoActual === null) {
        if (sala === "castillo_este2_monstruo") {
            enemigoActual = { ...listaEnemigos[0] }; 
        } else if (sala === "castillomonstruo2") {
            enemigoActual = { ...listaEnemigos[1] }; 
        } else if (sala === "castillo_boss") {
            enemigoActual = { ...listaEnemigos[2] };
        }
    }
    //También puede ser que la sala no tenga enemigos, por lo tanto se manda un mensaje por el cuadro del juego.
    if (enemigoActual === null) {
        recuadroTexto(`<p>Aquí no hay enemigos.</p>`);
        return;
    }
    //variables para sumar item + bonus y así en la pelea se tiene en cuenta este total.
    let miFuerzaTotal = heroe.strength + heroe.strengthBonus;
    let miDefensaTotal = heroe.defense + heroe.defenseBonus;
    //el 1 garantiza que el daño mínimo sea 1. Se hace fuerza total menos la defensa del enemigo.
    let dañoEnemigo = Math.max(1, miFuerzaTotal - enemigoActual.defence);
    //se resta a la vida del enemigo.
    enemigoActual.health -= dañoEnemigo;
    //se guarda el estado del enemigo y aunque se reinicie la pelea se podrá continuar desde ese punto.
    localStorage.setItem("enemigoEnCombate", JSON.stringify(enemigoActual));
    
    recuadroTexto(`<p>Has atacado a ${enemigoActual.name} y le has hecho ${dañoEnemigo} de daño.</p>`);
    //si la vida del enemigo es menor o igual que 0 significa que el heroe ha ganado. El enemigo se elimina.
    if (enemigoActual.health <= 0) {
        recuadroTexto(`<p>¡Has derrotado a ${enemigoActual.name}!</p>`);
        heroe.strengthBonus += 2;
        recuadroTexto(`<p>¡Has encontrado una lanza mejor entre los restos de ${enemigoActual.name}! (+2 Fuerza)</p>`);
        //se elimina el efecto de la defensa.
        if(heroe.isBuffed){
            heroe.defenseBonus -= 5; 
            heroe.isBuffed = false;
            guardarPartida(heroe);
            recuadroTexto(`<p>El efecto de la poción se ha desvanecido.</p>`);
        }
        enemigoActual = null;
        localStorage.removeItem("enemigoEnCombate"); 
        /*Introduje esta función porque quería que, una vez muerto el enemigo se cargase automáticamente la sala sin
        enemigo. Por ejemplo, en la del boss final introduje en el css al enemigo y humo. Pero, al morir el enemigo,
        tanto éste como el humo se borran, mostrandose la sala vacía. Así da mas credibilidad al juego.
        Introduje cuatro segundos de tiempo para que la persona que jugase leyese en el recuadro el mensaje de que ganó la pelea
         y de que obtuvo bonus de fuerza antes de que se reiniciase
        */
        setTimeout(function() {
            
            if (sala === "castillo_boss") {
                localStorage.setItem("salaActual", "castilloNoBoss");
                window.location.href = "../castilloNoBoss/noBossKael.html";
            } 
            else if (sala === "castillo_este2_monstruo") {
                localStorage.setItem("salaActual", "castillo_este2"); 
                window.location.href = "../castillo_este2/castillo_este2KAEL.html"; 
            } 
            else if (sala === "castillomonstruo2") {
                localStorage.setItem("salaActual", "castillo_este"); 
                window.location.href = "../castillo_este/castillo_esteKAEL.html";
            }
        }, 4000);
        return;
    }
    //misma manera que con enemigo.
    let dañoHeroe = Math.max(1, enemigoActual.strength - miDefensaTotal);
    heroe.health -= dañoHeroe;

    if (heroe.health <= 0) {
        recuadroTexto(`<p>${enemigoActual.name} te ha matado.</p>`);
        heroe.health = 10;
        //si muere el heroe te redirige a la zona de entrada al mundo. Te carga el personaje con 10 de vida. Lo implementé porque daba realismo.
        localStorage.setItem("salaActual", "entrada_mundo");
        localStorage.removeItem("enemigoEnCombate");
        guardarPartida(heroe);
        
        setTimeout(function() {
            window.location.href = "../entrada_mundo/entrada_KAEL.html";
        }, 2000);
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
 localStorage.removeItem("datosKael");
    localStorage.removeItem("enemigoEnCombate");
    
    let heroeNuevo = defaultGameState.player[1]; 
    localStorage.setItem("datosKael", JSON.stringify(heroeNuevo));
    //al contrario que la función muestraHeroe. 
    localStorage.setItem("verHeroe", "false"); 
    localStorage.setItem("salaActual", "entrada_mundo");

    recuadroTexto(`<p>Has reseteado correctamente tu personaje</p>`);
    //Te redirige al punto inicial.
    window.location.href = "../entrada_mundo/entrada_KAEL.html";
}
let resetear = document.getElementById("reseteo");
if(resetear){
    resetear.addEventListener("click", function(e){
        e.preventDefault();
        resetearPersonaje();
    });
}

//Fue necesario implementar esto debido a que el botón de la carta del jugador se cerraba cada vez que cambiaba de sala.
document.addEventListener("DOMContentLoaded", function() {
    let visible = localStorage.getItem("verHeroe");
    
    if (visible === "true") {
        muestraHeroe();
    }
});
