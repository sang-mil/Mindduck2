const duckStyles = `
.thinking-duck-container {
  position: fixed;
  left: 20px;
  top: 20px;
  width: 56px;
  height: 56px;
  z-index: 2147483647;
  pointer-events: none;
  transform: translate(0, 0);
  transition: transform 0.1s linear;
}
.thinking-duck {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 48px;
  user-select: none;
}
.thinking-duck-bubble {
  position: absolute;
  top: -10px;
  left: 70px;
  max-width: 180px;
  padding: 8px 10px;
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.95);
  color: #1a1a1a;
  font-size: 12px;
  line-height: 1.3;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
  opacity: 0;
  transform: translateY(6px);
  transition: opacity 180ms ease, transform 180ms ease;
  pointer-events: none;
}
.thinking-duck-bubble.visible {
  opacity: 1;
  transform: translateY(0);
}
`;

const styleSheet = document.createElement('style');
styleSheet.textContent = duckStyles;
document.head.appendChild(styleSheet);
