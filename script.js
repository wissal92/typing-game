const word = document.getElementById('word');
const text = document.getElementById('text');
const scoreEl = document.getElementById('score');
const timeEl = document.getElementById('time');
const endgameEl = document.getElementById('end-game-container');
const settingsBtn = document.getElementById('settings-btn');
const settings = document.getElementById('settings');
const settingsForm = document.getElementById('settings-form');
const difficultySelect = document.getElementById('difficulty');

// List of words for game
const words = ['sigh','tense','airplane','ball','pies','juice','warlike','bad','north',
'dependent','steer', 'silver','highfalutin','superficial','quince','eight','feeble','admit','drag', 'loving'];

let randomWord;

let score = 0;

let time = 10;

function getRandomWord() {
    return words[Math.floor(Math.random() * words.length)];
}

function addWordToDOM() {
    randomWord = getRandomWord();
    word.innerHTML = randomWord;
}

addWordToDOM();

function updateScore(){
    score++;
    scoreEl.innerHTML = score;
}

text.addEventListener('input', e =>{
    const insertedText = e.target.value;

    if(insertedText === randomWord){
        addWordToDOM();
        updateScore();

        e.target.value = '';
    }
})