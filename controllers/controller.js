import { PrismaModel } from "../models/prisma.model.js";
import { Response } from "../helpers/response.js";
export class Controller {
  constructor({ model }) {
    (this.model = new PrismaModel({ model, response: new Response() })),
      (this.response = new Response());
  }

  getAll() {
    this.getAll = async (req, res) => {
      const response = new Response(await this.model.getAll());
      if (response.error) res.status(404).json({ message: response.error });
      res.json(response.data);
    };
return this
  }
  getById(){
    this.getById = async (req, res) => {
      const id = parseInt(req.params.id);
      const response = new Response(await this.model.getById({ id }));
      if (response.error) res.status(404).json({ message: response.error });
      res.json(response.data);
    };
    return this;
  }
}
