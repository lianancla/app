import { Controller } from "./controller.js";

export class UserController extends Controller {
  constructor({ model }) {
    super({ model });
  }
  sayHola() {
    console.log("hola");
  }
}

