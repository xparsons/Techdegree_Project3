/****************************
  Treehouse Project 3
  FSJS - Interactive Form 
****************************/

// Variables 
const nameInput = document.querySelector('#name');
const titleMenu = document.querySelector('#title');
const hiddenRole = document.querySelector('#other');
const designMenu = document.querySelector('#design');
const colorOptions = document.querySelector('#color');
const colorOptionsDiv = document.querySelector('#colors-js-puns');
const registerActivities = document.querySelector('.activities');
const paymentMethod = document.querySelector('#payment');
const creditCardDiv = document.querySelector('#credit-card');
const payPalText = creditCardDiv.nextElementSibling;
const bitcoinText = payPalText.nextElementSibling;

// Checkbox variables 
let mainConf = document.getElementsByTagName('input')[name="all"];
let jsFrameworks = document.getElementsByTagName('input')[name="js-frameworks"]; 
let jsLibs = document.getElementsByTagName('input')[name="js-libs"];
let expressWorkshop = document.getElementsByTagName('input')[name="express"];
let nodejs = document.getElementsByTagName('input')[name="node"];
let buildTools = document.getElementsByTagName('input')[name="build-tools"];
let npm = document.getElementsByTagName('input')[name="npm"];
    


// Puts focus on Name Field by default
nameInput.focus();

// Hide 'Other' role input
hiddenRole.style.display = 'none';

// Hide color options 
colorOptionsDiv.style.display = 'none';

// Hide payment options
creditCardDiv.style.display = 'none';

// Hide Paypal & Bitcoin text
payPalText.style.display = 'none';
bitcoinText.style.display = 'none';



// On menu change show hiddenRole option
titleMenu.addEventListener('change', () => { 
  if (titleMenu.lastElementChild.selected) {
      hiddenRole.style.display = 'block';
  } else {
      hiddenRole.style.display = 'none';
  }     
});



// Show correct options based on theme choice
designMenu.addEventListener('change', () => {
    let themeOption = designMenu.options[designMenu.selectedIndex].value;
    
    if (themeOption === 'js puns') {
        
        colorOptionsDiv.style.display = 'block';
        colorOptions.selectedIndex = 0;
        
        colorOptions.options[0].style.display = 'block';
        colorOptions.options[1].style.display = 'block';
        colorOptions.options[2].style.display = 'block';
        
        colorOptions.options[3].style.display = 'none';
        colorOptions.options[4].style.display = 'none';
        colorOptions.options[5].style.display = 'none';
        
    } else if (themeOption === 'heart js') {
        
        colorOptionsDiv.style.display = 'block';
        colorOptions.selectedIndex = 3;
        
        colorOptions.options[0].style.display = 'none';
        colorOptions.options[1].style.display = 'none';
        colorOptions.options[2].style.display = 'none';
        
        colorOptions.options[3].style.display = 'block';
        colorOptions.options[4].style.display = 'block';
        colorOptions.options[5].style.display = 'block';
    }
});


// Checks for conflicts with registered activities
registerActivities.addEventListener('change', () => {
    
    // Check for timing conflicts JS Frameworks & Express
        if (jsFrameworks.checked === true) {
            expressWorkshop.setAttribute('disabled', true);
            
        } else {
            expressWorkshop.removeAttribute('disabled');   
        }
        
        if (expressWorkshop.checked === true) {
            jsFrameworks.setAttribute('disabled', true);
            
        } else {
            jsFrameworks.removeAttribute('disabled', true);
        }
    
    // Check for timing conflicts with JS Lib & Node.js
        if (jsLibs.checked === true) {
            nodejs.setAttribute('disabled', true);
            
        } else {
            nodejs.removeAttribute('disabled');   
        }
        
        if (nodejs.checked === true) {
            jsLibs.setAttribute('disabled', true);
            
        } else {
            jsLibs.removeAttribute('disabled', true);
        }
    
        
        // let cost = 0;
        // let displayCostDiv = document.createElement('div');
        // registerActivities.appendChild(displayCostDiv);

});




paymentMethod.addEventListener('change', () => {
    let paymentOption = paymentMethod.options[paymentMethod.selectedIndex].value;
    
    if (paymentOption === 'select_method') {
        creditCardDiv.style.display = 'none';
        payPalText.style.display = 'none';
        bitcoinText.style.display = 'none';
    }
    
    if (paymentOption === 'credit card') {
        creditCardDiv.style.display = 'block';
    }
    
    if (paymentOption === 'paypal') {
        creditCardDiv.style.display = 'none';
        bitcoinText.style.display = 'none';
        payPalText.style.display = 'block';     
    } 
    
    if (paymentOption === 'bitcoin') {
        bitcoinText.style.display = 'block';
        payPalText.style.display = 'none';
        creditCardDiv.style.display = 'none';
    }
    
});



