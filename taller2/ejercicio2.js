/* 2.PROBLEMA: Han solo y Chewbacca deben infiltrarse en el
planeta yavin4 para robar uno de los planos de una de las 10
estrellas de la muerte, como distractor el imperio ha creado
planos falsos y se tiene el dato de que el número de serie de
estos planos falsos comienza por encima del número 10; es decir
todos los planos falsos tienen números de serie consecutivos
comenzando desde el #11. SOLO si se obtiene un plano verdadero
Chewbacca y Han pueden abordar su nave y ejecutar un mensajeen
consola avisando que han despegado
Configure la rutina necesaria para despegar la nave utilizando
callbacks */


let robarPlanos =(numeroSerie, despegar) => {


    if(numeroSerie<=10){

        let mensaje = `Tenemos el plano de la estrella numero ${numeroSerie}`;
        despegar(null, mensaje);

    }else{
        let mensaje = "Tienen un plano equivocado";
        despegar(mensaje, null);

    }

}

robarPlanos(13, (error, mensaje)=>{


    if(error){

        console.log(error);
    }else{

        console.log(mensaje);
        console.log("Estamos depegando la nave")
    }

});