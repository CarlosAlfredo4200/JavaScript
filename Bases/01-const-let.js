//Variables y constantes

const nombre = "Fernando";
const apellido = "Herrera";

let valorDado = 5;
valorDado = 4;
console.log(nombre, apellido, valorDado);

//let como variable de scope (ambito) solo existe dentro del ambito

if (true){
    const nombre = 'Alfredo'
    let valorDado = 6;
    console.log(valorDado);
    console.log(nombre);
}

console.log(valorDado);
console.log(nombre);