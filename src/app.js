window.onload = function() {
let quien = ['Mi coche', 'Mi madre', 'Un alien', 'Mi gato'];
let accion = ['se comió', 'quemó', 'aterrizó', 'se rompio'];
let que = ['mi proyecto', 'el ordenador', 'una pata' , 'mi casa'];
let cuando = ['antes de salir', 'esta mañana', 'hace cinco minutos', 'mientras me duchaba']
;
let randomquien = quien[Math.floor(Math.random() * quien.length)];
let randomaccion = accion[Math.floor(Math.random() * accion.length)];
let randomque = que[Math.floor(Math.random() * que.length)];
let randomcuando = cuando[Math.floor(Math.random() * cuando.length)];

let excusa = randomquien + " " + randomaccion + " " + randomque + " " + randomcuando;
document.getElementById("excuse").innerHTML = excusa;
   console.log(excusa);
  
};


