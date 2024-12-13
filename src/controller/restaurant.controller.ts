import { Request, Response } from "express";
import { T } from "../libs//types//common";
import MemberService from "../models/member.service";


const restaurantController: T = {};

restaurantController.goHome = (req: Request, res: Response) => {
  try {
    console.log("goHome");

    res.send("Home Page");
  } catch (err) {
    console.log("err: gohome:", err);
  }
};

restaurantController.getLogin = (req: Request, res: Response) => {
  try {
    console.log("goLogin");

    //login,
    //service model

    res.send("Login Page");
  } catch (err) {
    console.log("err: getLogin:", err);
  }
};

restaurantController.getSignup = (req: Request, res: Response) => {
  try {
    console.log("getSignup");
    res.send("Singup Page");
  } catch (err) {
    console.log("err: getSignup:", err);
  }
};

export default restaurantController;
