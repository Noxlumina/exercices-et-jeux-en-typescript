// Écrivez un programme pour un professeur flemmard.
// Vous disposez d'une liste de notes comprises entre 0 et 20
// Écrivez un commentaire pour chacune de ces copies d'élève

let notes = [19, 5, 3, 7, -5, 16];

for(let index = 0; index < notes.length; index++) {
    let note = notes[index];
    console.log(note);

    if(note < 5) {
        console.log("====> Catastrophique");
    } else if(note >= 5 && note < 11) {
        console.log("====> Insuffisant");
    } else if(note >= 10 && note < 15) {
        console.log("====> Peut mieux faire");
    } else if(note >= 15 && note < 18) {
        console.log("====> Bien");
    } else {
        console.log("====> Excellent");
    }
}