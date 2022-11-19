// Le jeu du pendu consiste à faire deviner un mot à une autre 
// personne.
// Le mot est masqué et le joueur qui doit deviner le mot n'a le droit
// de donner qu'une lettre à la fois.
// Si cette lettre est dans le mot, elle est dévoilée
// Sinon le joueur perd une vieSi le joueur n'a plus de vie, 
// il a perdu.

// Ecrivez un programme qui demande au premier utilisateur de saisir :
// ▪Un mot à trouver
// ▪Un nombre de vie
// Masquez le mot de sorte à ce qu'il ressemble à _ _ _ _ _ _ _ 
// (ex : bonjour) Demandez au joueur une lettre (ex: "o")
// Si cette lettre est dans le mot, affichez : _ o _ _ o _ _ 
// Sinon il perd une vie
// Quand le mot est affiché entièrement, le joueur gagneSi le joueur 
// n'a plus de vie, il perd.

import read from 'readline-sync';

console.log("---pendu---")

// initialisation des variables
let mot : string = '';
let vie : number = 5;
let indices : number[] = [];
let tab_lettre = mot.split('');
let mot_aff : string[] = [];
let lettre : string;
let result : number;
let gagne : number;
let lettres_bonnes : string[] = []
let lettres_fausses : string[] = []

/**
 * fonction qui permet de chiffrer le mot recherché
 * 
 * @param mot le mot à deviner
 */
const chiffrerMot = (mot:string) =>{
    for(let a = 1; a <= mot.length; a++){
        mot_aff.push('_');
    }
}

/**
 * fonction qui permet de choisir un mot, de le chiffrer et 
 * de le décomposer dans un tableau lettre par lettre
 */
const motAdeviner = () => {
    mot = read.question("Quelle est le mot a faire deviner?");
    chiffrerMot(mot);
    tab_lettre = mot.split('');
}

/**
 * fonction qui détermine si on a gagné ou perdu en fonction du nombre de vie
 */
const vousEtesMort = () =>{
    if(vie == 0){
        console.log(`Désolé, vous avez perdu le bon mot était : ${mot}`);
    } else {console.log(`Bravo, le bon mot était bien ${mot}`);}
} 

/**
 * affiche le mot caché, et le rempli en fonction des essais
 * et affiche la liste des lettres bonnes et fausses
 */
const affichAide = () =>{
    console.log(mot_aff);
    console.log(`liste des bonnes lettres ${lettres_bonnes}`);
    console.log(`liste des lettres fausses ${lettres_fausses}`);
}

const choixLettre = (mot:string,mot_aff:string[])=>{
    lettre = read.question("Quelle lettre voulez vous essayer?");
    result = tab_lettre.indexOf(lettre);
    gagne = mot_aff.indexOf('_');

}

/**
 * fonction qui permet de retirer une vie si la lettre est fausse
 * et de la rajouter dans la liste des lettres fausses
 * 
 * @param lettresList liste des lettres fausses
 */
const perdreVie = (lettresList:string[],lettre:string) =>{
    console.log("Dommage, cette lettre n'est pas dans le mot");
    lettresList.push(lettre);
    vie -= 1;
    console.log(`nombre de vie restante : ${vie}`);}


/**
 * Permet de vérifier si la lettre a déjà été jouée
 * 
 * @param lettresList1 liste des lettres bonnes
 * @param lettresList2 liste des lettres fausses
 * @param lettre lettre demandée
 * @returns 
 */
const lettreDéjàJouer = (lettresList1:string[],lettresList2:string[],lettre:string) => {
    if(lettresList1.includes(lettre) || lettresList2.includes(lettre)) {
        return true;
    } else {
        return false;
    }
}

/**
 * permet de rajouter la lettre dans la liste des lettres bonnes
 * 
 * @param lettre lettre jouée
 */
const lettrebonne = (lettre:string) =>{
   
        console.log("En effet, cette lettre est dans le mot");
         lettres_bonnes.push(lettre);
        indices.pop();}
    


/**
 * permet de vérifier si le mot contient la lettre
 */
const tantQueChoixEstBon = () => {
    while (result !== -1) {
        indices.push(result);
        result = tab_lettre.indexOf(lettre, result + 1);
    }
}

/**
 * permet de remplir le mot caché
 * 
 * @param indices indice de la lettre dans le mot caché
 * @param lettre lettre jouée
 */
const affichageLettre = (indices:number[],lettre:string) => {
    for( let b = 0; b <= indices.length; b++){
        console.log(`indice=${indices}`);
        
        mot_aff.splice(indices[b], 1, lettre);
    }
}





/**
 * fonction qui permet dse continuer de jouer tant que les vies n'ont pas atteint 0
 */
const siVivant = () => {
    while(vie !== 0){
        affichAide();
        choixLettre(mot,mot_aff);
        if (lettreDéjàJouer(lettres_bonnes,lettres_fausses,lettre))
        {console.log('la lettre a déjà été jouée');    }
        else {
        if(result === -1){
            perdreVie(lettres_fausses,lettre);
        }else{
            tantQueChoixEstBon();
            affichageLettre(indices,lettre);
            lettrebonne(lettre);
            if(gagne === -1){
                break;
            }
        }}
    }
}

/**
 * permet de lancer le jeu du pendu
 */
const pendu = () => {
    motAdeviner();
    siVivant();
vousEtesMort();
}


//lance du jeu
pendu();

// for(let a = 1; a <= nb_lettre; a++){
//     mot_aff.push('_');
// }

// while(vie !== 0){
//     console.log(mot_aff);
//     console.log(`liste des bonnes lettres ${lettres_bonnes}`);
//     console.log(`liste des bonnes lettres ${lettres_fausses}`);
//     let lettre = read.question("Quelle lettre voulais vous essayer?");
//     let result = tab_lettre.indexOf(lettre);
//     let gagne = mot_aff.indexOf('_');
//     if(result === -1){
//         console.log("Dommage, cette lettre n'est pas dans le mot");
//         lettres_fausses.push(lettre);
//         vie -= 1;
//         console.log(`nombre de vie restante : ${vie}`);
        
//     }else{
//         while (result !== -1) {
//             indices.push(result);
//             result = tab_lettre.indexOf(lettre, result + 1);
//         }
//         for( let b = 0; b <= indices.length; b++){
//             mot_aff.splice(indices[b], 1, lettre);
//         }
//         console.log("En effet, cette lettre est dans le mot");
//         lettres_bonnes.push(lettre);
//         indices.pop();
//         if(gagne === -1){
//             break;
//         }
//     }
// }
// if(vie == 0){
//     console.log(`Désolé, vous avez perdu le bon mot était : ${mot}`);
// } else {console.log(`Bravo, le bon mot était bien ${mot}`);}

