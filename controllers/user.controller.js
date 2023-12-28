import { Controller } from "./controller.js";
import { userModel } from "../models/user.model.js";
import { userValidator } from "../validations/user.validator.js";
export class UserController extends Controller {
  constructor({ model, validator }) {
    super({ model, validator });
  }
  sayHola() {
    console.log("hola");
  }
}

export const userController = new UserController({
  model: userModel,
  validator: userValidator,
})
  .getAll()
  .getById()
  .create()
  .update()
  .delete();
