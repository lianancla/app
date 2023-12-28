import { Router } from "express";
export const userRouter = Router();

import { User } from "../models/user.model.js";
import { UserController } from "../controllers/user.controller.js";
import { prisma } from "../database.js";
import { Response } from "../helpers/response.js";

const userModel = new User({ model: prisma.user, response: new Response() });

const userController = new UserController({ model: userModel })
  .getAll()
  .getById()
  .create()
  .update()
  .delete();
const data = {
  email: "as",
  password: "as",
  name: "as",
};

/*
const userInstance =  User.makeInstance({data})
console.log(await userInstance.encryptPassword({password:"123"}));
*/

//console.log(await userModel.create({data}))

userRouter.get("/", userController.getAll);
userRouter.get("/:id", userController.getById);
userRouter.post("/", userController.create);
userRouter.put("/:id", userController.update);
userRouter.delete("/:id", userController.delete);
