// asignacion de simbolos pause y play a botones y que cambien dinamicamente 
const btn_pause = <i class="fa-solid fa-pause"></i>;
const btn_play = <i class="fa-solid fa-play"></i>;
let btn_video = document.getElementById("btn-video")
let dinamicVideo=()=>{
 let video = document.getElementById("banner");
 if(video.paused){
  video.play();
  ReactDOM.render(btn_pause,btn_video);
 }else {
  video.pause();
  ReactDOM.render(btn_play,btn_video);
}
}
//opcion para cambiar la frase del banner
let travel=()=>{
let travel_option = <h1>¿Donde quieres viajar?</h1>;
let btn_travel = document.getElementById("btn-banner");
btn_travel.style.display ="none";
ReactDOM.render(travel_option,phrase1);
ReactDOM.render(btn_travel,btn-banner);

}