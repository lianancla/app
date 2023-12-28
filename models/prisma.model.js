export class PrismaModel {
  constructor({ model, response }) {
    this.model = model;
    this.response = response;
  }

  async getAll() {
    try {
      this.response.data = await this.model.findMany();
    } catch (error) {
      this.response.error = error;
    }
    return this.response;
  }
  async getById({ id }) {
    try {
      this.response.data = await this.model.findFirst({
        where: { id },
      });
    } catch (error) {
      this.response.error = error;
    }

    return this.response;
  }

  async create({ data }) {
    try {
      this.response.data = await this.model.create({ data });
    } catch (error) {
      this.response.error = error;
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
      this.response.error = error;
    }
    return this.response;
  }
  async delete({ id }) {
    try {
      this.response = await this.model.delete({ where: { id } });
    } catch (error) {
      this.response.error = error;
    }
    return response;
  }
}
