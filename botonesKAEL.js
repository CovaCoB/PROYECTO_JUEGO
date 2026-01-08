console.log("Sala actual detectada:", localStorage.getItem("salaActual"));
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
        este: ["castillo_este", "castillo_este_monstruo"],
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
     "castillo_este_monstruo": {
        norte: ["castillo_este2", "castillo_este2_monstruo"],
        sur: "castillo_norte",
        este: null,
        oeste: null
    },
    "castillo_este2": {
        sur: ["castillo_este", "castillo_este_monstruo"],
        este: null,
        oeste: null,
        norte: null
    },
    "castillo_este2_monstruo": {
        sur: ["castillo_este", "castillo_este_monstruo"],
        este: null,
        oeste: null,
        norte: null
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
    "castillo_este": "/castillo_este/castillo_esteKAEL.html",
    "castillo_este_monstruo": "/castillo_este_monstruo/castillo_este_monstruoKAEL.html",
    "castillo_este2":  "/castillo_este2/castillo_este2KAEL.html",
    "castillo_este2_monstruo": "/castillo_este2_monstruo/castillo_este2_monstruoKAEL.html"
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
