//Funciones js

//Forma tradicional incorrecta 
function saludar (nombre){
    return `Hola ${nombre}`;
}
console.log(saludar('Carlos'));

//Forma tradicional  correcta y segura
const saludarb = function (nombre){
    return `Hola ${nombre}`;
}
console.log(saludarb('Carlos'));

//-------Forma arrow  correcta y segura----------
const saludarc = (nombre) =>  `Hola ${nombre}`;
console.log(saludarc('Carlos con arrow'));

const saludard = () =>  `Hola con arrow`;
console.log(saludard());

/* para mostrar un objeto debo colocarle () al return.Los parentesis significa que esta devolviendo de forma implicita
*/
const getUser = () => 
     ({
        uid:'abc123',
        username:'Letras'
    });

console.log(getUser());
//mejor forma
const user = getUser();
console.log(user);



/*-----Tarea---------------
1.Transformar a arrow
2.Tiene que retornar un objeto inplicito
3.Pruebas */
function getUsuarioActivo(nombre){
    return {
        uid:'ABCDE',
        username: nombre
    }
};
const usuarioActivo = getUsuarioActivo('Juan Manuel');
console.log(usuarioActivo);

//-------------------Respuesta tarea--------------
const tareaUserAct = (nombre) =>(
    {
        uid:'ABCDE',
        username: nombre
    });
    const tarea = tareaUserAct('Joel');
console.log(tarea);
