//creating Varaiable
var wInput = document.querySelector('#weight');
var hInput = document.querySelector('#height');
var btn = document.querySelector('#button');
var msg = document.querySelector('#error');
var fBack = document.querySelector('#result');


btn.addEventListener('click', ()=>{
  if(wInput.value === '' || hInput.value === ''){
      document.getElementById('error').innerHTML =
      'Input fields cannot be empty';
      setTimeout(()=>(document.getElementById('error').innerHTML = ''), 3000)
  }
  else{
 var finale = Math.round(Math.floor(wInput.value/(hInput.value * hInput.value)))  

    if(finale < 18.5){
        fBack.innerHTML =`Your BMI is ${finale} you are underweight `;   
    }
    else if(finale <= 24.9){
        fBack.innerHTML = 
        `Your BMI is ${finale} you have a normal weight`;   
    }
    else if(finale <= 29.9){
        fBack.innerHTML =
         `Your BMI is ${finale} you are overweight`;   
    }
    else{
        fBack.innerHTML = 
        `Your BMI is ${finale} you are obese`;
    }
   
  }
 
  wInput.value = '';
  hInput.value = '';
 
})






