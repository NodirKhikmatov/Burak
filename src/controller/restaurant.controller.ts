import { MemberType } from "./../libs/enum/member.enum";
import { Request, Response } from "express";
import { T } from "../libs//types//common";
import MemberService from "../models/member.service";
import { MemberInput } from "../libs/types/member";

const restaurantController: T = {};

restaurantController.goHome = (req: Request, res: Response) => {
  try {
    console.log("goHome");

    res.send("Home Page"); //response = send | json | redirect | end | render
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

restaurantController.processLogin = (req: Request, res: Response) => {
  try {
    console.log("processLogin");
    res.send("Done");
  } catch (err) {
    console.log("err: processLogin:", err);
  }
};

restaurantController.processSignup = async (req: Request, res: Response) => {
  try {
    console.log("processSignup");

    const newMember: MemberInput = req.body;

    newMember.memberType = MemberType.RESTAURANT;

    const memberService = new MemberService();
    const result = await memberService.processSignup(newMember);
    res.send(result);
  } catch (err) {
    console.log("err: processSignup:", err);
    res.send(err);
  }
};

export default restaurantController;
