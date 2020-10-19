
 let calcularEdad = (date, now) => {

    var calcular = date - now;
    return (`La edad del futbolista es de: ${calcular}`);
 }

 console.log(calcularEdad(2020, 1980))

