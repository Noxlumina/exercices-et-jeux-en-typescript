// Écrivez un programme qui demande à l'utilisateur de saisir le prix de 
// fabrication et le prix de vente d'un produit et vérifiez le profit ou la perte.
// Si le prix de fabrication est supérieur au prix de vente, il y a perte sinon profit.

import read from 'readline-sync';
console.log("---profit ou perte---")


let prixF = +read.question("Quel est le prix de fabrication ? ");
let prixV = +read.question("Quel est le prix de vente ? ");


console.log("prix de fabrication : " + prixF);
console.log("prix de vente : " + prixV);

if (prixF > prixV) {
    console.log(`Perte de ${prixV - prixF} €`);
} else {
    console.log(`Profit de ${prixV - prixF} €`);
}