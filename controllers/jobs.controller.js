import { StatusCodes } from "http-status-codes";
import JobService from "../services/job.service.js";

class JobController {
  constructor() {
    this.jobService = new JobService();
  }
  getJob = async (req, res) => {
    const job = await this.jobService.getJob(req.params.id, req.user._id);
    res.status(StatusCodes.OK).json({ job });
  };
  getAllJobs = async (req, res) => {
    const jobs = await this.jobService.getJobs(req.user._id);
    res.status(StatusCodes.OK).json({ jobs, count: jobs.length });
  };

  createJob = async (req, res) => {
    const job = await this.jobService.createJob(req.user, req.body);
    res.status(StatusCodes.CREATED).json({ job });
  };
  updateJob = async (req, res) => {
    const job = await this.jobService.updateJob(
      req.params.id,
      req.user._id,
      req.body,
    );
    res.status(StatusCodes.OK).json({ job });
  };
  deleteJob = async (req, res) => {
    await this.jobService.deleteJob(req.params.id, req.user._id);
    res.status(StatusCodes.OK).json({ msg: "Job deleted" });
  };
}

export default new JobController();
