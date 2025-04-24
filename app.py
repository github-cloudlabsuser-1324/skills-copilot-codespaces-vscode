def add(a, b):
    return a + b

def subtract(a, b):
    return a - b

def multiply(a, b):
    return a * b

def divide(a, b):
    if b == 0:
        return "Error! Division by zero."
    return a / b

def percentage(a, b):
    if b == 0:
        return "Error! Division by zero."
    return (a / b) * 100

def calculator():
    """
    A simple calculator function that allows the user to perform basic arithmetic operations.

    The user is prompted to select an operation from the following options:
    1. Addition
    2. Subtraction
    3. Multiplication
    4. Division
    5. Percentage

    The function then asks the user to input two numeric values and performs the selected operation.
    If the user provides invalid input (non-numeric values or an invalid operation choice), 
    an appropriate error message is displayed.

    Returns:
        None
    """
    print("Select operation:")
    print("1. Add")
    print("2. Subtract")
    print("3. Multiply")
    print("4. Divide")
    print("5. Percentage")

    choice = input("Enter choice (1/2/3/4/5): ")

    if choice in ['1', '2', '3', '4', '5']:
        try:
            num1 = float(input("Enter first number: "))
            num2 = float(input("Enter second number: "))
        except ValueError:
            print("Invalid input! Please enter numeric values.")
            return

        if choice == '1':
            print(f"The result is: {add(num1, num2)}")
        elif choice == '2':
            print(f"The result is: {subtract(num1, num2)}")
        elif choice == '3':
            print(f"The result is: {multiply(num1, num2)}")
        elif choice == '4':
            print(f"The result is: {divide(num1, num2)}")
        elif choice == '5':
            print(f"The result is: {percentage(num1, num2)}%")
    else:
        print("Invalid input")

if __name__ == "__main__":
    calculator()