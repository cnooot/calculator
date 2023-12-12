let display = document.getElementById("display");
 
function appendToDisplay(value){
    display.value += value
}

function clearDisplay() {
    display.value = '';
  }

function calculateResult() {
  try {
    const result = eval(display.value);
    display.value = result;
  } catch (error) {
    display.value = 'Err...';
  }
}