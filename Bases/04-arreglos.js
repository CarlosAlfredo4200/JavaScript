//Arreglos : colecion de información detntrode una variable

//const array = new Array(100); extraño pero se puede

const array = [1,2,3,4];
// array.push(1)
// array.push(2)
// array.push(3)
// array.push(4)

console.log(array);
/*Los arreglos en js tambien son objetos
NOTA: El push no es tan recomendado porque modifica el objteo principal. La mejor opción es Operador spread*/

//La forma correcta de agregarlo
let array2 = [...array,5];
//array2.push(5)
console.log(array2);

console.log(array2);

/*Trabajando con la funcion map()
El método map() [crea un nuevo array] con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos.
*/

                    //funcion tipo callBack

/*NOTA: Si una funcion NO tiene return inplicito daria undefined y */
const array3 = array2.map(function(numero){

   // return "hola"; daria  = (5) ['hola', 'hola', 'hola', 'hola', 'hola']
    return numero * 2;
});

console.log(array3);