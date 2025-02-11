const keys = document.querySelectorAll('.key');

keys.forEach((key) => {
  key.addEventListener('click', () => playNote(key));
});

  function playNote(key) {
  const noteAudio = document.getElementById(key.dataset.note);
  noteAudio.currentTime = 0;
  noteAudio.play();
  key.classList.add('active');

    noteAudio.addEventListener('ended', () => {
    key.classList.remove('active');
  });
}

const WHITE_KEYS = ['a', 's', 'd', 'f', 'g', 'h', 'j'];
const BLACK_KEYS = ['w', 'e', 'r', 't', 'y'];

const whiteKeys = document.querySelectorAll('.key.white');
const blackKeys = document.querySelectorAll('.key.black');

document.addEventListener('keydown', (e) => {
  // If the key is being held down, don't play the note again
  if (e.repeat) {
    return;
  }
  
  // Get the key that triggered the event
  const key = e.key;
  const whiteKeyIndex = WHITE_KEYS.indexOf(key);
  const blackKeyIndex = BLACK_KEYS.indexOf(key);

  if (whiteKeyIndex > -1) {
    playNote(whiteKeys[whiteKeyIndex]);
  }

  if (blackKeyIndex > -1) {
    playNote(blackKeys[blackKeyIndex]);
  }
});
