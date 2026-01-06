import { fizzBuzz } from '../src/fizzBuzz';

describe('Fizz Buzz', () => {
  it('convert the number 1 to the string "1"', () => {
    expect(fizzBuzz(1)).toBe("1");
  });
  it('convert the number 2 to the string "2"', () => {
    expect(fizzBuzz(2)).toBe("2");
  });
  it('convert the number 4 to the string "4"', () => {
    expect(fizzBuzz(4)).toBe("4");
  });
});