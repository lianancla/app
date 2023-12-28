import { Response } from "../helpers/response.js";
import { User } from "../models/user.model.js";
export class UserController {
  static getUsers = async (req, res) => {
    const response = new Response(await User.findMany());
    if (response.error) res.status(404).json({ message: response.error });
    res.json(response.data);
  };

  static getUserById = async (req, res) => {
    const user_id = parseInt(req.params.id);
    const response = new Response(await User.getById({ user_id }));
    console.log(response)
    if (response.error) res.status(404).json({ message: response.error });
    res.json(response.data);
  };
}
