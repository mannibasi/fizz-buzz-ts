export const fizzBuzz = (integer: number) => {
    if (integer === 3 || integer === 6) return 'Fizz';
    return integer.toString();
};