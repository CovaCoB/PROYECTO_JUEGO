const habitaciones = {
    "entrada_mundo": {
        norte: "entrada_castillo",
        este: "forja",
        oeste: ["paisaje_izq", "paisaje_izq_bruja"],
        sur: null
    },
    "forja": {
        oeste: "entrada_mundo",
        norte: null,
        sur: null,
        este: null
    },
    "paisaje_izq": {
        este: "entrada_mundo",
        norte: null,
        sur: null,
        oeste:null
    },
     "paisaje_izq_bruja": {
        este: "entrada_mundo",
        norte: null,
        sur: null,
        oeste:null
    },
    "entrada_castillo": {
        norte: "castillo",
        sur: "entrada_mundo",
        este: null,
        oeste: null
    },
    "castillo": {
        norte: "castillo_norte",
        sur: "entrada_castillo",
        este: null,
        oeste: null
    },
    "castillo_norte": {
        sur: "castillo",
        este: ["castillo_este", "castillomonstruo2"],
        oeste: "castillo_oeste",
        norte: null
    },
    "castillo_oeste": {
        norte: "castillo_oeste2",
        sur: "castillo_norte",
        este: null,
        oeste: null
    },
    "castillo_oeste2": {
        norte: "castillo_boss",
        sur: "castillo_oeste",
        este: null,
        oeste: null
    },
    "castillo_boss": {
        sur: "castillo_oeste2",
        este: null,
        oeste: null,
        norte: null
    },
       "castillo_este": {
        norte: ["castillo_este2", "castillo_este2_monstruo"],
        sur: "castillo_norte",
        este: null,
        oeste: null
    },
     "castillomonstruo2": {
        norte: ["castillo_este2", "castillo_este2_monstruo"],
        sur: "castillo_norte",
        este: null,
        oeste: null
    },
    "castillo_este2": {
        sur: ["castillo_este", "castillomonstruo2"],
        este: null,
        oeste: null,
        norte: null
    },
    "castillo_este2_monstruo": {
        sur: ["castillo_este", "castillomonstruo2"],
        este: null,
        oeste: null,
        norte: null
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
    "castillo_este": "/castillo_este/castillo_esteNAIA.html",
    "castillomonstruo2": "/castillomonstruo2/monstruo2naia.html",
    "castillo_este2":  "/castillo_este2/castillo_este2NAIA.html",
    "castillo_este2_monstruo": "/castillo_este2_monstruo/castillo_este2_monstruoNAIA.html"
};


function mover(direccion) {
    let salaActual = localStorage.getItem("salaActual") || "entrada_mundo";
    
    let destino = habitaciones[salaActual][direccion];

    if (Array.isArray(destino)) {
        let random = Math.random();
        if (random < 0.20) {
            destino = destino[1]; 
        } else {
            destino = destino[0]; 
        }
    }

    if (destino && rutas[destino]) {
        localStorage.setItem("salaActual", destino);
        window.location.href = rutas[destino];
    } else {

        alert("No puedes ir hacia el " + direccion);
    }
}

//Asignamos al id del html el evento click que redirige a la ruta norte con la funcion.
document.getElementById("dir_norte").addEventListener("click", ()=>mover("norte"));
document.getElementById("dir_sur").addEventListener("click", ()=>mover("sur"));
document.getElementById("dir_este").addEventListener("click", ()=>mover("este"));
document.getElementById("dir_oeste").addEventListener("click", ()=>mover("oeste"));

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
