import orders from './orders.js';
const topCustomers = orders.reduce((acc, order) => {
    
    acc[customerId] = (acc[customerId] || 0) + total;
    return acc;
}, {});
