import orders from './orders.js';

const getPaidOrder = orders.filter((order) => order.status === 'paid');
console.log(getPaidOrder);
