import { app } from "./app.js";


app.listen(app.get("PORT"), (req, res) => {
  console.log("Server montado en el puerto" + app.get("PORT"));
});







console.log("app");