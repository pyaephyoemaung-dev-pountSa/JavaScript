const formatMMK = () => {
  return new Intl.NumberFormat('my-MM', {
    style: 'currency',
    currency: 'MMK',
  }).format(25000);
};
export default formatMMK;
