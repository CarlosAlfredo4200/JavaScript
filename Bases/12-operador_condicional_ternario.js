/*Operador condicional ternario: 
Una manera corta de hacer una decisión.
Siempre espera las dos respuestas
*/

//Tradicional 
const activo = false;
/*let mensaje = '';

if(activo){
    mensaje = 'Esta activo';
}else{
    mensaje = 'Esta inactivo';
}
console.log(mensaje);*/

//Mejor forma con op ternario
const mensaje = (activo) ? 'Esta activo b' : 'Esta Inactivo';
//console.log(mensaje);

//mas eficiente cunado no necesito la parte negativa
const mensajeb = activo && ' estas Activo';
console.log(mensajeb);


