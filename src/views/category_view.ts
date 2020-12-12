import Category from "../models/Category";

export default {
  render(category: Category) {
    return {
      id: category.id,
      description: category.description,
    };
  },

  renderMany(categories: Category[]) {
    return categories.map((category) => this.render(category));
  },
};
