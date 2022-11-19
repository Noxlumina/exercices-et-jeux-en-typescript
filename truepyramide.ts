// Adaptez l'exercice 9 pour que la pyramide soit dans le bon sens (^)

import read from 'readline-sync';

let etoile = '';
let espace = "";
let affichage = ""; 
let continuer = " ";

while (continuer !== "N") {
    let val = +read.question("Saisir un nombre:");
for(let i= 1; i <= val; i++){
    if(i === 1){
        etoile = "*";
        espace = "    ";
        affichage = espace + etoile;
        console.log(`${affichage}`);
    }else{
        etoile += "**";
        espace = espace.substring(0, espace.length - 1);
        affichage = espace + etoile;
        console.log(`${affichage}`);
    }
}
continuer = read.question("Voulez-vous continuer (N pour arrêter) ");
}