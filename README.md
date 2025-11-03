# Quiz-Project
Using skills learnt so far to build an interactive quiz in Javascript

1. Pratiquer les fondamentaux de la programmation et du développement web 🏠
Manipulation du DOM : Ce projet aide à comprendre comment manipuler les éléments HTML via JavaScript. Chaque question et ses options de réponse sont injectées dynamiquement dans la page.
Gestion des événements : Les interactions avec les réponses sont gérées par des événements JavaScript (click), permettant à l'utilisateur·ice d'interagir avec le quiz.
Logique conditionnelle : Utilisation des concepts de conditions (if, else) pour vérifier les réponses, ajuster les scores, et afficher les résultats.
Utilisation des fonctions : Renforcement de la compréhension des concepts d‘arguments et paramètres pour les fonctions (par exemple, passer la réponse sélectionnée dans une fonction checkAnswer()), et des retours de fonctions pour gérer le score ou la progression dans le quiz.
Gestion des états multiples : La gestion de l'état des réponses sélectionnées, la réinitialisation du quiz, et la logique de calcul du score aident à mieux comprendre les systèmes d'état dans les applications web.
2. Comprendre la gestion des données avec JavaScript 🗂️
Utilisation des objets et tableaux : Les questions et les réponses sont stockées dans un tableau d'objets, ce qui permet de travailler sur des structures de données complexes et d'itérer sur celles-ci (utilisation de la méthode de tableau forEachou de la boucle for...of).
Introduction au stockage des données (pour l‘option avec le local storage) : Le localstorage permet de stocker les données localement dans son navigateur. Cela permet d’enregistrer des informations comme le score par exemple, sans perdre celle-ci lorsqu’on change de page ou qu’on l’actualise. C’est un premier pas vers la gestion de données que l’on abordera en détail plus tard dans les fiches Arbre.
3. Manipuler le CSS 🎨
Styliser une page web : Appliquer des styles de base, gestion des couleurs, des polices, et la disposition des éléments à l'écran, utilisation de flexbox pour centrer les éléments et aligner les boutons.
Ajouter des classes CSS dynamiquement via JavaScript pour modifier l'apparence des éléments (par exemple, ajouter une classe correct-answer pour mettre un contour vert autour d’une bonne réponse ).
Utiliser des pseudoclasses CSS comme :hover pour créer des effets visuels au survol des boutons, et :disabled pour gérer l’état inactif d’un bouton tant qu’aucune réponse n’est sélectionnée.
4. Développer des compétences en débogage et gestion d'erreurs 🐞
Le projet permet de se familiariser avec les outils de développement du navigateur pour déboguer le code JavaScript, HTML et CSS.

Il est recommandé d‘inspecter les éléments du DOM pour vérifier que le CSS est bien appliqué, d‘apprendre à utiliser la console pour afficher des informations avec console.log(), de prendre le temps de lire et de comprendre les erreurs en suivant les messages affichés dans la console.

5. S‘initier à la gestion de projet dev 📆
Introduction aux méthodes Agiles: Planification de courtes réunions quotidiennes (~ 15 minutes max) où chaque membre de l'équipe partage ce qu'il a fait la veille, ce qu'il compte faire aujourd'hui et s'il rencontre des obstacles (⇒ stand up meetings). Pratiquer des rétrospectives après le projet pour réfléchir à ce qui s'est bien passé, ce qui peut être amélioré, et comment ces améliorations peuvent être mises en place lors du prochain projet.
Utilisation d‘un outil de gestion de projet : Apprendre à diviser le projet en petites étapes, à attribuer des tâches à chaque membre du groupe et à déplacer les tâches dans les colonnes "à faire", "en cours", et "terminé", en fonction de leur avancement (👀 partie Outil de gestion de projet : le Kanban).
Utiliser Git et Github pour travailler ensemble sur des fonctionnalités différentes, mettre en commun ces avancées et gérer les conflits éventuels. EN BONUS : utiliser les branches et s‘initier aux pull request pour partager son code.
6. [BONUS] Découvrir la notion de déploiement 👩🏽‍💻
En bonus, le projet peut être déployé sur GitHub Pages pour obtenir des retours d‘utilisateur·ices réel·les.

2. Premier niveau (MVP : Minimum Viable Product)
Livrable attendu
Voici un exemple de la version minimale de votre projet : https://laurel16.github.io/ada-quiz/

Les fonctionnalités requises sont les suivantes:

