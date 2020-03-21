function add(num1,num2){//function defined
  return num1 + num2;
}

function multiply(num1, num2){//function defined
  return num1 * num2;
}

function divide(num1, num2){//function defined
  return num1 / num2
}

function subtract(num1, num2){//function defined

  return num1 - num2
}

function calculator(num1, num2, operator) {//function called  ex if operator = add calls function add so add  function adds num1 to num2
  return  operator(num1, num2);
}
console.log(calculator(734,22,divide));


