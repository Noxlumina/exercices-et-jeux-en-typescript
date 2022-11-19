// Vous connaissez certainement le jeu télévisé de Vincent Lagaff 
// nommé "Le Juste Prix" ?
// Une cagnotte remplie de cadeaux est proposée à un candidat qui 
// arrive en finale. Tous ses cadeaux ont une valeur qui est cachée
// au candidat.
// Le candidat a 30 secondes pour deviner le prix exact du lot avec 
// pour seule informations :
// ▪ C'est plus
// ▪ C'est moins

// Demandez à l'utilisateur de saisir un nombre de tentative pour 
// simuler les "30 secondes".
// (Ce nombre de tentatives représentera le nombre d'échec possible)
// Générez un nombre aléatoire entre 0 et "N" saisie par l'utilisateur.
// Construisez le programme permettant de :
// ▪ Saisir un nombre
// ▪ Comparer le nombre avec le résultat attendu "N"
// ▪ Afficher "Plus" ou "Moins"
// ▪ Retirer une vie

import read from 'readline-sync';

console.log("---juste prix---")

let nbrVie = +read.question("Combien de vie voulez-vous ?");
let maxAleatoire = +read.question("Nombre aléatoire entre 0 et ");
let nbrAleatoire = Math.round(Math.random() * maxAleatoire);

while (nbrVie) {
    console.log("---------------------------");
    console.log("Il vous reste " + nbrVie + " essais");
    let nbrSaisi = +read.question("Saisir un nombre :");

    if (nbrSaisi < nbrAleatoire) {
        console.log("C'est PLUS");
    } else if (nbrSaisi > nbrAleatoire) {
        console.log("C'est MOINS");
    } else {
        console.log("Bravo, vous avez trouvé");
        break;
    }
    nbrVie--;
    if(nbrVie == 0) {
        console.log(`Vous n'avez plus de vie, le nombre était ${nbrAleatoire}`);
    }
}