//En este  obtiene el elemnto con el ID demo y le agrega el hola mundo
document.getElementById("demo").innerHTML="¡hola mundo!";
// en este obtiene el elemento con el ID p1 e insertar el nuevo texto 
document.getElementById("p1").innerHTML="Nuevo Texto";
// solamente obtiene el elemento con el ID intro pero no hace nada
document.getElementById("intro");
// Este obtiene l elemento con el id de titulo y le cambia el texto
const elemento = document.getElementById("Titulo");
elemento.innerHTML="Nuevo Encabezado";

const paragraphs = document.getElementsByTagName('p');
console.log('Párrafos en la página:', paragraphs);

const x = document.getElementById('main');
console.log(x);

const y = document.getElementsByTagName('p');
console.log(y);

const xdos = document.getElementsByClassName("intro");
console.log(xdos);

const xx = document.querySelectorAll("p.intro");

const listItems = document.querySelectorAll("ul > li");
console.log(listItems);

const h1Elemento = document.querySelectorAll("h1");
console.log(h1Elemento);

const list = document.querySelectorAll(".list");
console.log(list);

const listaDeElementos = document.querySelectorAll("ul > li");
listaDeElementos.forEach((item) => {
    console.log(item)
});



const h1 = document.querySelector("h1");
h1.style.color = "blue";



const a = document.forms['frm1'];
let texto = "";
for (let i = 0; i < a.elements.length; i++) {
    texto += a.elements[i].value + "<br>";
}
document.getElementById("demo").innerHTML = texto;
console.log(a);

let lista = document.createElement("ul");
document.body.appendChild(lista);

let elemento1 = document.createElement("li");
elemento1.textContent="flor"; 
lista.appendChild(elemento1)
let elemento2 = document.createElement("li");
elemento2.textContent="xbox"; 
lista.appendChild(elemento2)

const button = document.getElementById('btn');
button.addEventListener("click", () => {
    
    alert("gracias por dar click");

})

function validarFormulario() {
    let c = document.forms["miFormulario"]["nombre"].value.trim();
    if (c === "") {
        alert("Se debe completar el nombre");
        return false;
    }
    return true;
}

function validarNumero(){
    let b= document.getElementById("numero").value;
    let texto2;
    if(isNaN(b) ||b<1||b>10){
        texto2="Entrada NO valida";
    }
    else{
        texto2="Entrada Correcta";
    }
    document.getElementById("demo1").innerHTML= texto2;

}
document.getElementById("miImagen").src="tumba.webp"
document.getElementById("demo3").innerHTML = "Fecha: "+Date();