//overlay script

//decalre variables
const menubtn = document.getElementById('menu-btn');
const closebtn = document.getElementById('close-btn');
const overlay = document.getElementById('overlay');

menubtn.addEventListener('click', () => {
    overlay.classList.add('open');
});

closebtn.addEventListener('click', () =>{
    overlay.classList.remove('open');
});