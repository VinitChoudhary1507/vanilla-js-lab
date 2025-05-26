import {WORDLE_LIST,MAX_ATTEMPTS} from './constants.js'

let currentWord='';
let currentRow = 0;
let currentCol = 0;

export function startGame(){
    currentWord = WORDLE_LIST[Math.floor(Math.random() * WORDLE_LIST.length)].toUpperCase();
    currentRow = 0;
    currentCol = 0;

    return currentWord;
}
export function checkGuess(guess) {
  
    const result = [];
    const availableLetters = {};
    // hype  split
    console.log("currentWord",currentWord)
    currentWord.split('').forEach(letter => {

        availableLetters[letter] = (availableLetters[letter] || 0) + 1;
    });
  console.log("availableLetters",availableLetters)
    // First pass: correct letters
    guess.forEach((letter, index) => {
        if (letter === currentWord[index]) {
            result[index] = 'green';
            availableLetters[letter]--;
        }
    });
    // Second pass: present letters
    guess.forEach((letter, index) => {
        if (!result[index]) {
            if (availableLetters[letter] > 0) {
                result[index] = 'gold';
                availableLetters[letter]--;
            } else {
                result[index] = 'grey';
            }
        }
    });
    currentRow++
    console.log("currentRow game logic",currentRow)
    return{
        currentWord,
        result,
        isCorrect: guess.join('') === currentWord,
        hasMoreAttempts: currentRow < MAX_ATTEMPTS 
    };
}