import { Router } from "express";
import { UserController } from "../controllers/user.controller.js";
export  const UserRouter  = Router();

UserRouter.get("/",UserController.getUsers)
UserRouter.get("/:id",UserController.getUserById)