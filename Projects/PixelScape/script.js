const upLine = document.querySelector('#up-line');
const midLine = document.querySelector('#mid-line');
const bottomLine = document.querySelector('#bottom-line');

const menuBar = document.querySelector('.menu-bar');

menuBar.addEventListener('click', () => {
    upLine.style.transform = 'rotate(60deg)';
    midLine.style.display = 'none'; 
    bottomLine.style.transform = 'rotate(-60deg)';
});