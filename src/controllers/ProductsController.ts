import { Request, Response } from "express";
import { getRepository } from "typeorm";
import Product from "../models/Product";
import product_view from "../views/product_view";

export default {
  async create(request: Request, response: Response) {
    const { description, price, category } = request.body;

    const productsRepository = getRepository(Product);

    const data = {
      description,
      price,
      category,
    };

    const product = productsRepository.create(data);

    await productsRepository.save(product);

    return response.status(201).json(product_view.render(product));
  },

  async index(req: Request, res: Response) {
    const productsRepository = getRepository(Product);

    const products = await productsRepository.find();

    return res.json(products);
  },

  async searchById(req: Request, res: Response) {
    const { id } = req.params;
    const productsRepository = getRepository(Product);

    const product = await productsRepository.findOneOrFail(id);

    return res.status(302).json(product_view.render(product));
  },

  async deleteProduct(req: Request, res: Response) {
    const { id } = req.params;

    const productsRepository = getRepository(Product);

    const product = await productsRepository.delete(id);

    return res.status(200).json({ msg: "Produto deletado!" });
  },

  
};
