import { MemberType } from "./../libs/enum/member.enum";
import { Request, Response } from "express";
import { T } from "../libs//types//common";
import MemberService from "../models/Member.service";
import { AdminRequest, MemberInput, LoginInput } from "../libs/types/member";
import Errors, { Message } from "./../libs/errors";

const restaurantController: T = {};
const memberService = new MemberService();
restaurantController.goHome = (req: Request, res: Response) => {
  try {
    console.log("goHome");
    //todo session authentication
    res.render("home"); //response = send | json | redirect | end | render
  } catch (err) {
    console.log("err: gohome:", err);
  }
};

restaurantController.getLogin = (req: Request, res: Response) => {
  try {
    console.log("goLogin");

    //login,
    //service model
    //todo session authentication
    res.render("login");
  } catch (err) {
    console.log("err: getLogin:", err);
  }
};

restaurantController.getSignup = (req: Request, res: Response) => {
  try {
    console.log("getSignup");
    //todo session authentication
    res.render("signup");
  } catch (err) {
    console.log("err: getSignup:", err);
    res.send(err);
  }
};

restaurantController.processLogin = async (
  req: AdminRequest,
  res: Response
) => {
  try {
    console.log("processLogin");
    console.log("body:", req.body);

    const input: LoginInput = req.body;

    const result = await memberService.processLogin(input);

    //todo session authentication

    req.session.member = result;
    req.session.save(function () {
      res.send(result);
    });
  } catch (err) {
    console.log("err: processLogin:", err);
  }
};

restaurantController.processSignup = async (
  req: AdminRequest,
  res: Response
) => {
  try {
    console.log("processSignup");

    const newMember: MemberInput = req.body;

    newMember.memberType = MemberType.RESTAURANT;

    const result = await memberService.processSignup(newMember);

    //todo session authentication

    req.session.member = result;
    req.session.save(function () {
      res.send(result);
    });
  } catch (err) {
    console.log("err: processSignup:", err);
    res.send(err);
  }
};

restaurantController.checkAuthSession = async (
  req: AdminRequest,
  res: Response
) => {
  try {
    console.log("checkAuthSession");
    if (req.session?.member) res.send(`hi, ${req.session.member.memberNick}`);
    else res.send(`<script> alert(" ${Message.NOT_AUTHENTICATED}") </script>`);
  } catch (err) {
    console.log("err: processSignup:", err);
    res.send(err);
  }
};

export default restaurantController;
