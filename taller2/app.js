let nombre = "Pedro el Escamoso"
console.log(`Hola como estas ${nombre}`);


function saludar(nombre){
    /* let mensaje = `Hola te saludo desde la funcion ${nombre}`
    return(mensaje); */

    console.log(`Hola te saludo desde la funcion ${nombre}`);

}
//* console.log(saludar("Santo"));

saludar("Santo");

//Funcion de flecha

let saludar2 =(nombre)=>{
    let menesaje = `Hola te saludo desde la funcion ${nombre}`;

    return (menesaje);
}

console.log(saludar2("Santiago"))

//En una linea
/* 
let saludar2 =(nombre)=> console.log(`Hola te saludo desde la funcion ${nombre}`); 

*/

setTimeout(()=> {
    console.log("Hola node js asincronico")
}, 5000);


 console.log("Fin del programa");


