/*template String: Las plantillas de cadena, 
mejor conocidas como **template strings,**son una forma más fácil de crear:

Cadenas con variables dentro (interpolación).
Generar cadenas multilínea.
Ejecutar expresiones, funciones y etiquetados.*/

const nombre = 'Carlos Alfredo';
const apellido = 'Montoya Goez';


function saludar (nombre){
    return (`'hola   ${nombre} ${apellido} como estas desde funcion`);
}
const nombreCompleto = nombre + ' ' + apellido;
const nombreCompletob = `
${nombre} 
${apellido}
${5 * 4}
${saludar(nombre)}
 `;
console.log("Forma tradicional ",nombreCompleto);
console.log(nombreCompletob);


