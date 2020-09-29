/* Ejericio 1

Cree un repositorio con el nombre funciones JavaScript y
resuelva los siguientes ejercicios utilizando funciones de
flecha y funciones tradicionales para cada uno:
1.PROBLEMA: Yoda el maestro jedi, necesita enseñar a sus
aprendices padawan a calcular la distancia a la que cualquiera
de los planetas de la ruta N-14 pertenecientes a la ruta
comercial de la federación intergaláctica, se encuentra del
planeta NABOO.  */

function CalcularDistancia(coordenadax, coordenaday){

    let cuadrox = Math.pow(coordenadax,2);
    let cuadroy = Math.pow(coordenaday, 2);

    let sumaCuadrados = cuadrox + cuadroy;

    let raizCuadrada = Math.sqrt(sumaCuadrados);

    return(raizCuadrada);
}

console.log(CalcularDistancia(70,-50))


//Opcion de Flecha

let CalcularDistancia2 = (coordenadax, coordenaday) => (Math.sqrt(Math.pow(coordenadax, 2)) + (Math.pow(coordenaday, 2)));

console.log(CalcularDistancia(70,-50))
