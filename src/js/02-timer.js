import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';


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
    Notiflix.Notify.info("Please choose a date in the future")
  } else {
    start.disabled = false;
    options.valueDates = selectedDates;
  }
  }
};

flatpickr(dataInput, options);


start.addEventListener('click', onClick);



function onClick() {
  const timerId = setInterval(onTimer, 1000);
  start.disabled = true;

  function onTimer(){
    if (Date.parse(options.valueDates) - Date.parse(new Date()) >= 0) {
      const currentTime = new Date();
    const ms = Date.parse(options.valueDates) - Date.parse(currentTime);
    const {days, hours, minutes, seconds} = convertMs(ms);
    
    day.textContent = day.textContent.length = 1 ? addLeadingZero(days) : `${days}`;
    hour.textContent = hour.textContent.length = 1 ? addLeadingZero(hours) : `${hours}`;
    minute.textContent = minute.textContent.length = 1 ? addLeadingZero(minutes) : `${minutes}`;
    second.textContent = second.textContent.length = 1 ? addLeadingZero(seconds) : `${seconds}`;
    } else {
      clearInterval(timerId)
    }
    
  }
};

 function addLeadingZero(value) {
    return String(value).padStart(2, '0');
  }


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
  
  



 








 
























