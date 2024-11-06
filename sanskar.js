let count1 = 0;
const counterElement1 = document.getElementById('counter1');
const intervalId1 = setInterval(() => {
  count1++;
  counterElement1.innerHTML = count1;
  
  if (count1 >= 1) {
    clearInterval(intervalId1);
  }
}, 200);

let count2 = 0;
const counterElement2 = document.getElementById('counter2');
const intervalId2 = setInterval(() => {
  count2++;
  counterElement2.innerHTML = count2;
  
  if (count2 >= 10) {
    clearInterval(intervalId2);
  }
}, 200);

let count3 = 0;
const counterElement3 = document.getElementById('counter3');
const intervalId3 = setInterval(() => {
  count3++;
  counterElement3.innerHTML = count3;
  
  if (count3 >= 21) {
    clearInterval(intervalId3);
  }
}, 100);

const typewriterText = document.querySelector('.typewriter');
const text = 'Sanskar Gokhroo.';

let i = 0;
const typingSpeed = 70; // adjust typing speed

function type() {
  if (i < text.length) {
    typewriterText.innerHTML += text[i];
    i++;
    setTimeout(type, typingSpeed);
  }
}
type();


const workText = document.querySelector('.work');
const words1 = ['Full Stack Developer', 'Web Developer', 'Java Developer', 'Html, Css, Js', 'SQL, Database', 'Web3-Crypto,NFTs,Metaverse']; // Apne words1 replace kar de
const typespeed1 = 70;
const backspeed1 = 60;
let a = 0;
let wordindex1 = 0;

function type12() {
  if (a < words1[wordindex1].length) {
    workText.innerHTML += words1[wordindex1][a];
    a++;
    setTimeout(type12, typespeed1);
  } else {
    setTimeout(()=>{
      setTimeout(backup,800);
    }, typingSpeed);
  }
}

function backup() {
  if (workText.innerHTML.length > 0) {
    workText.innerHTML = workText.innerHTML.slice(0, -1);
    setTimeout(backup, backspeed1);
  } else {
    wordindex1 = (wordindex1 + 1) % words1.length;
    workText.innerHTML = '';
    a = 0;
    setTimeout(type12, typespeed1);
  }
}

type12();