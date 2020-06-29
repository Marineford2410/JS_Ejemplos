const diaHoy = new Date();
let valor;

valor = diaHoy.getMonth();
valor = diaHoy.getDate();
valor = diaHoy.getDay();
valor = diaHoy.getFullYear();
valor = diaHoy.getMinutes();
valor = diaHoy.getHours();
valor = diaHoy.getTime(); // Ms desde 1970

diaHoy.setFullYear(1996);
valor = diaHoy.getFullYear();

console.log(valor);