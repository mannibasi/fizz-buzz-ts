import { fizzBuzz } from '../src/fizzBuzz';

describe.each([3, 6, 9])
('Fizz Buzz converts multiples of three to Fizz', (input) => {
  test(`converts ${input} to Fizz`, () => {
    expect(fizzBuzz(input)).toBe("Fizz");
  });
});

describe.each([5, 10, 20])
('Fizz Buzz converts multiples of five to Buzz', (input) => {
    test(`converts ${input} to Buzz`, () => {
        expect(fizzBuzz(input)).toBe("Buzz");
    });
});

describe.each([15, 30, 45])
('Fizz Buzz converts multiples of three and five to FizzBuzz', (input) => {
    test(`converts ${input} to FizzBuzz`, () => {
        expect(fizzBuzz(input)).toBe("FizzBuzz");
    });
});

describe.each([
    {input: 1, expected: "1"},
    {input: 2, expected: "2"},
    {input: 4, expected: "4"},
])('Fizz Buzz converts all other numbers to a string representation of themselves', ({input, expected}) => {
    test(`converts ${input} to "${expected}"`, () => {
        expect(fizzBuzz(input)).toBe(expected);
    });
});