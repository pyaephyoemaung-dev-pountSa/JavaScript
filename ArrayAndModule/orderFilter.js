import { orders } from './orders.js';

//Get orders with status "pending" with filter
const orderFilter = orders.filter((order) => order.status === 'pending');
console.log(orderFilter);

//Get names of orders with status "paid" with filter
const orderName = orders
  .filter((order) => order.status === 'paid')
  .map((order) => order.customer);
console.log(orderName);
