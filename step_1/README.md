# step 1
Application blanche. 
Ajoutons nos premiers composants graphiques pour accéder à la fonction d'authentification de [l'api CESI](http://cesi.cleverapps.io).

## Ajout des composants graphiques
Nous allons commencer par créer un formulaire simple de création d'utilisateur.
Se référer à la doc [ionic components](https://ionicframework.com/docs/components/).

Nous avons besoin ici de trois champs texte et d'un bouton de création.

## Appel Http
Ionic se base ici sur Angular, nous allons donc nous baser sur le composant HTTP d'angular. 
1. Import du composant http dans notre application via le fichier [app.module.ts](./src/app/app.module.ts)
2. import du composant http dans notre composant
 `import { Http, Headers } from '@angular/http'; `
3. Injection du composant Http dans notre composant Angular via notre constructeur
4. utilisation du composant Http