export const fizzBuzz = (integer: number) => {
    if (integer % 3 === 0 && integer % 5 === 0) return 'FizzBuzz';
    if (integer % 3 === 0) return 'Fizz';
    if (integer % 5 === 0) return 'Buzz';
    return integer.toString();
};