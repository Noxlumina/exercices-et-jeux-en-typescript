// Écrivez un programme qui demande à l'utilisateur de saisir 3 nombres puis trouver le plus grand.

import read from 'readline-sync';

let nbr1 = +read.question("Saisir nombre 1 : ");
let nbr2 = +read.question("Saisir nombre 2 : ");
let nbr3 = +read.question("Saisir nombre 3 : ");

//SOLUTION "J'ai bien travaillé"
if(nbr1 > nbr2 && nbr1 > nbr3) {
    console.log("Le plus grand est le nombre 1 : "+ nbr1);
} else if(nbr2 > nbr1 && nbr2 > nbr3) {
    console.log("Le plus grand est le nombre 2 : "+ nbr2);
} else {
    console.log("Le plus grand est le nombre 3 : "+ nbr3);
}
// SOLUTION TRICHEUR
let plusGrand = Math.max(nbr1, nbr2, nbr3);
console.log("Le plus grand est : " + plusGrand);