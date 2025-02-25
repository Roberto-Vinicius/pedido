const simButton = document.getElementById('sim');
const naoButton = document.getElementById('nao');
const container = document.querySelector('.container'); // Pegando a div centralizada

// Função para mover o botão "Não" aleatoriamente dentro da tela
function moverBotaoNao() {
  const containerRect = container.getBoundingClientRect(); // Pega os limites da div centralizada
  const maxX = window.innerWidth - naoButton.offsetWidth;
  const maxY = window.innerHeight - naoButton.offsetHeight;

  let newX, newY;

  do {
    newX = Math.floor(Math.random() * maxX);
    newY = Math.floor(Math.random() * maxY);
  } while (
    newX > containerRect.left - 50 && newX < containerRect.right + 50 &&
    newY > containerRect.top - 50 && newY < containerRect.bottom + 50
  ); 

  naoButton.style.position = "absolute";
  naoButton.style.left = `${newX}px`;
  naoButton.style.top = `${newY}px`;
}

// Evento para botão "Sim" (redireciona para outra página)
simButton.addEventListener('click', () => {

  window.location.href = "aceitou.html"; // Redireciona para a página

});


// Evento para mover o botão "Não" ao passar o mouse perto
document.addEventListener('mousemove', (e) => {
  const rect = naoButton.getBoundingClientRect();
  const distance = Math.sqrt(
    Math.pow(e.clientX - (rect.left + rect.width / 2), 2) +
    Math.pow(e.clientY - (rect.top + rect.height / 2), 2)
  );

  if (distance < 100) {
    moverBotaoNao();
  }
});
