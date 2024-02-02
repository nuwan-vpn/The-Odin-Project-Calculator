# The-Odin-Project-Calculator
# Calculator Project

## Use Cases

1. **Basic Math Functions:**
   - Addition
   - Subtraction
   - Multiplication
   - Division

2. **Calculator Operation:**
   - A calculator operation consists of a number, an operator, and another number.

3. **Variables:**
   - Three variables for each part of a calculator operation - first number, operator, and second number.

4. **Functionality:**
   - Create functions for each basic math operation.
   - Create an `operate` function that takes an operator and two numbers and calls the corresponding function.

5. **HTML Calculator:**
   - Buttons for digits, basic functions, and an "Equals" key.
   - Display for the calculator.

6. **Clear Button:**
   - Implement a "clear" button to reset the calculator.

7. **Display Function:**
   - Functions to populate the display when number buttons are clicked.

8. **Calculator Logic:**
   - Store first and second numbers.
   - Utilize the selected operator.
   - Use the `operate` function to perform calculations when the "Equals" key is pressed.

9. **Challenges:**
   - String together multiple operations.
   - Evaluate only a single pair of numbers at a time.
   - Round answers with long decimals.
   - Handle cases like pressing "=" before entering all numbers or an operator.
   - Display a snarky error message for division by 0.
   - Clear existing data when the "clear" button is pressed.

## Getting Started

To run this calculator, open the HTML file in a web browser. The calculator should display with some dummy numbers.

## Usage

1. Click number buttons to input values.
2. Use operator buttons to select the desired operation.
3. Press the "Equals" key to see the result.
4. Press the "Clear" button to reset the calculator.

## Bugs and Gotchas

- Users can string together several operations.
- Evaluate only a single pair of numbers at a time.
- Round answers with long decimals.
- Avoid pressing "=" before entering all numbers or an operator.
- Display an error message for division by 0.
- Ensure the "Clear" button wipes out any existing data.
