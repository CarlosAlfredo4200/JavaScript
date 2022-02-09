//objetos literales...dicionarios {}. TRabajan con pares de valores (x: key)

const persona = {
    nombre:'Carlos',
    apellido:'Montoya',
    edad: 43,
    direccion:{
        ciudad:'Medellin',
        Dto:'Antioquia',
        Dr:'Cll80# 67a-28',
    }
};


console.log(persona);

console.table(persona);

// Si deseo clonar el objeto (Lo recomendado es crear un nuevo objeto)
//Y la mejor opción es Con el Operador Spread (...)puedo extraer las propiedades de un objeto

const persona2= {
     ...persona
};
//
console.log(persona2);
