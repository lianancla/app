import { Response } from "../helpers/response.js";
export class Controller {
  constructor({ model, validator }) {
    this.model = model;
    this.validator = validator;
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
      const validatedData = await this.validator.validate({ object: req.body });
      if (validatedData.error)
        res.status(404).josn({ mensaje: validatedData.error });
      const response = new Response(
        await this.model.create({ data: validatedData.data })
      );
      if (response.error) res.status(404).json({ message: response.error });
      res.json(response.data);
    };
    return this;
  }
  //update
  update() {
    this.update = async (req, res) => {
      const validatedData = await this.validator.validatePartial({
        object: req.body,
      });
      if (validatedData.error)
        res.status(404).josn({ mensaje: validatedData.error });

      const response = new Response(
        await this.model.update({
          data: validatedData.data,
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
