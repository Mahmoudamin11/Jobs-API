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
  async deleteOne(data) {
    const job = await this.model.deleteOne(data);
    if (!job) throw new NotFoundError("Job not found");
    return job;
  }

  async updateOne(filters = {}, data) {
    const job = await this.model.findByIdAndUpdate(filters, data, {
      new: true,
      runValidators: true,
    });
    if (!job) throw new NotFoundError("Job not found");
    return job;
  }
  async findByIdAndDelete(filters = {}) {
    const job = await this.model.findByIdAndDelete(filters);
    if (!job) throw new NotFoundError("Job not found");
    return job;
  }
}

export default BaseRepository;
