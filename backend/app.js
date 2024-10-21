import cors from "cors";
import express from "express";
import submissionRoutes from "./routes/route.submission.js";
import adminRoutes from "./routes/route.admin.js";

import dotenv from "dotenv";
import errorMiddleware from "./middlewares/error.middleware.js";
dotenv.config();


const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true })); //
app.use(cors());

app.use(
  cors({
    origin: [process.env.FRONTEND_URL],
    credentials: true,
  })
);

app.use("/ping", (req, res) => {
  console.log("ping");
  res.send("pong");
});

// Routes
app.use("/api/submissions", submissionRoutes);
app.use("/api/admin", adminRoutes);

app.use("*", (req, res) => {
  res.status(404).send("OPPS! Page not found!");
});

app.use(errorMiddleware);


export default app;
