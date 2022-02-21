//funcion que permite capturar la imagen pequeña clickeada y renderizarla como imagen principal
let mostrarimagen=(elemento)=>{
  let imagen = document.getElementById("imagen-principal");
  imagen.src = elemento.src;
  let nombreImagen = document.getElementById("nombre-imagen");
  nombreImagen.innerHTML = elemento.alt;
 
 }
;
let list_images = [];
let list_descr_images=[];
//img1--> Cusco
//img2--> Paris
//img3--> Petra
//img4--> Polinesia
 

//funciones para los botones que permiten pasar las imagenes una detras de otra o una delante de otra
let previous=()=>{
  let _imagen = document.getElementById("imagen-principal").src;
  let nombreImagen = document.getElementById("nombre-imagen");


  let img1 = document.getElementById("img1").src;
  let img2 = document.getElementById("img2").src;
  let img3= document.getElementById("img3").src;
  let img4 = document.getElementById("img4").src;
  let desc_img1 = document.getElementById("img1").alt;
  let desc_img2 = document.getElementById("img2").alt;
  let desc_img3 = document.getElementById("img3").alt;
  let desc_img4 = document.getElementById("img4").alt;

  list_images = [img4,img3,img2,img1];
  list_descr_images=[desc_img4,desc_img3,desc_img2,desc_img1];
for (let value of list_images){
 if(value == img1){
   return [list_images[0],list_descr_images[3]]
   
 }
 else{
  if(value == _imagen){
    let indice = list_images.indexOf(value);
    return [list_images[indice+1],list_descr_images[indice]];
     }

} 

}

}

let btnprevious =()=>{
  let nombreImagen = document.getElementById("nombre-imagen");
  let _previous = previous()[0];
  let imagen_principal = document.getElementById("imagen-principal");
  imagen_principal.src=_previous;
  nombreImagen.innerHTML= previous()[1];

}

let next=()=>{
  let _imagen = document.getElementById("imagen-principal").src;


  let img1 = document.getElementById("img1").src;
  let img2 = document.getElementById("img2").src;
  let img3= document.getElementById("img3").src;
  let img4 = document.getElementById("img4").src;
  let desc_img1 = document.getElementById("img1").alt;
  let desc_img2 = document.getElementById("img2").alt;
  let desc_img3 = document.getElementById("img3").alt;
  let desc_img4 = document.getElementById("img4").alt;

  list_images = [img1,img2,img3,img4];
  list_descr_images = [desc_img1,desc_img2,desc_img3,desc_img4];
for (let value of list_images){
 if(value == img4){
   return [list_images[0],list_descr_images[3]];
   
 }
 else{
  if(value == _imagen){
     let indice = list_images.indexOf(value);
     return [list_images[indice+1],list_descr_images[indice]];
     }

} 

}

}

let btnnext =()=>{
  let nombreImagen = document.getElementById("nombre-imagen");
  let _next = next()[0];
  let imagen_principal = document.getElementById("imagen-principal");
  imagen_principal.src=_next;
  nombreImagen.innerHTML= next()[1];
}
//declarando atributos e iniciandolos
class client{
constructor(name,lastname,birthday,genre,numero){
  this.name = name;
  this.lastname = lastname;
  this.birthday = birthday;
  this.genre = genre;
  this.numero = numero;

}



}

//capturando informacion para guardarla en un objeto
let genInformation=()=>{
 let nombres =document.getElementById("name").value;
 let apellidos =document.getElementById("lastname").value;
 let cumpleaños =document.getElementById("birthday").value;
 let numero = document.getElementById("numero").value
 let genre = capture_booleans();
 let __cliente = new client(nombres,apellidos,cumpleaños,genre,numero);
 return __cliente
}
let clientArray = []
let SaveInformation =()=>{
 let localclient = genInformation();
 clientArray.push(localclient);
console.log(clientArray) ;

}

//abrir y cerrar modales

let OpenModal=()=>{
  footer.style.display = "block";
}

let CloseModal =()=>{
  body.style.opacity = 1;
  footer.style.display="none";

}
//corriendo los plugins de numeros internacionales
const phoneInputField = document.querySelector("#numero");
   const phoneInput = window.intlTelInput(phoneInputField, {
     utilsScript:
       "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
   });


//capturar valores booleanos

function capture_booleans(){
  gen1 ="masculino"
  gen2 ="femenino"
 var check_boolean1 = document.getElementById("genre1");
 if(check_boolean1.checked ==true){
   return gen1;

 }else{
  return gen2

 }
}


