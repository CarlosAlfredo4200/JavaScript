
/*Callback "Lamada de vuelta"
Es una funcion que se pasa como argumento a o tra funcion
Funcion que se ejecuta despues de que otra lo haga.
meseros y restaurante*/



function main (callback){
    alert('Primero hgo alho y despues ejecuto el callback');
    callback();
    }
    function greeting(){
        alert("Yo soy un callback");
    }
    //llamada 1
   // main(greeting);

   //lamada 2

   main(function(){
       alert('Otra callBack');
   })

   //------------------------------------------

   function userName(callback){
       let name = prompt('Ingresa el nombre');
       callback(name);
   }

   //creo la fn callbcack
   function buidGreeting(name){
       console.log(`Hola desde callBack ${name}`);
   }

   userName(buidGreeting);
//--------------------------------------------------

function math(a,b,callback){

    let res = a + b;
    callback(res);

}

//creo la fn callbcack
function suma(res){
    if(res > 10){
        console.log('El resultado es muy alto');
    }else{
        console.log('El resultado es muy bajo');
    }
}

math(5,3,suma)

//-------------------------------------------------
    
    function mensaje (){
        console.log("Me has llamado?");
    }
    
    function callback(fn){
        fn()
    }
    //invocar callcallback
    
    callback(mensaje)
    
    
    function delay(){
        setTimeout(() => {
            console.log("respuesta de servidor");
        }, 3000);
    }
    
    function antes(fn){
        fn()
    }
    antes(delay);
    console.log('Ultima instrucción');