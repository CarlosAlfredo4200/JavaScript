//Import, Export y funciones comunes de arreglos
//------Nombre del archivo No carpeta------

//Forma imp
//import {family} from './data/familyMusic';
//console.log(family);
//Forma 2 escribir nombre del archivo

//import { family } from "./data/familyMusic";

//-----impor por defecto-----
import family from "../data/familyMusic";

export const getFamily = (id) => family.find(e => e.id === id );
console.log(getFamily(2));      //trae todos los datos del id especifico


//Filter crear un nuevo arreglo sin alterar el origen
export const getTtype =(type) =>family.filter(e => e.type === type)
console.log(getTtype('Viento'));        //trae todos los que el type sea cuerdas

//------------------Multiples exportaciones y expor por defecto--------



