import express from "express";
import cors from "cors";
import { config } from "dotenv";
import { userRouter } from "./routes/user.router.js";
config();
export const app = express();

//middlewares
app.use(express.json());
app.use(cors());

//variables

app.set("PORT", process.env.PORT);

//routes
app.use("/users", userRouter);
