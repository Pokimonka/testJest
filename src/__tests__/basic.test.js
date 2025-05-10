import { calcTotal } from '../calc';

test('basic test', () => {
    let result = 4;
    expect(result).toBe(4);
});

test('calc without discount', () => {
    const purch = [
        {
            id: 1,
            name: '[eq',
            count: 5,
            price: 5000
        },
        {
            id: 666,
            name: 't,kj',
            count: 9,
            price: 1000
        }
    ];
    const result = calcTotal(purch);
    expect(result).toBe(34000);
})

test('calc with discount', () => {
    const purch = [
        {
            id: 1,
            name: '[eq',
            count: 5,
            price: 5000
        },
        {
            id: 666,
            name: 't,kj',
            count: 9,
            price: 1000
        }
    ];
    const result = calcTotal(purch, true);
    expect(result).toBe(17000);
})