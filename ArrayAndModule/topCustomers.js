import orders from './orders.js';

const topCustomers = orders.orders.filter((order) => order.total > 30000);
console.log(topCustomers);
