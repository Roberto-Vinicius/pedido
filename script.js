const simButton = document.getElementById('sim');
const naoButton = document.getElementById('nao');
const container = document.querySelector('.container'); // Pegando a div centralizada

// Função para mover o botão "Não" aleatoriamente dentro da tela visível
function moverBotaoNao() {
  // Calcula os limites da tela
  const maxX = window.innerWidth - naoButton.offsetWidth;  // Limite de X (largura da tela menos a largura do botão)
  const maxY = window.innerHeight - naoButton.offsetHeight; // Limite de Y (altura da tela menos a altura do botão)

  // Gera novas coordenadas aleatórias dentro dos limites da tela
  let newX = Math.floor(Math.random() * maxX);
  let newY = Math.floor(Math.random() * maxY);

  // Garante que o botão fique dentro da área visível, considerando overflow: visible
  newX = Math.min(Math.max(newX, 0), maxX);
  newY = Math.min(Math.max(newY, 0), maxY);

  // Define a posição do botão "Não"
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
