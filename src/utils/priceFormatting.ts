const priceFormatting = (price: number) => {
  const priceFor = Intl.NumberFormat("en-US");
  const new_priceFor = priceFor.format(price);
  return new_priceFor;
};

export default priceFormatting;
