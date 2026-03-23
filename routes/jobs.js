import express from "express";

import {
  createJob,
  getAllJobs,
  getJob,
  updateJob,
  deleteJob,
} from "../controllers/jobs.js";

const router = express.Router();

router.route("/").get(getAllJobs).post(createJob);

router.route("/:id").get(getJob).patch(updateJob).delete(deleteJob);

export default router;
