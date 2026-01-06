const isDivisibleByThree = (integer: number) => integer % 3 === 0;
const isDivisibleByFive = (integer: number) => integer % 5 === 0;

export const fizzBuzz = (integer: number) => {
    if (isDivisibleByThree(integer) && isDivisibleByFive(integer)) {
        return 'FizzBuzz';
    }
    if (isDivisibleByThree(integer)) {
        return 'Fizz';
    }
    if (isDivisibleByFive(integer)) {
        return 'Buzz';
    }
    return integer.toString();
};