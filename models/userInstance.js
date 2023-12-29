import jwt from "jsonwebtoken";
import pkg from "bcryptjs";
import { app } from "../app.js";
const { hash, compare } = pkg;

export class UserInstance {
  constructor({ data, makeResponse, model }) {
    (this.email = data.email),
      (this.password = data.password),
      (this.name = data.name);
    this.model = model;
    this.makeResponse = makeResponse;
    return this;
  }

  async register() {
    try {
      this.response.data = jwt.sign({ id: this.id }, app.get("secret_key"), {
        expiresIn: 86400,
      });
    } catch (error) {
      this.response.send_error({ error });
      this.response.error = error;
    }
    return this.response;
  }

  async encryptPassword({ password }) {
    return await hash(password, 10);
  }
  async comparePassword({ password }) {
    return await compare(password, this.password);
  }

  async save() {
    try {
      this.response.data = new UserInstance({
        data: await this.model.create({
          data: {
            email: this.email,
            name: this.name,
            password: await this.encryptPassword({ password: this.password }),
          },
        }),
        makeResponse: this.makeResponse,
      });
    } catch (error) {
      this.response.send_error({ error });
      this.response.error = error;
    }
    return this.response;
  }
}
