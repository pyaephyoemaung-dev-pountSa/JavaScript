import orders from './orders.js';

function getTotalByCity() {
  const totalByCity = orders.reduce((acc, order) => {
    if (acc[order.city]) {
      acc[order.city] += order.total;
    } else {
      acc[order.city] = order.total;
    }
    return acc;
  }, {});
  return totalByCity;
}
console.log(getTotalByCity('Yangon', 'Mandalay'));
