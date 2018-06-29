# step 0
Application blanche. 
Tests des différents moyens de debug

## Creation de l'application
`ionic start IonicNotes blank`

## On debug
 1. le classic 
 `ionic serve`
L'application démarre dans votre navigateur.
Vouspouvez développer comme un vrai site web


 2. Debug sur mobile
`ionic serve -c`

L'application est alors disponible depuis son navigateur pc ou depuis le mobile (sur le même réseau) via navigateur ou via l'app Ionic dev app.

Il faut 

3. Déploiement et debug sur mobile
`ionic cordova run android --device --livereload`


