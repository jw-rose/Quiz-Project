import { quiz } from './questions.js';


// Récupérer les emplacements pour injecter la question et les options
let currentQuestionIndex = 0; // Commence à la première question
let score = 0

//const quizContainer = document.getElementById('');//
//const question = document.getElementById('');//
const questionText = document.getElementById("questionText");
//const options = document.getElementById('');
const optionsContainer = document.getElementById("optionsContainer");
//const buttonContainer = document.getElementById(''); 
const scoreCheck  = document.getElementById('score-count'); 
const nextButton = document.getElementById('nextButton'); 
const replayBtn = document.getElementById('replay-button');
const rightAnswer = quiz.q[currentQuestionIndex].correct;
/* pour afficher et faire disparaitre un text: */ 
const toggleTitle = document.getElementById('toggleTitle'); 
// Récupère l'élément à afficher ou cacher (le texte caché)
const hiddenText = document.getElementById('hiddenText'); 

// Ajoute un écouteur d'événement sur le titre
toggleTitle.addEventListener('click', function() { 
    // Vérifie si le texte est caché ou non défini
    if (hiddenText.style.display === 'none' || hiddenText.style.display === '') { 
        // Si caché, on l'affiche
        hiddenText.style.display = 'block'; 
    } else { 
        // Sinon, on le cache
        hiddenText.style.display = 'none'; 
    }
});

const toggleTitle2 = document.getElementById('toggleTitleBis'); 
// Récupère l'élément à afficher ou cacher (le texte caché)
const hiddenTextBis = document.getElementById('hiddenTextBis'); 

// Ajoute un écouteur d'événement sur le titre
toggleTitle2.addEventListener('click', function() { 
    // Vérifie si le texte est caché ou non défini
    if (hiddenTextBis.style.display === 'none' || hiddenTextBis.style.display === '') { 
        // Si caché, on l'affiche
        hiddenTextBis.style.display = 'block'; 
    } else { 
        // Sinon, on le cache
        hiddenTextBis.style.display = 'none'; 
    }
});

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
    optionsContainer.appendChild(option_btn)

  });
    checkAnswer()
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

function checkAnswer()
{
  document.querySelectorAll('.Answer').forEach(bouton => 
  {
    bouton.addEventListener('click', () =>
    {
      if (bouton.innerText === rightAnswer)
      {
        bouton.style.border = "2px solid green";
        
        score ++
        //console.log('vert')      
      }
      else
      {
        bouton.style.border = "2px solid red";
        //console.log()
        //console.log('rouge')
      }
      document.querySelectorAll('.Answer').forEach(bouton => {
      bouton.disabled = true;
      })
    });
  });
  scoreCheck.textContent = `score final : ${score}`;
}


/* let response;
let score = 0;

// Add your code here

if (score <= 0 || score >= 8) {
  response ="this is not possible"
}

if (score > 0 && score < 19) {
  response = "That was a terrible score — total fail!"
}

if (score > 20 && score < 39) {
  response = "You know some things, but it's a pretty bad score. Needs improvement."
}
if (score > 40 && score < 69) {
  response = "You did a passable job, not bad!"
}
    
if (score > 70 && score  < 89) {
  response = "Thats a great score, you really know your stuff."
}

if (score > 90 && score < 100) {
  response = "What an amazing score! Did you cheat? Are you for real?"
}

 */

  
  
  
  
  
  
/*  if (option === "correct")
  nextButton.style.display = 'inline-block';
  replayBtn.style.display = 'none';
  btn.classList.add("correct")
} else { 
  
  (btn.classList.add("false"));
  nextButton.style.display.background-color = 'inline-block';
  replayBtn.style.display = 'none';

}   */


  

// Charger la première question au chargement de la page
loadQuestion();
