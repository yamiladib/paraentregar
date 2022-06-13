//mayorde3
let dato1 = document.getElementById("dato1");
let dato2 = document.getElementById("dato2");
let dato3 = document.getElementById("dato3");
let rotulo1 = document.getElementById("rotulo1");
let rotulo2 = document.getElementById("rotulo2");
let rotulo3 = document.getElementById("rotulo3");

rotulo1.innerHTML = "ingrese primer numero:";
rotulo2.innerHTML = "ingrese segundo numero:";
rotulo3.innerHTML = "ingrese tercer numero:";

let btnEnv = document.getElementById("btnEnviar");

btnEnv.addEventListener("click", () => {
  let numeroUno: number = Number(dato1.value);
  let numeroDos: number = Number(dato2.value);
  let numeroTres: number = Number(dato3.value);
  if (numeroUno > numeroDos && numeroUno > numeroTres) {
    console.log("el" + numeroUno + "es el mayor");
  } else if (numeroDos > numeroUno && numeroDos > numeroTres) {
    console.log("el" + numeroDos + "es el mayor");
  } else if (numeroTres > numeroUno && numeroTres > numeroDos)
    console.log("el" + numeroTres + "es el mayor");
});
