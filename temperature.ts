// Vous disposez d'une liste de températures (°C).
// Parcourez cette liste et affichez la température la plus proche de 0°C. 
// Si une température négative est aussi proche de 0 qu'une température positive,
// la valeur négative prend le dessus.

import read from 'readline-sync';

// let temperatures : number[] = [12, 5, 7, 25, 6, -5];
 let temperatures : number[] = [];

temperatures[0] = +read.question("Saisir une température : ");
temperatures[1] = +read.question("Saisir une température : ");
temperatures[2] = +read.question("Saisir une température : ");
temperatures[3] = +read.question("Saisir une température : ");
temperatures[4] = +read.question("Saisir une température : ");
temperatures[5] = +read.question("Saisir une température : ");

let temperatureProche : number = temperatures[0];
console.log(temperatureProche);


//Parcouru mon tableau de temperatures
for(let index = 0; index < temperatures.length; index++) {
    let temperature = temperatures[index];
    
    //Si la valeur absolue de ma temperature est inférieur à la valeur
    // absolue de la temperature (proche 0)
    if((Math.abs(temperature) < Math.abs(temperatureProche)) || (Math.abs(temperature) == Math.abs(temperatureProche) && temperature < 0)) {
        // Alors je remplace ma temperature proche 0
        temperatureProche = temperature;
    }
}
console.log(temperatureProche)