Votre application propose une série de 4 questions minimum, sur un thème de votre choix.
Lorsque l‘utilisateur·ice arrive sur la page d‘accueil de votre site, iel voit la première question de cette série, avec plusieurs réponses possibles parmi lesquelles iel doit choisir.
L'utilisateur·ice clique sur l'une des options de réponse à cette question.
Le bouton "Suivant" reste désactivé tant que l'utilisateur·ice n'a pas sélectionné une réponse.
Lorsque l'utilisateur·ice sélectionne une option, les autres options ne peuvent plus être sélectionnées.
Le résultat (bonne réponse ou mauvaise réponse) est affiché immédiatement.
Le bouton "Suivant" est de nouveau actif, quand il est cliqué par l'utilisateur·ice, il passe à la question suivante.
Le score est calculé et affiché à la fin du quiz. Un message personnalisé est affiché en fonction du score.
Une fois le quiz terminé, l'utilisateur·ice a la possibilité de cliquer un bouton pour rejouer.
Voici ci-dessous une décomposition en petites étapes pour arriver au résultat souhaité, pour vous donner un exemple de découpage du projet en petites tâches.

Les premières sont semi-guidées pour que vous trouviez vos repères dans le processus de construction de la base de code.

Une fois que vous êtes lancé⸱es, les étapes suivantes ne le sont plus.

Les exemples de code sont donnés à titre indicatif, il existe plusieurs façon de construire ces fonctionnalités, libre à vous d‘en choisir d‘autres si elles vous semblent plus simples ou plus abouties, tant que le résultat répond aux spécifications du MVP décrites ci-dessus.

🔥 L‘objectif n‘est pas d‘aller vite, ni même d‘aller le plus loin possible au delà du MVP mais de comprendre ce que vous codez.

→ Pour les autres projets, vous serez en autonomie pour construire votre architecture de code à partir d‘un objectif défini.

💡Avant de commencer, prenez le temps de lire ensemble les étapes du projet, ainsi que les Recommandations pour le travail en groupe

 
Étape 1 : Créer le dossier du projet
⚠️ Une seule personne du groupe se charge de créer le dossier en local sur son ordinateur, puis de le pousser sur Github.

Créer un dossier au nom du projet, et ajoute un fichier index.html et un fichier style.css

Relie les deux fichiers avec la balise link.

Créer un répertoire Git local avec la commande git init

Créer un répertoire sur Github et ajoute l‘adresse de remote de ce répertoire à ton répertoire local.

💡 Rappel de la procédure Git
Dans le terminal:

git init pour initialiser un dossier .git dans votre dossier.

ls -la

pour vérifier que le .git est bien présent à la racine du dossier.

git status

pour voir que les fichiers index.html et style.css ne sont pas encore suivis par Git.

git add .

pour ajouter ces fichiers à Git (ou git add index.html style.css pour n’ajouter que certains fichiers).

git status

qui nous indique maintenant que ces fichiers sont suivis par Git (ils apparaissent en vert) et qu’ils sont prêts pour être commit (si on le souhaite).

git commit -m'first commit' pour créer notre premier commit (un instantané de votre projet à ce moment) avec un message de description (le flag -m signifie message).

Sur votre compte github.com, créer un nouveau répertoire (avec le bouton new)

En étant bien sûr d’être dans votre dossier, ajouter l’adresse de ce répertoire (c’est la remote, le répertoire distant) à votre dossier local : git remote add origin git@github.comvotre nom git)/(nom du repo).git (votre adresse est différente)

taper git remote -v dans le terminal pour vérifier que l’adresse a bien été ajoutée. cette commande doit vous renvoyer (avec votre adresse propre) : origin git@github.comvotre nom git)/(nom du repo).git (fetch) origin git@github.comvotre nom git)/(nom du repo).git (push)

taper ensuite : git branch -M main (pour nommer ou renommer la branche actuelle en main)

git push -u origin main pour envoyer nos changements sur le répertoire distant (sur la branche main de notre répertoire Github). L’option -u (ou --set-upstream) permet de pouvoir utiliser la commande git push sans préciser l’origine. Sans cette option, on pousse en utilisant la commande git push origin main (quand on utilisera les branches l’origine sera différente, ce sera le nom de notre branche).

ajouter un fichier .gitignore à la racine de votre dossier. Dans ce fichier, ajoutez les dossiers et fichiers que vous souhaitez ne pas versionner, comme .DS_Store sur macOS.

Invitez tous les membres de la team sur ce repo, qu‘iels pourront cloner avec la commande git clone + adresse du repo (en ssh).

