  // Basic operation functions

function getSum(a,b) {
    return a + b;
}

function getSubstract(a,b) {
    return a - b;
}

function getMultiply(a,b) {
    return a * b;
}

function getDivide(a,b) {
    return a / b;
}

// Make the calculator clicking work

  const display = document.querySelector('.display');
  let displayValue = '';
  let firstNumber = null;
    let secondNumber = null;
    let operator = null;
  
  function updateDisplay(value) {
    displayValue += value;
    display.textContent = displayValue;
  }
  
  function clearDisplay() {
    displayValue = '';
    display.textContent = '0';
  }
  
  function handleNumberClick(event) {
    const number = event.target.textContent;
    updateDisplay(number);
    secondNumber = null; // Reset secondNumber to null
    console.log(`firstNumber: ${firstNumber}, secondNumber: ${secondNumber}, operator: ${operator}`);
  }
  
  function handleOperatorClick(event) {
    console.log('Operator button clicked');
    const selectedOperator = event.target.textContent;
    if (firstNumber === null) {
      firstNumber = parseFloat(displayValue);
      operator = selectedOperator;
      displayValue = '';
    } else if (secondNumber === null) {
      secondNumber = parseFloat(displayValue);
      const result = operate(operator, firstNumber, secondNumber);
      displayValue = result.toString();
      display.textContent = displayValue;
      firstNumber = result;
      secondNumber = parseFloat(displayValue); // Set secondNumber to the value of the display
      operator = selectedOperator;
    }
  }

  function handleEqualsClick() {
    console.log('Equals button clicked');
    if (firstNumber !== null && secondNumber !== null) {
      const result = operate(operator, firstNumber, parseFloat(displayValue));
      displayValue = result.toString();
      display.textContent = displayValue;
      firstNumber = result;
      secondNumber = parseFloat(displayValue); // Set secondNumber to the value of the display
      operator = null;
    }
    console.log(`firstNumber: ${firstNumber}, secondNumber: ${secondNumber}, operator: ${operator}`);
  }

  function handleClearClick() {
    firstNumber = null;
    secondNumber = null;
    operator = null;
    clearDisplay();
  }

// Set variables for button clicks and event listeners with functions

  const numberButtons = document.querySelectorAll('.number');
  numberButtons.forEach(button => {
    button.addEventListener('click', handleNumberClick);
  });
  
  const operatorButtons = document.querySelectorAll('.operator');
  operatorButtons.forEach(button => {
    button.addEventListener('click', handleOperatorClick);
  });  

  const equalsButton = document.querySelector('.equals');
  equalsButton.addEventListener('click', handleEqualsClick);
  
  const clearButton = document.querySelector('.clear');
  clearButton.addEventListener('click', handleClearClick);


// Take the inputs and operate

function operate(a, operator, b) {
    console.log('operate called');
    console.log(`operate called with a=${a}, operator=${operator}, b=${b}`);
    switch (operator) {
      case '+':
        return getSum(a, b);
      case '-':
        return getSubstract(a, b);
      case '*':
        return getMultiply(a, b);
      case '/':
        return getDivide(a, b);
      default:
        throw new Error('Invalid operator');
    }
  }
