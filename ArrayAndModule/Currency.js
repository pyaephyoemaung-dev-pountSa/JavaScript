import orders from './orders.js';
import formatMMK from './format.js';

const formatMMKValues = orders.orders.map((order) => formatMMK(order.total));
console.log(formatMMKValues);
