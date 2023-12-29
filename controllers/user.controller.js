import { Controller } from "./controller.js";

export class UserController extends Controller {
  constructor({ model, validator, makeResponse }){
    super({ model, validator, makeResponse });
  }
/*
  register(){
    register = async (req, res) => {
      const validatedData = await this.validator.validate({ object: req.body });
      if (validatedData.error)
        res.status(404).json({ mensaje: validatedData.error });
  
      const response = this.makeResponse(
        await this.model.makeInstance({ data: validatedData.data }).save()
      );
      if (response.error) res.status(404).json({ message: response.error });
  
      let newUser = response.data;
  
      const newResponse = this.makeResponse(await newUser.register());
  
      console.log({ "response after register": newResponse.data });
      if (newResponse.error) res.status(404).json({ message: newResponse.error });
  
      return newResponse.data;
    };
    return this;
  }
  */
}
