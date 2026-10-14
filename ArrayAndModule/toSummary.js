import orders from './orders.js';
import formatMMK from './format.js';

const toSummary = orders.orders.map((order) => ({
  id: order.id,
  customer: order.customer,
  total: formatMMK(order.total),
  status: order.status,
}));
console.log(toSummary);
