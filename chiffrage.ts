// Historiquement, le fait de transmettre des messages a toujours été une opération difficile.
// Le message peut être récupéré par l'ennemi et renverser la situation.C'est pour cela qu'il a
// fallu sécuriser les messages.
// L'une des premières méthodes pour chiffrer un message a été inventé à l'époque Romaine sous 
// César et repose sur un principe très simple : ▪Les lettres de l'alphabet sont numérotés 
// (A-1 ... Z-26)
// ▪Décaler d'un certain nombre les lettres
// ▪Si la clé de chiffrage est 3 →"A" devient "D" ... "Z" devient "C"

// Écrivez un programme qui demande à l'utilisateur de :
// ▪Saisirun message (message)
// ▪Saisir une clé de chiffrage (cle)
// Affichez le message codé dans la console.

console.log("---Le chiffrage de César---")

let messageDéchiffré : string = '';

// function cesar(messageAchiffer : string, key : number):string {
  
const cesar = (messageAchiffer : string, key : number):string => {
  
    if (key < 0)
      return cesar(messageAchiffer, key + 26);
    
    // variable pour stocker le résultat
    // Parcourir chaque caractére
    for (let i = 0; i < messageAchiffer.length; i++) {
      // Récupérer le caractére que nous allons ajouter
      let c : string = messageAchiffer[i];
      // Vérifier si c'est une lettre
      if (c.match(/[a-z]/i)) {
        // Récupérer son code
        let code = messageAchiffer.charCodeAt(i);
        // Lettres majuscules
        if ((code >= 65) && (code <= 90))
          c = String.fromCharCode(((code - 65 + key) % 26) + 65);
        // Lettres minuscules
        else if ((code >= 97) && (code <= 122))
          c = String.fromCharCode(((code - 97 + key) % 26) + 97);
      }
      // Ajouter le caractére
      messageDéchiffré += c;
    }
    // Résultat
    return messageDéchiffré;
  };
  console.log(cesar("ABCD", 1))