💡 Rappel de la procédure pour inviter des collaborateurs sur GitHub
Accéder aux paramètres du dépôt :

Sur la page principale du dépôt, cliquer sur l'onglet Settings (Paramètres) en haut à droite de la page.
Inviter des collaborateurs :

Dans le menu de gauche, sous la section "Access" ou "Manage access", cliquer sur le bouton Invite a collaborator (Inviter un collaborateur).
Taper le nom d'utilisateur·ice GitHub de la personne que vous voulez inviter, puis cliquer sur Add collaborator.
Accepter l'invitation :

La personne invitée recevra une notification par email ou directement sur GitHub. Elle devra accepter l'invitation pour avoir accès au projet.
Cloner le dépôt sur sa machine:

En se plaçant dans son terminal dans le dossier Ada/projets_collectifs:

git clone [git@github.com](<mailto:git@github.com>)votre_nom_git)/(nom_du_repo).git

Puis cd nom_du_dossier Pour entrer dans le dossier

⚠️ Pour un refresh sur les méthodes de travail en équipe sur Github : Collaborer sur Github

Commencer à utiliser un outil de gestion de projet en regardant 👀 comment faire à la page Outil de gestion de projet : le Kanban.

Étape 2 : Créer le design squelette d‘une question du quiz
Commencer par construire le rendu visuel de votre quiz avec une première question et ses options de réponse écrites directement dans le HTML. Une fois que vous serez satisfaits de ce design, vous pourrez passer à l'étape suivante et injecter vos questions dynamiquement dans le HTML via JavaScript.

Par exemple :

<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Quiz Game</title>
<link rel="stylesheet" href="style.css">
</head>
<body>
	<div id="quiz-container">
	<!-- Section pour la question -->
		<div class="question">
		Fatoumata Kébé est reconnue pour ses recherches dans quel domaine scientifique ?
		</div>
		<!-- Section pour les options -->
		<div class="options">
		  <button>L'astronomie, spécialisée dans les débris spatiaux.</button>
		  <button>La création de lunettes de réalité augmentée pour observer les étoiles.</button>
		  <button>L'étude de la météo sur Mars et ses implications pour l'agriculture spatiale.</button>
		  <button>La cartographie des astéroïdes qui pourraient potentiellement entrer en collision avec la Terre.</button>
		</div>
		
		<!-- Prévois déjà le design du bouton "suivant" pour passer à la prochaine question -->
		 <div class="button-container">
		  <button id="next-button">Suivant</button>
		</div>
	</div>
</body>
</html>
Ce code est totalement statique, il ne fait rien d‘autre qu‘afficher une question et des réponses possibles.

Ouvrir cette page dans le navigateur avec l‘extension Live Server de VsCode.
Pour voir votre squelette prendre des couleurs et du relief, ajouter du style CSS dans votre fichier style.css pour chaque id et classe de vos balises. Par exemple, donner une couleur de background à votre body, une taille et une couleur de background à vos boutons de réponse pour que leurs contours soient visibles, une police et une couleur aux textes, etc.
💡🎨 Sur l‘exemple, nous avons choisis un gradient pour la couleur de background du body sur ce site: https://uigradients.com/.

Pour choisir des couleurs qui matchent bien pour votre app vous pouvez aller voir sur: https://coolors.co/ https://colorhunt.co/

Étape 3 : Créer votre premier quiz
Créer un nouveau fichier questions.js.
Définir un premier thème avec 4 ou 5 questions et une bonne réponse sous forme de dictionnaire.
Déclarer une constante, lui donner un nom (ex : quiz_fatoumata_kebe).
À l'intérieur de cette constante, créer un objet avec une clé questions contenant un tableau de questions.
Chaque question aura une clé question pour le texte de la question, une clé options pour un tableau de quatre réponses possibles, et une clé correct_answer pour la bonne réponse.
Utiliser export const pour que la constante puisse être importée dans d'autres fichiers.
Voici un exemple de contenu de questions.js :

