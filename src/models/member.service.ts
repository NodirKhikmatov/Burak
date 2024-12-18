import MemberModel from "../schema/Member.model";
import { MemberType } from "./../libs/enum/member.enum";

import Errors, { HttpCode, Message } from "./../libs/errors";
import { LoginInput, MemberInput, Member } from "../libs/types/member";

class MemberService {
  private readonly memberModel;

  constructor() {
    this.memberModel = MemberModel;
  }

  // typescipda void ==> hech narsani qaytarmasligini yozishimisz kk
  public async processSignup(input: MemberInput): Promise<Member> {
    const exist = await this.memberModel
      .findOne({ memberType: MemberType.RESTAURANT })
      .exec();
    console.log("exist:", exist);
    if (exist) throw new Errors(HttpCode.BAD_REQUEST, Message.CREATE_FAILED);

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

    const isMatch = input.memberPassword === member.memberPassword;
    console.log("isMatch", isMatch);
    if (!isMatch) {
      throw new Errors(HttpCode.UNATHORIZED, Message.WRONG_PASSWORD);
    }

    return await this.memberModel.findById(member._id).exec();
  }
}

export default MemberService;
