import inquirer from "inquirer";
const exchangeRates = {
    USD: 1.0,
    PKR: 278.12,
    EUR: 0.92,
    GBP: 0.79,
    SAR: 3.75,
    JPY: 151.84,
    CHY: 7.23
};
let user_answer = await inquirer.prompt([
    {
        name: "from",
        message: "What currency are you converting from?",
        type: "list",
        choices: ["USD", "EUR", "PKR", "GBP", "SAR", "JPY", "CHY"]
    },
    {
        name: "to",
        message: "What currency are you converting to?",
        type: "list",
        choices: ["USD", "EUR", "PKR", "GBP", "SAR", "JPY", "CHY"]
    },
    {
        name: "amount",
        message: "Please enter the amount",
        type: "number",
    }
]);
let fromConverter = exchangeRates[user_answer.from];
let toConverter = exchangeRates[user_answer.to];
let amount = user_answer.amount;
let baseAmount = amount / fromConverter;
let convertedAmount = baseAmount * toConverter;
console.log(`${user_answer.amount}${user_answer.from} = ${convertedAmount.toFixed(2)}${user_answer.to}`);
