import Job from "../db/models/Job.js";
import BaseRepository from "./base.repository.js";

class JobRepository extends BaseRepository {
  constructor() {
    super(Job);
    this.model = Job;
  }
  // Put here extra funcitons that doesn't exist in the ("BaseRepo")
  async createJob(user, data) {
    const job = await this.model.create({ ...data, createdBy: user._id });
    return job;
  }

  async findJobs(userId) {
    const jobs = await this.model.find({ createdBy: userId }).sort("createdAt");
    return jobs;
  }
  
}

export default JobRepository;
