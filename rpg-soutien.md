# Mini Projet RPG - Soutien


## Étape 0 : 

Créez une repository git public avec un README et appelez-le `res04-js-rpg-soutien.

Récupérez les fichiers du projet.


## Étape 1 :

Parcourez les fichiers du projet, utilisez l'inspecteur du navigateur et regardez un peu ce qui s'y trouve. Ajoutez-y vos commentaires pour détailler qui fait quoi.


## Étape 2 : Charger les texture de sol

Dans le fichier `assets/js/functions/loadFloors.js`, vous trouverez une fonction `loadFloors` que vous allez devoir remplir.

La fonction reçoit un tableau de tableau qui représente les colonnes et les ligne de notre grille de jeu (30 colonnes, 20 lignes). Vous pouvez trouver ce tableau dans le fichier `js/data/game-map.js`.

Pour chacune des cases du tableau vous allez devoir donner la bonne classe à la case de la grille correspondante :

- Si la case vaut "G" dans le tableau : la classe `grass`.
- Si la case vaut "W" dans le tableau : la classe `water`.
- Si la case vaut "S" dans le tableau : la classe `sand`.
- Si la case vaut "D" dans le tableau : la classe `dirt`.


## Étape 3 : Charger les objets sur la carte

Dans le fichier `assets/js/functions/loadObjects.js`, vous trouverez une fonction `loadObjects` que vous allez devoir remplir.

La fonction reçoit un tableau de tableau qui représente une liste d'objet qui ont un `type`, une position en hauteur (`posY`) et en largeur (`posX`). Vous pouvez trouver ce tableau dans le fichier `js/data/game-objects.js`.

Pour chacun des objets du tableau, vous devrez ajouter une classe à la case du tableau correspondant à sa position : 

- Pour les objets de type "tree", la classe `tree`.
- Pour les objets de type "stump", la classe `stump`.
- Pour les objets de type "rock", la classe `rock`.


## Étape 4 : Créer la classe Character

Dans le fichier `assets/js/classes/character.js` vous allez créer la classe `Character`.
La classe `Character` a deux attributs privés :

- `posX` qui représente sa position en largeur
- `posY` qui représente sa position en longueur

Les deux attributs ont des getters et des setters.

La classe `Character` a un constructeur qui initialise `posY` à 15 et `posX` à 19.

La classe `Character` a 5 méthodes :

- `moveUp` qui diminue sa `posY` de 1 tant qu'elle reste supérieure ou égale à 0 puis appelle la méthode `render`.
- `moveDown` qui augmente sa `posY` de 1 tant qu'elle reste inférieure ou égale à 19 puis appelle la méthode `render`.
- `moveLeft` qui diminue sa `posX` de 1 tant qu'elle reste supérieure ou égale à 0 puis appelle la méthode `render`.
- `moveRight` qui augmente sa `posX` de 1 tant qu'elle reste inférieure ou égale à 29 puis appelle la méthode `render`.
- `render` qui supprime la classe CSS `character` de la case à l'ancienne position du personnage et l'ajoute à la nouvelle.

Dans votre fichier `js/assets/index.js`, après l'appel à la fonction `initMap` vous allez instancier un nouveau `Character` et appeler sa méthode `render`.


## Étape 5 : Faire bouger le personnage

Dans le fichier `assets/js/index.js`, après le premier `render`de votre personnage vous allez rajouter un eventListener sur l’évènement  `keydown`.

- Si l'utilisateur a pressé la touche "z", appelez la méthode `moveUp` du personnage.
- Si l'utilisateur a pressé la touche "s", appelez la méthode `moveDown` du personnage.
- Si l'utilisateur a pressé la touche "q", appelez la méthode `moveLeft` du personnage.
- Si l'utilisateur a pressé la touche "d", appelez la méthode `moveRight` du personnage.


## Étape 6 : Gestion des collisions

Votre personnage de peut pas aller sur l'eau ni marcher sur un objet, vous allez donc devoir rajouter des conditions dans les méthodes de mouvement pour éviter qu'il ne se déplace là où il n'a pas le droit.


## Bonus 1 : le God Mode

Créez une option code mode que vous pourrez activer/désativer avec une touche secrète, en God Mode votre personnage peut rouler sur l'eau et les objets.


## Bonus 2 : Interagir avec les objets

Dans le dossier images vous avez différents fichiers SVG pour vous permettre d'aller plus loin.

Une première idée pourrait être que si votre personnage a une hache, il peut couper le bois sur les cases proches de lui.

À vous de gérer le CSS et le JavaScript pour vous permettre de faire ça (vous avez un fichiers SVG avec une image de hache et un avec une image de rondins de bois).


## Bonus 3 : Faites vous plaisir

Si vous êtes arrivé-e jusque là faites vous plaisir et n'oubliez pas de partager le résultat sur Discord si vous le mettez en ligne :)
