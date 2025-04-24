import unittest
from app import add, subtract, multiply, divide, percentage

class TestCalculatorFunctions(unittest.TestCase):
    """
    TestCalculatorFunctions is a test suite for verifying the functionality of basic calculator operations.

    Methods:
        test_add():
            Tests the add function with various inputs, including positive, negative, and zero values.

        test_subtract():
            Tests the subtract function with various inputs, including positive, negative, and zero values.

        test_multiply():
            Tests the multiply function with various inputs, including positive, negative, and zero values.

        test_divide():
            Tests the divide function with various inputs, including division by positive, negative, and zero values.
            Ensures proper handling of division by zero.

        test_percentage():
            Tests the percentage function with various inputs, including valid percentages and division by zero.
            Ensures proper handling of division by zero.
    """

    def test_add(self):
        self.assertEqual(add(2, 3), 5)
        self.assertEqual(add(-1, 1), 0)
        self.assertEqual(add(0, 0), 0)

    def test_subtract(self):
        self.assertEqual(subtract(10, 5), 5)
        self.assertEqual(subtract(0, 5), -5)
        self.assertEqual(subtract(-5, -5), 0)

    def test_multiply(self):
        self.assertEqual(multiply(4, 5), 20)
        self.assertEqual(multiply(-1, 5), -5)
        self.assertEqual(multiply(0, 5), 0)

    def test_divide(self):
        self.assertEqual(divide(10, 2), 5)
        self.assertEqual(divide(5, -1), -5)
        self.assertEqual(divide(0, 1), 0)
        self.assertEqual(divide(5, 0), "Error! Division by zero.")

    def test_percentage(self):
        self.assertEqual(percentage(50, 100), 50)
        self.assertEqual(percentage(25, 50), 50)
        self.assertEqual(percentage(0, 100), 0)
        self.assertEqual(percentage(10, 0), "Error! Division by zero.")


if __name__ == "__main__":
    unittest.main()