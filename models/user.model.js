import { prisma } from "../database.js";
import { Response } from "../helpers/response.js";
import pkg from "bcryptjs";
const { hash, compare } = pkg;

class UserModel {
  constructor({ model, response }) {
    this.model = model;
    this.response = response;
  }

  async encryptPassword({ password }) {
    return await hash(password, 10);
  }
  async comparePassword({ password, hash }) {
    return await compare(password, hash);
  }

  async findMany() {
    try {
      this.response.data = await this.model.findMany();
    } catch (error) {
      this.response.error = error;
    }
    return this.response;
  }


  async getById({ user_id }) {
    try {
      this.response.data = await this.model.findFirst({ where: { id: user_id } });
      
    } catch (error) {
      this.response.error = error;
    }
    
    return this.response;
  }

  async create({ data }) {
    try {
      const hashed = await this.encryptPassword({ password: data.password });
      console.log(hashed);
      this.response.data = await this.model.create({
        data: {
          email: data.email,
          name: data.name,
          password: hashed,
        },
      });
    } catch (error) {
      this.response.error = error;
    }
    return this.response;
  }
  async update({ user_id, data }) {
    try {
      this.response.data = await this.model.update({
        where: { id: user_id },
        data,
      });
    } catch (error) {
      this.response.error = error;
    }
    return this.response;
  }
  async delete({ user_id }) {
    try {
      this.response = await this.model.delete({ where: { id: user_id } });
    } catch (error) {
      this.response.error = error;
    }
    return response;
  }
}



export const User = new UserModel({
  model: prisma.user,
  response: new Response(),
});
