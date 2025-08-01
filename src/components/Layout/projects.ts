import faunaImg from "../../assets/Fauna.webp";
import ecocicloImg from "../../assets/Ecociclo.webp";

const projects = [
  {
    title: "Fauna Veterinaria",
    image: faunaImg,
    description:
      "Plataforma para veterinarios que permite gestionar, crear y editar citas médicas. Incluye seguimiento de consultas y está hosteada en Vercel.",
    technologies: [
      "React.js",
      "Tailwind CSS",
      "Node.js",
      "MongoDB",
      "Mongoose",
    ],
    demoLink: "https://fauna-gestion-veterinaria-lca3.vercel.app/",
    codeLink: "https://github.com/JNO-22/Fauna-Gestion-Veterinaria",
  },
  {
    title: "Ecociclo",
    image: ecocicloImg,
    description:
      "Proyecto educativo que simula una empresa ecológica. Permite registrar consultas usando Python y SQL, alojado en PythonAnywhere.",
    technologies: ["SQL", "Python", "Flask"],
    demoLink: "https://piters227.pythonanywhere.com/",
    codeLink: "https://github.com/JNO-22/EcoCiclo-Codo-a-Codo",
  },
];

export default projects;
