import Errors, { HttpCode, Message } from "../libs/errors";
import jwt from "jsonwebtoken";
import { AUTH_TIMER } from "../libs/config";
import { Member } from "../libs/types/member";

class AuthService {
  constructor() {}

  public async createToken(payload: Member) {
    return new Promise((resolve, reject) => {
      const duration = `${AUTH_TIMER}h`;
      jwt.sign(
        payload as object,
        process.env.SECRET_TOKEN as string,
        { expiresIn: duration },
        (err, token) => {
          if (err)
            reject(
              new Errors(HttpCode.UNATHORIZED, Message.TOKEN_CREATION_FAILED)
            );
          else resolve(token as string);
        }
      );
    });
  }
}

export default AuthService;
