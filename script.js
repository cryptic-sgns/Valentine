const beginBtn = document.getElementById('beginBtn');
const story = document.getElementById('story');

beginBtn.addEventListener('click', () => {

  story.classList.remove('hidden');

  story.scrollIntoView({
    behavior: 'smooth'
  });

  typeText();

});

const text = `
I don't expect instant forgiveness.

I only wanted to acknowledge that my words were unfair.

You deserved patience and understanding from me.

Whatever happens ahead,
I truly hope life treats you gently and beautifully.
`;

const typed = document.getElementById('typed');

function typeText(){

  let i = 0;

  const interval = setInterval(() => {

    typed.innerHTML += text.charAt(i);

    i++;

    if(i >= text.length){
      clearInterval(interval);
    }

  }, 40);

}

const planeBtn = document.getElementById('planeBtn');

const plane = document.getElementById('plane');

const thankyou = document.getElementById('thankyou');

planeBtn.addEventListener('click', () => {

  plane.classList.remove('hidden');

  setTimeout(() => {
    thankyou.classList.remove('hidden');
  }, 2000);

});
