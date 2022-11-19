# exercices-et-jeux-en-typescript
# exercices et jeux en js

pour lancer un exercice ou un jeux<br/>
effectuer d'abord la commande npm i pour installer les nodes modules<br/>


## **exercice 1: bienvenue (npm run exercice1)**
Écrire un programme qui demande à un utilisateur de saisir son nom, puis afficher lui un message de bienvenue avec son nom.

## **exercice 2: addition (npm run exercice2)**
Écrire un programme qui demande à un utilisateur de saisir deux nombres. Puis le programme effectue la somme de ses deux nombres.

## **exercice 3: profit ou perte (npm run exercice3)**
Écrire un programme qui demande à un utilisateur de saisir le prix de fabrication et le prix de vente d'un produit. Le programme indique ensuite si il y a une perte ou un profit sur la vente.

## **exercice 4: qui est le plus grand? (npm run exercice4)**
Écrire un programme qui demande à un utilisateur de saisir 3 nombres et qui lui indique le plus grand des trois.

## **exercice 5: le prof (npm run exercice5)**
Écrire un programme pour un professeur qui lui permet d'assigner un commentaire à un élève en fonction de sa moyenne.

## **exercice 6: calculatrice (npm run exercice6)**
Écrire un programme qui simule les opérations de base d'une calculatrice une calculatrice (addition, soustraction, multiplication et division). Puis qui demande à un utilisateur deux nombre ainsi que l'opération à effectuer en tre ses deux derniers.

## **exercice 7: somme de n entier (npm run exercice7)**
Écrire un programme qui demande à un utilisateur de saisir un nombre "N". Puis le programme effectuera la somme de tous les nombres entre 1 et N.

## **exercice 8: escalier (npm run exercice8)**
Écrire un programme qui demande à un utilisateur un nombre puis qui génère un escalier d'étoiles.

## **exercice 9: pyramide (npm run exercice9)**
Adaptez l'exercice 8 pour faire descendre l'escalier dans l'autre sens afin de former une pyramide.

## **exercice 10: true pyramide (npm run exercice10)**
Adaptez l'exercice 9 pour que la pyramide soit dans le bon sens.

## **exercice 11: billets et pièces (npm run exercice11)**
Écrire un programme qui demande à un utilisateur de saisir un nombre décimal. Le programme doit renvoyer exactement le nombre de billets et de pièces qu'il faut pour obtenir ce nombre.

## **exercice 12: températures (npm run exercice12)**
Vous disposez d'une liste de températures (°C). Parcourez cette liste et affichez la température la plus proche de 0°C. Si une température négative est aussi proche de 0 qu'une température positive, la valeur négative prend le dessus.

## **exercice 13: tri de liste (npm run exercice13)**
Écrire un programme qui permet de trier une liste dans un ordre croissant.

## **Jeux 1 FizzBuzz**
### <span style="color: green">Contexte</span>
Le FizzBuzz est un exercice très courant dans l'informatique.<br/>
Vous pourrez être confronté à cet exercice pour un entretien d'embauche.<br/>
L'exercice n'est pas bien difficile mais l'employeur vérifiera la méthode que vous avez utilisé, le temps que vous avez mis ainsi que votre réflexion sur le problème posé.
### <span style="color: green">Consigne</span>
Demandez à l'utilisateur de saisir un nombre "N" .<br/>
Afficher tous les nombres allant de 1 à "N", avec les particularités suivantes : <br/>
▪Remplacez tous les multiples de 3 par "FIZZ"<br/>
▪Remplacez tous les multiples de 5 par "BUZZ"<br/>
▪Remplacez tous les multiples de 3 ET 5 par "FIZZBUZZ"

## **Jeux 2 Juste Prix**
### <span style="color: green">Contexte</span>
Vous connaissez certainement le jeu télévisé de Vincent Lagaff nommé "Le Juste Prix" ?<br/>
Une cagnotte remplie de cadeaux est proposée à un candidat qui arrive en finale.<br/>
Tous ses cadeaux ont une valeur qui est cachée au candidat.<br/>
Le candidat a 30 secondes pour deviner le prix exact du lot avec pour seule informations: ▪C'est plus.<br/>
▪C'est moins.
### <span style="color: green">Consigne</span>
Demandez à l'utilisateur de saisir un nombre de tentative pour simuler les "30 secondes".<br/>(Ce nombre de tentatives représentera le nombre d'échec possible)<br/>
Générez un nombre aléatoire entre 0 et "N" saisie par l'utilisateur.Construisez le programme permettant de :<br/>
▪Saisir un nombre.<br/>
▪Comparer le nombre avec le résultat attendu "N".<br/>
▪Afficher "Plus" ou "Moins".<br/>
▪Retirer une vie.

## **Jeux 3 Roller Coaster**
### <span style="color: green">Contexte</span>
Vous êtes ingénieur et on vous demande de calculer les profits que peut réaliser un Roller Coaster en une journée.<br/>
▪Un groupe de visiteur ne veut pas être séparé pour un tour de Roller Coaster.<br/>
▪Dès qu'il n'y a plus assez de places dans le manège pour le prochain groupe, il démarre.<br/>
▪Quand un groupe de visiteur a déjà fait un tour de manège, il se remet dans la file d'attente.<br/>
▪Chaque visiteur qui effectue un tour de manège dépense 1€
### <span style="color: green">Consigne</span>
▪Le manège dispose d'un certain nombre de places assises. ("places")<br/>
▪Le manège ne peut effectuer qu'un certain<br/> nombre de tours pendant une journée ("tours")
▪La file d'attente est une liste de groupes de visiteurs. ("file")<br/>
Avec les informations du contexte et les données (places, tours, file), écrivez un programme permettant de calculer les profits du Roller Coastersur une journée.

## **Jeux 4 Le jeu du pendu**
### <span style="color: green">Contexte</span>
Le jeu du pendu consiste à faire deviner un mot à une autre personne.<br/>
Le mot est masqué et le joueur qui doit deviner le mot a le droit de donner qu'une lettre à la fois.<br/>
Si cette lettre est dans le mot, cette dernière est dévoilée si ce n'est pas le cas le joueur perd une vie.
<br/>Le joueur gagne si ik découvre le mot avant de perdre toutes ses vies.

### <span style="color: green">Consigne</span>
Ecrivez un programme qui demande au premier utilisateur de saisir :<br/>
▪Un mot à trouver<br/>
▪Un nombre de vie<br/>
Masquez le mot de sorte à ce qu'il ressemble à _ _ _ _ _ _ _ (ex : bonjour)
Demandez au joueur une lettre (ex: "o")<br/>
Si cette lettre est dans le mot, affichez : _ o _ _ o _ _ Sinon il perd une vie
<br/>Quand le mot est affiché entièrement, le joueur gagne. Si le joueur n'a plus de vie, il perd.
