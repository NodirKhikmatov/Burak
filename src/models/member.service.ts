import MemberModel from "../schema/Member.model";
import { MemberType } from "../libs/enum/member.enum";

import Errors, { HttpCode, Message } from "../libs/errors";
import { LoginInput, MemberInput, Member } from "../libs/types/member";
import * as bcrypt from "bcryptjs";

class MemberService {
  private readonly memberModel;

  constructor() {
    this.memberModel = MemberModel;
  }
  //***** spa ****
  public async signup(input: MemberInput): Promise<Member> {
    console.log("before", input.memberPassword);
    const salt = await bcrypt.genSalt();
    input.memberPassword = await bcrypt.hash(input.memberPassword, salt);
    console.log("after", input.memberPassword);

    try {
      const result = await this.memberModel.create(input); //create static method

      // const tempResult = new this.memberModel(input);
      // const result = await tempResult.save();
      result.memberPassword = "";
      return result.toJSON();
    } catch (err) {
      console.error("error:model:signup", err);

      throw new Errors(HttpCode.BAD_REQUEST, Message.USED_NICK_PHONE);
    }
  }

  public async login(input: LoginInput): Promise<Member> {
    const member = await this.memberModel
      .findOne(
        { memberNick: input.memberNick },
        { memberNick: 1, memberPassword: 1 }
      )
      .exec();
    if (!member) throw new Errors(HttpCode.NOT_FOUND, Message.NO_NUMBER_NICK);

    const isMatch = await bcrypt.compare(
      input.memberPassword,
      member.memberPassword
    );
    // const isMatch = input.memberPassword === member.memberPassword;

    console.log("isMatch", isMatch);
    if (!isMatch) {
      throw new Errors(HttpCode.UNATHORIZED, Message.WRONG_PASSWORD);
    }

    return await this.memberModel.findById(member._id).exec();
  }

  //***** bssr ****

  // typescipda void ==> hech narsani qaytarmasligini yozishimisz kk
  public async processSignup(input: MemberInput): Promise<Member> {
    const exist = await this.memberModel
      .findOne({ memberType: MemberType.RESTAURANT })
      .exec();
    console.log("exist:", exist);
    if (exist) throw new Errors(HttpCode.BAD_REQUEST, Message.CREATE_FAILED);

    console.log("before", input.memberPassword);
    const salt = await bcrypt.genSalt();
    input.memberPassword = await bcrypt.hash(input.memberPassword, salt);
    console.log("after", input.memberPassword);

    try {
      const result = await this.memberModel.create(input); //create static method

      // const tempResult = new this.memberModel(input);
      // const result = await tempResult.save();
      result.memberPassword = "";
      return result;
    } catch (err) {
      throw new Errors(HttpCode.BAD_REQUEST, Message.CREATE_FAILED);
    }
  }

  public async processLogin(input: LoginInput): Promise<Member> {
    const member = await this.memberModel
      .findOne(
        { memberNick: input.memberNick },
        { memberNick: 1, memberPassword: 1 }
      )
      .exec();
    if (!member) throw new Errors(HttpCode.NOT_FOUND, Message.NO_NUMBER_NICK);

    const isMatch = await bcrypt.compare(
      input.memberPassword,
      member.memberPassword
    );
    // const isMatch = input.memberPassword === member.memberPassword;

    console.log("isMatch", isMatch);
    if (!isMatch) {
      throw new Errors(HttpCode.UNATHORIZED, Message.WRONG_PASSWORD);
    }

    return await this.memberModel.findById(member._id).lean().exec();
  }

  //getUsers

  public async getUsers(): Promise<Member[]> {
    const result = await this.memberModel
      .find({ memberType: MemberType.USER })
      .exec();

    if (!result) throw new Errors(HttpCode.NOT_FOUND, Message.NO_DATA_FOUND);

    return result;
  }
}

export default MemberService;
