# step 4
Départ du [step 3](../step_3). 
Ajouts de composants graphiques

## Création de nouvelles pages
1. Création d'une page _Signup_
2. Modidification de la _home_ pour être la page _Signin_
3. Création d'une page pour la liste des messages

## Enregistrement des pages dans notre app
Dans l'[app.module](./src/app/app.module.ts), on ajoute l'ensemble des pages crées.

## Cinématique ssouhaitées
* Sur l'écran d'accueil :
  * Une authentification réussie nous amène sur la liste des messages
  * Un clique sur le bouton créer un compte nous amène sur la page signup
* Sur l'écran signup : 
  * Une création de compte réussie nous ramène sur la page d'accueil (_back_)
* Des tabs pour cahnger entre Messages/Users
* Sur les messages :
  * Consultation des Messages
  * Pattern Pull To Refresh
  


