let nombre = "PEDRO EL ESCAMOSO";
console.log(`Hola como estas${nombre}`);

function saludar(nombre){
    let mensaje = `Hola te saludo desde la funcion ${nombre}`

    return(mensaje);

}

let saludar2 = nombre => {
    let mensaje = `Hola te saludo desde la funcion de flecha ${nombre}`;
    return mensaje;
}
console.log(saludar2("Santo"))


setTimeout(() => {
    console.log("Hola NODE JS Asincronico ")
},5000)




console.log("Finalizando el programa")




let robarPlanos = (numeroSerie, despegar) =>{
    
    if (numeroSerie <=10){
        let mensaje = `Tenemos el plano de la estrella numero ${numeroSerie}`
        despegar(null,mensaje);

    } else {
        let mensaje = "Tenemos un plano equivocado";
        despegar(mensaje, null);
    }
}

robarPlanos(15, (error, mensaje)=> {

    if(error) {
        console.log(error);
    }else{
        console.log(mensaje)
        console.log("Estamos despegando la nave")
    }

});