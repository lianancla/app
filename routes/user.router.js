import { Router } from "express";
export const UserRouter = Router();


import { Controller } from "../controllers/controller.js";
import { prisma } from "../database.js";

const ctrl = new Controller({ model: prisma.user});
const userController = ctrl.r()
UserRouter.get("/", userController.getAll);
UserRouter.get("/:id", userController.getById);

