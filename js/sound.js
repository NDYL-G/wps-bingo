let soundEnabled = true;

export function setupSoundToggle() {
  const toggle = document.getElementById("sound-toggle");
  if (toggle) {
    soundEnabled = toggle.checked;
    toggle.addEventListener("change", (e) => {
      soundEnabled = e.target.checked;
    });
  }
}

export function playSoundForNumber(number) {
  if (!soundEnabled) return;

  if (number === 2) {
    new Audio("sounds/quack.mp3").play();
  } else if (number === 22) {
    const quack1 = new Audio("sounds/quack.mp3");
    const quack2 = new Audio("sounds/quack.mp3");
    quack1.play();
    setTimeout(() => quack2.play(), 300);
  } else if (number === 11) {
    new Audio("sounds/whistle.mp3").play();
  } else {
    new Audio("sounds/marble.mp3").play();
  }
}
