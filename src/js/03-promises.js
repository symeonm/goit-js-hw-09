import Notiflix from 'notiflix';

const form = document.querySelector('.form');
const delayFirst = document.querySelector('input[name="delay"]');
const step = document.querySelector('input[name="step"]');
const amount = document.querySelector('input[name="amount"]');


form.addEventListener('submit', onSubmit);

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (shouldResolve) {
        res({position, delay})
      } else {
        rej({position, delay})
      }
    }, delay)
  })
      
}

function onSubmit(evt) {
  evt.preventDefault();
  // console.log(amount.textContent)
  const counter = amount.value;
  let timerDelay = Number(delayFirst.value);
  for (let i = 1; i <= counter; i+=1){
    createPromise(i, timerDelay)
    .then(() => {
      Notiflix.Notify.success(`✅ Fulfilled promise ${i} in ${step.value}ms`);
    })
    .catch(() => {
      Notiflix.Notify.failure(`❌ Rejected promise ${i} in ${step.value}ms`);
    });
    
    timerDelay += Number(step.value);
  }

};




  