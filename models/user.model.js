import { prisma } from "../database.js";
import { Response } from "../helpers/response.js";
import pkg from "bcryptjs";
const { hash, compare } = pkg;

export class User {
  constructor({ data }) {
    (this.email = data.email),
      (this.password = data.password),
      (this.name = data.name);
    this.response = new Response();
  }

  async encryptPassword({ password }) {
    return await hash(password, 10);
  }
  async comparePassword({ password }) {
    return await compare(password, this.password);
  }

  async save() {
    try {
      this.response.data = await prisma.user.create({
        data: {
          email: this.email,
          name: this.name,
          password: await this.encryptPassword({ password: this.password }),
        },
      });
    } catch (error) {
      this.response.send_error({ error });
      this.response.error = error;
    }
    return this.response;
  }
}
