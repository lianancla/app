import { PrismaModel } from "./prisma.model.js";
import { UserInstance } from "./userInstance.js";

export class User extends PrismaModel {
  constructor({ model, response,DB_Errors }) {
    super({ model, response, DB_Errors });
  }
  /*
  makeInstance({data , makeResponse}) {
    return new UserInstance({ data , makeResponse });
  }
  static async getUserByEmail({ email }) {
    try {
      this.response.data = await this.model.findFirst({
        where: { email },
      });
    } catch (error) {
      this.response.error = error;
      await this.response.send_error();
    }

    return this.response;
  }
  */
}

