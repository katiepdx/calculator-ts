export const calculation = (symbol, num1, num2) => {
  if (symbol === "+") return add(Number(num1), Number(num2));
  if (symbol === "-") return subtract(Number(num1), Number(num2));
  if (symbol === "*") return multiply(Number(num1), Number(num2));
  if (symbol === "/") return divide(Number(num1), Number(num2));
};

export const add = (num1, num2) => num1 + num2;
export const subtract = (num1, num2) => num1 - num2;
export const multiply = (num1, num2) => num1 * num2;
export const divide = (num1, num2) => num1 / num2;
