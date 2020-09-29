/* 2.PROBLEMA: Obi-Wan Kenobi, necesita clasificar diferentes
códigos de acceso a las naves de guerra los cuáles reposan en
la base de datos central, para ello debe programar una función
que permita recibir la palabra clave de cada nave y separar
imprimiendo solo el nombre del piloto asignado a cada nave.
Tenga en cuenta que el formato de todos los datos es el
siguiente:
• ARQ2555: Sara Bel-Sun
• ARQ2556: Nodin Chavdri
• ARQ2557: Finn
 */

const tripulacion = [
    {nave: 'ARQ2555', piloto: 'Sara Bel-Sun'},
    {nave: 'ARQ2556', piloto: 'Nodin Chavdri'},
    {nave: 'ARQ2557', piloto: 'Finn'}
];


tripulacion.forEach( function (piloto) {
    console.log(`el piloto de la nave es: ${piloto.piloto}`);
})





