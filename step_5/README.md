# step 4
Départ du [step 4](../step_4). 
Ajouts de stockage : la solution du plugin ([doc ionic]pwd
(https://ionicframework.com/docs/storage/))

Nous souhaitons maintenant :
* identification une seule fois
* chargement des messages depuis le storage si pas de réseau

On en profite aussi pour découper notre code de façon plus propre à l'aide des services Angular.

## Actions
1. Ajout plugins
ionic cordova plugin add cordova-sqlite-storage
2. Ajout dépendance npm
npm install --save @ionic/storage
3. imports to NgModule
4. inject it wherever you want

## Bonus
Utilisation des observables pour souscrire au flux de messages 


