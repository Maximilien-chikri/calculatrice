// selectionner les boutons
let btn = document.querySelectorAll('button');
let ecran = document.querySelector('#écran')
// ajouter click au boutons
btn.forEach(function(btn){
    btn.addEventListener('click', calculate);
})

// calcul fonction
function calculate(event) {
    // current clicked buttons value
    let clickedButtonValue = event.target.value;
  
    if (clickedButtonValue === '=') {
      // check if the display is not empty then only do the calculation
      if (display.value !== '') {
        // calculate and show the answer to display
        display.value = eval(display.value);
      }
    } else if (clickedButtonValue === 'C') {
      // clear everything on display
      display.value = '';
    } else {
      // otherwise concatenate it to the display
      display.value += clickedButtonValue;
    }
  }


