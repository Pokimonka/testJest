import { calcTotal } from '../calc';

const dataList = [
    [[{
        id: 1,
        name: '[eq',
        count: 5,
        price: 1000
    }], true, 2500],
    [[{
        id: 2,
        name: '[eq',
        count: 2,
        price: 2000
    }], false, 4000],
    [[{
        id: 2,
        name: '[eq',
        count: 1,
        price: 1000
    }], true, 500]
]
// const handler = test.each(dataList);

test.each(dataList)('many books %s, %b', (data, discount, expected) => {
    const result = calcTotal(data, discount);
    expect(result).toBe(expected)
});