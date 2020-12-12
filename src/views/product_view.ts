import Product from "../models/Product";
import category_view from "./category_view";

export default {
  render(product: Product) {
    return {
      id: product.id,
      price: product.price,
      description: product.description,
      category: product.category,
    };
  },

  renderMany(products: Product[]) {
    return products.map((product) => this.render(product));
  },
};
