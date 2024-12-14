import MemberModel from "../schema/Member.model";
import { MemberType } from "./../libs/enum/member.enum";

import Errors, { HttpCode, Message } from "./../libs/errors";
import { MemberInput, Member } from "../libs/types/member";

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
      const result = await this.memberModel.create(input);

      // const tempResult = new this.memberModel(input);
      // const result = await tempResult.save();
      result.memberPassword = "";
      return result;
    } catch (err) {
      throw new Errors(HttpCode.BAD_REQUEST, Message.CREATE_FAILED);
    }
  }
}

export default MemberService;
