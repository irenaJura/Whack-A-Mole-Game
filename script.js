const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');
let lastHole;
let timeUp = false;

// give a random amount of time
function randomTime(min, max) {
    return Math.round(Math.random() * (max - min) + min); // offset
}

// pick a random hole
function randomHole(holes) {
    const idx = Math.floor(Math.random() * holes.length);
    const hole = holes[idx];
    if (hole === lastHole) {
      console.log('Ah nah thats the same one bud');
      return randomHole(holes);
    }
    lastHole = hole;
    return hole;
  }

  // pop up from holes
  function peep() {
      const time = randomTime(200, 1000);
      const hole = randomHole(holes);
      // console.log(time, hole);
      hole.classList.add('up');
      // remove the class after a random time
      setTimeout(() => {
          hole.classList.remove('up');
          if(!timeUp) peep();
      }, time);
  }

  function startGame() {
      scoreBoard.textContent = 0;
      timeUp = false;
      peep();
      setTimeout(() => timeUp = true, 10000);
  }