import { DataSkills } from '../../const'

export const Conocimientos = (): JSX.Element => {
  return (
    <section className="h-screen py-32 px-14 lg:py-36 xl:py-44 2xl:py-48" id='Conocimientos'>
      <div className='flex flex-col items-center gap-5 '>
        <h1 className='h-32 text-4xl font-bold text-transparent bg-clip-text mobile:text-4xl bg-gradient-to-tr from-purple-300 via-purple-800 to-cyan-400 md:text-6xl'>Conocimientos</h1>
        <div className="h-full w-full flex flex-wrap justify-center gap-6 mobile:gap-14 xl:w-[85%] xl:gap-20">
          { DataSkills.map((skill, index) => {
            return (
              <div
                key={index}
                className='w-full flex flex-col justify-center items-center border-[1px] p-4 rounded-tr-xl rounded-bl-xl bg-white/5 md:w-[55%] lg:gap-3 lg:w-[30%] xl:w-[15%]'
              >
                <img src={skill.image} alt={skill.name} className='w-10 md:w-16 lg:w-20 xl:w-16 '/>
                <span className='text-white font-bold text-xl lg:text-2xl'>{skill.name}</span>
              </div>
            )
          }) }
        </div>
      </div>
    </section>
  )
}
