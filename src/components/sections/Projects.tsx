import { Project } from '../Project'
import { DataProjects } from '../../const'

export const Projects = (): JSX.Element => {
  return (
   <section className="h-auto py-20 px-8" id='Projects'>
    <div className="flex items-center flex-col gap-14">
      <h1 className="h-20 text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-tr from-purple-300 via-purple-800 to-cyan-400 md:text-5xl 2xl:text-6xl">Projects</h1>
      <div className="grid justify-center gap-12 ">
        {DataProjects.map(proj => (
          <Project
            key={proj.id}
            title={proj.title}
            description={proj.description}
            image={proj.image}
            githubLink={proj.githubLink}
            projectLink={proj.projectLink}
            tecnologies={proj.tecnologies}
            id={proj.id}
          />
        ))}
      </div>
    </div>
   </section>
  )
}
