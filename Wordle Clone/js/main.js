import { startGame } from './gameLogic.js';
import { createBoard, handleKeyPress } from './domManager.js';

// Initialize game
const initialWord = startGame();
createBoard(initialWord);

// Event listeners
document.addEventListener('keydown', handleKeyPress);