const Calculator = require('./test.js').Calculator;

// test.test.js
jest.mock('prompt-sync');

describe('Calculator Main Function', () => {
    let promptMock;
    let consoleLogSpy;

    beforeEach(() => {
        promptMock = require('prompt-sync')();
        consoleLogSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    test('performs addition correctly', () => {
        promptMock.mockImplementationOnce(() => '1') // Choose addition
                  .mockImplementationOnce(() => '5') // First number
                  .mockImplementationOnce(() => '3') // Second number
                  .mockImplementationOnce(() => 'q'); // Quit

        require('./test.js'); // Run the main function

        expect(consoleLogSpy).toHaveBeenCalledWith('Result: 5 + 3 = 8');
    });

    test('performs subtraction correctly', () => {
        promptMock.mockImplementationOnce(() => '2') // Choose subtraction
                  .mockImplementationOnce(() => '10') // First number
                  .mockImplementationOnce(() => '4') // Second number
                  .mockImplementationOnce(() => 'q'); // Quit

        require('./test.js'); // Run the main function

        expect(consoleLogSpy).toHaveBeenCalledWith('Result: 10 - 4 = 6');
    });

    test('performs multiplication correctly', () => {
        promptMock.mockImplementationOnce(() => '3') // Choose multiplication
                  .mockImplementationOnce(() => '6') // First number
                  .mockImplementationOnce(() => '7') // Second number
                  .mockImplementationOnce(() => 'q'); // Quit

        require('./test.js'); // Run the main function

        expect(consoleLogSpy).toHaveBeenCalledWith('Result: 6 * 7 = 42');
    });

    test('performs division correctly', () => {
        promptMock.mockImplementationOnce(() => '4') // Choose division
                  .mockImplementationOnce(() => '8') // First number
                  .mockImplementationOnce(() => '2') // Second number
                  .mockImplementationOnce(() => 'q'); // Quit

        require('./test.js'); // Run the main function

        expect(consoleLogSpy).toHaveBeenCalledWith('Result: 8 / 2 = 4');
    });

    test('handles division by zero', () => {
        promptMock.mockImplementationOnce(() => '4') // Choose division
                  .mockImplementationOnce(() => '8') // First number
                  .mockImplementationOnce(() => '0') // Second number
                  .mockImplementationOnce(() => 'q'); // Quit

        require('./test.js'); // Run the main function

        expect(consoleLogSpy).toHaveBeenCalledWith('Error: Division by zero is not allowed.');
    });

    test('handles invalid operation input', () => {
        promptMock.mockImplementationOnce(() => '5') // Invalid choice
                  .mockImplementationOnce(() => 'q'); // Quit

        require('./test.js'); // Run the main function

        expect(consoleLogSpy).toHaveBeenCalledWith('Invalid choice. Please select a valid operation.');
    });

    test('quits the program gracefully', () => {
        promptMock.mockImplementationOnce(() => 'q'); // Quit

        require('./test.js'); // Run the main function

        expect(consoleLogSpy).toHaveBeenCalledWith('Exiting the calculator. Goodbye!');
    });
});