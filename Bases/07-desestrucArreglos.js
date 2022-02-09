//Desestructuracion de arreglos

//Las comas reemplazan las posiciones del arreglo

const personajes =  ['Jesús','Espiritu Santo','Dios'];
const [,,p1] = personajes;
console.log(p1);


const retornaArrglo = () =>{
    return ['ABC',123];
}

const [letras, numeros] = retornaArrglo();
console.log(letras, numeros);

//---------------Tarea------------------ 
//1.primer valor nombre y el segundo setNom
const user = (valor) =>{
    return [valor,()=>{console.log('Hola desde funcion')}];
}
const arr = user('Jésus');
console.log(arr);
arr[1]();


//respuesta
const  [nombre,setNom] = user('Jésus');

console.log(nombre);
setNom();//reemplaza ...arr[1]();