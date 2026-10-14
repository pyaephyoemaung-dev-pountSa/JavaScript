import { orders } from './orders.js';
Array.prototype.myFilter = function (callback) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      result.push(this[i]);
    }
  }
  return result;
};
const paidOrder = orders.myFilter((order) => order.status === 'paid');
console.log(paidOrder);
