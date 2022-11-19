// Vous êtes ingénieur et on vous demande de calculer les profits 
// que peut réaliser un Roller Coaster en une journée.
// ▪ Un groupe de visiteur ne veut pas être séparé pour un tour de 
// Roller Coaster.
// ▪ Dès qu'il n'y a plus assez de places dans le manège pour le 
// prochain groupe, il démarre.
// ▪ Quand un groupe de visiteur a déjà fait un tour de manège, 
// il se remet dans la file d'attente.
// ▪ Chaque visiteur qui effectue un tour de manège dépense 1€
// ▪ Le manège dispose d'un certain nombre de places assises. 
// ("places")
// ▪ Le manège ne peut effectuer qu'un certain nombre de tours 
// pendant une journée ("tours")
// ▪ La file d'attente est une liste de groupes de visiteurs. ("file")
// Avec les informations du contexte et les données (places, tours, 
// file), écrivez un programme permettant de calculer les profits du 
// Roller Coaster sur une journée.

// variables données
let nb_place : number = 5;
let nb_tours : number = 3;
let nb_place_rest : number;
// let nb_file : number[] = [2, 3, 5, 4];
let nb_file : number[] = [1, 1, 1, 1];
// Variable recherchée
let profit : number = 0;

const calcProfit = (personne : number,prix : number=1): number=>{
    profit += personne * prix;
    return profit
}

const modifFileAttente = (groupe : number[],personne: number)=>{
    groupe.shift();
    groupe.push(personne);}



const remplissageManege = (place_dispo : number)=>{
    if(place_dispo >= 0){
    let nbPersonneGroupe = nb_file[0];
    calcProfit(nbPersonneGroupe);
    modifFileAttente(nb_file,nbPersonneGroupe);
}}

const remplissagePourUnTour = (file : number[])=>{
    for( let y = 0; y < file.length; y++){
        nb_place_rest -= file[0];
        // si le wagon n'est pas plein
        remplissageManege(nb_place_rest)
    }
}

const initManege = (place : number) => {
    nb_place_rest = place;
}

const afficheProfit = (profit : number) => {
    console.log(`Profits -> ${profit} €`);
}

const miseEnService = (tours : number)=>{
    for(let i = 1; i <= tours; i++){
        // variable du reste de place dans le wagon
        initManege(nb_place)
        // cette boucle for permet de savoir le nombre de place restant dans le wagon
        remplissagePourUnTour(nb_file)
    }
    afficheProfit(profit)
}

miseEnService(nb_tours);

// // la boucle for sert à compter le nombre de tour restant 
// for(let i = 1; i <= nb_tours; i++){
//     // variable du reste de place dans le wagon
//     let nb_place_rest = nb_place;
//     // cette boucle for permet de savoir le nombre de place restant dans le wagon
//     for( let y = 0; y < nb_file.length; y++){
//         nb_place_rest -= nb_file[0];
//         // si le wagon n'est pas plein
//         if(nb_place_rest >= 0){
//             let nbPersonneGroupe = nb_file[0];
//             // on rajoute du profit ( c'est les personnes qui rentre dans l'attraction)
//             profit += (nbPersonneGroupe * 1);
//             // ici on modifie la fille d'attente
//             // nb_file.shift();
//             nb_file.splice(0,1);
//             nb_file.push(nbPersonneGroupe);
//         }
//     }
// }


