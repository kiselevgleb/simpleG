const divParent = document.createElement('div');

const pUser = document.createElement('p');
const pG = document.createElement('p');
pUser.innerText = 0;
pG.innerText = 0;
pUser.className = 'text';
pG.className = 'text';

function getRandomInt() {
  return Math.floor(Math.random() * 16);
}
let i;
let rand;
const classParent = 'hole-game';
const c = 'hole';
divParent.classList.add(classParent);
document.body.appendChild(divParent);
document.body.appendChild(pUser);
document.body.appendChild(pG);

for (let index = 0; index < 16; index++) {
  const divEl = document.createElement('div');
  divEl.classList.add(c);
  divEl.setAttribute('id', index);
  divParent.appendChild(divEl);
}

const but = document.querySelectorAll('.hole');
const interRem = setInterval(() => {
  for (let index = 0; index < but.length; index++) {
    const element = but[index];
    if (element.classList.contains('hole_has-mole')) {
      element.classList.remove('hole_has-mole');
      i = index;
    }
  }
}, 500);

const interRand = setInterval(() => {
  rand = getRandomInt();
  while (i === rand) {
    rand = getRandomInt();
  }
  but[rand].className = 'hole hole_has-mole';
}, 500);
divParent.addEventListener('click', (event) => {
  if (event.target.id === rand && pG.innerText !== 'game over') {
    pUser.innerText = Number(pUser.innerText) + 1;
  } else if (Number(pG.innerText) < 4) {
    pG.innerText = Number(pG.innerText) + 1;
  } else {
    pG.innerText = 'game over';
    clearInterval(interRand);
    clearInterval(interRem);
  }
});
