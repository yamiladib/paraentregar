//calcular area de un rectangulo
let btnEnv = document.getElementById("btnEnviar");
let dato1 = document.getElementById("dato1");
let dato2 = document.getElementById("dato2");

btnEnviar.addEventListener("click", () => {
  let base: number = Number(dato1.value);
  let altura: number = Number(dato2.value);
  let area: number = base * altura;

  console.log("El area es:", area);
});
