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







const mapaKael = {
    norte: [
        "/entrada_mundo/entrada_KAEL.html",
        "/entrada_castillo/entrada_castilloKAEL.html",
        "/castillo/castillo_KAEL.html",
        "/castillo_oeste/castillo_oesteKAEL.html",
        "/castillo_oeste2/castillo_oeste2KAEL.html",
        "/castillo_este/castillo_esteKAEL.html",
        "/castillo_este_monstruo/castillo_este_monstruoKAEL.html",
        "/castillo_este2/castillo_este2KAEL.html",
        "/castillo_este2_monstruo/castillo_este2_monstruoKAEL.html"
    ],
    sur: [
        "/castillo_boss/castillobossKAEL.html",
        "/castillo_oeste2/castillo_oeste2KAEL.html",
        "/castillo_oeste/castillo_oesteKAEL.html",
        "/castillo_este2_monstruo/castillo_este2_monstruoKAEL.html",
        "/castillo_este2/castillo_este2KAEL.html",
        "/castillo_este_monstruo/castillo_este_monstruoKAEL.html",
        "/castillo_este/castillo_esteKAEL.html",
        "/castillo_norte/castillo_norteKAEL.html",
        "/castillo/castillo_KAEL.html",
        "/entrada_castillo/entrada_castilloKAEL.html",
        "/paisaje_izq/paisaje_KAEL.html",
        "/paisaje_izq_bruja/paisaje_KAEL.html",
        "/forja/forja_KAEL.html"
    ],
    este: [
        "/entrada_mundo/entrada_KAEL.html",
        "/castillo_norte/castillo_norteKAEL.html"
    ],
    oeste: [
        "/entrada_mundo/entrada_KAEL.html",
        "/castillo_norte/castillo_norteKAEL.html"
    ]
};


function mover(direccion){
   let paso = parseInt(localStorage.getItem(direccion + "paso")) || 0;
   const habitacion = mapaKael[direccion];

if(habitacion[paso]){
    localStorage.setItem(direccion + "paso", paso+1);
    window.location.href = habitacion[paso];
}else {
    cuadro_narrativa(`Has llegado al final de ${direccion}.`);
    localStorage.setItem (direccion + "paso", 0);
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
