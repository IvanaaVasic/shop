export interface IProduct {
  image: string;
  brand: string;
  name: string;
  price: number;
  quantity: number;
  isEmpty: boolean;
}

const pricingCalculator = (products: IProduct[]) => {
  let totalPrice = 0;
  if (Array.isArray(products)) {
    products.forEach((product) => {
      totalPrice += Number(product.price);
    });
  }
  return totalPrice;
};

export default pricingCalculator;
