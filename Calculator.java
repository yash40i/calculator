import java.util.Scanner;

public class Calculator {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter first number: ");
        double num1 = 56;

        System.out.print("Enter operator (+, -, *, /): ");
        char operator = '+';

        System.out.print("Enter second number: ");
        double num2 = 3.00;

        double result;

        switch (operator) {
            case '+':
                result = num1 + num2;
                break;
            case '-':
                result = num1 - num2;
                break;
            case '*':
                result = num1 * num2;
                break;
            case '/':
                if (num2 == 0) {
                    System.out.println("Error: Division by zero!");
                    return;
                }
                result = num1 / num2;
                break;
            default:
                System.out.println("you have entered Invalid operator!");
                return;
        }

        System.out.println("Result: " + result);
        scanner.close();
    }
}
