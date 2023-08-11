import { type ListOfProjects, type ListOfSkills } from './types'
import js from './static/images/skills/javascript.svg'
import mongo from './static/images/skills/mongodb.png'
import nodejs from './static/images/skills/nodejs.png'
import react from './static/images/skills/react.png'
import typescript from './static/images/skills/typescript.png'
import postman from './static/images/skills/getpostman-icon.svg'
import git from './static/images/skills/git.png'
import tailwind from './static/images/skills/Tailwind.png'

export const DataProjects: ListOfProjects = [
  {
    id: '1',
    title: 'To-Do App',
    description: 'App web donde prodrás anotar todas tus tareas y de manera comoda y sencilla llevar un control de todas ellas',
    image: 'https://firebasestorage.googleapis.com/v0/b/portfolio-aabd1.appspot.com/o/Portfolio-Images%2FToDoImage.png?alt=media&token=926641a3-6e3f-4f1c-b7d1-1d82114c5d9a',
    projectLink: 'https://todo-app-typescript-iota.vercel.app/',
    githubLink: 'https://github.com/CrisDeev/todo-app-typescript',
    tecnologies: ['TypesScript', 'ReactJS', 'Tailwindcss']
  },
  {
    id: '2',
    title: 'Express Buy',
    description: 'Esta app es un E-commerce que cuenta con su proceso de compra y administración de productos',
    image: 'https://firebasestorage.googleapis.com/v0/b/portfolio-aabd1.appspot.com/o/Portfolio-Images%2FExpressBuyImg.png?alt=media&token=3768c076-4fb5-44a7-a47e-061dd1e75b7d',
    projectLink: 'https://front-web-six.vercel.app/',
    githubLink: 'https://github.com/expressbuymh',
    tecnologies: ['ReactJS', 'Express', 'MongoDB', 'NodeJS', 'Tailwindcss']
  },
  {
    id: '3',
    title: 'Manga reader',
    description: 'En este sitio web puedes leer tus mangas favoritos, y si eres un autor comodamente podrás publicar tus mangas',
    image: 'https://firebasestorage.googleapis.com/v0/b/portfolio-aabd1.appspot.com/o/Portfolio-Images%2FMangaReader.png?alt=media&token=bee9b00c-e6eb-4cf3-b08a-68d5d5f7a031',
    projectLink: 'https://minga-blanco-front-ruby.vercel.app/',
    githubLink: 'https://github.com/CristianAlvarezM/minga_blanco_front',
    tecnologies: ['ReactJS', 'Tailwindcss', 'MongoDB']
  }
]

export const DataSkills: ListOfSkills = [
  { name: 'JavaScript', image: js },
  { name: 'MongoDB', image: mongo },
  { name: 'NodeJS', image: nodejs },
  { name: 'ReactJS', image: react },
  { name: 'TypeScript', image: typescript },
  { name: 'Postman', image: postman },
  { name: 'Git', image: git },
  { name: 'TailwindCSS', image: tailwind }
]
