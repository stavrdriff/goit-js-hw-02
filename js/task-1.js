'use strict';

const makeTransaction = (quantity, pricePerDroid, customerCredits) => {
  const testArgFirst = quantity && typeof quantity === 'number' && quantity > 0;
  const testArgSecond = pricePerDroid && typeof pricePerDroid === 'number' && pricePerDroid > 0;
  const testArgThird = customerCredits && typeof customerCredits === 'number' && customerCredits > 0;
  let totalPrice;

  return !testArgFirst || !testArgSecond || !testArgThird
    ? 'wrong data'
    : totalPrice = quantity * pricePerDroid && totalPrice > customerCredits
    ? 'Insufficient funds!'
    : `You ordered ${quantity} droids worth ${totalPrice} credits!`;
}

console.log(makeTransaction('sdfdf', 3000, 23000)); // "You ordered 5 droids worth 15000 credits!"
console.log(makeTransaction(3, 1000, 15000)); // "You ordered 3 droids worth 3000 credits!"
console.log(makeTransaction(10, 5000, 8000)); // "Insufficient funds!"
console.log(makeTransaction(8, 2000, 10000)); // "Insufficient funds!"
console.log(makeTransaction(10, 500, 5000)); // "You ordered 10 droids worth 5000 credits!"