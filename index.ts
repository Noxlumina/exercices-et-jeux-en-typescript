// let prenom : string = "tutu";
// const AGE : number = 32;
// let texte : string = `Bonjour ${prenom}`;

// console.log(prenom);

// let isDone : boolean = true;
// let isFalse : boolean = false;

// let nbr1, nbr2 : number

// let tab = [12, true,"toto"];
// console.log(tab.length);

// console.log(tab[0]);
 
// let toto = tab.filter((value) => 
// { value == "toto"})

// console.log(toto);

// let prenoms : (number|string)[] = ["Charles",450,"Lucie","Paul"];
// console.log(prenoms);

// let a :any = "Salut ça va";
// let texte : string = a;
// console.log(texte.length);

let nbr1, nbr2 : number
nbr1=3;
nbr2=8

if (nbr1 == 3 && nbr2 ==8) {
    console.log("ok");  
} else if (nbr1 == 3) {
    console.log(" nbr1 ok");  
} else if (nbr2 == 8) {
    console.log(" nbr2 ok");  
}
else {console.log("not ok");
}

if (nbr1 == 3 || nbr2 ==8) {
    if (nbr1 == 3) {
    console.log(" nbr1 ok")};
    if (nbr2 == 8) {
    console.log(" nbr2 ok")};  
}
else {console.log("not ok");
}

// console.log((nbr1 == 10 && nbr2 ==3) ? "les deux sont ok" : (nbr1 == 10) ? "nbr1 ok": (nbr2 == 3) ? "nbr2 ok": "pas ok");
let tour = 0
while (nbr2 != nbr1) {
    console.log(++tour);
    nbr1++;
}

for (let index = 0; index < 10; index++) {
    console.log(nbr1);
    nbr1 += nbr2 
    console.log(nbr1);
}

let prenoms : (string)[] = ["Charles","Lucie","Paul"];


for(let prenom in prenoms)
{console.log(prenom);
}

for(let prenom of prenoms)
{console.log(prenom);
}

prenoms.forEach((prenom :string) => {
    console.log(prenom);  
});

// opérateur arithmétique
// let result_add = nbr1 + nbr2
// let result_sous = nbr1 - nbr2
// let result_mult = nbr1 * nbr2
// let result_div = nbr1 / nbr2
// let result_modulo = nbr1 % nbr2

// opérateur de comparaison
// let result : boolean = nbr1 >= nbr2
// let result : boolean = nbr1 <= nbr2
// let result : boolean = nbr1 == nbr2
// let result : boolean = nbr1 !== nbr2

// opérateur logique

// let result : boolean = true && true
// let result : boolean = true && false
// let result : boolean = false && false

// let result : boolean = true || true
// let result : boolean = true || false
// let result : boolean = false || false

// let result : boolean = true ^ true
// let result : boolean = true ^ false
// let result : boolean = false ^ false


// commenter --> ctrl + :
// copie ligne --> alt + maj + haut ou bas
