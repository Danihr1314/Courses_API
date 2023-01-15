//Importaciones
const express = require("express");
const db = require("./utils/database");
const initModels = require("./models/initModels");

const userRoutes = require("./routes/users.routes");
const userCoursesRoutes = require("./routes/userCourses.routes");
const coursesRoutes = require("./routes/courses.routes");
const videosRoutes = require("./routes/videos.routes");
const categoriesRoutes = require("./routes/categories.routes");

// Conexion sequelize
const app = express();
const PORT = 5000;

app.use(express.json());

// Rutas
app.use("/api/v1", userRoutes);
app.use("/api/v1", userCoursesRoutes);
app.use("/api/v1", coursesRoutes);
app.use("/api/v1", videosRoutes);
app.use("/api/v1", categoriesRoutes);

// Conexion DB
db.authenticate()
  .then(() => console.log("Autenticación exitosa"))
  .catch((error) => console.log(error));

app.get("/", (req, res) => {
  res.json({ message: "Servidor iniciado" });
});

app.listen(PORT, () => {
  console.log(`Servidor alojado en el puerto ${PORT}`);
});

//Ejecutando modelos y sincronizando DB
initModels();

db.sync({ force: false })
  .then(() => console.log("DB sincronizada exitosamente"))
  .catch((error) => console.log(error));
