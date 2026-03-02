import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { lotteryRouter } from "./routes/lottery.route.js";
dotenv.config();
import cors from "cors";
const PORT=process.env.PORT||3000;
const URL=process.env.MONGO_URL;


const app=express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));




const corsOptions = {
  origin: [
    process.env.FRONTEND_URL,
  ],
 
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true
};

app.use(cors(corsOptions));

app.get("/health", (req, res) => {
  console.log("Health checked");
  res.status(200).json({ status: "OK" });
});

app.use("/api",lotteryRouter);


const start = async () => {
  try {
    console.log(process.env.MONGO_URL);
    await mongoose.connect(process.env.MONGO_URL);
    console.log("DB is connected");
    app.listen(PORT, () => {
      console.log(`Lottery App is listening on PORT ${PORT}`);
    });
  } catch (err) {
    console.error("Failed to start lottery service:", err);
    process.exit(1);
  }
};

start();