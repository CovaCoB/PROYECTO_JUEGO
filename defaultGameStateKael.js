const defaultGameState ={
player: {
    1:{
        name: "kael",
        health: 100,
        strength: 10,
        strengthBonus: 0,
        defense:  8,
        defenseBonus: 1,
        currentRoom: 1,
        gold: 120,
        potions: 3
    },
    2:{
        name: "naia",
        health: 100,
        strength: 10,
        strengthBonus: 0,
        defense:  8,
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
            description: "Monstruo quimera cuya piel esta formada por hierro y gemas que lo atraviesan, posee garras afiladas y su mordedura es letal",
            health: 40,
            strength: 6,
            defence: 3,
            img: "monstruo3.png"
        },
        {
            name: "Espectro",
            isBoss: false,
            description: "Monstruo que acecha en los lugares más oscuros, su cuerpo se fusiona con el entorno y es difícil verlo, si te alcanza te convertirá en un pedazo de cristal",
            health: 25,
            strength: 4,
            defence: 2,
            img: "monstruo2transparente.png"
        },
        {
            name: "El coloso",
            isBoss: true,
            description: "Es el guardián, vive en la parte más profunda del castillo. Es inmenso, su cuerpo esta formado por piedra volcánica, solo acercarte te mataría. Posee un bastón en cuya punta viven las almas de los antiguos héroes",
            health: 70,
            strength: 9,
            defence: 7,
            img: "monstruo_final.png"
        }
    ]
}
};
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

function mover(direccion) {
    let salaActual = localStorage.getItem("salaActual") || "entrada_mundo";
    let habitacionActual = defaultGameState.map.rooms.find(r=> r.name === salaActual);
    if(!habitacionActual || !habitacionActual[direccion]){
        alert("No puedes ir hacia ahí");
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
        alert("Ese camino no lleva a ninguna parte");
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
    "En lo más profundo del Oeste, tras la segunda torre, habita aquello que custodia la salida. No entres sin estar preparado, pues el guardián del Castillo no perdona los pasos en falso.",
    "Necesitarás piedra amatista para entrar al ala este, dicen que esa piedra ayuda a debilitar a aquello que ahí habita ",
    "A veces, retroceder al Sur es la única forma de encontrar el camino correcto.",
    "La forja del Este reparará tus armas y las reforzará con mi magia"
];

function bruja(){
    let posibilidad = Math.floor(Math.random() * consejos.length);
    let mensaje = consejos[posibilidad];
    let texto = "Bien Kael... recuerda esto: ";

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
 
    