import { PrismaModel } from "./prisma.model.js";
import { UserInstance } from "./userInstance.js";
import { prisma } from "../database.js";
import { Response } from "../helpers/response.js";


class User extends PrismaModel {
  constructor({ model, response }) {
    super({ model, response });
  }

  static makeInstance({ data }) {
    return new UserInstance({ data });
  }
}
export const userModel = new User({ model: prisma.user, response: new Response() });