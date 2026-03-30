import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";

const app = express();

dotenv.config();
//middlewares
app.use(cors());

//parse json data
app.use(express.json());

const PORT = process.env.PORT || 8000;

// contact route
app.route("api/contact");

app.get("/", (req, res) => {
  res.send("Backend is running successfully!");
});

// initialize server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
