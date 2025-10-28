const bouton = document.getElementById('btnMusique');
const musique = document.getElementById('musique');

bouton.addEventListener('click', () => {
  if (musique.paused) {
    musique.play();
    bouton.textContent = "⏸️ Pause musique";
  } else {
    musique.pause();
    bouton.textContent = "🎶 Jouer la musique";
  }
});
