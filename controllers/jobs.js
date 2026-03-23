const getAllJobs = async (req, res) => {
  res.send(`all jobs`);
};
const getJob = async (req, res) => {
  res.send(`one job`);
};
const createJob = async (req, res) => {
  res.send(`Job created`);
};
const updateJob = async (req, res) => {
  res.send(`job updated`);
};
const deleteJob = async (req, res) => {
  res.send(`job deleted`);
};

export {
  getAllJobs,
  getJob,
  createJob,
  updateJob,
  deleteJob,
};

