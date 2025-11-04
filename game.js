import { quiz } from './questions.js';


// Récupérer les emplacements pour injecter la question et les options

//const quizContainer = document.getElementById('');//
//const question = document.getElementById('');//
const questionText = document.getElementById("questionText");
//const options = document.getElementById('');
const optionsContainer = document.getElementById("optionsContainer");
//const buttonContainer = document.getElementById(''); 
const nextButton = document.getElementById('nextButton'); 
const replayBtn = document.getElementById('replay-button')

/* Récupérer la première question
const firstQuestion = quiz.q[0];

// Injecter le texte de la question dans l'emplacement dédié
questionText.innerText = firstQuestion.q;

// Pour chaque option, créer un bouton et l'ajouter au conteneur
firstQuestion.option.forEach(option => {
  const option_btn = document.createElement('button');
  option_btn.innerText = option;
  option_btn.classList.add('Answer');
  optionsContainer.appendChild(option_btn);
}); */

// Variables pour suivre l'état du quiz
let currentQuestionIndex = 0; // Commence à la première question

// Fonction pour afficher une question basée sur l'index actuel
function loadQuestion() {
  // Vider le conteneur des options
  optionsContainer.innerHTML = '';

  // Récupérer la question actuelle
  const currentQuestion = quiz.q[currentQuestionIndex];

  // Injecter la question dans le HTML
  questionText.innerText = currentQuestion.q;

  // Injecter les options dans le HTML 
  currentQuestion.option.forEach(option => {
    const option_btn = document.createElement('button');
    option_btn.innerText = option;
   option_btn.classList.add('Answer');
   optionsContainer.appendChild(option_btn);
  });
}


// Ajouter un écouteur d'événements pour le bouton "Suivant"
nextButton.addEventListener('click', () => {
  // Incrémenter l'index de la question
  currentQuestionIndex++;

  // Vérifier s'il reste des questions
  if (currentQuestionIndex < quiz.q.length) {
    // Afficher la question suivante
    loadQuestion();
  } else {
    // Si plus de questions, indiquer la fin du quiz

    questionText.innerText = 'fin du quiz';
    optionsContainer.innerHTML = ''; // Effacer les options
    nextButton.style.display = 'none'; // Cacher le bouton Suivant
     replayBtn.style.display = 'inline-block'; // Afficher le bouton Suivant
  }
});


// Fonction pour réinitialiser le quiz
replayBtn.addEventListener('click', () => {
  // TODO Réinitialiser l'index 
  currentQuestionIndex = 0; 
  // TODO Cacher le bouton Rejouer et afficher le bouton Suivant
  nextButton.style.display = 'inline-block';
  replayBtn.style.display = 'none';
  // TODO Recharger la première question
  loadQuestion()
  
});

function checkAnswer("false", "correct") {
  if (option === "correct")
  nextButton.style.display = 'inline-block';
  replayBtn.style.display = 'none';
  btn.classList.add("correct")
} else { 
  
  (btn.classList.add("false"));
  nextButton.style.display.background-color = 'inline-block';
  replayBtn.style.display = 'none';

}  


  

// Charger la première question au chargement de la page
loadQuestion();








