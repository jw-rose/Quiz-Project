import { quiz } from './questions.js';


let currentQuestionIndex = 0; 
let score = 0
let rightAnswer = null

//const qui appel......
const questionText = document.getElementById("questionText");
const optionsContainer = document.getElementById("optionsContainer");
const scoreCheck  = document.getElementById('score-count'); 
const nextButton = document.getElementById('nextButton'); 
const replayBtn = document.getElementById('replay-button');
const toggleTitle = document.getElementById('toggleTitle'); 
const hiddenText = document.getElementById('hiddenText');
const toggleTitle2 = document.getElementById('toggleTitleBis'); 
const hiddenTextBis = document.getElementById('hiddenTextBis'); 

//Pour afficher/masquer texte= regle du jeux
toggleTitle.addEventListener('click', function() { 
    if (hiddenText.style.display === 'none' || hiddenText.style.display === '') { 
        hiddenText.style.display = 'block'; 
    } else { 
        hiddenText.style.display = 'none'; 
    }
});
//Pour afficher/masquer Archive= lien personnage...
toggleTitle2.addEventListener('click', function() { 

    if (hiddenTextBis.style.display === 'none' || hiddenTextBis.style.display === '') { 
        hiddenTextBis.style.display = 'block'; 
    } else {        
        hiddenTextBis.style.display = 'none'; 
    }
});


// Fonction pour afficher une question basée sur l'index actuel
function loadQuestion() {
  // Vider le conteneur des options
  optionsContainer.innerHTML = '';

  // Récupérer la question actuelle
  const currentQuestion = quiz.q[currentQuestionIndex];
  rightAnswer = quiz.q[currentQuestionIndex].correct;

  // Injecter la question dans le HTML
  questionText.innerText = currentQuestion.q;

  // Injecter les options dans le HTML 
  currentQuestion.option.forEach(option => 
  {
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
  console.log(currentQuestionIndex)

  // Vérifier s'il reste des questions
  if (currentQuestionIndex < quiz.q.length) {
    // Afficher la question suivante
    loadQuestion();
  } else {
    // Si plus de questions, indiquer la fin du quiz

    questionText.innerText = 'fin du quiz';
    optionsContainer.innerHTML = ''; // Effacer les options
    nextButton.style.display = 'none'; // Cacher le bouton Suivant
    replayBtn.style.display = 'inline-block'; // Afficher le bouton replay
    function getResult(score) 
    {
        if (score === 8) return "🥇 Super Mario Légendaire 🥇— Tu sautes plus haut que Luigi, tu conduis mieux que Toad et tu connais tous les raccourcis de Rainbow Road. Le Royaume Champignon t’appartient ! 👑";
        if (score === 7) return "🥈 Étoile Vivante 🥈— Rien ne t’arrête ! Même les carapaces bleues rebondissent sur toi. Peach t’envoie un mot doux 💌";
        if (score === 6) return "🥉 Héros du Royaume 🥉— Tu sauves Peach avant le café du matin. Bowser commence à te craindre… et il a raison. 🔥";
        if (score === 5) return "🏆 Plombier Confirmé 🏆— Tu répares les tuyaux, évites les pièges et conduis presque sans déraper. Pas mal, moustachu ! 👨🏻‍🔧";
        if (score === 4) return "🍄 Apprenti du Royaume 🍄— Tu reconnais Bowser, mais tu confonds encore les fleurs et les champignons. Allez, un petit boost et tu brilles ⭐";
        if (score === 3) return "🎈 Ami de Yoshi🎈— Tu aides souvent, mais tu tombes parfois dans les trous. Courage, tu progresses à grands pas ! 🦖";
        if (score === 2) return "💫 Traine-pixels💫— Tu confonds Goldorak et Mazinger, mais tu progresses.";
        if (score < 2) return "💩 Goomba Perdu 💩— Tu crois que Peach est la sœur de Luigi et que Bowser est un gentil dragon. Retour à l’écran titre ! 🕹️";
    };
    const texteConclusion = document.createElement('p');
    texteConclusion.innerText = getResult(score);
    texteConclusion.classList.add('conclusion');
    optionsContainer.appendChild(texteConclusion)
  } 
});


// Fonction pour réinitialiser le quiz
replayBtn.addEventListener('click', () => {
  // TODO Réinitialiser l'index 
  currentQuestionIndex = 0;
  score = 0; 
  // TODO Cacher le bouton Rejouer et afficher le bouton Suivant
  nextButton.style.display = 'inline-block';
  replayBtn.style.display = 'none';
  // TODO Recharger la première question
  loadQuestion()
});

function checkAnswer()
{ const correctSound = new Audio('sounds/Coin Mario - QuickSounds.com.mp3');
  const wrongSound = new Audio('sounds/Mario Death - QuickSounds.com.mp3');
  nextButton.disabled = true
  document.querySelectorAll('.Answer').forEach(bouton => 
  {
    bouton.addEventListener('click', () =>
    {
      if (bouton.innerText === rightAnswer)
      {
        bouton.style.border = "2px solid green";
        console.log(rightAnswer)
        score ++
        correctSound.play()
        //console.log('vert')
        //nextButton.disabled = false      
      }
      else
      {
        bouton.style.border = "2px solid red";
        console.log(rightAnswer)
        wrongSound.play()
        //console.log('rouge')
        //nextButton.disabled = false
      }
      document.querySelectorAll('.Answer').forEach(bouton => {
      bouton.disabled = true;
      nextButton.disabled = false
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
