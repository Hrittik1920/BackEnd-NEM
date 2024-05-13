import chalk from 'chalk';
import validator from 'validator';

console.log(chalk.red("Red") + " White " + chalk.blue("Blue ") + chalk.greenBright("Green"));

console.log(chalk.green.underline("Underline_Green\n"))

console.log(chalk.green.inverse("Success"))
console.log(chalk.red.inverse("red"))
console.log()


const result = validator.isEmail("hrittiksingh1920@gmail.c")
console.log(result ? chalk.green.inverse("Success") : chalk.red.inverse("Invalid Email"))

