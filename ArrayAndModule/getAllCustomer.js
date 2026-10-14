import { orders } from './orders.js';

const getAllCustomer = orders.map((order) => order.customer);
console.log(getAllCustomer);
