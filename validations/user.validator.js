import { Validator } from "./validator.js";
import z from "zod";

class UserValidator extends Validator {
    constructor({rules}) {
      super({ rules });
    }    
}
//definir rules
const rules = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string(), //validar si quieres q tenga mayusculas , numeros etc
});

export const userValidator = new UserValidator({rules});
