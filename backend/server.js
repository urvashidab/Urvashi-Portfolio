import dotenv from "dotenv";
dotenv.config();

import express from "express";

import cors from "cors";
import connectDB from "./config/db.js";
import router from "./routes/contactRoute.js";
import helmet from "helmet";

const app = express();

// connect database
connectDB();

// middleware
app.use(cors());
app.use(express.json());
app.use(helmet());

// routes
app.use("/api/contact", router);

app.get("/", (req, res) => {
  res.send("Backend is running successfully!");
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    path: req.originalUrl,
    message: "Route not found",
  });
});

// global error handler
app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    success: false,
    message: err.message || "Server error",
  });
});

const PORT = process.env.PORT || 8000;
// initialize server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
