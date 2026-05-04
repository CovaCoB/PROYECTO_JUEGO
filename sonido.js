/*se configura el botón de sonido, de tal manera que cuando se hace click sobre el se activa*/ 
function sonido(){
    const video = document.getElementById('video');
    video.muted = false;
    video.play();
}
/*se configura que el botón aparezca justo en el segundo 17, cuando hay un blackout y comienza de nuevo el video*/
setTimeout(() => {
  document.getElementById("miBoton").style.display = "inline-block";
}, 17000);