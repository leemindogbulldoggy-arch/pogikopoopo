const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const response = document.getElementById('response');

yesBtn.addEventListener('click', () => {
  response.textContent = 'I’m smiling already... and I’m really happy you said yes. 💖';
  response.style.color = '#d93378';
});

noBtn.addEventListener('click', () => {
  const maxX = 170;
  const maxY = 50;
  const randomX = Math.random() * maxX - maxX / 2;
  const randomY = Math.random() * maxY - maxY / 2;

  noBtn.style.position = 'relative';
  noBtn.style.transform = `translate(${randomX}px, ${randomY}px)`;
  response.textContent = 'That was a very dramatic no... but I still think you’re amazing. 😄';
});

noBtn.addEventListener('mouseenter', () => {
  const containerWidth = noBtn.parentElement.clientWidth;
  const buttonWidth = noBtn.offsetWidth;
  const buttonHeight = noBtn.offsetHeight;
  const x = Math.random() * (containerWidth - buttonWidth - 20);
  const y = Math.random() * 70;

  noBtn.style.position = 'absolute';
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
  noBtn.style.transform = 'none';
});
