

export class PrismaModel {
  constructor({ model, response , DB_Errors }) {
    this.model = model;
    this.response= response;
    this.DB_Errors = DB_Errors
  }

  async getAll() {
    try {
      this.response.data = await this.model.findMany();
    } catch (error) {
      this.response.send_error({error});
      this.response.error = this.DB_Errors.getAll;
  
    }
   
    return this.response;
  }
  async getById({ id }) {
    try {
      this.response.data = await this.model.findFirst({
        where: { id },
      });
    } catch (error) {
      this.response.send_error({error});
      this.response.error = this.DB_Errors.getById;
    }

    return this.response;
  }

  async create({ data }) {
    try {
      this.response.data = await this.model.create({ data });
    } catch (error) {
      this.response.send_error({error});
      this.response.error = this.DB_Errors.create;
    }
    return this.response;
  }
  async update({ id, data }) {
    try {
      this.response.data = await this.model.update({
        where: { id },
        data,
      });
    } catch (error) {
      this.response.send_error({error});
      this.response.error = this.DB_Errors.update;
    }
    return this.response;
  }
  async delete({ id }) {
    try {
      this.response = await this.model.delete({ where: { id } });
    } catch (error) {
      this.response.send_error({error});
      this.response.error = this.DB_Errors.delete;
    }
    return this.response;
  }
}
