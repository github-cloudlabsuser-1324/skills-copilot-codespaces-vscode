// Calculator class to handle basic arithmetic operations
class Calculator {
    // Method to add two numbers
    add(a, b) {
        return a + b;
    }

    // Method to subtract two numbers
    subtract(a, b) {
        return a - b;
    }

    // Method to multiply two numbers
    multiply(a, b) {
        return a * b;
    }

    // Method to divide two numbers
    divide(a, b) {
        if (b === 0) {
            throw new Error("Division by zero is not allowed.");
        }
        return a / b;
    }
}

// Main function to interact with the calculator
function main() {
    const calculator = new Calculator();
    const prompt = require('prompt-sync')();

    console.log("Welcome to the Calculator!");
    console.log("Available operations:");
    console.log("1. Addition");
    console.log("2. Subtraction");
    console.log("3. Multiplication");
    console.log("4. Division");

    while (true) {
        console.log("\nEnter your choice (1-4) or 'q' to quit:");
        const choice = prompt("> ");

        if (choice.toLowerCase() === 'q') {
            console.log("Exiting the calculator. Goodbye!");
            break;
        }

        const num1 = parseFloat(prompt("Enter the first number: "));
        const num2 = parseFloat(prompt("Enter the second number: "));

        try {
            let result;
            switch (choice) {
                case '1':
                    result = calculator.add(num1, num2);
                    console.log(`Result: ${num1} + ${num2} = ${result}`);
                    break;
                case '2':
                    result = calculator.subtract(num1, num2);
                    console.log(`Result: ${num1} - ${num2} = ${result}`);
                    break;
                case '3':
                    result = calculator.multiply(num1, num2);
                    console.log(`Result: ${num1} * ${num2} = ${result}`);
                    break;
                case '4':
                    result = calculator.divide(num1, num2);
                    console.log(`Result: ${num1} / ${num2} = ${result}`);
                    break;
                default:
                    console.log("Invalid choice. Please select a valid operation.");
            }
        } catch (error) {
            console.log(`Error: ${error.message}`);
        }
    }
}

// Run the main function
main();