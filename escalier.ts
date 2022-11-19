// Écrivez un programme qui demande à un utilisateur 
// un nombre puis qui génère un escalier d'étoiles.

import read from 'readline-sync';

console.log('---escalier---')

let nbr = +read.question("Entrez un nombre : ");

let affichage = "";

for ( let index = 0; index < nbr ; index++) {
    affichage += "*";
    console.log(affichage);
}