const drumButtons = document.querySelectorAll('.drum-button');
const audioElements = document.querySelectorAll('audio');

function playSound(event) {
  const key = event.keyCode || event.target.getAttribute('data-key');
  const audio = document.querySelector(`audio[data-key="${key}"]`);

  if (!audio) return;

  audio.currentTime = 0;
  audio.play();

  const button = document.querySelector(`.drum-button[data-key="${key}"]`);
  button.classList.add('playing');
}

function removeTransition(event) {
  if (event.propertyName !== 'transform') return;
  this.classList.remove('playing');
}

drumButtons.forEach(button => {
  button.addEventListener('click', playSound);
  button.addEventListener('transitionend', removeTransition);
});

window.addEventListener('keydown', playSound);
