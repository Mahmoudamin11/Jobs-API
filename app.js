import "dotenv/config";
import "express-async-errors";
import express from "express";

// connect DB
import connectDB from "./db/connect.js";

// routers
import authRouter from "./routes/auth.js";
import jobRouter from "./routes/jobs.js";

// error handler
import notFoundMiddleware from "./middleware/not-found.js";
import errorHandlerMiddleware from "./middleware/error-handler.js";

const app = express();


app.use(express.json());

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/jobs", jobRouter);


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
