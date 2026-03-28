import JobRepository from "../repositories/job.repository.js";

class JobService {
  constructor() {
    this.jobRepo = new JobRepository();
  }

  createJob(user, data) {
    return this.jobRepo.createJob(user, data);
  }
  getJobs(userId) {
    return this.jobRepo.findJobs(userId);
  }
  getJob(id, userId) {
    return this.jobRepo.findOne({ _id: id, createdBy: userId });
  }
  updateJob(id, userId, body) {
    const data = { company: body.company, position: body.position };
    if (!body.company) delete data.company;
    if (!body.position) delete data.position;
    return this.jobRepo.updateOne({ _id: id, createdBy: userId }, data);
  }
  deleteJob(id, userId) {
    return this.jobRepo.findByIdAndDelete({ _id: id, createdBy: userId });
  }
}

export default JobService;
