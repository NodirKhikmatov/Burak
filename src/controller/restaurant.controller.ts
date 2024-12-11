import { Request, Response } from "express";
import { T } from "../libs//types//common";
import MemberService from '../models/member.service'


const restaurantController: T = {};

restaurantController.goHome = (req: Request, res: Response) => {
  try {
    res.send("Home Page");
  } catch (err) {
    console.log("err: gohome:", err);
  }
};

restaurantController.getLogin = (req: Request, res: Response) => {
  try {
    res.send("Login Page");
  } catch (err) {
    console.log("err: getLogin:", err);
  }
};

restaurantController.getSignup = (req: Request, res: Response) => {
  try {
    res.send("Singup Page");
  } catch (err) {
    console.log("err: getSignup:", err);
  }
};

export default restaurantController;
