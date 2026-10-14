import orders from './orders.js';

const totalRevenue = orders.orders.reduce((acc, order) => acc + order.total, 0);

console.log(totalRevenue);
