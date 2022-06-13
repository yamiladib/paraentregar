no funciona aun
//paroimpar
let dato1 = document.getElementById("dato1");
let rotulo1 = document.getElementById("rotulo1");

rotulo1.innerHTML = "Ingrese numero:";

let btnEnv = document.getElementById("btnEnviar");

btnEnv.addEventListener("click", () => {
  let numero:number= Number(dato1.value);
  if (numero===0) {
    console.log("el" + numero + "no es ni par ni impar");
  } else if (numero%2!0) {
    console.log("el" + numero + "es impar");
  } else if (numero%2=== 0) {
    console.log("el" + numero + "es par");
  }
});


/*<html>
  <head>
    <title>Paroimpar</title>
    <meta charset="UTF-8" />
  </head>

  <body>
    <h1>Par o Impar</h1>
    <form onsubmit="return false">
      <p id="rotulo1"></p>
      <input type="text" id="dato1" value="" />

      <button id="btnEnviar">Enviar</button>
    </form>
    <script src="src/index.ts"></script>
  </body>
</html>
*/





