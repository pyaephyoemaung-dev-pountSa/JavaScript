const orders = [
  { id: 1, customer: 'Aung', city: 'Yangon', total: 25000, status: 'paid' },
  { id: 2, customer: 'Su', city: 'Mandalay', total: 12000, status: 'pending' },
  { id: 3, customer: 'Kyaw', city: 'Yangon', total: 40000, status: 'paid' },
  {
    id: 4,
    customer: 'Mya',
    city: 'Mandalay',
    total: 8000,
    status: 'cancelled',
  },
];
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
