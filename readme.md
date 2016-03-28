# Lesti.me

Lesti.me est un projet pour #SUPDEWEB, en cours de React.js. 

## Pitch
Lesti.me est un site qui permet à n'importe qui de créer un leaderboard de ses amis, avec un système de pointing. Le créateur du leaderboard est libre de faire gagner ou perdre des points dans son estime (i.e : faire perdre 10 points à un ami dans son estime pour une blague mauvaise). Les visiteurs peuvent approuver ou contester la description d'un ami.

## Done
- Multiples views avec react-router
- Configuration webpack/webpack-dev-server from scratch
- Implémentation react-router
- Implémentation redux-form (inscription,ajout appraisee, connexion)
- Implémentation redux-thunk
- Fetch la route API (reponse JSON hard code dans l'api) avec en fonction des parametres URL, declenché lors de l'entré de la route `/de/:username`
- Gestion de l'authentification (inscription/connexion)
- Statistiques du leaderboard computés d'un profile dans un composant stateless ( UserProfileStats )
- Route API qui ajoute un `appraisee` avec une reference `ObjectId()` vers l'`appraiser`
- Implémentation modèles Mongoose `User` et `Appraisee`
- Une User Interface minimaliste

## Todo
- Une route GET `/appraiser/:appraiserName` qui renvoie les bonnes données selon `/de/:username`
- Bouton approuver/contester sur le leaderboard
- Editer le leaderboard
- Un suivi de l'évolution dans l'estime


## Démarrage

`$ mongod` : démarre un serveur mongodb
`$ npm run api` : démarre le serveur node.js
`$ npm run dev` : démarre webpack-dev-server
`$ npm run webpack` : lance la compilation avec l'option watch

## Naming

`appraisee` : un ami qui est noté.
`appraiser`/`user` : un propriétaire de leaderboard (à harmoniser)

## Architecture

`api` - contient tous les fichiers de l'APi
    `models` - les modèles Mongoose
    `routes` - déclarations routes HTTP
`frontend` - contient les fichiers de l'appli front
    `assets` - les images, le style
    `dist` - le résultat de la compilation webpack
    `src` - code non compilé
        `actions` - les actions Redux
        `components` - les composants React
        `reducers` - les reducers Redux
        `router` - routing de l'application
        `store` - unique store Redux

`node_modules` - en mettant `node_modules` et `utils` à la racine, on peut partager du code entre l'api et le front end. 


## Tech stack

### MongoDB 
La flexibilité des collections mongodb, et de modifier rapidement un schema permettent de passer moins de temps a reflechir au modèle de données. Pour cette petite application, je n'ai jugé pas indispensable d'avoir un système relationnel plus avancé.

### Redux-thunk middleware
Avec Redux, les reducers doivent impérativement être pures, c'est à dire que le reducer doit être une fonction idempotent, sans *side effects*. Redux-thunk middleware nous permet de gérer les *side-effects* les actions asynchrones (i.e : `fetch()`). En wrappant un `action creator` avec une fonction, redux-thunk permet de retarder la création de l'action et donc de réaliser des opérations asynchrones en amont.
Il y a d'autres middlewares qui permettent de gérer les side effects, comme `redux-saga` qui se base sur les `generator` ES6, mais la documentation de Redux mettait en avant `redux-thunk`.

### Express.js
Express est l'un des frameworks node.js les plus populaires. C'est un petit framework qui permet de créer facilement des routes. Pour ce projet, Express semblait être adapté car c'est un framework léger et j'ai eu des précédentes expériences sur framework.

### Webpack
Module bundler populaire dans l'ecosystème React, il est donc beaucoup plus récurrent que browserify dans les documentations. Je l'ai utilisé car je ne sais pas utiliser browserify et que webpack offrirait plus d'option (le hot-reloading par exemple est possible. )

### React-router
React-router est une librairie qui permet de gérer le système de routage avec des composants React. L'inconvénient est que le système de routage n'est pas synchronisé avec le redux-store. Il est nécessaire d'utiliser une librairie supplémentaire pour pouvoir utiliser l'API de react-router et avoir accès au store. 

Il y a une alternative à `react-router` : `redux-router`. C'est un projet expérimental. Il semblerait que `react-router` soit plus populaire que `redux-router`, dans la documentation de `redux-router` il est indiqué que pour la plupart des cas il est conseillé d'utiliser `react-router` avec `react-router-redux`. 

#### Redux
Redux fournit une unique source de vérité, un seul `store` immutable. C'est une des implémentations flux-ish, une des plus populaires de l'ecosystème React.

### React-redux
React-redux est la librairie qui permet d'utiliser React avec Redux. Elle permet de binder les composants aux redux store. Grâce à `connect()`, les composants react ont accès à une unique source de vérité et peuvent `dispatch`er des actions.

### Redux-form
Redux-form permet de connecter un formulaire au redux store et de dispatcher des actions relatives aux form (focus,blur,change...). 

###React-router-redux
React-redux est une petite librairie qui permet de synchroniser react-router et le redux store. Elle permet de bénéficier complètement de l'API de `react-router` et du redux store.







