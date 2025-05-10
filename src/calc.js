export function calcTotal(purch, applyDisc) {
    const sum = purch.reduce((total, item) => {
        return total + item.count * item.price
    }, 0);
    return applyDisc ? sum * 0.5 : sum;
}
