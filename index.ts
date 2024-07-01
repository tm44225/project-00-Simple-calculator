#!/usr/bin/env node

import inquirer from "inquirer";

const answer = await inquirer.prompt([
  { message: "Enter your first number", type: "number", name: "FirstNumber" },
  { message: "Enter your second number", type: "number", name: "secondNumber" },
  {
    message: "select one of operator to perfrom action",
    type: "list",
    name: "operator",
    choices: ["ADDITION", "SUBTRACTION", "MULTIPLICATION", "DIVISION"],
  },
]);

//conditional statement

if (answer.operator === "ADDITION") {
  console.log(answer.FirstNumber + answer.secondNumber);
} else if (answer.operator === "SUBTRACTION") {
  console.log(answer.FirstNumber - answer.secondNumber);
} else if (answer.operator === "MULTIPLICATION") {
  console.log(answer.FirstNumber * answer.secondNumber);
} else if (answer.operator === "DIVISION") {
  console.log(answer.FirstNumber / answer.secondNumber);
} else {
  ("please select correct operator");
}
