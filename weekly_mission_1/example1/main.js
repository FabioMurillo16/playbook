// 1. Creación de un objeto con propiedades

let myCar = new Object(); // Creación de un objeto
myCar.make = 'Mclaren'; // Guardando un valor dentro del objeto creado
myCar.model = 'MP4/4';
myCar.year = 1988;
myCar.motor = 'v8';
myCar.owner = 'Ayrton Senna'

console.log(myCar) // Imprimiendo objeto

// 2. Declaración de un objeto con variables locales y públicas

const myModule = (() => {

// Variables de contexto local
 const privateFoo = "Soy un valor privado, solo me usan dentro de este objeto"
 const privateBar = [1,2,3,4]
 const baz = "Soy un valor que va a ser expuesto"

// Variable para guardar las variables locales
 const exported = {
   publicFoo: "Valor público, pueden verme desde donde me llamen",
   publicBar: "Otro valor público",
   	publicBaz: baz
 }

// Exposición de variables locales
 return exported
})()

console.log(myModule)