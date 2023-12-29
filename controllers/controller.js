export class Controller {
  constructor({ model, validator , makeResponse }) {
    this.model = model;
    this.validator = validator;
    this.makeResponse = makeResponse
  }

  //getAll
  getAll() {
    this.getAll = async (req, res) => {
      console.log("ctr");
      const response = this.makeResponse(await this.model.getAll());
      if (response.error) res.status(404).json({ message: response.error });
    console.log({"controller":this.response})

      res.json(response.data);
    };
    return this;
  }
  //getById
  getById() {
    this.getById = async (req, res) => {
      const id = parseInt(req.params.id);
      const response = this.makeResponse(await this.model.getById({ id }));
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
      const response = this.makeResponse(
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

      const response = this.makeResponse(
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
      const response = this.makeResponse(
        await this.model.delete({ id: parseInt(req.params.id) })
      );
      if (response.error) res.status(404).json({ message: response.error });
      res.json(response.data);
    };
    return this;
  }
}
