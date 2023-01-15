const db = require("../utils/database");
const initModels = require("../models/initModels");
const Users = require("../models/users.models");
const Courses = require("../models/courses.models");
const UserCourses = require("../models/userCourses.model");
const Categories = require("../models/categories.models");
const Videos = require("../models/videos.models");

initModels();

const users = [
  {
    firstName: "Daniel",
    lastName: "Henao",
    password: "1234",
    email: "daniel@gmail.com",
  },
  {
    firstName: "Jose",
    lastName: "Garcia",
    password: "1234",
    email: "jose@gmail.com",
  },
  {
    firstName: "Katherine",
    lastName: "Montes",
    password: "1234",
    email: "katherine@gmail.com",
  },
  {
    firstName: "Gustavo",
    lastName: "Morales",
    password: "1234",
    email: "gustavo@gmail.com",
  },
];

const courses = [
  {
    title: "Marketing movil",
    description:
      "Identifica los aspectos que hacen que tu audiencia ame tu experiencia móvil. Encuentra las mejores formas de lanzar tu app, hacer que tus usuarios amen tu servicio y conocer las mejores prácticas para medir tu éxito.",
    instructor: "Jorge Guzman",
  },
  {
    title: "Ingles Bascio",
    description:
      "Fortalece tus habilidades para profesionalizarte comunicándote en inglés.",
    instructor: "Sofia Correa",
  },
  {
    title: "Diseño para developers",
    description:
      "El diseño también es para los programadores. Desarrolla tu proceso creativo, domina los principios de diseño y genera una interfaz web con responsive design. Entenderás el uso del color, la tipografía, los layouts, gráficos y motion graphics.",
    instructor: "Samanta Martinez",
  },
  {
    title: "Redes e internet avanzado",
    description:
      "Profundiza en tus conocimientos de redes de internet diseñando y ejecutando redes LAN y VLAN, creando listas de control de acceso e identificando el rol de los usuarios en la prevención de ataques de red.",
    instructor: "Mabel Pavas",
  },
  {
    title: "Guitarra nivel basico",
    description:
      "Aprende como tocar guitarra de una manera facil y divertida,canciones, acordes, notas musicales, ejercicios, técnicas, tablaturas, partituras, guitarra acústica y eléctrica",
    instructor: "Mario Freiria",
  },
  {
    title: "Testing de videojuegos",
    description:
      "Comprende la complejidad de la lógica de los videojuegos. Detecta los errores de programación, diseño o traducción de tus productos y aprende a controlar todo el proceso de creación para conseguir videojuegos de la más alta calidad.",
    instructor: "Eduardo Hernandez",
  },
];

const videos = [
  {
    title: "Diferencias entre marketing y marketing movile",
    url: "https://cursos.com/course/movil/",
    courseId: 1,
  },
  {
    title: "Welcome to the basic Wrtinig Course",
    url: "https://cursos.com/course/english/",
    courseId: 2,
  },
  {
    title: "El proceso creativo",
    url: "https://cursos.com/course/design/",
    courseId: 3,
  },
  {
    title: "Numeros binarios faciles",
    url: "https://cursos.com/course/networks/",
    courseId: 4,
  },
  {
    title: "Introduccion a la partitura",
    url: "https://cursos.com/course/music/",
    courseId: 5,
  },
  {
    title: "Testing Black Box",
    url: "https://cursos.com/course/videogames/",
    courseId: 6,
  },
];

const categories = [
  { name: "negocios", courseId: 1 },
  { name: "trading", courseId: 1 },
  { name: "idiomas", courseId: 2 },
  { name: "disenio", courseId: 3 },
  { name: "redes", courseId: 4 },
  { name: "musica", courseId: 5 },
  { name: "arte", courseId: 5 },
  { name: "videojuegos", courseId: 6 },
  { name: "diversion", courseId: 6 },
];

const usersCourses = [
  { userId: 1, courseId: 1 },
  { userId: 1, courseId: 3 },
  { userId: 2, courseId: 2 },
  { userId: 3, courseId: 4 },
  { userId: 4, courseId: 5 },
  { userId: 4, courseId: 6 },
];

db.sync({ force: true })
  .then(() => {
    console.log("Plantando informacion");
    users.forEach((user) => Users.create(user));
    setTimeout(() => {
      courses.forEach((course) => Courses.create(course));
    }, 100);
    setTimeout(() => {
      videos.forEach((video) => Videos.create(video));
    }, 200);
    setTimeout(() => {
      categories.forEach((category) => Categories.create(category));
    }, 300);
    setTimeout(() => {
      usersCourses.forEach((uc) => UserCourses.create(uc));
    }, 400);
  })
  .catch((error) => console.log(error));
