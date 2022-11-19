// Écrivez un programme pour saisir deux nombres de l'utilisateur et calculer leur somme. 
// L'utilisateur doit donc entrer deux valeurs, puis le programme calcule leur somme.

import read from 'readline-sync';
const addition = (x : number, y : number) : number => {
    return x + y;
}

let valeur_1 : number = read.questionFloat("choissez un premier nombre = ");
let valeur_2 : number = read.questionFloat("puis un second = ");

// let result = valeur_1 + valeur_2;
let result = addition(valeur_1,valeur_2)
console.log(`${valeur_1} + ${valeur_2} = ${result}`);