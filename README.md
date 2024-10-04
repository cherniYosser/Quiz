# Quiz

Quiz est une application de quiz sur les films qui permet aux utilisateurs de tester leurs connaissances sur les films en répondant à des questions à choix multiples.

## Structure du projet


## Installation

1. Clonez le dépôt :
    ```sh
    git clone https://github.com/cherniYosser/Quiz.git
    ```
2. Accédez au répertoire du projet :
    ```sh
    cd Quiz
    ```

## Utilisation

 Si vous avez visual studio code :
1.   install "LIVE SERVER" extension
2.   cliquuz boutton droite et lancer le fichier 'index.html' avec "open with live server"

Sinon : 
1. naviguez vers le dossier /quiz
2. run cete commande : npx http-server .

## Fonctionnalités

- **Sélection de la difficulté** : Choisissez le niveau de difficulté des questions (facile, moyen, difficile).
- **Progression** : Suivez votre progression à travers une barre de progression.
- **Minuteur** : Chaque question a un temps limité pour répondre.
- **Score final** : Affiche le score final à la fin du quiz.

## Fichiers principaux

- **[`components/Quiz.js`] : Gère le démarrage du quiz et la récupération des données.
- **[`components/Question.js`] : Affiche les questions et gère la sélection des réponses.
- **[`components/ProgressBar.js`] : Met à jour la barre de progression.
- **[`components/Timer.js`] : Gère le minuteur pour chaque question.

- **[`services/api.js`] : Récupère les questions du quiz depuis une API externe.
- **[`utils/domUtils.js`] : Fournit des utilitaires pour manipuler le DOM.
