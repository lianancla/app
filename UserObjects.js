import { User } from "./models/user.model.js";
import { Validator } from "./validations/validator.js";
import { UserController } from "./controllers/user.controller.js";
import { Router } from "express";
import { prisma } from "./database.js";
import { Response, makeResponse } from "./helpers/response.js";
import { userRules } from "./rules/userRules.js";

export const userModel = new User({model: prisma.user,response: new Response()});//works

export const userValidator = new Validator({ rules : userRules }); //

export const userController = new UserController({model: userModel,validator: userValidator,makeResponse}).create().delete().getAll().getById().update();

export const userRouter = {router: Router(),controller: userController};


console.log( userController.getAll())
