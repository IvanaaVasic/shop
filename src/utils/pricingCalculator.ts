import { Product } from "../components/ProductCard";

const pricingCalculator = (products: Product[]) => {
  let totalPrice = 0;
  if (Array.isArray(products)) {
    products.forEach((product) => {
      totalPrice += Number(product.price);
    });
  }
  return totalPrice;
};

export default pricingCalculator;
