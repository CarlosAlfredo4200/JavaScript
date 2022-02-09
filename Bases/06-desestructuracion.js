//Desestructuración de Objetos:
/*mdn web docs:
La sintaxis de desestructuración es una expresión de JavaScript que permite desempacar valores de arreglos o propiedades de objetos {} en distintas variables. */


const persona = {
    nombre:'Joel',
    edad:12,
    actividad:'Estudiante',

};
//console.log(persona.edad);
//console.log(persona.actividad);
//console.log(persona.nombre);

// aplicar desestructuracion. Extraigo los datos en const

const {nombre, edad,actividad} = persona;

 console.log(nombre,edad,actividad);
 console.log(nombre);
 console.log(edad);
 console.log(actividad);

//----directamente en el argumento y puedo agregar valores por defecto (peso)
const retonaPersona = ({nombre,edad,actividad, perso = '45 k' }) =>{

    console.log(nombre,edad,actividad,perso);
}
retonaPersona(persona);


//----directamente en el argumento y puedo agregar valores por defecto (peso)
const retonaPersonaB = ({nombre,edad,actividad, perso = '45 k' }) =>{
    
    return{
        clave:'pingui',
        deporte:'Piscina',
        padres:{
            mama:'Andrea',
            papa:'Carlos'
        }
    }
    
}
//Para traer objetos anidados y asignarlos a constantes con los :
const {clave, deporte, padres:{mama, papa}} = retonaPersonaB(persona);
console.log(clave,deporte);
console.log(mama,papa);

 //----------------------------------------------
//Asignacion básica
 const colores = ['Azul','Verde','Amarillo','Rojo'];
 const[a ,c,,da] = colores;
 console.log(a);
 console.log(c);
 console.log(da);

//---------
//Asignación separa de la declaración
let cc, ba;
[cc,ba="Medellin"]= ['Bello','Envigado'];
console.log(cc);
console.log(ba);

//A objetos

const varios = {p:11,q:true,r:'hola'}

const {p,r} = varios;
console.log(p);
console.log(r);
//console.log(q); daria error

//A nuevos nombre de variables
const objeto = {objNombre:'Andrea',objApellido:'Montoya'};
const {nombre:n, apellido:z} = objeto;
console.log(`N seria ${n} y Z seria ${z}`);

const {objNombre, objApellido} = objeto;
console.log(objNombre,objApellido);

//Asignacion sin declaracion
let x,y;
({x,y } = {x:1, y:2});
console.log(x);
console.log(y);

//---------------intercambio de valor de variables-----------------

let d=2;
let e=3;

console.log('d =',d);
console.log('e =',e);

//sin desestructuracion

let temporal = d;
d = e;
e = temporal;

console.log('d =',d);
console.log('e =',e);
//con desestructuracion
let f=2;
let g=3;

[f,g] = [g,f];
console.log('f =',f);
console.log('g =',g);



