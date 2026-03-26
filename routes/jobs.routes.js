import express from "express";

import jobController from "../controllers/jobs.controller.js";
import validation from "../middleware/validate.js";
import jobSchema from "../validators/job.schema.js";

const router = express.Router();


router
  .route("/")
  .get(jobController.getAllJobs)
  .post(validation(jobSchema), jobController.createJob);

router
  .route("/:id")
  .get(jobController.getJob)
  .patch(jobController.updateJob)
  .delete(jobController.deleteJob);

export default router;
