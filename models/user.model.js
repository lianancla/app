import { PrismaModel } from "./prisma.model.js";
import { UserInstance } from "./userInstance.js";

export class User extends PrismaModel {
  constructor({ model, response }) {
    super({ model, response });
  }

  static makeInstance({ data }) {
    return new UserInstance({ data });
  }
}
