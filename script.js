const cursor=document.querySelector('.cursor');
const cursor2=document.querySelector('.cursor2');

window.addEventListener('mousemove',(e)=>{

cursor.style.left=e.clientX+'px';
cursor.style.top=e.clientY+'px';

cursor2.style.left=e.clientX+'px';
cursor2.style.top=e.clientY+'px';

});

function scrollToMemories(){

document.getElementById('memories').scrollIntoView({
behavior:'smooth'
});

}

const escapeBtn=document.getElementById('escape-btn');

escapeBtn.addEventListener('mouseover',()=>{

const x=Math.random()*80;
const y=Math.random()*220;

escapeBtn.style.left=x+'%';
escapeBtn.style.top=y+'px';

});

const cards=document.querySelectorAll('.memory-card');

cards.forEach(card=>{

card.addEventListener('mousemove',(e)=>{

const rect=card.getBoundingClientRect();

const x=e.clientX-rect.left;
const y=e.clientY-rect.top;

const rotateY=((x/rect.width)-0.5)*20;
const rotateX=((y/rect.height)-0.5)*-20;

card.style.transform=`rotateY(${rotateY}deg) rotateX(${rotateX}deg)`;

});

card.addEventListener('mouseleave',()=>{
card.style.transform='rotateY(0deg) rotateX(0deg)';
});

});
