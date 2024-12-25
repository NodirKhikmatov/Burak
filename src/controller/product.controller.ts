import { Request, Response } from "express";
import { T } from "../libs//types//common";
import Errors from "../libs/errors";
// import ProductService from "../models/Product.service.ts";

//  const productService = new ProductService();

const productController: T = {};
productController.getAllProducts = async (req: Request, res: Response) => {
  try {
    console.log("getAllProducts");
    res.render("products");
  } catch (err) {
    console.log("err: getAllProducts:", err);
    if (err instanceof Errors) {
      res.status(err.code).json(err);
    } else res.status(Errors.standard.code).json(Errors.standard);
  }
};

productController.createNewProduct = async (req: Request, res: Response) => {
  try {
    console.log("createNewProduct");
  } catch (err) {
    console.log("err: createNewProduct:", err);
    if (err instanceof Errors) {
      res.status(err.code).json(err);
    } else res.status(Errors.standard.code).json(Errors.standard);
  }
};

productController.updateChosenProduct = async (req: Request, res: Response) => {
  try {
    console.log("updateChosenProduct");
  } catch (err) {
    console.log("err: updateChosenProduct:", err);
    if (err instanceof Errors) {
      res.status(err.code).json(err);
    } else res.status(Errors.standard.code).json(Errors.standard);
  }
};
export default productController;
