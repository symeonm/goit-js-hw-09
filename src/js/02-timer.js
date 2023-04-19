import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";


const dataInput = document.querySelector('#datetime-picker');
const start = document.querySelector('button[data-start]');

const day = document.querySelector('span[data-days]');
const hour = document.querySelector('span[data-hours]');
const minute = document.querySelector('span[data-minutes]');
const second = document.querySelector('span[data-seconds]');

start.disabled = true;



const options = {
  enableTime: true,
  enableSeconds: false,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
  if (Date.parse(selectedDates) < Date.parse(options.defaultDate)) {
    window.alert("Please choose a date in the future")
  } else {
    start.disabled = false;
    options.valueDates = selectedDates;
    // console.log(options.valueDates)
  }
  }
};

flatpickr(dataInput, options);

let timerId = null;
start.addEventListener('click', onClick);



function onClick() {
  const timerId = setInterval(onTimer, 1000);
  start.disabled = true;
  function onTimer(){
    if (Date.parse(options.valueDates) - Date.parse(new Date()) >= 0) {
      const currentTime = new Date();
    const ms = Date.parse(options.valueDates) - Date.parse(currentTime);
    const {days, hours, minutes, seconds} = convertMs(ms);
    
    day.textContent = `${days}`;
    hour.textContent = `${hours}`;
    minute.textContent = `${minutes}`;
    second.textContent = `${seconds}`;
    } else {
      clearInterval(timerId)
    }
    
  }

  

};


function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);


   
  return { days, hours, minutes, seconds };
  }


 








 
// console.dir(options.onClose())



















// console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
// console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
// console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}





