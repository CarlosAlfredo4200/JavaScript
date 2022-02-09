//----------Promesas-----------
/*Una Promesa es un objeto devuelto por una función 
que no ha completado su tarea. La promesa representa 
literalmente una promesa creada por una función a la 
que le llegará un resultado en un futuro.

Cuando la función termina su tarea de forma asíncrona, 
una función del objeto "promesa" será ejecutada. 

Recibe dos argumentos un callback con dos parametro (resolve, reject)
Son callback que se ejecutan por respuesta + o - */

import { getFamily } from "./bases/08-import-export";
import './index.css';
console.log("----------Promesas-----------");

/*nomalmente son asincronas callBack ()=>

const promesa = new Promise((resolve, reject) => {

    setTimeout(() => {
        //tarea import

       const familia = getFamily(2);
       resolve(familia);
      // reject('No se encontro la familia');
    }, 2000);
});

//metodos para activar +

promesa.then((familia) =>{
    console.log(familia);
})
.catch(err => console.warn(err));*/

//---------------- Pasar argumentos de la familia-------------

const getArgumentosFamilia = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      //tarea import

      const familia = getFamily(id);
      if (familia) {
        resolve(familia);
      } else {
        reject("No se encontro la familia musical");
      }
    }, 2000);
  });
};
getArgumentosFamilia(1)
                        //Solo cuando el argumento es enviado a otra funcion
  .then(console.log) //REEMPLAZA ESTA FORMA .then((familia) =>console.log(familia))
  .catch(console.warn); //REEMPLAZA ESTA FORMA  .catch(err => console.warn(err))



  /*-----------ejemplo para reducir-----------

  const getImagen = () =>{
    const promesaImg = new Promise((resolve, reject) =>{
      resolve('http://cualquiercosa.com')
    })
    return promesaImg;
  }
  getImagen().then(console.log);*/

  //----mejor version--------

  const getImagen = () => 
  new Promise(resolve => resolve('http://cualquiercosa2.com'));
  getImagen().then(console.log);

  //------------------------------------

  //clase cesde
let estado = false;
  let promesa1 = new Promise((resolve, reject) =>{
     // let status = true;

      if(estado){
          resolve("Habilitado");
      }else{
          reject("No esta habilitado");
      }
  });
  promesa1.then(console.log) 
.catch(console.log)

//-----------
let salario = 2300000;
const prom2 = new Promise((resolve,reject) =>{
if(salario > 2400000){
    resolve(1)
}else{
    reject(2)
}
})

prom2.then(console.log)
.catch(console.log)


//-----------------------------------------------

function prom3 (){
    return new Promise((resolve,reject) =>{
        if(salario > 2400000){
            resolve('No tiene derecho a ingreso solidario')
        }else{
            reject('Recibe ingreso solidario')
        }
    })
}
prom3().then(console.log)
.catch(console.log)

//-------------------

const prom4 = function(){
    return new Promise(function(resolve,reject){
        if(salario > 2400000){
            resolve('No tiene derecho a ingreso solidario 5')
        }else{
            reject('Recibe ingreso solidario 5')
        }
    })
}

prom4().then(console.log)
.catch(console.log)

//-------------------------------------

 