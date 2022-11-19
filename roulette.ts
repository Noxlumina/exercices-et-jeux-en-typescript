// La roulette russe est un jeu qui consiste à se tirer volontairement dans la tête avecun Revolver.
// (Arme à feu avec barillet)
// Le barillet contient un certain nombre de balle définit avant de commencer la partie.
// Le but étant de faire tourner le barillet avant de tirer pour que la balle soit à une 
// positionaléatoire du barillet.
// Si l'on met 1 balle dans un Revolver pouvant en contenir 8.A chaque tour, la probabilité 
// de survivre est de 7/8

// Écrivez un programme qui cette fois, confronte deux joueurs voulant jouer à la roulette russe 
// Demandez à l'utilisateur de saisir un nombre de balle à insérer dans le pistolet. (max : 8/8)
// A tour de rôle, les joueurs vont tirer.Le dernier joueur en vie, remporte la partie.

import read from 'readline-sync';

function getRandomInt(max:number) {
    return Math.round(Math.random() * (max+1))/10;
  }

let balle = +read.question("Combien de balle mettez vous?(Max:8)");
let emplacement_vide : number = 8 - balle;
console.log(`emplacement de libre ${emplacement_vide}`);
let pourcentage_de_vie = 1/(emplacement_vide+1);
console.log(`vivant pourcentage ${pourcentage_de_vie}`);
let mort : number = 0;
let user : string;
let tour : number = 0;
let chance : number = getRandomInt(emplacement_vide) *10;
let total_chance : number = emplacement_vide+1;
console.log(`chance ${chance}`);


if (balle == 8)
{console.log(`au premier tour vous etes mort`);
}
else
{
while (total_chance > 0) {
        ++tour;
        console.log(`numéro du tour : ${tour}`);
        if (tour % 2 ==0 )
        { 
            user = "user 1"
            console.log(`tour de ${user}`);
            mort += (pourcentage_de_vie*chance);
            console.log(mort); 
            total_chance -= chance;  
            console.log(`total_chance ${total_chance}`);         
        }
        else {
            user = "user 2"
            console.log(`tour de ${user}`);
            mort += (pourcentage_de_vie*chance);
            console.log(mort);    
            total_chance -= chance; 
            console.log(`total_chance ${total_chance}`);         
                
        }
        if (mort>=1)
            {
                console.log(`l'utilisateur ${user} est mort`);
                
            }
        
        
}}