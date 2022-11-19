import read from 'readline-sync';
console.log("---billets et pieces---")

let val = +read.question("Saisir une somme:");
console.log(`La somme est ${val}€`);
let prix = [500, 200, 100, 50, 20, 10, 5, 2, 1, 0.5, 0.2, 0.1, 0.05, 0.02, 0.01];
for(let i= 0; i < prix.length; i++){
    let reste = val % prix[i];
    let count = (val - reste)/prix[i];
    if(prix[i] >= 5 && count > 0){
        console.log(`Billet ${prix[i]}€ : ${count}`);
    }else if(prix[i] < 5 && count > 0) {
        console.log(`Piece ${prix[i]}€ : ${count}`);
    }
    let arrondi = reste*100;          
    arrondi = Math.round(arrondi);
    val = arrondi/100;
}
console.log("------------")
console.log("valeur prédéfinie de 2437,57")
let nbr = 2437.57;
let monnaies = [500, 200, 100, 50, 20, 10, 5, 2, 1, 0.5, 0.2, 0.1, 0.05, 0.02, 0.01];


// for(let index = 0; index < monnaies.length; index++) {
//     let monnaie = monnaies[index]; //monnaies[2]
//     if(nbr >= monnaie) {
//         let nbrMonnaie = Math.floor(nbr / monnaie);
//         console.log(`Nombre de billet de ${monnaie}€ : ${nbrMonnaie}`);
//         nbr -= monnaie * nbrMonnaie;
//     }
// }

// for (let monnaie of monnaies) {
//     if (nbr >= monnaie) {
//         // Divise le nombre par la monnaie puis j'arrondi à l'inférieur
//         let nbrMonnaie = Math.floor(nbr / monnaie);
//         // J'affiche comien de billet de rends
//         if (nbr>= 5){
//         console.log(`Nombre de billet de ${monnaie}€ : ${nbrMonnaie}`);}
//         if (nbr< 5){
//             console.log(`Nombre de pièce de ${monnaie}€ : ${nbrMonnaie}`);}
//         // Je retire au nombre le montant des billets que j'ai rendu
//         nbr -= monnaie * nbrMonnaie;
//     }
// }
// console.log(nbr);



monnaies.forEach((monnaie:number) => {
    // Si le nombre est supérieur à la monnaie
    if (nbr >= monnaie) {
        // Divise le nombre par la monnaie puis j'arrondi à l'inférieur
        let nbrMonnaie = Math.floor(nbr / monnaie);
        // J'affiche comien de billet de rends
        if (nbr>= 5){
        console.log(`Nombre de billet de ${monnaie}€ : ${nbrMonnaie}`);}
        if (nbr< 5){
            console.log(`Nombre de pièce de ${monnaie}€ : ${nbrMonnaie}`);}
        // Je retire au nombre le montant des billets que j'ai rendu
        nbr -= monnaie * nbrMonnaie;
    }
})