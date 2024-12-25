import session from "express-session";
import { MemberType } from "./../libs/enum/member.enum";
import { Request, Response, NextFunction } from "express";
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
    res.redirect("/admin");
  }
};

restaurantController.getSignup = (req: Request, res: Response) => {
  try {
    console.log("getSignup");
    //todo session authentication
    res.render("signup");
  } catch (err) {
    console.log("err: getSignup:", err);
    res.redirect("/admin");
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

    req.session.member = result; //cookieni ichiga stickni joylab keladi  session collectionga borib datani save
    req.session.save(function () {
      res.send(result);
    });
  } catch (err) {
    const message =
      err instanceof Errors ? err.message : Message.SOMETHING_WENT_WRONG;
    res.send(
      `<script> alert(" ${message}"); window.location.replace('/admin/login') </script>`
    );
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
    //db ypzish & 2frontendga yozish
    req.session.member = result;
    req.session.save(function () {
      res.send(result);
    });
  } catch (err) {
    console.log("err: processSignup:", err);
    const message =
      err instanceof Errors ? err.message : Message.SOMETHING_WENT_WRONG;
    res.send(
      `<script> alert(" ${message}"); window.location.replace('admin/signup') </script>`
    );
  }
};

restaurantController.logout = async (req: AdminRequest, res: Response) => {
  try {
    console.log("logout");
    req.session.destroy(function () {
      res.redirect("/admin");
    });
  } catch (err) {
    console.log("err: logout:", err);
    res.redirect("/admin");
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
    console.log("err: checkAuthSession:", err);
    res.send(err);
  }
};

restaurantController.verifyRestaurant = (
  req: AdminRequest,
  res: Response,
  next: NextFunction
) => {
  if (req.session?.member?.memberType === MemberType.RESTAURANT) {
    req.member = req.session.member;
    next();
  } else {
    const message = Message.NOT_AUTHENTICATED;
    res.send(
      `<script> alert(" ${message}"); window.location.replace('/admin/login') </script>`
    );
  }
};
export default restaurantController;
