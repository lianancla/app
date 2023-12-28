import { app } from "./app.js";
import { UserRouter } from "./routes/user.router.js";



app.listen(app.get("PORT"), (req, res) => {
  console.log("Server montado en el puerto" + app.get("PORT"));
});


app.use("/users",UserRouter)
