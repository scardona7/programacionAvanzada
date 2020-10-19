
let biotipo = (estatura) =>{

    if(estatura < 1.70){
        return (`La estatura ${estatura}m es de: Biotipo Bajo`)
    
    }else if (estatura <= 1.80){
        return (`La estatura ${estatura}m es de: Biotipo Promedio`)

    }else if ( estatura >= 1.80){
        return (`La estatura ${estatura}m es de: Biotipo Alto`)
    }
}

console.log(biotipo(1.80));
