import { User } from "./models/user.model.js";
import { Validator } from "./validations/validator.js";
import {UserController} from "./controllers/user.controller.js"
import { prisma } from "./database.js";
import { Response, makeResponse } from "./helpers/response.js";
import { userRules } from "./rules/userRules.js";
import { User_DB_Errors } from "./DB_Errors/user.errors.js";
export const userModel = new User({model: prisma.user,response: new Response(),DB_Errors:User_DB_Errors});

export const userValidator = new Validator({ rules : userRules }); //

export const userController = new UserController({model: userModel,validator: userValidator,makeResponse}).create().delete().getAll().getById().update();





