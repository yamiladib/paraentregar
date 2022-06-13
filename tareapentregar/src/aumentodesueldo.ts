funciona pero con errores
//aumentosueldo
let dato1 = document.getElementById("dato1");
let rotulo1 = document.getElementById("rotulo1");

rotulo1.innerHTML = "ingrese sueldo recibido:";
let btnEnv = document.getElementById("btnEnviar");

btnEnv.addEventListener("click", () => {
let sueldoRecibido:number =Number(dato1.value);
let aumento:number=0; 
if (sueldoRecibido >=0  &&  sueldoRecibido<=15.000) 
aumento=(sueldoRecibido*1.2)
{ console.log("usted recibio un aumento de sueldo del 20%");
} else if (sueldoRecibido>15.001 && sueldoRecibido<=20.000) 
aumento=(sueldoRecibido*1.1){ 
  console.log("usted recibio un aumento de sueldo del 10%"); 
 }else if (sueldoRecibido>20.001 && sueldoRecibido<=25.000)
  aumento=(sueldoRecibido*0.5) {
  console.log("usted recibio un aumento de sueldo del 5%"); 
}else{
  (sueldoRecibido>25.000) {
  console.log ("usted no recibe aumento");
  }});

  /*<html>
  <head>
    <title>Aumento de sueldo</title>
    <meta charset="UTF-8" />
  </head>

  <body>
    <h1>Aumento de sueldo</h1>
    <form onsubmit="return false">
      <p id="rotulo1"></p>
      <input type="text" id="dato1" value="" />

      <button id="btnEnviar">Enviar</button>
    </form>
    <script src="src/index.ts"></script>
  </body>
</html>
*/ 