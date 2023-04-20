const start = document.querySelector('button[data-start]');
const stop = document.querySelector('button[data-stop]');
// console.log(stop)
stop.disabled = true

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}



start.addEventListener('click', onClickStart);

function onClickStart() {
    color = setInterval(() => {
        document.body.style.backgroundColor = getRandomHexColor()
        start.disabled = true;
        stop.disabled = false;
    }, 1000)
};

stop.addEventListener('click', onClickStop);

function onClickStop() {
    clearInterval(color);
    start.disabled = false;
    stop.disabled = true;
}







