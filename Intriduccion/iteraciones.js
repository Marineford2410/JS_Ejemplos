/*
for (let i = 0; i < 10; i++) {
   if (i == 5) {
      console.log('Voy en el 5');
      // continue;
      break;
   }
   console.log(`Numero: ${i}`);
}
*/
/*
const szProductos = ['Pantalon','Camisa', 'Boleto', 'Guitarra', 'Disco'];
for (let i = 0; i < szProductos.length; i++) {
   console.log(`Tu producto ${szProductos[i]} fue agregado`); 
}
*/
/*
let i = 0;
while (i < 10) {
   if (i === 5) {
      console.log('Cinco');
      i++;
      continue;
   }
   console.log(`Numero: ${i}`);
   i++;
}
*/
/*
let i = 09;
do {
   console.log(`Numero: ${i}`);
   i++;
} while (i < 10);
*/
/*
const szPendientes = ['Tarea', 'Comer', 'Proyecto', 'Aprender JS'];

szPendientes.forEach(function (sPendiente, index) { 
   console.log(`${index}: ${sPendiente}`);
});
*/
/*
const carrito = [
   {id : 1, producto: 'Libro'},
   {id : 2, producto: 'Camisa'},
   {id : 3, producto: 'Guitarra'},
   {id : 4, producto: 'Disco'},
];

const nombreProducto = carrito.map(function (carrito) {
   return carrito.producto;
});

console.log(nombreProducto);
*/ 

const automovil = {
   modelo: 'Camaro',
   motor: 6.1,
   anio: 1969,
   marca: 'Chevrolet'
};

for (const auto in automovil) {
   console.log(`${auto} : ${automovil[auto]}`);
}