import { fizzBuzz } from '../src/fizzBuzz';

describe.each([
    {input: 1, expected: "1"},
    {input: 2, expected: "2"},
    {input: 4, expected: "4"},
])('Fizz Buzz', ({input, expected}) => {
  test(`convert the number ${input} to the string "${expected}"`, () => {
    expect(fizzBuzz(input)).toBe(expected);
  });
});

describe.each([
  {input: 3, expected: "Fizz"},
  {input: 6, expected: "Fizz"},
])('Fizz Buzz', ({input, expected}) => {
  test(`convert the number ${input} to "${expected}"`, () => {
    expect(fizzBuzz(input)).toBe(expected);
  });
});