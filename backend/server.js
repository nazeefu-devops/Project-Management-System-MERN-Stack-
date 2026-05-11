import express from "express";
import api from "./routes/index.js";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";

dotenv.config();

const app = express();

app.use(cors({
  origin: process.env.CORS_ORIGIN || "http://localhost:3000"
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.use(api);

// MongoDB
mongoose.connect(process.env.MONGODB_PATH)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log("Mongo error:", err));

const PORT = process.env.SERVER_PORT || 9000;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on http://localhost:${PORT}`);
});