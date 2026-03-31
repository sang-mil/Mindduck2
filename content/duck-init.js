function initializeThinkingDuck() {
  const container = document.createElement('div');
  container.className = 'thinking-duck-container';

  const duck = document.createElement('div');
  duck.className = 'thinking-duck';
  duck.textContent = '🦆';
  container.appendChild(duck);

  document.body.appendChild(container);
  startDuckMovement(container);
  startDuckSpeech(container);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeThinkingDuck);
} else {
  initializeThinkingDuck();
}
