const functions = require('./functions');

test('returnTwo function should return 2', () => {
    let result = functions.returnTwo();
    expect(result).toBe(2);
})
test('Greets Joe appropriately', () => {
    let name = 'Joe';

    let result = functions.greeting(name);

    expect(result).toEqual('Hello, Joe.');
})

describe('Math functions', () => {
    test('add function adds 2 and 3 to get 5', () => {
        let num1 = 2;
        let num2 = 3;
    
        let result = functions.add(num1, num2);
    
        expect(result).toBeCloseTo(5);
    })
    test('multiply function multiplies 2 and 3 to get 6', () => {
        let num1 = 2;
        let num2 = 3;
    
        let result = functions.multiply(num1, num2);
    
        expect(result).toBeCloseTo(6);
    })
    test('divide function divides 8 by 2 to get 4', () => {
        let num1 = 8;
        let num2 = 2;
    
        let result = functions.divide(num1, num2);
    
        expect(result).toBeCloseTo(4);
    })
    test('subtract function subtracts 2 from 3 to get 1', () => {
        let num1 = 3;
        let num2 = 2;
    
        let result = functions.subtract(num1, num2);
    
        expect(result).toBeCloseTo(1);
    })
})
