import { Response } from "express";
import { ExtendedRequest } from "./../libs/types/member";
import OrderService from "../models/Order.service";
import { T } from "../libs//types//common";

import Errors, { HttpCode, Message } from "../libs/errors";

const orderService = new OrderService();

const orderController: T = {};

orderController.createOrder = async (req: ExtendedRequest, res: Response) => {
  try {
    console.log("createOrder");
    const result = await orderService.createOrder(req.member, req.body);

    res.status(HttpCode.CREATED).json(result);
  } catch (err) {
    console.log("err: createOrder:", err);
    if (err instanceof Errors) {
      res.status(err.code).json(err);
    } else res.status(Errors.standard.code).json(Errors.standard);
  }
};

export default orderController;
