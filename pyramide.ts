// Adaptez l'exercice 8 pour faire descendre l'escalier dans 
// l'autre sens afin de former une pyramide

import read from 'readline-sync';

console.log("---pyramide---")

let nbr = +read.question("Entrez un nombre : ");

let affichage = "";

for (let index = 0; index < nbr; index++) {
    affichage += "*";
    console.log(affichage);
}

for (let index = 1; index <= nbr; index++) {
    affichage = affichage.slice(0, nbr - index);
    console.log(affichage);
}