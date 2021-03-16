export const calculation = (symbol: string, num1: number | null, num2: number | null): number | undefined => {
  if (symbol === "+") return add(Number(num1), Number(num2));
  if (symbol === "-") return subtract(Number(num1), Number(num2));
  if (symbol === "*") return multiply(Number(num1), Number(num2));
  if (symbol === "/") return divide(Number(num1), Number(num2));
};

export const add = (num1: number, num2: number) => num1 + num2;
export const subtract = (num1: number, num2: number) => num1 - num2;
export const multiply = (num1: number, num2: number) => num1 * num2;
export const divide = (num1: number, num2: number) => num1 / num2;
