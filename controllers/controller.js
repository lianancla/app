import { Response } from "../helpers/response.js";
export class Controller {
  constructor({ model }) {
    this.model = model;
  }

  //getAll
  getAll() {
    this.getAll = async (req, res) => {
      const response = new Response(await this.model.getAll());
      if (response.error) res.status(404).json({ message: response.error });
      res.json(response.data);
    };
    return this;
  }
  //getById
  getById() {
    this.getById = async (req, res) => {
      const id = parseInt(req.params.id);
      const response = new Response(await this.model.getById({ id }));
      if (response.error) res.status(404).json({ message: response.error });
      res.json(response.data);
    };
    return this;
  }
  //create
  create() {
    this.create = async (req, res) => {
      const response = new Response(
        await this.model.create({ data: req.body })
      );
      if (response.error) res.status(404).json({ message: response.error });
      res.json(response.data);
    };
    return this;
  }
  //update
  update() {
    this.update = async (req, res) => {
      const response = new Response(
        await this.model.update({
          data: req.body,
          id: parseInt(req.params.id),
        })
      );

      if (response.error) res.status(404).json({ message: response.error });
      res.json(response.data);
    };
    return this;
  }
  //delete
  delete() {
    this.delete = async (req, res) => {
      const response = new Response(
        await this.model.delete({ id: parseInt(req.params.id) })
      );
      if (response.error) res.status(404).json({ message: response.error });
      res.json(response.data);
    };
    return this;
  }
}
