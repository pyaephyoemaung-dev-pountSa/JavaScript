import { orders } from './orders.js';

//Get total of all orders with reduce // 85000
const reduceOrder = orders.reduce((acc, order) => acc + order.total, 0);
console.log(reduceOrder);

//Get total of all orders with city with reduce // { Yangon: 65000, Mandalay: 20000 }
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
