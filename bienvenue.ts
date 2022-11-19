// Ecrire un programme qui demande à l'utilisateur de saisir son nom et de lui 
// afficher son nom avec le message de bienvenue.

import read from 'readline-sync';
const bienvenue = (prenom : string) :void => {
    console.log(`Bienvenue ${prenom} , que veux-tu ?`);
}

let prenom : string = read.question("Tapez votre prenom?");
bienvenue(prenom);