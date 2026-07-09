const image = document.getElementById('image');
const text = document.getElementById('text1');
const smalltext = document.getElementById('text2');

image.addEventListener('animationend', (event) => {
  if (event.animationName === 'fadeOut') {
    text.textContent = 'why?';
    smalltext.textContent = 'let her have fun.';
    smalltext.style.color = 'red';
  }
});

image.addEventListener('mouseleave', () => {
    text.textContent = 'Let her spin';
    smalltext.textContent = 'never stop her';
    smalltext.style.color = 'white';
});