/* 2. PROBLEMA: La federación nacional de fútbol también necesita que usted codifique un nuevo programa para establecer(clasificar) el biotipo de los jugadores, teniendo en cuenta la estatura de estos. La clasificación internacional del Biotipo de futbolista es:

• Estatura <1.70 m (Biotipo Bajo)
• 1.70 m <=Estatura < 1.80 m (Biotipo Promedio)
• Estatura >= 1,80 m (Biotipo Superior) */


function biotipo (estatura){


    if(estatura < 1.70){

        return (`La estatura ${estatura}m es de: Biotipo Bajo`)
    }else if (estatura <= 1.80){
        return (`La estatura ${estatura}m es de: Biotipo Promedio`)

    }else if ( estatura >= 1.80){
        return (`La estatura ${estatura}m es de: Biotipo Alto`)

    }
}

console.log(biotipo(1.81));