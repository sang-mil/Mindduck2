function randomPosition(bounds) {
  return {
    x: Math.round(Math.random() * bounds.width),
    y: Math.round(Math.random() * bounds.height)
  };
}

function startDuckMovement(duckElement) {
  let bounds = {
    width: window.innerWidth - 60,
    height: window.innerHeight - 60
  };
  let position = { x: 20, y: 20 };
  let target = randomPosition(bounds);

  function updateTarget() {
    target = randomPosition(bounds);
  }

  function step() {
    const dx = target.x - position.x;
    const dy = target.y - position.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    if (distance < 4) {
      updateTarget();
    } else {
      position.x += dx * 0.08;
      position.y += dy * 0.08;
      duckElement.style.transform = `translate(${position.x}px, ${position.y}px)`;
    }
    requestAnimationFrame(step);
  }

  window.addEventListener('resize', () => {
    bounds.width = window.innerWidth - 60;
    bounds.height = window.innerHeight - 60;
  });

  step();
}
