function saludar() {
    alert('Hola JS');
}

saludar();

let persona = {
    nombre: "Juan",
    edad: 29,
    mascotas: ['perro', 'gato']
}
let persona2 = {
    nombre: "Pablo",
    edad: 33,
    mascotas: ['loro', 'tortuga']
}



console.log(persona.mascotas[0]);

let personas = [persona];
console.log(personas[0].edad);
console.log(personas.length); //longitud

personas.push(persona2);
console.log(personas.length); //longitud
console.log(personas[1]);






console.log("antes de promesa...");
let promise = new Promise(function (resolve, reject) {  
  setTimeout(() => resolve(), 5000);
}).then((resp) => {
  console.log("termino timeout...");
});
console.log("despues de promesa...");
