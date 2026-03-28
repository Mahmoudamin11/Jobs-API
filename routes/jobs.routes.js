import express from "express";

import jobController from "../controllers/jobs.controller.js";
import validation from "../middleware/validate.js";
import {createJobSchema, updateJobSchema} from "../validators/job.schema.js";

const router = express.Router();


router
  .route("/")
  .get(jobController.getAllJobs)
  .post(validation(createJobSchema), jobController.createJob);

router
  .route("/:id")
  .get(jobController.getJob)
  .patch(validation(updateJobSchema), jobController.updateJob)
  .delete(jobController.deleteJob);

export default router;
