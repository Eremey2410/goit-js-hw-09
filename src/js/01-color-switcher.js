const refs = {
  start: document.querySelector('button[data-start]'),
  stop: document.querySelector('button[data-stop]'),
};

let timerId = null;

refs.start.addEventListener('click', () => {
  refs.start.disabled = true;
  timerId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
});

refs.stop.addEventListener('click', () => {
  refs.start.disabled = false;
  clearInterval(timerId);
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
