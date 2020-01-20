const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');

// give a random amount of time
function randomTime(min, max) {
    return Math.round(Math.random() * (max - min) + min); // offset
}

// pick a random hole
function randomHole(holes) {
    const idx = Math.floor(Math.random() * holes.length);
    const hole = holes[idx];
    let lastHole;
    if (hole === lastHole) {
      console.log('Ah nah thats the same one bud');
       randomHole(holes);
    }
    lastHole = hole;
    return hole;
  }