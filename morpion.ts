import read from 'readline-sync';

//initialisation des variables
let plateau = initialisationPlateau();
let user : string;
let joueur1 : string = "joueur1";
let joueur2 : string = "joueur2";
let gagne : number = 0;
let tour : number = 0;
let valide : boolean = false;
let mark : string;


/**
 * fonction du jeu du morpion
 */
const morpion = () =>{
    /**
     * permet de choisir le nom des joueur
     */
    let { joueur2, joueur1 }: { joueur2: string; joueur1: string; } = definirNomJoueur();
    while (gagne !== 1) {
        changementTour();
        if (tour % 2 ==0 )
        { 
            user = joueur2;
            mark = 'X';
            tourJoueur();
        }
        else {
            user = joueur1;
            mark = 'O';
            tourJoueur();
    
        }   
        conditionGagne(); 
}  


    function definirNomJoueur() {
        let joueur1: string = read.question("comment s'appelle le joueur 1 : ");
        let joueur2: string = read.question("comment s'appelle le joueur 2 : ");
        return { joueur2, joueur1 };
    }

    function conditionGagne() {
        if (((plateau[0][0] == mark) && (plateau[0][1] == mark) && (plateau[0][2] == mark))
            || ((plateau[1][0] == mark) && (plateau[1][1] == mark) && (plateau[1][2] == mark))
            || ((plateau[2][0] == mark) && (plateau[2][1] == mark) && (plateau[2][2] == mark))
            || ((plateau[0][0] == mark) && (plateau[1][0] == mark) && (plateau[2][0] == mark))
            || ((plateau[1][0] == mark) && (plateau[1][1] == mark) && (plateau[1][2] == mark))
            || ((plateau[2][0] == mark) && (plateau[2][1] == mark) && (plateau[2][2] == mark))
            || ((plateau[0][0] == mark) && (plateau[1][1] == mark) && (plateau[2][2] == mark))
            || ((plateau[2][2] == mark) && (plateau[1][1] == mark) && (plateau[0][0] == mark))) {
            gagne = 1;
            console.log(`${user} a gagné`);
        }
    }
}

/**
 * permet de demander au joueur son choix
 */
function tourJoueur() {
    console.log(`tour de ${user}`);
    let choix: string = read.question("Quel case choississez-vous? ");
    choix = choix.toUpperCase();
    console.log(`mon choix est ${choix}`);

    while (!valide) {
        choix = choixJoueur(choix);
    };
    valide = false;
}

/**
 * vérifie si le choix du joueur est bon,
 * si oui le positionne sur le plateau
 * 
 * @param choix choix du joeur
 * @returns 
 */
function choixJoueur(choix: string) {
    switch (choix) {
        case 'A1':
            if (plateau[0][0] == choix)
            {
            plateau[0][0] = mark;
            valide = true;
            break;}
            else {
                console.log('case déja utilisée');
                
            }
        case 'A2':
            if (plateau[0][1] == choix)
            {
            plateau[0][1] = mark;
            valide = true;
            break;}
            else {
                console.log('case déja utilisée');
                
            }
        case 'A3':
            if (plateau[0][2] == choix)
            {
            plateau[0][2] = mark;
            valide = true;
            break;}
            else {
                console.log('case déja utilisée');
                
            }
        case 'B1':
            if (plateau[1][0] == choix)
            {
            plateau[1][0] = mark;
            valide = true;
            break;}
            else {
                console.log('case déja utilisée');
                
            }
        case 'B2':
            if (plateau[1][1] == choix)
            {
            plateau[1][1] = mark;
            valide = true;
            break;}
            else {
                console.log('case déja utilisée');
                
            }
        case 'B3':
            if (plateau[1][2] == choix)
            {
            plateau[1][2] = mark;
            valide = true;
            break;}
            else {
                console.log('case déja utilisée');
                
            }
        case 'C1':
            if (plateau[2][0] == choix)
            {
            plateau[2][0] = mark;
            valide = true;
            break;}
            else {
                console.log('case déja utilisée');
                
            }
        case 'C2':
            if (plateau[2][1] == choix)
            {
            plateau[2][1] = mark;
            valide = true;
            break;}
            else {
                console.log('case déja utilisée');
                
            }
        case 'C3':
            if (plateau[2][2] == choix)
            {
            plateau[2][2] = mark;
            valide = true;
            break;}
            else {
                console.log('case déja utilisée');
                
            }
        default:
            console.error("choix non valide");
            choix = read.question("Quel case choississez-vous? ");

    };
    return choix;
}

/**
 * permet de changer de tour
 */
function changementTour() {
    ++tour;
    console.table(plateau);
    console.log(`numéro du tour : ${tour}`);
}

/**
 * 
 * @returns initialise le plateau de jeux
 */
function initialisationPlateau() {
    let plateau = [["A1", "A2", "A3"], ["B1", "B2", "B3"], ["C1", "C2", "C3"]];
    console.table(plateau);
    return plateau;
}

/**
 * lance le jeux du morpion
 */
morpion();