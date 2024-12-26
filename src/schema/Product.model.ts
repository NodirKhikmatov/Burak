import {
  ProductSize,
  ProductVolume,
  ProductCollection,
  ProductStatus,
} from "./../libs/enum/product.enum";
import mongoose, { Schema } from "mongoose";

const productSchema = new Schema(
  {
    productStatus: {
      type: String,
      enum: ProductStatus,
      default: ProductStatus.PAUSE,
    },
    ProductCollection: {
      type: String,
      enum: ProductCollection,
      required: true,
    },

    ProductName: {
      type: String,
      required: true,
    },
    ProductPrice: {
      type: Number,
      required: true,
    },
    ProductLeftCount: {
      type: Number,
      required: true,
    },
    ProductSize: {
      type: String,
      enum: ProductSize,
      default: ProductSize.NORMAL,
    },
    ProductVolume: {
      type: String,
      enum: ProductVolume,
      default: ProductSize.NORMAL,
    },
    ProductDesc: {
      type: String,
      required: true,
    },
    productImages: {
      type: [String],
      default: [],
    },
    productView: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true } //createdAt, UpdatedAt);
);

productSchema.index(
  { productName: 1, ProductSize: 1, ProductVolume: 1 },
  { unique: true }
);
export default mongoose.model("Product", productSchema);
