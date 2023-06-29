export interface SeedProject {
  id: string
  title: string
  description: string
  image: string
  projectLink: string
  githubLink: string
  tecnologies: ValIdTecnologies[]
}

type ValIdTecnologies = 'JavaScript' | 'NodeJS' | 'React' | 'CSS' | 'Tailwindcss' | 'MongoDB' | 'HTML' | 'TypesScript' | 'Express'

export type ListOfProjects = SeedProject[]

export interface Skill {
  name: string
  image: string
}

export type ListOfSkills = Skill[]
