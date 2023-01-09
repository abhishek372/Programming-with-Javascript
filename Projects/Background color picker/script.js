let color = document.querySelector('#color-input');

color.addEventListener('input', () => {
    document.body.style.backgroundColor = color.value;
});