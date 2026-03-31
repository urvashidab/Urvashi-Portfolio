import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import router from "./routes/contactRoute.js";
import connectDB from "./config/db.js";

const app = express();

dotenv.config();
//middlewares
app.use(cors());

//parse json data
app.use(express.json());

const PORT = process.env.PORT || 8000;

// contact route
app.use("/api/contact", router);

app.get("/", (req, res) => {
  res.send("Backend is running successfully!");
});
connectDB();
// initialize server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