export const quiz_fatoumata_kebe = {
  questions: [
    {
      text: "Fatoumata Kébé est reconnue pour ses recherches dans quel domaine scientifique ?",
      options: [
        "L'astronomie, spécialisée dans les débris spatiaux.",
        "La création de lunettes de réalité augmentée pour observer les étoiles.",
        "L'étude de la météo sur Mars et ses implications pour l'agriculture spatiale.",
        "La cartographie des astéroïdes qui pourraient potentiellement entrer en collision avec la Terre."
      ],
      correct_answer: "L'astronomie, spécialisée dans les débris spatiaux."
    },
    {
      text: "En plus de son travail d'astronome, dans quelle autre activité Fatoumata Kébé est-elle impliquée ?",
      options: [
        "Elle enseigne l'astrophotographie aux astronautes de la Station spatiale internationale.",
        "Elle milite pour l'éducation des jeunes filles en astronomie.",
        "Elle entraîne des robots pour des compétitions de quiz interstellaires.",
        "Elle développe des applications pour cultiver des potagers en apesanteur."
      ],
      correct_answer: "Elle milite pour l'éducation des jeunes filles en astronomie."
    },
    // Autres questions...
  ]
};
Étape 4 : Remplacer la première question écrite “en dur” par une première question affichée dynamiquement
Créer un nouveau fichier game.js
Utiliser la syntaxe import { quiz_fatoumata_kebe } from './questions.js'; pour importer la constante qui contient les questions.
Stocker chacun des éléments du DOM qui vont être nécessaires à l‘affichage des questions dans une variable.
Ressources :

searching-elements-dom: https://fr.javascript.info/searching-elements-dom
modifying-document: https://fr.javascript.info/modifying-document
Stocker dans une variable la première question (celle qui est à l‘indice 0 du tableau d‘objets questions).
Injecter le texte de cette question dans l‘élément du DOM qui lui correspond.
Enfin, injecter le texte de chaque option à l‘emplacement que vous avez prévu pour elles, à l‘aide d‘un forEach, car vous avez plusieurs options à afficher. Vous devez itérer sur chacune. Si vous ne maitrisez pas encore la boucle forEach, vous pour utiliser la structure for (const button of allButtons)que vous avez déjà utilisée dans la fiche de la branche Document Object Model (DOM).
Dans cet exemple, un nouveau bouton est créé pour chaque option et est ajouté à l‘élément qui a l‘id “options-container”:

 
import { quiz_fatoumata_kebe } from './questions.js'; // Import des questions

// Récupérer les emplacements pour injecter la question et les options
const __________ = document.getElementById('__________');
const __________ = document.getElementById('__________');

// Récupérer la première question
const firstQuestion = quiz_fatoumata_kebe.questions[0];

// Injecter le texte de la question dans l'emplacement dédié
__________.innerText = __________;

// Pour chaque option, créer un bouton et l'ajouter au conteneur
firstQuestion.options.forEach(option => {
  const option_btn = document.createElement('button');
  option_btn.innerText = option;
  __________.classList.add('__________');
  __________.appendChild(__________);
});


Nettoyer votre HTML pour ne garder que le squelette et appeler votre fichier game.js dans une balise script.
<body>

  <div id="quiz-container">
   
    <div class="question" id="question-text">
      <!-- La question sera injectée ici par JavaScript -->
    </div>

    
    <div class="options" id="options-container">
      <!-- Les options seront injectées ici par JavaScript -->
    </div>

   
    <div class="button-container">
      <button id="next-button">Suivant</button>
    </div>
  </div>
  
  <!-- Importe ici ton fichier JavaScript -->
  <script type="module" src="game.js"></script>
  
<body>
Ici bien noter que :

En ajoutant type="module" à la balise script, vous indiquez que le fichier JavaScript peut utiliser les mots-clés import et export.
Sans cet attribut, le navigateur ne comprendra pas les import et export du fichier JavaScript. C'est donc essentiel pour que le code puisse importer des fonctions ou des constantes depuis d'autres fichiers. Si vous n'utilisez pas type="module", vous ne pourrez pas faire ceci dans game.js: import { questions_fatoumata_kebe } from './questions.js';
Pour plus d‘infos sur les modules: https://fr.javascript.info/modules-intro

Étape 5 : Rendre le bouton “suivant” dynamique
On veut maintenant pouvoir passer d‘une question à l‘autre.

Déclarer une variable pour suivre la question actuelle (currentQuestionIndex). Au début, elle est égale à zéro.
Ajouter une variable qui récupère la balise HTML du bouton Suivant.
Créer une fonction loadQuestion() qui affiche une question en fonction de l‘index.
Ajouter un écouteur d‘événement sur le bouton Suivant, qui va incrémenter l‘index à chaque clic jusqu‘à la fin du tableau de questions. Ressource: https://fr.javascript.info/introduction-browser-events
Quand toutes les questions ont été posées masquer le bouton suivant.
Par exemple :

import { quiz_fatoumata_kebe } from './questions.js'; // Import des questions

// Variables pour suivre l'état du quiz
let currentQuestionIndex = 0; // Commence à la première question

