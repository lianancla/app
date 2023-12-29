import express from "express";
import cors from "cors";
import { config } from "dotenv";
import { userRouter } from "./UserObjects.js";
config();
export const app = express();

//middlewares
app.use(express.json());
app.use(cors());

//variables

app.set("PORT", process.env.PORT);
app.set("secret_key",process.env.SECRET_KEY_APP)
//routes
app.use("/users", userRouter.router);

