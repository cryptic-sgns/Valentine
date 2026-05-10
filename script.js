const enterBtn =
document.getElementById('enterBtn');

const pages =
document.querySelectorAll('.page');

enterBtn.addEventListener('click', () => {

  pages.forEach(page => {
    page.classList.remove('hidden');
  });

  document.getElementById('page2')
  .scrollIntoView({
    behavior:'smooth'
  });

  typeLetter();

});

/* CURSOR GLOW */

const glow =
document.querySelector('.cursor-glow');

document.addEventListener('mousemove',
(e)=>{

  glow.style.left =
  e.clientX + 'px';

  glow.style.top =
  e.clientY + 'px';

});

/* FLOATING CARDS */

const cards =
document.querySelectorAll('.floating-card');

cards.forEach(card=>{

  card.addEventListener('click',()=>{

    card.classList.add('fade');

  });

});

/* LETTER */

const text = `
I know a website cannot undo words.

But I still wanted to create something sincere.

I reacted emotionally when I should have responded with understanding.

You deserved calmness,
respect,
and patience from me.

I don't expect immediate forgiveness.

I simply wanted to acknowledge my mistake honestly.

And regardless of everything,
I genuinely hope life brings you happiness,
peace,
and beautiful moments ahead.
`;

const typedText =
document.getElementById('typedText');

function typeLetter(){

  let i = 0;

  const interval =
  setInterval(()=>{

    typedText.innerHTML +=
    text.charAt(i);

    i++;

    if(i >= text.length){

      clearInterval(interval);

    }

  },35);

}

/* PAPER PLANE */

const planeButton =
document.getElementById('planeButton');

const plane =
document.getElementById('plane');

planeButton.addEventListener('click',()=>{

  plane.classList.remove('hidden');

});

/* MUSIC */

const musicBtn =
document.getElementById('musicBtn');

const bgMusic =
document.getElementById('bgMusic');

let playing = false;

musicBtn.addEventListener('click',()=>{

  if(!playing){

    bgMusic.play();

    playing = true;

    musicBtn.innerHTML = '❚❚';

  }else{

    bgMusic.pause();

    playing = false;

    musicBtn.innerHTML = '♪';

  }

});
