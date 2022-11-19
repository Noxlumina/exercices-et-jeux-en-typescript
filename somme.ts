// Écrivez un programme qui demande à l'utilisateur de saisir un nombre "N".
// Calculer la somme de tous les nombres entre 1 et N

import read from 'readline-sync';

console.log("---somme de n entier---")
 
let nbr = +read.question('Entrez un nombre : ');// 5
let result = 0; // 15
let affichage = ""; // 1+2+3+4+5 =

for(let index = 1; index <= nbr; index++) {
    result += index;
    
    if(index === nbr) {
        affichage += index + ' = ';
    } else {
        affichage += index + ' + ';
    }
}

console.log(affichage + result);