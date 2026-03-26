import JobRepository from "../repositories/job.repository.js";

class JobService {
  constructor() {
    this.jobRepo = new JobRepository()
  }

  createJob(user, data) {
    return this.jobRepo.createJob(user, data);
  }
  getJobs(userId) {
    return this.jobRepo.findJobs(userId);
  }
  getJob(id) {
    return this.jobRepo.findById(id);
  }
  updateJob(id, data) {
    return this.jobRepo.findByIdAndUpdate(id, data, { new: true });
  }
  deleteJob(id) {
    return this.jobRepo.findByIdAndDelete(id);
  }
}

export default JobService;
