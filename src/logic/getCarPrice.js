const getCarPrice = (distance, duration, car) => {
  const {
    pricePerKm,
    pricePerDay,
  } = car;
  const price = (distance * pricePerKm/100 + duration * pricePerDay/100);
  const roundedPrice = Math.round(price * 100) / 100;
  return roundedPrice;
};

export default getCarPrice;