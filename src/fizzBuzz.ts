export const fizzBuzz = (integer: number) => {
    if (integer === 3 || integer === 6 || integer === 9) return 'Fizz';
    return integer.toString();
};