// Sélection des éléments HTML
const __________ = document.getElementById('__________');
const __________ = document.getElementById('__________');
const __________ = document.getElementById('__________');

// Fonction pour afficher une question basée sur l'index actuel
function loadQuestion() {
  // Vider le conteneur des options
  __________.innerHTML = '';

  // Récupérer la question actuelle
  const currentQuestion = quiz_fatoumata_kebe.questions[currentQuestionIndex];

  // Injecter la question dans le HTML
  __________.innerText = __________;

  // Injecter les options dans le HTML 
  currentQuestion.options.forEach(option => {
    const option_btn = document.createElement('button');
    option_btn.innerText = option;
    __________.classList.add('__________');
    __________.appendChild(__________);
  });
}

// Ajouter un écouteur d'événements pour le bouton "Suivant"
__________.addEventListener('click', () => {
  // Incrémenter l'index de la question
  __________++;

  // Vérifier s'il reste des questions
  if (__________ < __________.questions.length) {
    // Afficher la question suivante
    __________();
  } else {
    // Si plus de questions, indiquer la fin du quiz
    __________.innerText = '__________';
    __________.innerHTML = ''; // Effacer les options
    __________.style.display = '__________'; // Cacher le bouton Suivant
  }
});

// Charger la première question au chargement de la page
loadQuestion();

Étape 6 : Ajouter un bouton “rejouer” à la fin du quiz
Ajouter ce bouton dans votre HTML et lui donner par défaut le style "display: none;" (pour qu‘il n‘apparaisse pas tout de suite)

<div class="button-container">
<button id="next-button">Suivant</button>
<button id="replay-button" style="display: none;">Rejouer</button> 
</div>

Lui donner un style (qui peut être le même que le bouton Suivant, regarder comment on peut donner le même style à deux éléments en CSS sans leur donner le même nom) et stocker ce nouvel élément du DOM dans une variable du fichier game.js

// Sélection des éléments HTML
//TODO Ajouter le bouton rejouer à votre liste d‘élements
Dans l‘écouteur d‘événement du bouton Suivant, changer le style du bouton Rejouer à display = 'inline-block' quand on arrive à la fin du quiz.

if (__________ < __________.questions.length) {
    // Afficher la question suivante
    __________();
  } else {
    // Si plus de questions, indiquer la fin du quiz
    __________.innerText = '__________';
    __________.innerHTML = ''; // Effacer les options
    __________.style.display = '__________'; //Cacher le bouton Next
    __________.style.display = '__________'; // Afficher le bouton Suivant
  }
Ajouter enfin une fonction pour réinitialiser le quiz quand on clique sur le bouton Rejouer.

// Fonction pour réinitialiser le quiz
replayButton.addEventListener('click', () => {
  // TODO Réinitialiser l'index 
  
  // TODO Cacher le bouton Rejouer et afficher le bouton Suivant
  
  // TODO Recharger la première question
  
});
Étape 7 : Valider les réponses
Le jeu est en place. Votre prochain objectif est de comparer la réponse choisie par le·la joueur·se à la bonne réponse. Vous pouvez par exemple écrire une fonction checkAnswer() qui va être responsable de cette comparaison. Pour sa logique, vous avez plusieurs options :

Comparer le texte de l‘option choisie au texte de la réponse (attention à la gestion des espaces qui peuvent fausser cette comparaison) et afficher un contour vert à la réponse si elle est juste, rouge si elle est fausse. Ou bien un message qui annonce ce résultat.
Modifier la constante qui contient les questions pour que la réponse correcte soit un indice (un nombre) et non une phrase, et comparer cet indice à celui de la question cliquée.
Dans tous les cas, vous devez trouver un moyen de rendre le bouton suivant non cliquable tant que le·la joueur·se n‘a pas choisi d‘option et quand iel en a choisi une, de rendre impossible le clic sur une autre option.
💡Pour avancer, aidez vous des Méthodes de débogage

Étape 8 : Ajouter un suivi de score
Si ce n‘est pas déjà fait à l‘étape précédente, créer une variable score, qui commence à 0 et sera incrémentée (ou pas) à chaque question en fonction de la réponse de le·la joueur·se. Afficher le score à la fin du quiz ou après chaque réponse. Une fois le quiz terminé, afficher un message différent à le·la joueur·se selon son score.

💡 Vous pouvez ajouter des confettis 🎊🎊 si votre joueur·se a bon à 100% des réponses en intégrant une bibliothèque comme https://www.npmjs.com/package/canvas-confetti