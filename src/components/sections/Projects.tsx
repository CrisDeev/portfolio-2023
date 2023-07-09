import { ModalProjects } from '../ModalProjects'
import { useState } from 'react'
import { DataProjects } from '../../const'

export const Projects = (): JSX.Element => {
  const [openModal, setOpenModal] = useState(false)
  const handleOpenModal = (): void => {
    setOpenModal(!openModal)
  }
  return (
   <section className="h-auto py-20 px-8 overflow-hidden" id='Projects'>
    {openModal && <ModalProjects
      handleOpenModal = {handleOpenModal}
    />}
    <div className="flex items-center flex-col gap-20 md:gap-28">
      <h1 className="h-20 text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-tr from-purple-300 via-purple-800 to-cyan-400 md:text-6xl">Projects</h1>
      <div className="w-full grid justify-center gap-12 grid-cols-1 px-5 md:w-[70%] lg:grid-cols-2 lg:w-full xl:w-[80%] 2xl:w-[70%]">

      {
        DataProjects.map(proj => (
          <div
          key={proj.id}
          onClick={handleOpenModal}
          className="border-1 relative h-[400px] bg-center bg-cover bg-no-repeat flex flex-col justify-between rounded-xl cursor-pointer overflow-hidden transition-transform duration-200 hover:-translate-y-1.5 "
          >
            <img
              src={proj.image}
              alt=""
              className='absolute w-full h-full'
              />
            <h1 className="m-4 z-[10] border-2 border-white/50 bg-black/30 w-[80%] p-2 text-md text-purple-900 font-bold rounded-tr-xl rounded-bl-xl mobile:w-[60%] md:w-[50%]" >PROYECTO<br /> <span className="text-white text-xl font-semibold">To-Do App</span></h1>
            <p className=" h-[15%] z-[10] p-5 truncate bg-black/50 font-bold text-white">App web donde prodrás organizar todas tu tareas</p>
          </div>
        ))
      }

      </div>
    </div>
   </section>
  )
}
