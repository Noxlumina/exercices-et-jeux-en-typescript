// Demandez à l'utilisateur de saisir un nombre "N" .
// Afficher tous les nombres allant de 1 à "N", avec les particularités suivantes : 
// ▪ Remplacez tous les multiples de 3 par "FIZZ"
// ▪ Remplacez tous les multiples de 5 par "BUZZ"
// ▪ Remplacez tous les multiples de 3 ET 5 par "FIZZBUZZ"

import read from 'readline-sync';

console.log("---fizzbuzz---")

let nbr = +read.question("Entrez un nombre : ");

for ( let index = 0; index <= nbr; index++) {
    if(index % 15 == 0) {
        console.log("FIZZBUZZ");
    } else if(index % 5 == 0) {
        console.log("BUZZ");
    } else if(index %3 ==0) {
        console.log("FIZZ");
    } else {
        console.log(index);
    }
}