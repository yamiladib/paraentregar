//mesdescuento
let dato1 = document.getElementById("dato1");
let dato2 = document.getElementById("dato2");
let dato3 = document.getElementById("dato3");
let rotulo1 = document.getElementById("rotulo1");
let rotulo2 = document.getElementById("rotulo2");
let rotulo3 = document.getElementById("rotulo3");
rotulo1.innerHTML = "ingrese precio unitario:";
rotulo2.innerHTML = "ingrese cantidad:";
rotulo3.innerHTML = "ingrese mes:";

let btnEnv = document.getElementById("btnEnviar");
btnEnv.addEventListener("click", () => {
let precioUnitario:number= Number(dato1.value);
let cantidad:number= Number(dato2.value);
let mes:number= Number(dato3.value);
let compra: Number=0
let descuento: Number=0

if (mes=="10") 
compra=(precioUnitario*cantidad)
descuento=(compra*15) /100 { 
  console.log("usted recibio un descuento de: $ ",+ descuento); 
} else if (mes= !"10")
  compra=(precioUnitario*cantidad) {
    console.log("el total de su compra es de:" compra-descuento);
});


/* <body>
    <h1>Descuentos Octubre</h1>
    <form onsubmit="return false">
      <p id="rotulo1"></p>
      <input type="text" id="dato1" value="" />
      <p id="rotulo2"></p>
      <input type="text" id="dato2" value="" />
      <p id="rotulo3"></p>
      <input type="text" id="dato3" value="" />
      <button id="btnEnviar">Enviar</button>
    </form>
    <script src="src/index.ts"></script>
  </body>
</html>/*