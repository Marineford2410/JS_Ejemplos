/*
const edad = 19;

if (edad >= 18) {
   console.log('Si puedes entrar al sitio');
} else {
   console.log('No puedes entrar al sitio');
}
*/
/*
let puntaje = 1500;
if (puntaje) {
   console.log(`El puntaje es de ${puntaje}`);
} else {
   console.log('No tienes un puntaje');
}

*/
/*
let horas = 0;
if (horas > 0 && horas <= 10) {
   console.log('Buenos Dias!!');
} else if (horas > 10 && horas <= 18) {
   console.log('Buenos Tardes!!');
} else if(horas > 18 && horas <= 24) {
   console.log('Buenos Noches!!');
} else {
   console.log('Hora no valida');
}
*/
/*
let efectivo = 300,
    credito  = 300,
    disponible = efectivo + credito;
    totalCarrito = 500;

if (totalCarrito < efectivo || totalCarrito < credito || totalCarrito < disponible) {
   console.log('Puede pagar');
} else {
   console.log('No puede pagar');
}
*/
/*
const logueado = false;
console.log(logueado === true ? 'Si se logueo' : 'No se logueo');
*/

const metodoPago = 'organo';
switch (metodoPago) {
   case 'efectivo':
      console.log(`El usuario pago con ${metodoPago}`);
      break;
   
   case 'cheque':
      console.log(`El usuario pago con ${metodoPago}`);
      break;
   
   case 'tarjeta':
      console.log(`El usuario pago con ${metodoPago}`);
      break;

   default:
      console.log('Metodo de pago no soportado');
      break;
}
