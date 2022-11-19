// Écrivez un programme qui simulera une calculatrice et demande à l'utilisateur de saisir 
// un premier opérande, un opérateur et un second opérande.
// Ce programme exécutera des opérations arithmétiques de base (addition, soustraction, 
// multiplication et division selon l'opérateur saisi

import read from 'readline-sync';

console.log("---calculatrice---")

let nbr1 : number;
let operateur : string;
let nbr2 : number;
let result : number = 0;


/**
 * Permet de choisir le premier nombre
 */
const choixNombre1 = () =>{
    nbr1 = +read.question('Saisir nombre 1 : ');}

/**
 * Permet de choisir l'opérateur
 */    
const choixOperateur = () =>{
    operateur = read.question('Saisir operateur (+, -, * ou /) : ');
}

/**
 * Permet de choisir le deuxième nombre
 */
const choixNombre2 = () =>{
    nbr2 = +read.question('Saisir nombre 2 : ');}

/**
 * 
 * @param x premier nombre
 * @param y deuxième nombre
 * @returns le résultat de l'addition
 */
 function addition (x:number,y:number) : number {
    result = x + y;
    return result;
}

/**
 * 
 * @param x premier nombre
 * @param y deuxième nombre
 * @returns le résultat de la soustraction
 */
function soustraction (x:number,y:number) : number {
    result = x - y;
    return result;
}

/**
 * 
 * @param x premier nombre
 * @param y deuxième nombre
 * @returns le résultat de la multiplication
 */
function multiplication (x:number,y:number) : number {
    result = x * y;
    return result;

}

/**
 * Fonction qui retourne le résultat de la division entre deux nombres.
 * Affiche un message d'erreur dans le cas d'une division par zéro.
 * @param x premier nombre
 * @param y deuxième nombre
 * @returns le résultat de la division
 */
function division (x:number,y:number) : number {
    if(y==0){
        console.error("attention, on ne peut pas diviser par zéro"); 
    } else {
        result = x/y;
    }
    return result;
}



// if(operateur === '+') {
//     addition(nbr1,nbr2);
//     console.log(`${nbr1} + ${nbr2} = ${result}`);
// } else if(operateur === '-') {
//     soustraction(nbr1,nbr2);
//     console.log(`${nbr1} - ${nbr2} = ${result}`);
// } else if(operateur === '/') {
//     division(nbr1,nbr2);
//     console.log(`${nbr1} / ${nbr2} = ${result}`);
// } else if(operateur === '*') {
//     multiplication(nbr1,nbr2);
//     console.log(`${nbr1} * ${nbr2} = ${result}`);
// } else {
//     console.error("Opérateur non reconnu");
// }

/**
 * Effectue le calcul en fonction de l'opérateur et les nombres choisies
 */
function calcul(){
switch (operateur) {
    case '+': 
    addition(nbr1,nbr2);
    console.log(`${nbr1} + ${nbr2} = ${result}`);
    break;
    case '-': 
    soustraction(nbr1,nbr2);
    console.log(`${nbr1} - ${nbr2} = ${result}`);
    break;
    case '*': 
    multiplication(nbr1,nbr2);
    console.log(`${nbr1} * ${nbr2} = ${result}`);
    break;
    case '/': 
    division(nbr1,nbr2);
    console.log(`${nbr1} / ${nbr2} = ${result}`);
    break;
    default:      
    console.error("Opérateur non reconnu");
 }
}

/**
 * Lance la fonction calculatrice
 */
function calculatrice()
{choixNombre1();choixOperateur();choixNombre2();calcul()}

// cas d'un tableau connu
// function addition2 (valeurs : number[]) : number{
// let result : number = 0;
// for (let valeur of valeurs) {
//     result += valeur
// }
// return result
// }

// cas d'un tableau inconnu
// function addition2 (...valeurs : number[]) : number{
// let result : number = 0;
// for (let valeur of valeurs) {
//     result += valeur
// }
// return result
// }

calculatrice();