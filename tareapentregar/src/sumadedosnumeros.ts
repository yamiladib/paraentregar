//suma de dos numeros
let dato1 = document.getElementById("dato1");
let dato2 = document.getElementById("dato2");
let rotulo1 = document.getElementById("rotulo1");
let rotulo2 = document.getElementById("rotulo2");
let btnEnv = document.getElementById("btnEnviar");

rotulo1.innerHTML = "Ingrese el primer numero";
rotulo2.innerHTML = "Ingrese el segundo numero";

btnEnv.addEventListener("click", () => {
  let num1: number = Number(dato1.value);
  let num2: number = Number(dato2.value);
  let resultado: number = num1 + num2;
  console.log("el resultado de la suma es" + resultado);
});

/*<html>
  <head>
    <title>suma de dos numeros</title>
    <meta charset="UTF-8" />
  </head>

  <body>
    <h1>Sumando dos Numeros</h1>
    <form onsubmit="return false">
      <p id="rotulo1"></p>
      <input type="text" id="dato1" value="" />
      <p id="rotulo2"></p>
      <input type="text" id="dato2" value="" />

      <button id="btnEnviar">Enviar</button>
    </form>
    <script src="src/index.ts"></script>
  </body>
</html>
*/
