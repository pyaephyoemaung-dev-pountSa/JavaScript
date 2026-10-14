import { orders } from './orders.js';

const sortOrder = orders.sort((a, b) => b.total - a.total);
console.log(sortOrder);
