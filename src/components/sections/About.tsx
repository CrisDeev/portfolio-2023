
export const About = (): JSX.Element => {
  return (
    <section className="h-screen px-6" id="About">
      <div className="h-full flex flex-col items-center border-b-[1px] justify-center gap-20 border-b-white/30 md:w-[80%] mx-auto md:gap-32">
        <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-tr from-purple-300 via-purple-800 to-cyan-400 md:text-5xl 2xl:text-6xl">Sobre mi</h1>
        <div className="flex flex-col items-center justify-center gap-14 md:flex-row 2xl:gap-36">
          <p className="text-white text-center text-sm md:text-lg mobile:w-[70%] md:w-[50%] xl:text-2xl 2xl:text-4xl">
            👨‍💻 21 años. Soy de <span className="bg-clip-text text-transparent bg-gradient-to-tr from-yellow-300 via-blue-900 to-rose-700 font-bold">Colombia.</span> Desarrollador web con muchas ganas de crecer como profesional, creando soluciones innovadoras para proyectos web. Tengo una buena comunicación para trabajar en equipo. Además, estoy abierto a aprender cualquier tecnología que sea necesaria para poder aportar valor a cualquier empresa.
          </p>
          <img className="rounded-[40px] w-4/5 mobile:w-[60%] md:w-[40%] lg:w-[40%] 2xl:w-[35%]" src='https://firebasestorage.googleapis.com/v0/b/portfolio-aabd1.appspot.com/o/Portfolio-Images%2Fme.jpeg?alt=media&token=f75c45ec-07ed-4111-895a-3441ad97bead' alt="Imagen personal"/>
        </div>
      </div>
    </section>
  )
}
