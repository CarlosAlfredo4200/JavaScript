/*fetch API:La API Fetch proporciona una interfaz para recuperar recursos 
(incluso a través de la red). 
Resultará familiar a cualquiera que haya usado XMLHttpRequest, 
pero la nueva API ofrece un conjunto de características más potente y flexible.*/

const apiKey = 'ZCooZNUQEMNazCv1ajPNS7eZKDMfZnXs';

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

/*
Peticion tradicional poco recomendada

peticion.then(respuesta => {
    respuesta.json().then(data => {
        console.log(data);
    })

})*/

//Forma en cadenada

peticion.then(respuesta =>respuesta.json())
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
        .catch(console.warn);