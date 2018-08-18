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
const registerActivities = document.getElementsByClassName('.activites');


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
    
    // Check for timing conflicts based on checkboxes selected
        if (jsFrameworks.checked === true) {
            expressWorkshop.setAttribute('disabled', true);
        }
    
});


//if JS Frame checked disable Express Workshop
// if JS Lib checked disable node.js















// Payment Method
