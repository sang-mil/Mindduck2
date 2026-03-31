const duckMessages = [
  '생각 중...',
  '문장 하나 더?',
  '다른 각도는?',
  '무엇이 핵심이지?',
  '이게 연결될 곳은?',
  '조금 더 단순하게...',
  '다시 보면 뭐가 다를까?',
  '다음은 무엇일까?'
];

function createSpeechBubble() {
  const bubble = document.createElement('div');
  bubble.className = 'thinking-duck-bubble';
  return bubble;
}

function startDuckSpeech(container) {
  const bubble = createSpeechBubble();
  container.appendChild(bubble);

  function showMessage() {
    const message = duckMessages[Math.floor(Math.random() * duckMessages.length)];
    bubble.textContent = message;
    bubble.classList.add('visible');
    setTimeout(() => {
      bubble.classList.remove('visible');
    }, 2600);
  }

  showMessage();
  setInterval(showMessage, 7000 + Math.round(Math.random() * 4000));
}
