//Async Await

const getImagen = () =>
  new Promise((resolve) => resolve("http://cualquiercosa2.com"));
getImagen().then(console.log);

//version async

const getImagenAsync = async () => {
  return "http://cualquiercosa3.com";
};
getImagenAsync().then(console.log);

//-------------------------------------------

/*peticion.then(respuesta =>respuesta.json())
       // .then(({data}) =>{console.log(data.images.original.url);})
       
       //lo mismo con desetructuracion
       .then (({data}) =>{
           const {url} = data.images.original;
           console.log(url);

          //Crea la imagen con html
          const img = document.createElement('img');
          img.src = url;
          document.body.append(img);
       })
        .catch(console.warn); */

const getImagenFinal = async () => {

try{
    const apiKey = "ZCooZNUQEMNazCv1ajPNS7eZKDMfZnXs";
    //Espera hasta que await termine
    const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
    const {data} = await resp.json();
  
          const {url} = data.images.original;
          
         //Crea la imagen con html
         const img = document.createElement('img');
         img.src = url;
         document.body.append(img);
}
catch (error){
console.error(error);
}

   
}
getImagenFinal();
