import { type ListOfProjects, type ListOfSkills } from './types'
import js from './static/images/javascript.svg'
import mongo from './static/images/mongodb.png'
import nodejs from './static/images/nodejs.png'
import react from './static/images/react.png'
import typescript from './static/images/typescript.png'
import postman from './static/images/getpostman-icon.svg'
import git from './static/images/git.png'
import tailwind from './static/images/Tailwind.png'

export const DataProjects: ListOfProjects = [
  {
    id: '1',
    title: 'To-Do App',
    description: 'App web donde prodrás organizar todas tu tareas',
    image: 'https://firebasestorage.googleapis.com/v0/b/portfolio-aabd1.appspot.com/o/Portfolio-Images%2FToDoImage.png?alt=media&token=298c04f1-882e-4b70-9734-018a97951876',
    projectLink: 'https://todo-app-typescript-iota.vercel.app/',
    githubLink: 'https://github.com/CrisDeev/todo-app-typescript',
    tecnologies: ['TypesScript', 'React', 'Tailwindcss']
  },
  {
    id: '2',
    title: 'Express Buy',
    description: 'Esta app es un E-commerce que cuenta con su proceso de compra y administración de productos',
    image: 'https://firebasestorage.googleapis.com/v0/b/portfolio-aabd1.appspot.com/o/Portfolio-Images%2FExpressBuyImg.png?alt=media&token=3768c076-4fb5-44a7-a47e-061dd1e75b7d',
    projectLink: 'https://front-web-six.vercel.app/',
    githubLink: 'https://github.com/expressbuymh',
    tecnologies: ['React', 'Express', 'MongoDB', 'NodeJS', 'Tailwindcss']
  }
]

export const DataSkills: ListOfSkills = [
  { name: 'JavaScript', image: js },
  { name: 'MongoDB', image: mongo },
  { name: 'NodeJS', image: nodejs },
  { name: 'React', image: react },
  { name: 'TypeScript', image: typescript },
  { name: 'Postman', image: postman },
  { name: 'Git', image: git },
  { name: 'TailwindCSS', image: tailwind }
]
