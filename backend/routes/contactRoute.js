import express from "express";
import rateLimit from "express-rate-limit";
import { contactUser } from "../controllers/contactController.js";

const router = express.Router();

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // max 5 requests per IP
  message: {
    success: false,
    message: "Too many requests, please try again later.",
  },
});

router.post("/", limiter, contactUser);

export default router;
