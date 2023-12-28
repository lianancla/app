import { Controller } from "./controller.js";
import { userModel } from "../models/user.model.js";
export class UserController extends Controller {
  constructor({ model }) {
    super({ model });
  }
  sayHola() {
    console.log("hola");
  }
}

export const userController = new UserController({ model: userModel })
  .getAll()
  .getById()
  .create()
  .update()
  .delete();
