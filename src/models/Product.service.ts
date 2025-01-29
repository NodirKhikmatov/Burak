import { ProductStatus } from "../libs/enum/product.enum";
import { shapeIntoMongooseObjectId } from "../libs/config";
import Errors, { HttpCode, Message } from "../libs/errors";
import {
  Product,
  ProductInput,
  ProductUpdateInput,
  ProductInquiry,
} from "../libs/types/product";
import ProductModel from "../schema/Product.model";
import { T } from "../libs/types/common";

class ProductService {
  private readonly productModel;

  constructor() {
    this.productModel = ProductModel;
  }

  /*SPA */
  public async getProducts(inquiry: ProductInquiry): Promise<Product[]> {
    const match: T = { productStatus: ProductStatus.PROCESS };

    if (inquiry.productCollection) {
      match.productCollection = inquiry.productCollection;
    }
    if (inquiry.search) {
      match.productName = { $regex: new RegExp(inquiry.search, "i") }; // Use "i" for case-insensitive search
    }

    // Ensure `page` and `limit` are numbers
    const page = Number(inquiry.page) || 1;
    const limit = Number(inquiry.limit) || 10; // Default to 10 if limit is not provided or invalid

    const sort: T =
      inquiry.order === "productPrice"
        ? { [inquiry.order]: 1 }
        : { [inquiry.order]: -1 };

    const result = await this.productModel
      .aggregate([
        { $match: match },
        { $sort: sort },
        { $skip: (page - 1) * limit },
        { $limit: limit },
      ])
      .exec();

    if (!result) throw new Errors(HttpCode.NOT_FOUND, Message.NO_DATA_FOUND);

    return result;
  }

  /*SSR */

  //definition
  public async getAllProducts(): Promise<Product[]> {
    const result = await this.productModel.find().exec();
    if (!result) throw new Errors(HttpCode.NOT_MODIFIED, Message.UPDATE_FAILED);

    console.log(result);
    return result;
  }

  public async createNewProduct(input: ProductInput): Promise<Product> {
    try {
      return await this.productModel.create(input);
    } catch (err) {
      console.error("err:createNewProduct error:", err);
      throw new Errors(HttpCode.BAD_REQUEST, Message.CREATE_FAILED);
    }
  }

  public async updateChosenProduct(
    id: string,
    input: ProductUpdateInput
  ): Promise<Product> {
    id = shapeIntoMongooseObjectId(id);
    const result = await this.productModel
      .findOneAndUpdate({ _id: id }, input, { new: true })
      .exec();
    if (!result) throw new Errors(HttpCode.NOT_MODIFIED, Message.UPDATE_FAILED);

    console.log(result);
    return result;
  }
}
export default ProductService;
