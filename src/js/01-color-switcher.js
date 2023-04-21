const start = document.querySelector('button[data-start]');
const stopbtn = document.querySelector('button[data-stop]');
let colorInterval = null;
stopbtn.disabled = true

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}



start.addEventListener('click', onClickStart);

function onClickStart() {
    colorInterval = setInterval(() => {
        document.body.style.backgroundColor = getRandomHexColor()
        start.disabled = true;
        stopbtn.disabled = false;
    }, 1000)
};

stopbtn.addEventListener('click', onClickStop);

function onClickStop() {
    clearInterval(colorInterval);
    start.disabled = false;
    stopbtn.disabled = true;
}







