import { app } from "./app.js";
import { prisma } from "./database.js";
import { User } from "./models/user.model.js";

app.listen(app.get("PORT"), (req, res) => {
  console.log("Server montado en el puerto" + app.get("PORT"));
});


