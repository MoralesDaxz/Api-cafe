const express = require("express");
const app = express();
const morgan = require("morgan");

/* Settings */
app.set(
  "port",
  process.env.PORT || 3000
); /* Establecemos un puerto por defecto */
app.set("json spaces,2");

/* Middlewares */
app.use(
  morgan("dev")
); /* Morgan nos permite informacion antes de escuchar nuestro servidor */
app.use(
  express.urlencoded({ extended: false })
); /* entender datos desde formularios texto */
app.use(express.json()); /* Permite al servidor recibir formatos JSON */

/* Route */
app.use(require('./routes/index'))

/* Starting server */
app.listen(app.get("port"), () => {
  console.log(`Server on port ${3000}`);
});
