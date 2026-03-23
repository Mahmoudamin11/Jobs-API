require("dotenv").config();
require("express-async-errors");
const express = require("express");
const app = express();

app.use(express.json());
// connect DB
const connectDB = require("./db/connect");

// routers
const authRouter = require("./routes/auth");
const jobRouter = require("./routes/jobs");

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/jobs", jobRouter);

// error handler
const notFoundMiddleware = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");

// extra packages

// routes
app.get("/", (req, res) => {
  res.send("jobs api");
});

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;
const DB_CONNECTION_STR = process.env.MONGO_URI;

const start = async () => {
  try {
    await connectDB(DB_CONNECTION_STR);
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`),
    );
  } catch (error) {
    console.log(error);
  }
};

start();
