import { orders } from './orders.js';
function findOrderById(_id) {
  const order = orders.find((order) => order.id === _id);
  return order;
}
console.log(findOrderById(2));
