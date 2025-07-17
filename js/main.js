import { setupBoard, drawBall } from './draw.js';
import { loadNicknames } from './nickname.js';
import { setupSoundToggle } from './sound.js';

// Load nickname data
loadNicknames();

// Setup bingo board
setupBoard();

// Handle Draw Ball button
document.getElementById("draw-button").addEventListener("click", drawBall);

// Handle sound toggle
setupSoundToggle();
