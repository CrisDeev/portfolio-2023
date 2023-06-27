import { Project } from '../Project'
import { DataProjects } from '../../const'

export const Projects = (): JSX.Element => {
  return (
   <section className="h-auto py-20 px-8">
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
         <div className='w-full h-[400px] bg-center bg-cover bg-no-repeat flex flex-col justify-between rounded-xl overflow-hidden border-2 border-black bg-[url("https://firebasestorage.googleapis.com/v0/b/portfolio-aabd1.appspot.com/o/Portfolio-Images%2FExpressBuyImg.png?alt=media&token=3768c076-4fb5-44a7-a47e-061dd1e75b7d")]'>
            <h1 className="backdrop-blur-[6px] m-4 border-2 border-white/50 bg-black/30 w-[55%] p-2 text-sm text-purple-900 font-bold rounded-tr-xl rounded-bl-xl" >PROYECTO<br /> <span className="text-white text-2xl font-semibold">hola</span></h1>
            <p className="backdrop-blur-[6px] h-[15%] p-5 truncate bg-black/50 font-bold text-white">hola</p>
          </div>
      </div>
    </div>
   </section>
  )
}
