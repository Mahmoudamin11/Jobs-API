import { NotFoundError } from "../errors/index.js";

class BaseRepository {
  constructor(model) {
    this.model = model;
  }

  async find(filters = {}) {
    return await this.model.find(filters);
  }
  async findById(id) {
    const job = await this.model.findById(id);
    if (!job) throw new NotFoundError("Job not found");
    return job;
  }
  async findOne(filters = {}) {
    const job = await this.model.findOne(filters);
    if (!job) throw new NotFoundError("Job not found");
    return job;
  }
  async create() {}
  async update() {}
  async delete() {}
}

export default BaseRepository;
