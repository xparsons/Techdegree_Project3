/****************************
  Treehouse Project 3
  FSJS - Interactive Form 
****************************/
'use strict';
const nameInput = document.querySelector('#name');
const titleMenu = document.querySelector('#title');
const hiddenRole = document.querySelector('#other');
const designMenu = document.querySelector('#design');
const colorOptions = document.querySelector('#color');
const colorOptionsDiv = document.querySelector('#colors-js-puns');
const registerActivities = document.querySelector('.activities');


// Puts focus on Name Field by default
nameInput.focus();

// Hides 'Other' role input
hiddenRole.style.display = 'none';

// Hides color options by default
colorOptionsDiv.style.display = 'none';


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


registerActivities.addEventListener('change', () => {
    // Variables to manipulate
    let mainConf = document.getElementsByTagName('input')[name="all"];
    let jsFrameworks = document.getElementsByTagName('input')[name="js-frameworks"]; 
    let jsLibs = document.getElementsByTagName('input')[name="js-libs"];
    let expressWorkshop = document.getElementsByTagName('input')[name="express"];
    let nodejs = document.getElementsByTagName('input')[name="node"];
    let buildTools = document.getElementsByTagName('input')[name="build-tools"];
    let npm = document.getElementsByTagName('input')[name="npm"];
    // add cost of activities
    let cost = 0;
    let displayCostDiv = document.createElement('div');
    
    // Check for timing conflicts JS Frameworks & Express
        if (jsFrameworks.checked === true) {
            cost += 100;
            expressWorkshop.setAttribute('disabled', true);
            
        } else {
            expressWorkshop.removeAttribute('disabled');   
        }
        
        if (expressWorkshop.checked === true) {
            cost += 100;
            jsFrameworks.setAttribute('disabled', true);
            
        } else {
            jsFrameworks.removeAttribute('disabled', true);
        }
    
    // Check for timing conflicts with JS Lib & Node.js
        if (jsLibs.checked === true) {
            cost += 100;
            nodejs.setAttribute('disabled', true);
            
        } else {
            nodejs.removeAttribute('disabled');   
        }
        
        if (nodejs.checked === true) {
            cost += 100;
            jsLibs.setAttribute('disabled', true);
            
        } else {
            jsLibs.removeAttribute('disabled', true);
        }
    
    
        
        // Display cost of selected activities
        displayCostDiv.innerHTML = `Your total is ${cost}`;
        registerActivities.appendChild(displayCostDiv);
           

});
















// Payment Method
